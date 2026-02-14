module.exports = (req, res) => {
  // Get welcome parameter (yes/no, true/false, y/n)
  const welcome = (req.query.welcome || 'yes').toLowerCase();

  // Determine if AI PRs are welcomed
  const isWelcome = ['yes', 'y', 'true', '1'].includes(welcome);

  // Set label and color
  const label = 'AI PRs';
  const valueText = isWelcome ? 'Welcome' : 'Not Welcome';
  const color = isWelcome ? '#4c1' : '#e05d44';  // Green or red

  // Calculate widths (approximate)
  const labelWidth = label.length * 7 + 20;
  const valueWidth = valueText.length * 6.5 + 20;
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
