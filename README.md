# Lauren Hadley Personal Website

This repo contains Lauren Hadley’s personal website starter.

## Current status
- Name is updated to **Lauren Hadley** across the site.
- Contact details are intentionally hidden for now.
- Projects page is intentionally set to **Coming soon**.
- GitHub Pages deploy workflow is configured in `.github/workflows/deploy.yml`.

## If Actions does not show "Deploy static site to GitHub Pages"
If the workflow is missing from the Actions tab, it usually means GitHub has not seen the workflow file on the **default branch** yet.

### Do this exactly
1. Go to **Settings → Actions → General**.
2. Under **Actions permissions**, select **Allow all actions and reusable workflows**.
3. Under **Workflow permissions**, select **Read and write permissions**.
4. Click **Save**.
5. Go to the default branch (`main` or `master`) and confirm this file exists there:
   - `.github/workflows/deploy.yml`
6. If it is not on the default branch, merge/push the branch that contains it.
7. After it exists on default branch, open **Actions** again and click **All workflows** in the left sidebar.
8. You should now see **Deploy static site to GitHub Pages**.
9. Click it, then click **Run workflow**.

## 404 fix checklist (after workflow appears)
1. Open **Settings → Pages**.
2. Confirm **Source = GitHub Actions**.
3. In **Custom domain**, keep it empty (unless intentionally configured).
4. Run the workflow and wait for all green checks.
5. Hard refresh (Ctrl/Cmd + Shift + R) or test in incognito.

Expected URL:

`https://laurenhadley121-cmyk.github.io/`

## Notes
- This repo includes `index.html` in the root.
- Workflow builds a clean `_site` artifact and adds `.nojekyll` before deploy.
