# Personal portfolio

Static HTML, CSS and JavaScript; no dependencies or build step.

```sh
python3 -m http.server 8014
```

## Structure

- `index.html`: short introduction and project index.
- `projects/<name>/index.html`: individual project stories, including Neva and Agency.
- `open-source/index.html`: open-source index.
- `writing/index.html`: verified publication and video profiles.
- `contact/index.html`: email, LinkedIn and native HTML contact form.
- `contact/thanks/index.html`: post-submission destination.
- `style.css`: shared responsive layout and both themes.
- `script.js`: shared language and theme preferences. Russian links carry `?lang=ru` across pages. English content, links and the form work without JavaScript.

Translations live beside each other in `data-en` and `data-ru`. The font comes from Google Fonts with a local sans-serif fallback. Project diagrams describe the model or approach; they are not screenshots or measured results.

## Contact form

FormSubmit is the external email-delivery service. The destination address was confirmed by Emil; the form has been activated through the verification email. Its public endpoint identifier appears in the form action. The native POST retains FormSubmit's default spam protection. No API key is stored in the site.

Every message has the subject `[Portfolio] New message for Emil Valeev`. In Gmail, search `subject:"[Portfolio]"` to find messages; a Gmail filter can use the same subject. Delivery and inbox classification still depend on the service and email provider. Direct email and LinkedIn remain available.

## Checks

```sh
node --check script.js
python3 scripts/check_site.py
```

The static check covers internal links, assets, heading IDs, translation pairs and the form contract. Browser checks additionally cover page navigation without JavaScript, native POST and validation, mobile and desktop widths, and language/theme persistence. Intercepted form tests do not by themselves prove email delivery.

## Deployment

Every push to `master` runs `.github/workflows/pages.yml` and deploys to https://emil14.github.io/.
The workflow explicitly copies the HTML pages, shared CSS/JS and `assets/`. Interview notes and other repository files are excluded.

The former `/emil14/` project site redirects here. Website source lives in `emil14/emil14.github.io`; the `emil14/emil14` repository provides the GitHub profile README.

## Historical project notes

Penoma's 2024 label is supported by public commits and a privately supplied team-chat export: on 29 January 2024, the team was already discussing a prototype and AI editing, semantic retrieval and note-context Q&A. These discussions include plans, not proof that every listed feature had shipped. The public copy says early 2024 without claiming market priority; the private export is not published. EQT Bot's 2023 label is based on Emil's public commits, not the repository creation date. TON Syncer's relationship to EQT Bot was confirmed by Emil in this chat. The EQT Bot hackathon-final story is Emil's first-hand account; the exact event edition and an independent finalist listing have not yet been recovered. Do not attach the dates or organizers of a similarly named TON hackathon without confirming the match.

Neva mentions are paraphrased from [compilers, 23 September 2026](https://t.me/langdev/101) and [Код и Капуста, 21 February 2025](https://t.me/kodikapusta/2277). The latter was found via Emil’s [forward in the Neva chat](https://t.me/nevalang_chat/143). Preview images are copied from the respective Telegram posts; these are historical coverage, not a current feature checklist.

MoneyScript includes a self-contained archived pitch dated 30 September 2026, supplied by Emil via Birta. `projects/moneyscript/pitch/ru/` preserves its Russian content; `pitch/en/` translates the text and SVG labels. Both keep the historical hypotheses and numbers separate from the current project description. Hosting review scripts are removed; the presentation has no external runtime dependencies.
