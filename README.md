# 🤖 AI Badges

![AI Generated](https://ai-percentage-pin.vercel.app/api/ai-percentage?value=100)
![AI PRs Welcome](https://ai-percentage-pin.vercel.app/api/ai-prs?welcome=yes)

Beautiful GitHub README badges for AI project transparency.

## 🚀 Features

- **AI Percentage Badge**: Show what % of your project is AI-generated
- **AI PRs Welcome Badge**: Signal whether you accept AI-generated PRs
- Hosted on Vercel serverless functions
- Zero dependencies, lightning fast

## 📦 Usage

### AI Percentage Badge

```markdown
![AI Generated](https://ai-percentage-pin.vercel.app/api/ai-percentage?value=25)
```

**Parameters:**
- `value`: Percentage from 0-100

**Colors:**
- 0-24%: Green
- 25-49%: Yellow-green
- 50-74%: Orange
- 75-100%: Red-orange

### AI PRs Welcome Badge

```markdown
![AI PRs Welcome](https://ai-percentage-pin.vercel.app/api/ai-prs?welcome=yes)
```

**Parameters:**
- `welcome`: `yes`, `y`, `true`, `1` for welcome (green)
- `welcome`: `no`, `n`, `false`, `0` for not welcome (red)

## 🛠️ Deploy Your Own

1. Fork this repository
2. Connect to Vercel
3. Deploy!
4. Use your Vercel URL in the badge URLs

### Local Development

```bash
npm install -g vercel
vercel dev
```

Visit `http://localhost:3000` to see the badge generator.

## 📝 Example

```markdown
# My Project

![AI Generated](https://ai-percentage-pin.vercel.app/api/ai-percentage?value=30)
![AI PRs Welcome](https://ai-percentage-pin.vercel.app/api/ai-prs?welcome=yes)

This project is 30% AI-assisted and welcomes AI-generated contributions!
```

## 🤝 Contributing

Contributions welcome! Feel free to open an issue or PR.

## 📄 License

MIT
