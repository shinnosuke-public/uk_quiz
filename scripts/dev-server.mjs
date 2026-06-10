import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT ?? 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".ts": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const toFilePath = (urlPath) => {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const normalized = normalize(decoded === "/" ? "/index.html" : decoded);
  const filePath = join(root, normalized);

  if (!filePath.startsWith(root)) {
    return null;
  }

  return filePath;
};

const server = createServer(async (request, response) => {
  const filePath = toFilePath(request.url ?? "/");

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream"
    });
    response.end(body);
  } catch {
    if (!extname(filePath)) {
      try {
        const body = await readFile(`${filePath}.ts`);
        response.writeHead(200, { "Content-Type": mimeTypes[".ts"] });
        response.end(body);
        return;
      } catch {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }
    }

    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`開発用サーバー: http://127.0.0.1:${port}/`);
});
