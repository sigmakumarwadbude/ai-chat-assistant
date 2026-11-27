# AI Chat Assistant

An AI-powered conversational assistant built with:

- Angular 22
- TypeScript
- Tailwind CSS 4
- Gemini LLM
- Firebase AI Logic
- Docker
- GitHub Actions
- AWS S3 and CloudFront

## Prerequisites

- Node.js (LTS)
- npm
- Docker Desktop

## Development

Install dependencies:

```bash
npm ci
```

Start development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Docker

Build Docker image:

```bash
docker build -t ai-chat-assistant .
```

Run container:

```bash
docker run -d --name ai-chat-assistant -p 8080:80 ai-chat-assistant
```

Access: http://localhost:8080

Alternatively, use Docker Compose:

```bash
docker compose up -d --build
```

Stop and remove containers:

```bash
docker compose down
```

## Project Structure

```text
ai-chat-assistant/
├── .github/
│   └── workflows/
├── docs/
├── public/
├── src/
├── Dockerfile
├── compose.yaml
├── nginx.conf
├── angular.json
├── package.json
├── README.md
├── learning_plan.md
└── progress.md
```

## Deployment

- **CI/CD:** GitHub Actions
- **Hosting:** AWS S3
- **CDN:** AWS CloudFront
- **Containerization:** Docker

## License

This project is for learning and development purposes.