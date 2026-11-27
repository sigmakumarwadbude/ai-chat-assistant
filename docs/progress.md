# AI Chat Assistant — Project Progress

> Update this file as work is completed. Checkboxes are the source of truth for task status.

## Project status

- **Current phase:** Phase 1 — Repository and development foundation
- **Overall status:** In progress
- **Last updated:** 2026-11-21
- **Frontend:** Angular 22
- **Styling:** Tailwind CSS 4
- **Containerization:** Docker / Docker Compose / Nginx
- **AI integration:** Gemini through Firebase AI Logic
- **Deployment target:** AWS S3 + CloudFront
- **Angular Material:** Not used

## Phase 1 — Repository and development foundation

- [x] Create private GitHub repository `ai-chat-assistant`
- [x] Clone repository locally
- [x] Create Angular 22 application in repository root
- [x] Verify Node.js and Angular CLI versions
- [x] Install and configure Tailwind CSS 4
- [x] Verify Tailwind styling in the browser
- [x] Add `.dockerignore`
- [x] Add multi-stage `Dockerfile`
- [x] Add `nginx.conf` with Angular SPA fallback
- [x] Add `compose.yaml` for development
- [x] Run Angular locally with `npm start`
- [x] Run development container with `docker compose up`
- [x] Build production Docker image
- [x] Run and verify production container
- [x] Add `learning_plan.md`
- [x] Add `progress.md`
- [x] Commit and push initial changes to `main`
- [x] Create and push `develop` branch

### Phase 1 notes

- Angular Material was explicitly excluded; Tailwind CSS is the primary styling system.
- Use Firebase AI Logic as a managed service. Do not create a custom backend.
- Docker is for local development and container validation. AWS production hosting is planned as S3 + CloudFront static hosting.
- Verify the actual Angular build output path before finalizing the Dockerfile and deployment workflow.

## Phase 2 — Chat UI and frontend architecture

- [ ] Define chat and conversation interfaces
- [ ] Create core, features, and shared structure
- [ ] Create application shell and routes
- [ ] Build responsive chat sidebar
- [ ] Build chat window
- [ ] Build user and assistant message components
- [ ] Build message composer
- [ ] Add mock response flow
- [ ] Add Signals-based state
- [ ] Add loading, empty, and error states
- [ ] Verify mobile and desktop layouts

## Phase 3 — Gemini integration

- [ ] Create Firebase project
- [ ] Register Angular web application
- [ ] Enable Firebase AI Logic
- [ ] Configure Gemini provider/model
- [ ] Configure Firebase App Check
- [ ] Initialize Firebase SDK
- [ ] Implement AI service
- [ ] Implement system instructions and generation configuration
- [ ] Implement multi-turn context
- [ ] Implement streaming responses
- [ ] Connect stream chunks to Angular state
- [ ] Handle quota, network, safety, and cancellation errors

## Phase 4 — Conversation management and advanced UX

- [ ] Add IndexedDB persistence
- [ ] Implement conversation CRUD
- [ ] Restore conversations after reload
- [ ] Add conversation titles and rename
- [ ] Add conversation search
- [ ] Add retry and regenerate
- [ ] Add stop-generation behavior
- [ ] Add sanitized Markdown rendering
- [ ] Add code highlighting and copy controls
- [ ] Add response copy and conversation export
- [ ] Add theme preference

## Phase 5 — Testing and quality

- [ ] Add unit tests
- [ ] Mock Firebase AI Logic in unit tests
- [ ] Add Playwright E2E tests
- [ ] Test streaming and error paths
- [ ] Add lint and formatting checks
- [ ] Review accessibility
- [ ] Review dependency vulnerabilities
- [ ] Verify production build and bundle budgets

## Phase 6 — CI/CD and AWS deployment

- [ ] Create GitHub Actions CI workflow
- [ ] Validate pull requests
- [ ] Configure AWS IAM OIDC provider
- [ ] Create least-privilege deployment role
- [ ] Create private S3 bucket
- [ ] Create CloudFront distribution and Origin Access Control
- [ ] Configure SPA routing and cache policies
- [ ] Configure custom domain and HTTPS if required
- [ ] Create AWS deployment workflow
- [ ] Deploy Angular build to S3
- [ ] Invalidate CloudFront
- [ ] Verify production application and Gemini integration

## Decisions and constraints

| Decision                  | Choice              |
| ------------------------- | ------------------- |
| Custom backend            | No                  |
| Angular UI library        | No Angular Material |
| Styling                   | Tailwind CSS 4      |
| AI provider               | Gemini              |
| Browser-to-AI integration | Firebase AI Logic   |
| App protection            | Firebase App Check  |
| Browser persistence       | IndexedDB           |
| Local container workflow  | Docker Compose      |
| AWS hosting               | S3 + CloudFront     |
| CI/CD identity            | GitHub Actions OIDC |

## Change log

| Date       | Update                                                                             |
| ---------- | ---------------------------------------------------------------------------------- |
| 2026-11-21 | Project plan and progress tracker created.                                         |
| 2026-11-21 | Confirmed Tailwind CSS as the styling system; Angular Material excluded.           |
| 2026-11-21 | Confirmed no custom backend; Gemini integration planned through Firebase AI Logic. |
| 2026-11-21 | Added Docker development and Nginx production-container approach.                  |
