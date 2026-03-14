# Claude Instructions – Adama Soaps

> For full project context, see [.github/copilot-instructions.md](.github/copilot-instructions.md).
> The sections below are Claude-specific rules that **override or extend** the copilot instructions.

---

## Branch & Deployment Strategy

### Branch Roles
| Branch | Role |
|--------|------|
| `main` | **Development branch** — ongoing work lives here |
| `production` | **Production branch** — Vercel deploys from this branch |

### Rules

1. **Always target `production` for PRs**, not `main`.
   - All feature branches must open pull requests against `production`.
   - `main` is for development work; `production` is what ships.

2. **Never check out a branch with upstream tracking.**
   - Do NOT use `git checkout --track`, `git push -u`, or `git branch --set-upstream-to`.
   - Tracking bypasses the PR-based preview flow that Vercel depends on.
   - Always push branches without tracking and open a PR to trigger Vercel's preview build.
   - When branching from a remote ref, always pass `--no-track`:
     ```bash
     git checkout -b my-feature --no-track origin/production
     ```

3. **Vercel auto-generates preview links for every PR.**
   - When creating a pull request, always mention in the PR body that Vercel will automatically deploy a preview link for this branch.
   - Use this preview link to visually verify the changes before merging.
   - Example note to include in PRs:
     ```
     > A Vercel preview deployment will be automatically generated for this PR.
     > Please verify the changes at the preview URL before merging.
     ```

---

## Visual Verification

- **Always use Playwright MCP** for visual verification of UI changes.
- Use the Vercel preview link (from the PR) as the target URL when running Playwright checks after a PR is opened.

---

## Notes for AI Assistants

Follow all guidelines in `.github/copilot-instructions.md` plus:

- ✅ **DO:** Open PRs against `production`, never `main`
- ✅ **DO:** Include the Vercel preview note in every PR description
- ✅ **DO:** Use Playwright MCP to visually verify changes
- ⚠️ **DON'T:** Use `--track` or `-u` when checking out or pushing branches
- ⚠️ **DON'T:** Push directly to `production` — always go through a PR
- ⚠️ **DON'T:** Merge without checking the Vercel preview deployment
