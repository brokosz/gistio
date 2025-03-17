# Gist.io - Modern Edition

A modernized version of the Gist.io application for beautifully displaying GitHub gists. This project reimagines the classic gist.io with modern web technologies for better performance and user experience.

## Features

- Built with React 18 and TypeScript
- Uses Vite for faster development and builds
- Modern routing with React Router v6
- Styled with Tailwind CSS
- Markdown rendering with syntax highlighting
- Responsive design for all devices
- Dark/light mode support
- Fast page loads with optimized assets

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/brokosz/gistio.git
cd gistio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. Create a gist on GitHub with a single Markdown-syntax file
2. In the URL bar, replace `gist.github.com/youruser/abc123…` with `gist.io/@youruser/abc123…`
3. Enjoy your beautifully-presented writing

## Deployment

This project is deployed using AWS Amplify for seamless hosting and CI/CD integration with GitHub.

### Deploying with AWS Amplify

1. Connect your GitHub repository to AWS Amplify
2. Configure build settings with the default Node.js options
3. Deploy and enjoy automatic updates on each git push

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Original gist.io concept by Idan Gazit
- All contributors to the project
