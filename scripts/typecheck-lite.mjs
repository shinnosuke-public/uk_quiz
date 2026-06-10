import { readFile } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const entry = resolve(root, "src", "main.ts");
const importPattern = /^\s*import\s+(?:[^"']+\s+from\s+)?["'](.+)["'];\s*$/gm;

const resolveModule = (fromFile, specifier) => {
  if (!specifier.startsWith(".")) {
    throw new Error(`外部インポートは禁止です: ${specifier}`);
  }
  const basePath = resolve(dirname(fromFile), specifier);
  return extname(basePath) ? basePath : `${basePath}.ts`;
};

const collectModules = async (filePath, seen = new Set(), ordered = []) => {
  if (seen.has(filePath)) {
    return ordered;
  }
  seen.add(filePath);

  const source = await readFile(filePath, "utf8");
  const dependencies = [...source.matchAll(importPattern)].map((match) =>
    resolveModule(filePath, match[1])
  );

  for (const dependency of dependencies) {
    await collectModules(dependency, seen, ordered);
  }

  ordered.push(source);
  return ordered;
};

const stripModuleSyntax = (source) =>
  source
    .replace(importPattern, "")
    .replace(/^\s*export\s+\{[^}]+\};?\s*$/gm, "")
    .replace(/\bexport\s+(const|let|var|function|class)\s+/g, "$1 ");

const modules = await collectModules(entry);
const bundle = modules.map(stripModuleSyntax).join("\n\n");

new Function(`"use strict";\n${bundle}`);
console.log("簡易チェック: JavaScript構文とローカルimportを確認しました。");
