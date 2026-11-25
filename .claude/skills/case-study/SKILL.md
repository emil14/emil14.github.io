---
name: case-study
description: Write, rewrite or review a project case study on this portfolio site (projects/<name>/index.html). Use for "напиши кейс", "статья про проект", "причеши статью", "перепиши кейс", or any edit to a project page's text, diagrams or structure.
---

# Writing a case study

A case is Emil's self-presentation. The reader is a founder, hiring manager or engineer deciding whether to talk to him. The page has to show what **he** did (design, decisions, team, customer) in an engineering register, with more visuals than text.

Reference implementation: `projects/railway/index.html`. Older cases predate this guide and should be brought up to it when touched.

## Tone

- Engineering, neutral, modest. Engineers don't write "revolutionary" or "seamless". If a sentence could be on a landing page, rewrite it.
- No ego. Not "это была моя идея, и она сработала", but "я предложил X, проверили в январе, подход подтвердился".
- "Я" only for what was really his. Team decisions take the plural without naming anyone: "рассматривали Kubernetes и решили не тащить". Never hand credit to someone else, never take credit that isn't certain.
- Verbs about the work: "проектирую", "руковожу", "веду работу с заказчиком", not "пишу код" or "мне нравится выстраивать".
- Short. Cut until it hurts, then check that the motivation survived.

## Content

- Every technical decision needs its **motivation**: what the default option costs, and why we didn't pay that cost. Frame it the Occam way: the complex technology has to justify itself, not the simple one. One weak reason ("one fewer service") is not enough; give the real costs compactly (boxes or a short list).
- Concept over implementation. Diagrams show roles of components: user → agent ← sources. No script, file, table or function names, no tool lists, no prompt internals.
- Team without names: "Я, фронтенд-разработчик, QA, DevOps". Role can change over time: "Бэкенд-разработчик, затем техлид".
- Responsibilities in three columns: Архитектура / Управление командой / Работа с заказчиком ("удержание скоупа" is a good phrase).
- No operations or bureaucracy: what was or wasn't in requirements, compliance matrices, internal approval steps.
- Small demo details don't belong (a single feature shown in a demo). Show the system and the decisions.
- Links to Emil's own notes or talks are welcome, labelled as his: "Что я изучал по теме: мои конспекты".

## What must not be published

The benchmark is how openly the employer's own public blog and case studies describe the same project. Never go beyond it. Ask "what would management say if they saw this online?"

- Names of colleagues, the customer, partners, intermediaries; specific stations, sites or facilities.
- Servers, hosts, jump hosts, IPs, accounts, replication and other infra layout.
- Budgets, incidents, internal disputes, who argued for what.
- Internal details of the customer's environment.
- Anything the customer asked not to advertise.
- Legal and safety specifics beyond one high-level line ("по требованиям местного законодательства об ИБ"). No scope-of-safety statements, no norms that don't apply, no compliance matrices.
- Unconfirmed claims (data residency, certifications) and future events written as done. If acceptance is scheduled, write it neutrally and switch the wording only after it happens.
- Private repositories, even if Emil has access.

Every number must come from a source you checked (repo, tracker, chat). Do not invent results.

## Page structure

Use the shared classes from `style.css` so the case looks like the others:

1. `div.case-heading`: `p.eyebrow` = "Company → for whom" (e.g. "Manaraga → PARTYstation"), `h1`, `p.case-lead`, `span.project-years`, `ul.case-tags`.
2. Up to three verified numbers (`.r-stats` pattern) and a meta row: role, period, team, stack.
3. Responsibilities, three columns.
4. The system: one short paragraph plus a schematic figure. Boundaries (closed network) are drawn as a dashed zone around the system, not as a box.
5. One section per key decision, each with motivation and a diagram (e.g. a horizontal pipeline).
6. Quality/evals if there were any: what was measured and what Emil changed in the method.
7. "Где выбрали решение проще": could have built / what we did / why.
8. Timeline ending at the real current state.
9. Materials: talks, the employer's public case, notes.

Add the case to the homepage list (`index.html`, `a.project-row`), renumbering the rows after it.

## Bilingual and technical rules

- Both languages are full versions. `data-en` / `data-ru` go on leaf elements only, because `script.js` replaces `textContent`.
- Language-only blocks use `html[lang="en"] .r-ru-only, html[lang="ru"] .r-en-only { display: none; }`. Example: a Russian talk is embedded inline in the RU version (click-to-load `youtube-nocookie` iframe), while EN shows only a small link marked "in Russian".
- Light and dark themes via CSS variables (`--bg`, `--text`, `--muted`, `--line`, `--accent`, `--panel`); no hardcoded colors besides video backgrounds.
- Mobile: grids collapse to one column at 900/640px, arrows rotate 90°.

## Process

1. Gather facts from sources first. Separate verified facts from assumptions.
2. For a new case or a large rewrite, show a local preview (`python3 -m http.server`) and wait for the author's go-ahead before publishing.
3. Before pushing: `python3 scripts/check_site.py`, screenshots at 390px and 1280px in both themes and both languages, no horizontal overflow.
4. Push to `master` and verify the GitHub Pages run and the public URL before reporting it as live.
