---
name: run-and-test-the-website
description: Starts the Astro dev server and uses the Claude in Chrome browser extension to visually review the live website at localhost:4321. Use after any UI, layout, styling, or animation change to verify how it actually renders before finishing.
compatibility: Requires the Claude in Chrome extension (v1.0.36+) to be installed and connected. The extension must be active — run /chrome in the Claude Code session if not already enabled. Designed for this Astro project running on port 4321.
allowed-tools: Bash mcp__claude_in_chrome__navigate mcp__claude_in_chrome__screenshot mcp__claude_in_chrome__get_console_logs mcp__claude_in_chrome__click mcp__claude_in_chrome__scroll
---

## Requirements

The **Claude in Chrome** extension must be connected before this skill runs. If it's not, instruct the user to:
1. Install the Claude in Chrome extension from the Chrome Web Store
2. Run `/chrome` in this Claude Code session to enable it

## When to use

After any change that affects what the user sees: layout, spacing, color, typography, new components, animations. Skip for pure content edits to `profile.json` where structure doesn't change.

## Steps

### 1. Check if the dev server is already running

```bash
curl -s http://localhost:4321 > /dev/null 2>&1 && echo "already running" || echo "not running"
```

If already running, skip to Step 3.

### 2. Start the dev server in the background

Run with `run_in_background: true`:

```bash
npm run dev
```

Then wait until ready:

```bash
until curl -s http://localhost:4321 > /dev/null 2>&1; do sleep 0.5; done; echo "ready"
```

### 3. Open the site in Chrome

Use the `claude-in-chrome` MCP tool to navigate to the running site:

```
Navigate to: http://localhost:4321
```

### 4. Review the page

Visually inspect the rendered result. Focus on what changed. Check:

- **Layout**: Does the two-column grid hold? Are sections aligned correctly?
- **Spacing & sizing**: Do paddings, margins, and font sizes look right?
- **Colors & theming**: Are semantic colors rendering correctly in both dark and light mode? (Toggle theme if relevant to the change.)
- **Animations**: Do GSAP animations fire — hero fade-in on load, section title underlines on scroll?
- **Responsiveness**: If the change affects mobile, resize the viewport and re-check.
- **Console errors**: Check the browser console for JS errors that might indicate a broken import or animation failure.

If something looks wrong, fix the code, let the dev server hot-reload, and review again — no need to restart the server.

### 5. Stop the dev server when done

Only if you started it in Step 2:

```bash
lsof -ti:4321 | xargs kill -9 2>/dev/null; echo "server stopped"
```
