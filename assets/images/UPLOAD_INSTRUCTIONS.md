# Uploading Photos Separately

This repository intentionally excludes image binaries so code-review/patch tools that do not support binary files can still process the PR.

## Required files
Upload the following files into `assets/images/` with **exactly** these names:

1. `lauren-hero.jpg`
2. `lauren-portrait.jpg`
3. `lauren-lamp.jpg`
4. `mountain-landscape.jpg`
5. `iceberg-arch.jpg`
6. `iceberg-birds.jpg`

The HTML already references these paths in:
- `about.html`
- `inspiration.html`

## How to upload

### Option A: GitHub web UI
1. Open the repo on GitHub.
2. Navigate to `assets/images/`.
3. Click **Add file** → **Upload files**.
4. Drag in the six image files listed above.
5. Commit directly to your branch (or open a follow-up PR for image assets).

### Option B: Terminal / Git
From repo root:

```bash
cp /path/to/your/lauren-hero.jpg assets/images/lauren-hero.jpg
cp /path/to/your/lauren-portrait.jpg assets/images/lauren-portrait.jpg
cp /path/to/your/lauren-lamp.jpg assets/images/lauren-lamp.jpg
cp /path/to/your/mountain-landscape.jpg assets/images/mountain-landscape.jpg
cp /path/to/your/iceberg-arch.jpg assets/images/iceberg-arch.jpg
cp /path/to/your/iceberg-birds.jpg assets/images/iceberg-birds.jpg

git add assets/images/*.jpg
git commit -m "Add site image assets"
git push
```

## Notes
- Keep file extensions as `.jpg`.
- Keep names lowercase and hyphenated exactly as shown.
- If names differ, images will not load until `src` paths are updated.
