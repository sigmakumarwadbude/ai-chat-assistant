# AI Chat Assistant — Learning and Development Plan

## Project objective

Build a production-oriented, frontend-only AI Chat Assistant using Angular 22, Tailwind CSS 4, Gemini through Firebase AI Logic, Docker, GitHub Actions, and AWS static hosting.

**Backend constraint:** Do not build or maintain a custom Node.js, Express, or NestJS backend. Firebase AI Logic is used as a managed service to connect the browser application to Gemini.

## Technology stack

| Area                    | Technology                                        |
| ----------------------- | ------------------------------------------------- |
| Frontend framework      | Angular 22                                        |
| Language                | TypeScript                                        |
| Styling                 | Tailwind CSS 4                                    |
| Application state       | Angular Signals                                   |
| Async/event composition | RxJS where useful                                 |
| LLM                     | Google Gemini                                     |
| Managed AI integration  | Firebase AI Logic                                 |
| App protection          | Firebase App Check                                |
| Browser persistence     | IndexedDB                                         |
| Unit testing            | Angular CLI test setup / Jasmine where configured |
| E2E testing             | Playwright                                        |
| Containerization        | Docker, Docker Compose                            |
| Production web server   | Nginx                                             |
| Source control          | Git and GitHub                                    |
| CI/CD                   | GitHub Actions                                    |
| Hosting                 | Amazon S3 + CloudFront                            |
| Cloud identity          | AWS IAM OIDC federation                           |

Angular Material is intentionally **not** included. Tailwind CSS is the primary styling and layout system.

## Architecture overview

```text
Browser
  |
  v
Angular 22 application
  |-- Chat UI and reusable components
  |-- Signals-based application state
  |-- Conversation and persistence services
  |
  v
Firebase AI Logic + Firebase App Check
  |
  v
Google Gemini

GitHub repository
  |
  v
GitHub Actions
  |-- install, lint, test, build
  |-- authenticate to AWS using OIDC
  v
Amazon S3 (private static origin)
  |
  v
CloudFront (HTTPS, CDN, SPA routing)
  |
  v
Users
```

Docker is used for local development and production-container validation. The planned AWS deployment is static hosting through S3 and CloudFront; the Docker image is not required for that hosting model.

## Phase 1 — Repository and development foundation

### Goals

- Establish the GitHub repository and local workspace.
- Generate the Angular 22 application in the repository root.
- Configure Tailwind CSS 4.
- Add Docker development and production-container support.
- Document the project plan and progress.

### Tasks

1. Create a private GitHub repository named `ai-chat-assistant`.
2. Clone it locally.
3. Create the Angular 22 application in the repository root.
4. Install and configure Tailwind CSS 4 using the Angular integration.
5. Verify the development server and Tailwind styling.
6. Add a multi-stage Dockerfile.
7. Add an Nginx configuration with Angular SPA fallback.
8. Add Docker Compose for local development.
9. Add `.dockerignore`.
10. Build and run the production Docker image.
11. Add `learning_plan.md` and `progress.md`.
12. Commit and push the initial project.

### Acceptance criteria

- `npm start` serves the Angular application.
- Tailwind utility classes render correctly.
- `docker compose up` starts the development application.
- `docker build` completes successfully.
- The production container serves the Angular app through Nginx.
- No Angular Material dependency is installed.

## Phase 2 — Chat UI and frontend architecture

### Goals

Build a responsive chat experience with mock responses before connecting Gemini.

### Suggested structure

```text
src/app/
├── core/
│   ├── models/
│   ├── services/
│   └── config/
├── features/
│   └── chat/
│       ├── components/
│       │   ├── chat-sidebar/
│       │   ├── chat-window/
│       │   ├── chat-message/
│       │   ├── chat-input/
│       │   └── typing-indicator/
│       ├── pages/
│       ├── services/
│       └── models/
├── shared/
│   ├── components/
│   ├── directives/
│   └── pipes/
├── app.config.ts
└── app.routes.ts
```

### Tasks

1. Define `ChatMessage` and `Conversation` interfaces.
2. Create the application shell and responsive layout.
3. Build the conversation sidebar.
4. Build the chat window and message list.
5. Build the message composer.
6. Implement send-message behavior using mock responses.
7. Add loading, empty, error, and disabled states.
8. Implement Signals-based state management.
9. Add accessible keyboard behavior and responsive layouts.

### Acceptance criteria

- Users can create a conversation and send messages.
- Messages render in the correct order.
- UI state updates without manual DOM manipulation.
- Layout works on desktop and mobile.
- The UI is functional without a Gemini API connection.

## Phase 3 — Gemini integration

### Goals

Connect the browser application to Gemini using Firebase AI Logic without a custom backend.

### Tasks

