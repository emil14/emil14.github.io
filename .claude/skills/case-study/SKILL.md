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
- Short. Cut until it hurts, then check that the motivation survived. A paragraph that a figure can replace becomes a figure.
- Pareto: about 20% of the text should carry 80% of the substance. Every sentence states a fact, a decision or a reason; no warm-up, no recap. Don't overcorrect into telegraph style.
- Say each thing once. If a fact appears in a figure, a table and a paragraph, keep it in one place and refer to it.
- Sentences that carry results: less text, more substance, flattering but neutral, no bragging. «Скоуп согласовывали в сентябре, а уже в октябре англоязычная версия принимала трафик на проде», not a paragraph about the launch.
- No self-diminishing statements nobody asked about. "Не трогая клиенты", "только бэкенд", "мы не переписывали X" tell the reader that less was done. If keeping something was a real decision, state it positively with the reason ("транспорт сохранили везде, где это было возможно"); otherwise leave it out.
- Our own engineering voice. If the employer has a public case on the same project, don't retell it: pick what the tech lead saw and decided, and link to the employer's case for the rest.
- Russian tech jargon the way practitioners speak it: субагент, скилл, харнес, PR, мерж, ревью, стенд, фича-фриз, роадмап, легаси. Don't translate terms people don't translate («подагент», «пул-реквест» sound wrong); don't write English where Russian is natural.
- Say "кодовая база" (codebase), not "код", when you mean the system as a whole: «одна кодовая база на Python», «три продукта из одной кодовой базы».
- Watch words that change meaning: for things we dropped, write "не переносили" / "перенесли только используемые", not "оставили" (reads as "kept in the code").

## Content

