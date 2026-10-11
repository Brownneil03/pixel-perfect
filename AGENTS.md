<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## RK's Print architecture
- Contact details and WhatsApp link builders live only in src/config/site.ts — one place to change contact info.
- Catalogue, photo lab and pack content live in src/data/catalog.ts as typed data — ready to be swapped for an admin-managed backend later.
- UI copy is French (primary locale); keep content in data objects so English/Arabic can be added later.
