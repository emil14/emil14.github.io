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
