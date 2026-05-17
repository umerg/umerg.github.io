# umerg.github.io

Personal academic website for Umer Gupta — geometric deep learning research, PhD applications, project notes.

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Local development

```bash
docker compose pull && docker compose up
# → http://localhost:8080
```

Stop and free the port:

```bash
docker compose down
```

Rebuild after changing dependencies:

```bash
docker compose up --build
```

## Pre-commit

```bash
npx prettier . --write
```

Then verify in a browser before pushing.

## Deploy

Push to `main`; GitHub Actions builds and publishes to `gh-pages`.
