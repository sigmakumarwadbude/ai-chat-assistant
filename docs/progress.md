# AI Chat Assistant — Project Progress

> Update this file as work is completed. Checkboxes are the source of truth for task status.

## Project status

- **Current phase:** Phase 2 — Chat UI and frontend architecture
- **Current activity:** Phase 6 preparation — GitHub Actions CI
- **Overall status:** In progress
- **Last updated:** 2026-11-27
- **Frontend:** Angular 22
- **Styling:** Tailwind CSS 4
- **Application state:** Angular Signals
- **Containerization:** Docker / Docker Compose / Nginx
- **AI integration:** Gemini through Firebase AI Logic
- **Unit testing:** Vitest + Angular TestBed
- **Integration testing:** Vitest + Angular TestBed
- **E2E testing:** Playwright (planned)
- **Code quality:** ESLint / Angular ESLint
- **Code formatting:** Prettier
- **CI:** GitHub Actions
- **Preview deployment:** GitHub Pages — successful
- **Production deployment target:** AWS S3 + CloudFront
- **Angular Material:** Not used

---

## Phase 1 — Repository and development foundation

**Status: COMPLETE**

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
- [x] Run development container with Docker Compose
- [x] Build production Docker image
- [x] Run and verify production container
- [x] Add `learning_plan.md`
- [x] Add `progress.md`
- [x] Commit and push initial changes to `main`
- [x] Create and push `develop` branch

### Phase 1 notes

- Angular Material was explicitly excluded.
- Tailwind CSS is the primary styling system.
- No custom backend will be developed.
- Firebase AI Logic will manage browser-to-Gemini integration.
- Docker is used for local development and container validation.

---

## Phase 2 — Chat UI and frontend architecture

**Status: IN PROGRESS**

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

---

## Phase 3 — Gemini integration

**Status: NOT STARTED**

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

---

## Phase 4 — Conversation management and advanced UX

**Status: NOT STARTED**

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

---

## Phase 5 — Testing, accessibility, and quality

**Status: IN PROGRESS — TESTING FOUNDATION**

### Testing framework setup

- [x] Configure Vitest with Angular CLI
- [x] Verify initial application unit tests (2 tests passed)
- [x] Install and configure Angular ESLint
- [x] Add ESLint npm script
- [x] Install and configure Prettier
- [x] Add formatting npm scripts
- [ ] Validate Prettier formatting across the complete repository

### Unit testing

- [x] Verify initial application component creation test
- [x] Verify initial application title rendering test
- [ ] Expand component unit test coverage
- [ ] Add service unit tests
- [ ] Add Signals-based state management tests
- [ ] Mock Firebase AI Logic in unit tests

### Integration testing

- [ ] Add Angular component integration tests
- [ ] Test communication between chat components
- [ ] Test component and service interactions
- [ ] Test message submission and response rendering
- [ ] Test Signals-based state updates
- [ ] Test loading and error states
- [ ] Test streaming response handling
- [ ] Test conversation persistence integration

### End-to-end testing

- [ ] Install and configure Playwright
- [ ] Add conversation creation E2E tests
- [ ] Add message submission E2E tests
- [ ] Add follow-up question E2E tests
- [ ] Add conversation restoration E2E tests
- [ ] Add error and retry E2E tests

### Quality and accessibility

- [ ] Review keyboard navigation
- [ ] Review focus management
- [ ] Review color contrast and semantic markup
- [ ] Review dependency vulnerabilities
- [ ] Verify production build and bundle budgets

---

## Phase 6 — GitHub Actions CI

**Status: IN PROGRESS — FEATURE BRANCH**

### CI foundation

- [x] Create feature branch `feature/ci-workflow`
- [x] Install and configure ESLint
- [x] Install and configure Prettier
- [x] Add `lint` npm script
- [x] Add `format` npm script
- [x] Add `format:check` npm script
- [x] Create initial `.github/workflows/ci.yml`
- [x] Configure push triggers for `main` and `develop`
- [x] Configure pull request triggers for `main` and `develop`
- [ ] Verify Prettier check locally
- [ ] Verify ESLint locally after final changes
- [ ] Verify unit tests locally after final changes
- [ ] Verify production build locally

### CI pipeline

- [ ] Verify repository checkout
- [ ] Verify Node.js setup and npm caching
- [ ] Verify dependency installation using `npm ci`
- [ ] Verify Prettier formatting validation
- [ ] Verify ESLint execution
- [ ] Verify unit and integration test execution
- [ ] Verify Angular production build
- [ ] Verify successful GitHub Actions execution

### Pull request workflow

- [ ] Commit CI implementation
- [ ] Push `feature/ci-workflow`
- [ ] Create pull request targeting `develop`
- [ ] Verify automatic CI execution
- [ ] Fix any CI failures
- [ ] Merge approved pull request into `develop`

---

## Phase 7 — AWS production deployment

**Status: NOT STARTED**

- [ ] Configure AWS IAM OIDC provider
- [ ] Create least-privilege deployment role
- [ ] Create private S3 bucket
- [ ] Create CloudFront distribution
- [ ] Configure Origin Access Control
- [ ] Configure SPA routing and cache policies
- [ ] Configure custom domain and HTTPS if required
- [ ] Create AWS deployment workflow
- [ ] Deploy Angular build to S3
- [ ] Invalidate CloudFront
- [ ] Verify production application and Gemini integration

### Deployment notes

- GitHub Pages deployment has already succeeded.
- GitHub Pages deployment and AWS production deployment are separate workflows.
- AWS production hosting will use S3 and CloudFront.
- Docker is not required for the AWS static hosting deployment.

---

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
| Unit test runner          | Vitest              |
| Angular testing utility   | TestBed             |
| Integration testing       | Vitest + TestBed    |
| E2E testing               | Playwright          |
| Linting                   | Angular ESLint      |
| Formatting                | Prettier            |
| Local container workflow  | Docker Compose      |
| CI/CD                     | GitHub Actions      |
| AWS hosting               | S3 + CloudFront     |
| CI/CD identity            | GitHub Actions OIDC |

---

## Change log

| Date       | Update                                                                             |
| ---------- | ---------------------------------------------------------------------------------- |
| 2026-11-21 | Project plan and progress tracker created.                                         |
| 2026-11-21 | Confirmed Tailwind CSS as the styling system; Angular Material excluded.           |
| 2026-11-21 | Confirmed no custom backend; Gemini integration planned through Firebase AI Logic. |
| 2026-11-21 | Added Docker development and Nginx production-container approach.                  |
| 2026-11-21 | Phase 1 confirmed complete.                                                        |
| 2026-11-27 | Updated testing strategy to Vitest and Angular TestBed.                            |
| 2026-11-27 | Added unit, integration, and E2E testing levels.                                   |
| 2026-11-27 | Added Angular ESLint and Prettier.                                                 |
| 2026-11-27 | Added GitHub Actions CI workflow with push and pull request triggers.              |
| 2026-11-27 | Separated GitHub Actions CI and AWS production deployment into distinct phases.    |
| 2026-11-27 | Recorded successful GitHub Pages deployment.                                       |
