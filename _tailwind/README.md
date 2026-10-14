# Resume stylesheet

`assets/css/resume.css` is generated from this folder with Tailwind CSS v3.
GitHub Pages only serves the generated file, so rebuild it after adding or
changing Tailwind classes in `index.html` or `assets/js/command-menu.js`.
Editing `_data/resume.yml` never needs a rebuild.

```sh
cd _tailwind
npm install --no-save tailwindcss@3.4.17 tailwindcss-animate@1.0.7
npx tailwindcss -c tailwind.config.js -i input.css -o ../assets/css/resume.css --minify
```

Jekyll ignores folders that start with an underscore, so nothing here is published.
