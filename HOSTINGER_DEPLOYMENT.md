# Hostinger Deployment

This project is configured for Hostinger shared hosting as a static Next.js export.

## Build

Run from the project folder:

```bash
npm install
npm run build
```

The production site will be generated in:

```text
out/
```

## Upload To Hostinger

1. Open Hostinger hPanel.
2. Go to File Manager.
3. Open your domain's `public_html` folder.
4. Delete the old site files, if any.
5. Upload the contents inside `out/` into `public_html`.

Upload the contents of `out/`, not the `out` folder itself.

## Notes

- The site is static, so it does not need `npm start` on Hostinger shared hosting.
- Images are configured with `unoptimized: true` so they work without a Next.js server.
- `trailingSlash: true` is enabled so each page is exported as a folder with an `index.html`, which works well on shared hosting.