- Title: short, punchy and simple, somewhere between the employer's marketing headline and a dry engineering label. What was done plus two or three hard hooks, with numbers in shorthand: «Миграция PARTYstation: 300K строк легаси, агенты и ноль даунтайма». Not a sentence-story («как агенты перенесли 300 000 строк…» reads as marketing), not an agency pitch («…и теперь один разработчик делает работу целой команды»), not a bare label («Миграция действующей игровой платформы»). Sourced, no claims the case doesn't cover. The lead under it is two or three sentences: what the product is, what we did, the role. Add a number to the lead only if it is impressive on its own; don't repeat the title's hooks in it.
- Name the concepts you came up with, and explain each in one plain sentence a non-specialist gets («легаси-паритет: пишем тесты вокруг старой системы, пока не позеленеют, потом новую версию, пока не пройдут те же тесты»), not in abstractions («эталон — поведение работающей системы»). Say briefly how you got there. Link the public material that fed into it by name, phrased honestly as one of several («изучали разные готовые подходы, в том числе <repo>»), not as the single origin; check that it opens without authentication. Private specs and notes are described, not linked.
- State what the deliverable did to the live product when it matters and is sourced ("без остановки продукта", "переключили трафик и наблюдали за раскаткой"), in one clause, not a paragraph.
- Section titles may carry the stakes when they are sourced: «Сжатые сроки: как разогнать разработку в три-четыре раза» (peak weeks against the old record), not a dry «Скорость: узкие места по очереди».
- Section titles say what the section is about in plain words, and may use a familiar image («Как съесть слона: режем легаси-монолит на куски», «Три продукта из одного кода»), not a fragment or a colon-joined list.
- Sections follow the real chronology. If a phase (product rails after the switchover) came before another event (an English launch, a pitch), it goes first on the page too, and the timeline at the end agrees with the section order.
- Every technical decision needs its **motivation**: what the default option costs, and why we didn't pay that cost. Frame it the Occam way: the complex technology has to justify itself, not the simple one. One weak reason ("one fewer service") is not enough; give the real costs compactly (boxes or a short list).
- Concept over implementation. Diagrams show roles of components: user → agent ← sources. No script, file, table or function names, no tool lists, no prompt internals.
- Write for a reader who doesn't know the system. Not "статистика как веб-сервис с тремя демонами", but "отдельный сервис влили в основной API". No vendor or tool names where the concept is enough ("неиспользуемые интеграции", not "DataDog и GrowthBook").
- Don't present the task as our choice. If the customer asked for it (an English version, one codebase for partners), it is the task; the "simpler" table only holds alternatives we actually weighed.
- Show what the customer really got. If the deliverable is a way of working (a harness, a process the customer continues on their own), lead with that, and show before → after as what changed for the people or agents who work in it.
- Show the tech lead under pressure: the peak moments, the next bottleneck and how it was removed, roadmaps and decomposition, hard calls. A hard call ("я предложил руководству остановить новые фичи до…") is worth highlighting, phrased so nobody looks bad: describe the situation and the decision, not who was wrong, and keep it consistent with what the employer says publicly.
- Credit precisely. If a colleague did the work (the QA wrote the scenarios), say so by role; Emil "выстраивал процесс", "вёл", "предложил". Don't stretch his part to cover theirs.
- Team without names: "Я, фронтенд-разработчик, QA, DevOps". Role is the headline role, one or two words ("Техлид"), not a career story.
- No vanity numbers at the top. Counts like "9 sources" or "175 cases" say little out of context and pull attention from role, team and responsibilities. A number belongs inside the section where it means something (e.g. evals).
- Round numbers: "~1 500 сценариев", "~350 дефектов", "неделя приёмки", not "1 486", "355", "8 рабочих дней". Give counts with their structure where it helps («около 1 500 сценариев, разбитых на 19 доменов»).
- Charts show peaks and contrasts (a peak week against the old record), not totals with a long caption. Productivity metrics only as far as the employer has published them, with a link to the employer's case as the source. Show about half the data points and no exact dates ("конец июля", not "27 июл"): small specifics leak internals. It is fine to pick only the real points that make the trend read up-and-to-the-right and to extend the series past the main phase from the repo history (say so in the caption); never invent or adjust a value.
- Internal dashboards and reports (e.g. a Birta page with two lines converging as a PR queue drains) are good raw material: redraw them as a minimal figure on the page, optionally animated once when scrolled into view (respect `prefers-reduced-motion`), with only the shape and one or two numbers.
- Show what happened after handover: where the codebase moved (e.g. the customer's GitLab, on infrastructure that was always theirs) and that the flow of changes kept going, with a number.
- No interim or internal status figures (what was left on a given date, a sprint snapshot) in a finished case. Show the method instead (how the work was cut, what went first).
- The employer's case may simplify ("всё за три месяца"); our case covers the real, wider scope and timeline. Don't copy the claim if the page tells a longer story.
- Visual proof is welcome: screenshots the author made for the employer's public case (dashboards on the switchover evening, production graphs) can be reused. Every borrowed image gets an unobtrusive credit at the end of its caption with a link: «Иллюстрация из кейса Манараги». Keep the text around them superficial: what people and agents can see, not how the stack is wired.
- Responsibilities in three or four short columns: Архитектура / Управление командой / Работа с заказчиком ("удержание скоупа" is a good phrase). If the deliverable is a harness, give it its own column (Архитектура / Харнес / Команда / Заказчик) instead of burying it in architecture; keep each column to one or two sentences. The customer column shows closeness: contact with the founder and their team, meetings, interviews with their engineers, support after launch.
- The "simpler" table holds only alternatives that were actually weighed. A problem we ran into and solved is not an alternative; it goes in its own section or nowhere. When a row's reason is about scale, give the number ("от 8 PR в неделю до 115 на пике").
- Bottleneck tables: show that each fix created the next problem (more checks → CI queue) and how it was solved. Don't inflate: say what was built and on whose prior work.
- No operations or bureaucracy: what was or wasn't in requirements, compliance matrices, internal approval steps.
- Small demo details don't belong (a single feature shown in a demo). Show the system and the decisions.
- Links to Emil's own notes or talks are welcome, labelled as his: "Что я изучал по теме: мои конспекты".

## What must not be published

The benchmark is how openly the employer's own public blog and case studies describe the same project. Never go beyond it. Ask "what would management say if they saw this online?"

- Names of colleagues, the customer, partners, intermediaries; specific stations, sites or facilities.
- Servers, hosts, jump hosts, IPs, accounts, replication and other infra layout. No provider names and no emphasis on jurisdiction ("вне РФ"): write "отдельная инфраструктура".
- Budgets, incidents, internal disputes, who argued for what. A big, already-visible event (an infrastructure outage that shaped the timeline) can get one neutral line at high level; data loss, security holes, payment mistakes and blame never.
- Sensitive topics are removed, not softened. If the author flags a row or sentence as touching something sensitive, delete it entirely and don't hint at it elsewhere.
- Internal details of the customer's environment.
- Anything the customer asked not to advertise.
- Legal and safety specifics beyond one high-level line ("по требованиям местного законодательства об ИБ"). No scope-of-safety statements, no norms that don't apply, no compliance matrices.
- Unconfirmed claims (data residency, certifications) and future events written as done. If acceptance is scheduled, write it neutrally and switch the wording only after it happens.
- Private repositories, even if Emil has access.

Every number must come from a source you checked (repo, tracker, chat). Do not invent results.

For how a mechanism really works (release flow, CI, branching), read the source of truth (the CI config, the repo's rules and scripts), not a tracker summary. Read-only: fetching and reading is fine; never push, tag, trigger a pipeline or touch production.

## Page structure

Use the shared classes from `style.css` so the case looks like the others:

1. `div.case-heading`: `p.eyebrow` = "Company → for whom" (e.g. "Manaraga → PARTYstation"), `h1`, `p.case-lead`, `span.project-years`, `ul.case-tags`.
2. Meta row right after the heading (`.r-meta`): role, period, team, stack. This is what the reader looks for first.
3. Responsibilities, three or four columns.
4. The system: one short paragraph plus a schematic figure. Boundaries (closed network) are drawn as a dashed zone around the system, not as a box.
5. One section per key decision, each with motivation and a diagram (e.g. a horizontal pipeline).
6. Quality/evals if there were any: what was measured and what Emil changed in the method.
7. "Где выбрали решение проще": a one-line subtitle under the heading, then could have built / what we did / why.
8. Timeline ending at the real current state.
9. Materials: talks, the employer's public case, notes.

Add the case to the homepage list (`index.html`, `a.project-row`), renumbering the rows after it. The list is reverse-chronological by the project's end (or by its latest phase if it's still running), not by importance.

## Bilingual and technical rules

- Both languages are full versions. `data-en` / `data-ru` go on leaf elements only, because `script.js` replaces `textContent`.
- Language-only blocks use `html[lang="en"] .r-ru-only, html[lang="ru"] .r-en-only { display: none; }`. Example: a Russian talk is embedded inline in the RU version (click-to-load `youtube-nocookie` iframe), while EN shows only a small link marked "in Russian".
- Light and dark themes via CSS variables (`--bg`, `--text`, `--muted`, `--line`, `--accent`, `--panel`); no hardcoded colors besides video backgrounds.
- Layout: the case `main` is a centred reading column (`max-width: 880px; margin: 0 auto`) and text, leads and figures take its full width. Don't cap paragraphs at ~680px inside a wider container: it leaves an empty right column that looks reserved for something.
- Screenshots are zoomable: put `data-zoom` on the `img`, and `script.js` wraps it in a button that opens a full-size dialog (Esc or click closes).
- Mobile: grids collapse to one column at 900/640px, arrows rotate 90°. Check every page of the site at 360/390px, not only the case you edited.
- Figures must read in both themes. Dashed borders and `--line`-coloured strokes almost vanish in the light theme; use `--accent` or `--muted` for anything that carries meaning, and check light-theme screenshots specifically. Comparisons (Было / Стало) are a real `<table>` with row headers and hairline rows, outside any grid-background figure: a table-like grid of boxes over the squared background is unreadable in the dark theme. Keep the grid background for diagrams only.
- A standalone chart is centred, with its label and caption centred too. Leave extra space after a table that ends a section.
- Small minimalist illustrations (dots on parallel lines, diverging branches) are welcome where they replace a paragraph. Build them from HTML or inline SVG with CSS variables, no text inside SVG (it shrinks on mobile); put labels in HTML.
- Inline emphasis inside a paragraph is impossible with `data-en`/`data-ru` on the paragraph; make the emphasised phrase a heading (h3) or split into spans.

## Process

1. Research before writing, and go wide: the good material is in the author's own messages at peak moments. Internal sources:
   - the project chat with the customer, the internal team chat/forum topic for the project, and Emil's direct chat with the CEO;
   - planning docs, retros, roadmaps, meeting summaries and Emil's own presentations (Birta projects, files attached in Telegram);
   - trackers, the repo's docs (history, defect registries, coverage maps), the employer's public case and public channel.

   Also look for how the approach was chosen: chats with the people who shaped it (materials they sent, specs, alternatives discussed); a concept often has a history worth one sentence.

   With telegram-context, list candidate chats first and request access to all of them in one `request_access` call. Search by keywords (фриз, паритет, стенд, ветк, параллел, ревью, родмап, презентац, не успе) and read Emil's long messages in full. Public sources about the client: founder, talks, events, launches, press. Note a source for every fact, separate verified facts from assumptions, and ask the author about gaps instead of guessing.
2. For a new case or a large rewrite, show a local preview (`python3 -m http.server`) and wait for the author's go-ahead before publishing. When the author says the round is final («фикси и сразу выкладывай»), apply the comments and publish without another preview. Give the author the link, not screenshots: screenshots are for your own checks.
   Before each round, reread all of the author's earlier comments, not only the latest ones, and check the page against them; a regression of an old comment costs more than a new one.
   Fix obvious quality problems (a figure too small on mobile, invisible strokes) yourself instead of asking whether to fix them.
3. Before pushing: `python3 scripts/check_site.py`, screenshots at 390px and 1280px in both themes and both languages, no horizontal overflow.
4. Push to `master` and verify the GitHub Pages run and the public URL before reporting it as live.
5. After every round of the author's comments, fold the general lessons back into this skill, not only into the page.
