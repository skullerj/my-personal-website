---
name: update-cv
description: Edit CV content in profile.json following best-practice guidelines, then verify the result as a PDF. Use when the user asks to update, improve, rewrite, or add content to their CV or resume.
allowed-tools: Read Edit Bash
---

## Data architecture

**CV source of truth: `src/assets/resume.json`** (professional PDF CV — do NOT edit `profile.json`)
`profile.json` is the website content and uses a different, intentionally personal tone. Always edit `resume.json` for CV changes.

Rendering pipeline: `resume.json` → `src/pages/resume.astro` → `dist/resume.pdf` (on build)

Key fields:
- `personalInfo` — contact details including linkedin
- `professionalSummary` — 2–4 sentence opener
- `experience[].description` — 1–2 sentence role context
- `experience[].achievements` — array of [title, detail] pairs
- `technicalSkills[].entries` — flat skill lists per category
- `continuousLearning` — courses and certifications
- `languages`, `strengths`, `education`

## CV writing guidelines

Always apply these when creating or editing any content.

### Professional Summary
- Lead with total years of experience + 2–3 key technologies + one hook metric or current work
- 2–4 sentences maximum; no personal backstory
- End with the most impressive or relevant current work

### Experience — description field
- 1–2 sentences of factual role context only
- No informal language, no self-deprecation, no first-person feelings
- Example: "Progressed from Junior Developer to Squad Lead at a data insights startup, owning the core platform and client-facing solutions."

### Experience — achievements field
Each achievement is a [title, detail] pair:
- **Title**: short headline (3–6 words), action-verb led
- **Detail**: STAR-format sentence — action verb → what was built/done → quantified impact

Rules for achievement details:
- Every detail needs at least one number: team size, user count, documents processed, % improvement, latency reduction, contracts won, etc.
- Start with a past-tense action verb: Built, Led, Reduced, Delivered, Designed, Migrated
- No "I" as subject
- No informal phrases: avoid "my eye for", "I miss", "the kind where you get one shot", "what we call"
- If the user doesn't supply a metric, ask for it before writing — don't invent numbers

### Skills
- No duplicate entries across categories
- Lead each category with the strongest / most-used skills
- Only include tools used in real professional work

### Continuous Learning
- Only include completed, verifiable items
- Always include institution name and completion date

### General tone rules
- Professional register — this PDF is sent to recruiters
- Achievement-focused, not task-descriptive
- Concise: fewer words without losing meaning

## Steps

### 1. Read the current CV

```
Read: src/assets/resume.json
```

### 2. Understand and apply the request

Map the user's request to the relevant field(s). Apply the writing guidelines above to any new or edited content. If a metric is needed but not provided, ask for it before writing.

### 3. Edit the file

Use the Edit tool to update `src/assets/profile.json` with the change. Make only the requested change — do not rewrite unrelated content.

### 4. Verify the PDF

Use the `review-resume-pdf` skill to build the site and read the generated PDF. Confirm the change renders correctly and no layout issues were introduced.

### 5. Report the change

Summarise what was changed and note anything from the PDF review (layout, content, any issues).
