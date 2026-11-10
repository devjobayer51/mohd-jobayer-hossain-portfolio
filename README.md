# Mohd. Jobayer Hossain — Portfolio

A responsive, single-page personal portfolio with a deep navy, electric-blue, and cyan visual theme. Built with semantic HTML, CSS, and vanilla JavaScript; ready to publish with GitHub Pages.

## Project structure

```text
jobayer-portfolio/
├── index.html
├── style.css
├── script.js
├── 404.html
├── README.md
├── .nojekyll
└── assets/
    ├── favicon.svg
    └── images/
        └── jobayer-hossain.png
```

## Run locally

No build tools or package installation are needed. Open `index.html` in a browser, or run a simple local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Sign in to GitHub as `devjobayer51`.
2. Create a new repository. For a personal site at `https://devjobayer51.github.io`, name it **`devjobayer51.github.io`**. For a project site, choose another repository name; its URL will include that name.
3. Upload the contents of this folder to the repository's root. Keep `index.html`, `style.css`, `script.js`, `.nojekyll`, and `404.html` at the root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then click **Save**.
7. Wait for the Pages deployment to finish. GitHub will show the published URL in **Settings → Pages**.

## Updating the site

Edit `index.html` for content and project cards, `style.css` for design, and `script.js` for interactions. Replace `assets/images/jobayer-hossain.png` to update the portrait. Commit and push the changes (or upload the changed files in GitHub); Pages will publish the update automatically.

## Add real portfolio projects

In `index.html`, find the `#project-grid` section. Each `.project-card` is an editable example placeholder. Replace its preview artwork with a real screenshot, update its category, title, description, technology tags, and add real live/source links only when you have them. Do not present the current placeholders as completed client work.

## Contact form behavior

The contact form uses a mailto link. It validates the required fields and opens the visitor's configured email app with the message addressed to `devjobayer51@gmail.com`. The visitor must press Send in that app. The site does not store or transmit form submissions. For a hosted form that submits without the visitor's email app, connect a form service (for example Formspree) and add its real endpoint.

## CV button

The CV link opens an email addressed to Jobayer requesting a copy of his CV. No CV file was supplied, so this project does not include or pretend to provide one.

## Before launch

- Add actual project screenshots and URLs.
- Add a CV file and change the CV link if you want a direct download.
- If you connect a hosted form provider, update the form code and privacy wording.
- Add a canonical URL after the final GitHub Pages URL is known.
- Test the site on your target phones and browsers.