1. Create a Firebase project and register a web application.
2. Enable Firebase AI Logic and select the Gemini Developer API provider.
3. Configure Firebase App Check and its development workflow.
4. Add Firebase SDK initialization.
5. Create an AI service responsible for model and chat-session operations.
6. Configure model generation settings and system instructions.
7. Implement multi-turn chat context.
8. Implement streaming response consumption.
9. Connect streamed chunks to the existing assistant message in application state.
10. Handle cancellation, quota errors, safety blocks, and network failures.

### Security requirements

- Never put a Gemini Developer API key in Angular source code or browser-delivered environment files.
- Treat Firebase web configuration as public client configuration, not as a secret.
- Configure App Check and enforce it for the relevant Firebase AI Logic service.
- Apply appropriate API restrictions, quotas, and monitoring.
- Do not send sensitive information in prompts unless the application has an explicit, reviewed data-handling policy.

### Acceptance criteria

- A user can send a prompt and receive a Gemini response.
- Follow-up prompts retain the intended conversation context.
- Responses render progressively when streaming is enabled.
- Errors are shown clearly and do not leave the UI stuck in a loading state.

## Phase 4 — Conversation management and assistant experience

### Tasks

1. Persist conversations in IndexedDB.
2. Implement create, read, update, and delete operations.
3. Restore conversations after page reload.
4. Add conversation titles and rename support.
5. Add client-side conversation search.
6. Add response regeneration and retry.
7. Add stop-generation behavior where supported by the SDK.
8. Add Markdown rendering and safe HTML sanitization.
9. Add code-block formatting and copy controls.
10. Add copy-response and conversation export.
11. Add theme preference and responsive refinements.

### Acceptance criteria

- Conversations persist in the same browser.
- Users can reopen, rename, search, and delete conversations.
- Generated Markdown is sanitized before HTML rendering.
- Retry and cancellation states are handled consistently.

**Persistence limitation:** IndexedDB is local to a browser profile. It does not provide cross-device synchronization or server-side backups.

## Phase 5 — Testing, accessibility, and quality

### Tasks

1. Add unit tests for state, services, and components.
2. Mock Firebase AI Logic in unit tests; do not consume live model quota in routine tests.
3. Add Playwright end-to-end tests for primary user journeys.
4. Test streaming UI behavior and failure states.
5. Add linting and formatting checks.
6. Check keyboard navigation, focus management, contrast, and semantic markup.
7. Review dependency vulnerabilities.
8. Verify production build output and bundle budgets.

### Core E2E scenarios

- Open the application.
- Start a new conversation.
- Send a message and receive a response.
- Send a follow-up question.
- Reload and restore the conversation.
- Search and delete a conversation.
- Simulate an API or network failure and retry.

## Phase 6 — GitHub Actions and AWS deployment

### Git workflow

- `main`: production-ready code.
- `develop`: integration branch.
- `feature/*`: isolated feature branches.
- Pull requests run validation before merge.

### CI pipeline

1. Check out the repository.
2. Set up the supported Node.js version.
3. Run `npm ci`.
4. Run lint.
5. Run unit tests.
6. Run the Angular production build.
7. Run E2E tests where the workflow environment supports them.

### AWS deployment

1. Create a private S3 bucket.
2. Create a CloudFront distribution.
3. Configure Origin Access Control so the bucket is not publicly readable.
4. Request an ACM certificate in `us-east-1` if using a custom domain.
5. Configure Route 53 if using an AWS-managed domain.
6. Configure GitHub Actions OIDC federation with AWS IAM.
7. Scope the deployment role to the required bucket and CloudFront distribution.
8. Deploy Angular build output to S3.
9. Invalidate CloudFront when required.
10. Configure SPA fallback and cache headers.
11. Verify HTTPS, routing, caching, and production behavior.

### Acceptance criteria

- Pull requests run automated validation.
- Merges to `main` trigger production deployment.
- GitHub Actions uses OIDC rather than long-lived AWS access keys.
- S3 is private behind CloudFront.
- Deep links load correctly.
- The deployed application can reach Firebase AI Logic under the configured domain/App Check policy.

## Suggested delivery sequence

| Phase | Main deliverable                             |
| ----- | -------------------------------------------- |
| 1     | GitHub repo, Angular 22, Tailwind 4, Docker  |
| 2     | Responsive chat UI with mock responses       |
| 3     | Gemini integration and streaming             |
| 4     | Conversation persistence and advanced UX     |
| 5     | Automated tests and quality gates            |
| 6     | GitHub Actions and AWS production deployment |

## Development conventions

- Keep AI-provider access behind an Angular service.
- Keep UI components focused on presentation and user interaction.
- Use Signals for local synchronous state; use RxJS where stream composition or cancellation is useful.
- Avoid unnecessary state-management libraries until complexity justifies them.
- Keep secrets out of source control and browser bundles.
- Prefer small feature branches and descriptive commits.
- Update `progress.md` whenever a task or milestone changes state.
