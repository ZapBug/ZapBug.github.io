# My Homepage

[English](./README.md) | [中文](./README_zh.md)

This is my personal homepage deployed on GitHub Pages using Astro.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── assets/           # Static assets (images, icons, etc.)
│   ├── components/       # Astro components
│   ├── pages/            # Page files
│   │   └── index.astro   # Home page
│   ├── scripts/          # JavaScript scripts
│   └── styles/           # CSS stylesheets
└── package.json
```

Astro looks for page files (such as `.astro` or `.md` files) in the `src/pages/` directory. Each page is exposed as a route based on its file name. For example, `src/pages/index.astro` corresponds to the root path of the website.

`src/components/` is used for reusable Astro components.

`src/assets/` is used for static resources like images and icons.

The `public/` directory is used for static files that need to be accessed directly (e.g., favicon, robots.txt).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages. For detailed workflow configuration, please refer to the workflow file in the `.github/workflows/` directory.

## License

This project is licensed under the MIT License.

---

## Connect with Me

Let's learn and grow together.

![QR Code](qrcode.png)
