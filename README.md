# My Personal Portfolio

Live site: https://mr-hecker147.github.io/My-Personal-Portfolio/

> A personal portfolio for showcasing projects, skills, and contact information.

About
-----
A minimal, responsive single-page portfolio built with plain HTML, CSS, and JavaScript. It presents projects, skills, education, and a contact form in a clean, mobile-friendly layout.

Repository details
------------------
- Repository: `Mr-HECKER147/My-Personal-Portfolio`
- Description: Personal portfolio website for Uddhav Joshi

Quick features
--------------
- Modern dark card layout with bright accent colors
- Collapsible sections for Skills, Projects, and About Me
- Social links for GitHub, Instagram, and LinkedIn
- Contact section with working static-site email submission support
- Fully static: no JavaScript frameworks required
- Ready for GitHub Pages or any static host

File structure
--------------
- `index.html` — main page markup
- `style.css` — styling and responsive layout
- `script.js` — contact form behavior and fallback email handling
- `assets/` — images or supporting files

Run locally
-----------
1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-HECKER147/My-Personal-Portfolio.git
   cd My-Personal-Portfolio
   ```
2. Open `index.html` directly in a browser, or serve the folder locally:
   ```bash
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000/`

Deploy
------
- GitHub Pages:
  1. Push the project to the `main` branch.
  2. Go to the repository settings → Pages.
  3. Select the `main` branch and the root folder.
  4. Visit the live site at `https://mr-hecker147.github.io/My-Personal-Portfolio/`

Contact form
------------
The contact form is designed for static hosting. It attempts to send the message via FormSubmit and falls back to opening the user's email client with a pre-filled message if the form service is unavailable.

Customization
-------------
- Update the name, tagline, and about content in `index.html`.
- Replace or expand project cards with your work.
- Update social URLs with your real profiles.
- Adjust the color palette and spacing in `style.css`.

Accessibility & design notes
----------------------------
- Verify color contrast for text and interactive controls.
- Ensure collapsible sections remain keyboard accessible.
- Add reduced-motion preferences if you expand the animations.

Contributing
------------
Contributions and suggestions are welcome.
1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Describe your changes"`
4. Push and open a pull request.

License
-------
No license is included yet. If you want to publish this project under an open-source license, add one such as MIT or Apache 2.0.

Security & privacy
------------------
- Avoid committing sensitive contact data you do not want to expose publicly.
- The contact form should be used with a configured email service or mail fallback only.

Questions or help
-----------------
If you want help customizing the layout, adding new sections, or improving deployment, let me know.

