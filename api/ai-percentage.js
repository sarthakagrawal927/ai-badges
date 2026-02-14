module.exports = (req, res) => {
  // Get percentage from query parameter
  const value = parseInt(req.query.value) || 0;

  // Validate percentage
  const percentage = Math.min(Math.max(value, 0), 100);

  // Determine color based on percentage
  let color;
  if (percentage < 25) {
    color = '#4c1';  // Green
  } else if (percentage < 50) {
    color = '#97ca00';  // Yellow-green
  } else if (percentage < 75) {
    color = '#dfb317';  // Orange
  } else {
    color = '#fe7d37';  // Red-orange
  }

  // Generate SVG badge
  const label = 'AI Generated';
  const valueText = `${percentage}%`;

  // Calculate widths (approximate)
  const labelWidth = label.length * 6.5 + 20;
  const valueWidth = valueText.length * 7 + 20;
  const totalWidth = labelWidth + valueWidth;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <mask id="a">
        <rect width="${totalWidth}" height="20" rx="3" fill="#fff"/>
      </mask>
      <g mask="url(#a)">
        <path fill="#555" d="M0 0h${labelWidth}v20H0z"/>
        <path fill="${color}" d="M${labelWidth} 0h${valueWidth}v20H${labelWidth}z"/>
        <path fill="url(#b)" d="M0 0h${totalWidth}v20H0z"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="${labelWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${label}</text>
        <text x="${labelWidth / 2}" y="14">${label}</text>
        <text x="${labelWidth + valueWidth / 2}" y="15" fill="#010101" fill-opacity=".3">${valueText}</text>
        <text x="${labelWidth + valueWidth / 2}" y="14">${valueText}</text>
      </g>
    </svg>
  `.trim();

  // Set headers
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');

  return res.status(200).send(svg);
};
