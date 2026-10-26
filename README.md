# dna-digital

Static Astro website for DNA Digital.

## Local setup

Install dependencies:

```bash
npm install
```

Run the site locally:

```bash
npx astro dev
```

Build the production files:

```bash
npx astro build
```

The finished static site is generated in the `dist/` folder.

## Deploy to server / hosting

This project builds to plain static HTML, CSS, JavaScript, and image files. No Node.js server needs to run on the hosting after the build is complete.

### Shared hosting / cPanel

1. Build the site on your computer:

   ```bash
   npx astro build
   ```

2. Open the generated `dist/` folder.
3. Upload the contents inside `dist/` to the hosting public web folder, usually `public_html/`.
4. Make sure `index.html` is directly inside `public_html/`, not inside `public_html/dist/`.
5. Keep the `_astro/` folder and `images/` folder exactly as generated.

Correct upload structure:

```text
public_html/
  index.html
  about/
  privacy-policy/
  terms-and-conditions/
  cookie-preferences/
  _astro/
  images/
```

If the host already has old files, remove or replace the old deployed site files before uploading the new build.

### Vercel

Use these settings:

```text
Framework Preset: Astro
Build Command: npx astro build
Output Directory: dist
Install Command: npm install
```

The current site URL is configured in `astro.config.mjs`:

```js
site: 'https://dnadigitalconsultancy.ai'
```

If deploying to a different live domain, update that `site` value before building so social previews and canonical URLs use the correct domain.

### Netlify

Use these settings:

```text
Build Command: npx astro build
Publish Directory: dist
```

### After deployment

Check these pages on the live domain:

```text
/
/about/
/privacy-policy/
/terms-and-conditions/
/cookie-preferences/
```

If images, styles, or scripts are missing, confirm that the `_astro/` and `images/` folders were uploaded beside `index.html`.
