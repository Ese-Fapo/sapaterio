# Sapaterio

Static Next.js site configured for Hostinger shared hosting.

## Local Development

```bash
npm install
npm run dev
```

## Build For Hostinger

```bash
npm run build
```

Next.js exports the production site to:

```text
out/
```

Upload the contents of `out/` to your Hostinger domain's `public_html` folder.

## Deployment Notes

- The site is exported as static files with `output: "export"`.
- Hostinger shared hosting does not need `npm start` or a running Node.js server for this project.
- Images are exported without Next.js image optimization so they work on static hosting.
- Routes use trailing slashes so pages are exported as folders with `index.html`.
