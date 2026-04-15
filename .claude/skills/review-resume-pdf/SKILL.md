---
name: review-resume-pdf
description: Builds the site and reads the generated resume PDF so you can review and work on it. Use when the user asks to review, inspect, check, or improve the resume PDF, or after making changes that affect the PDF output.
allowed-tools: Bash Read
---

## When to use

Whenever you need to see what the current resume PDF looks like — before suggesting changes, after making changes, or when the user asks to review the PDF.

## Steps

### 1. Build the site

```bash
npm run build
```

This generates `dist/resume.pdf` as part of the Astro build.

### 2. Read the PDF

Use the Read tool to read the generated PDF:

```
Read: dist/resume.pdf
```

The Read tool renders PDF content visually. Review the output carefully — layout, content, formatting, and any issues.

### 3. Report what you see

Describe the current state of the PDF: structure, sections present, any layout or content issues you notice. Use this as the basis for suggesting or making improvements.
