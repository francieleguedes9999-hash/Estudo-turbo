# Estudo Turbo — checklist PWA Builder

## Corrigido nesta versão
- Manifest com `name`, `short_name`, `description`, `id`, `start_url`, `scope` e `orientation`.
- Ícones reais PNG em 192x192 e 512x512, com `type: image/png`.
- Service worker `sw.js` incluído e registrado pelo `index.html`.
- `theme_color`, `background_color`, `display` e categoria de educação definidos.

## Ainda opcional no PWA Builder
- Screenshots reais do aplicativo para a vitrine/instalação.
- Categorias e metadados adicionais sugeridos pelo PWA Builder.

## Publicação
Envie o conteúdo desta pasta para a raiz do projeto Vercel, mantendo `manifest.webmanifest`, `sw.js` e a pasta `icons/` no mesmo nível do `index.html`.

- Screenshots adicionadas ao manifest.webmanifest em `screenshots/`.
