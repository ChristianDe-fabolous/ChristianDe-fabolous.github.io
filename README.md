# Personal research website

Static site built with [Hugo](https://gohugo.io) (needs v0.146 or newer). It has no server or database, and its only JavaScript is the small dark mode toggle in `assets/js/theme.js`.

## Local preview

```sh
hugo server          # http://localhost:1313, reloads when files change
hugo --minify        # production build into public/
```

## Where things live

| What                | File                                   |
|---------------------|----------------------------------------|
| Name, links, email  | `hugo.toml` → `[params]`               |
| About / home text   | `content/_index.md`                    |
| Research intro      | `content/research/_index.md`           |
| Publications        | `data/publications.yaml`               |
| Blog posts          | `content/blog/<slug>.md`               |
| Photo, CV, PDFs     | `static/img/`, `static/files/`         |
| Styling             | `assets/css/style.css`                 |
| Security headers    | `static/_headers` (Cloudflare/Netlify) |

New post: `hugo new content blog/my-post.md`, then edit the file and set `draft: false`.

## Deploy (GitHub Pages)

1. Create a GitHub repo. Name it `<username>.github.io` for a root URL.
2. Push this folder to the `main` branch.
3. Go to repo Settings → Pages → Source: **GitHub Actions**.
4. Every push to `main` now builds and deploys the site (`.github/workflows/deploy.yml`).
