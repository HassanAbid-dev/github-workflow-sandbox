# GitHub Workflow Sandbox

Standalone React app for intern evaluation. Runs entirely on mock data — no backend, API keys, or `.env` required.

## Setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## What's inside

- **Repo selector** — 4 mock repositories with search
- **Issue list** — pre-seeded issues in all stages (awaiting bot, awaiting human, PR ready)
- **Issue creation** — full form with title, task, file explorer context, type, priority
- **Comment threads** — expandable with bot markers
- **Reply flow** — `!discuss` / `!continue` replies; simulated bot responds ~3s later
- **Pull Requests** — open/closed/draft with changed file diffs, ping-to-merge
- **Notifications** — bell + floating toast
- **Dark/light theme** — toggle in header, respects system preference

All data lives in memory — nothing persists across refreshes.

## File structure

```
src/
  components/
    mockGithubData.js          ← mock API layer (edit to change seed data)
    GithubWorkflowSandbox.jsx  ← the full UI component
  App.jsx                      ← shell with theme toggle
  main.jsx                     ← entry point
  styles.css                   ← self-contained styles
```
