const svg = (label, content) => `
<svg role="img" aria-label="${label}" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  ${content}
</svg>`;

// 五芒星・七芒星のpolygon用の点を作る
const starPoints = (cx, cy, outer, inner, points) => {
  const step = Math.PI / points;
  const coords = [];
  for (let i = 0; i < points * 2; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = i * step - Math.PI / 2;
    coords.push(`${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`);
  }
  return coords.join(" ");
};

const unionJack = (width, height, scale) => `
  <g>
    <rect width="${width}" height="${height}" fill="#012169"/>
    <path d="M0 0 ${width} ${height}M${width} 0 0 ${height}" stroke="#fff" stroke-width="${15 * scale}"/>
    <path d="M0 0 ${width} ${height}M${width} 0 0 ${height}" stroke="#C8102E" stroke-width="${9 * scale}"/>
    <path d="M${width / 2} 0v${height}M0 ${height / 2}h${width}" stroke="#fff" stroke-width="${25 * scale}"/>
    <path d="M${width / 2} 0v${height}M0 ${height / 2}h${width}" stroke="#C8102E" stroke-width="${15 * scale}"/>
  </g>`;

export const flagSvgs = {
  uk: svg("イギリスの国旗", unionJack(240, 150, 2)),
  usa: svg(
    "アメリカの国旗",
    `
    <rect width="240" height="150" fill="#fff"/>
    <g fill="#B22234">
      <rect width="240" height="11.54" y="0"/>
      <rect width="240" height="11.54" y="23.08"/>
      <rect width="240" height="11.54" y="46.16"/>
      <rect width="240" height="11.54" y="69.24"/>
      <rect width="240" height="11.54" y="92.32"/>
      <rect width="240" height="11.54" y="115.4"/>
      <rect width="240" height="11.54" y="138.48"/>
    </g>
    <rect width="106" height="80.8" fill="#3C3B6E"/>
    <g fill="#fff">
      <circle cx="14" cy="12" r="3"/><circle cx="32" cy="12" r="3"/><circle cx="50" cy="12" r="3"/><circle cx="68" cy="12" r="3"/><circle cx="86" cy="12" r="3"/>
      <circle cx="23" cy="26" r="3"/><circle cx="41" cy="26" r="3"/><circle cx="59" cy="26" r="3"/><circle cx="77" cy="26" r="3"/><circle cx="95" cy="26" r="3"/>
      <circle cx="14" cy="40" r="3"/><circle cx="32" cy="40" r="3"/><circle cx="50" cy="40" r="3"/><circle cx="68" cy="40" r="3"/><circle cx="86" cy="40" r="3"/>
      <circle cx="23" cy="54" r="3"/><circle cx="41" cy="54" r="3"/><circle cx="59" cy="54" r="3"/><circle cx="77" cy="54" r="3"/><circle cx="95" cy="54" r="3"/>
      <circle cx="14" cy="68" r="3"/><circle cx="32" cy="68" r="3"/><circle cx="50" cy="68" r="3"/><circle cx="68" cy="68" r="3"/><circle cx="86" cy="68" r="3"/>
    </g>
  `
  ),
  "australia-flag": svg(
    "オーストラリアの国旗",
    `
    <rect width="240" height="150" fill="#012169"/>
    ${unionJack(120, 75, 1)}
    <g fill="#fff">
      <polygon points="${starPoints(60, 112, 17, 8, 7)}"/>
      <polygon points="${starPoints(180, 30, 9, 4, 7)}"/>
      <polygon points="${starPoints(212, 58, 9, 4, 7)}"/>
      <polygon points="${starPoints(180, 122, 9, 4, 7)}"/>
      <polygon points="${starPoints(150, 66, 9, 4, 7)}"/>
      <polygon points="${starPoints(192, 78, 5, 2.5, 5)}"/>
    </g>
  `
  ),
  japan: svg(
    "日本の国旗",
    `
    <rect width="240" height="150" fill="#fff"/>
    <circle cx="120" cy="75" r="45" fill="#BC002D"/>
  `
  ),
  france: svg(
    "フランスの国旗",
    `
    <rect width="80" height="150" x="0" fill="#0055A4"/>
    <rect width="80" height="150" x="80" fill="#fff"/>
    <rect width="80" height="150" x="160" fill="#EF4135"/>
  `
  )
};

export const getFlagSvg = (imageId) => flagSvgs[imageId] || "";
