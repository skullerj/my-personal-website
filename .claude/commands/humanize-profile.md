# Humanize Profile Content

Review the text content in `src/assets/profile.json` and revise anything that sounds like it was written by AI rather than a person. The goal is to make every sentence sound like Juan wrote it himself.

## Juan's voice

Based on how Juan actually writes, his voice is:
- **Direct and honest** — no hedging, no corporate speak
- **Specific over vague** — he names real things ("I've learned Python in the process — which is a great perk") rather than using abstractions
- **Casually confident** — comfortable saying "I'm good at this" without turning it into a LinkedIn boast
- **Acknowledges tradeoffs** — he's honest when things have a downside ("I've learned Python in the process — which is a great perk")
- **Active voice, first person** — "I built", "I led", not "was responsible for" or "led the effort to"
- **Occasionally playful** — light touches of humour without overdoing it

## What to look for

Flag and revise any of these patterns:

- **Buzzwords**: "leverage", "synergize", "facilitate", "drive", "enable", "empower", "passionate about", "highly motivated", "scalable solutions", "impactful", "deliverables"
- **Over-formal phrasing**: "in order to", "utilize" (use "use"), "prior to" (use "before"), "in the context of"
- **Vague superlatives**: "extensive experience", "proven track record", "strong foundation"
- **Passive voice masking the actor**: "was developed", "has been built", "was led"
- **Generic claims any developer could make**: anything that doesn't contain a specific detail unique to Juan's actual experience
- **AI hedging**: "I strive to", "I seek to", "I am committed to"

## Fields to review

Check all free-text fields in the JSON:
- `professionalSummary`
- `experience[].description`
- `experience[].achievements[][1]` (the description part of each achievement)
- `strengths[].description`
- `ambient.currentlyBuilding.description`
- `ambient.personalProjects[].description`
- `ambient.thinkingAbout.description`

## Process

1. Read `src/assets/profile.json`
2. Go through each field listed above
3. For each passage that sounds artificial, quote the specific phrase, explain briefly why it's off, and suggest a revision in Juan's voice
4. Present all suggested changes together and ask for approval before editing the file
5. Only apply the changes the user confirms
