# Estudo Turbo — checklist PWA Builder

## Causa da rejeição anterior no PWA Builder
O `manifest.webmanifest` e o `sw.js` referenciam os ícones em `icons/icon-192.png`
e `icons/icon-512.png`, e o manifest referencia 4 screenshots em
`/screenshots/*.png`. Nos pacotes anteriores esses arquivos estavam soltos na
raiz, sem as pastas `icons/` e `screenshots/`, então ao publicar o PWA Builder
recebia 404 ao buscar esses caminhos e recusava o manifest.

Este ZIP já vem com a estrutura de pastas corrigida — nenhum código, design ou
conteúdo do app foi alterado, só a organização dos arquivos estáticos.

## Estrutura correta (raiz do projeto Vercel)
```
/index.html
/manifest.webmanifest
/sw.js
/vercel.json
/privacy.html
/terms.html
/icons/icon-192.png
/icons/icon-512.png
/screenshots/home-dashboard.png
/screenshots/ferramentas.png
/screenshots/ferramentas-2.png
/screenshots/login.png
```

## Já corrigido nesta versão
- Manifest com `name`, `short_name`, `description`, `id`, `start_url`, `scope` e `orientation`.
- Ícones reais PNG em 192x192 e 512x512, com `type: image/png`, agora dentro de `icons/`.
- As 4 screenshots (689x1536) agora dentro de `screenshots/`, nos mesmos nomes e tamanhos declarados no manifest.
- Service worker `sw.js` incluído e registrado pelo `index.html`.
- `theme_color`, `background_color`, `display` e categoria de educação definidos.

## Ainda opcional no PWA Builder
- Um ícone adicional com `purpose: maskable` separado do `any` (hoje os dois ícones usam só `purpose: any`) — não bloqueia a instalação, é só uma sugestão para melhorar a nota no "Report Card".
- Categorias e metadados adicionais sugeridos pelo PWA Builder.

## Publicação na Vercel
1. Suba o conteúdo desta pasta inteira como projeto estático — o `index.html` fica na raiz.
2. Confirme que as pastas `icons/` e `screenshots/` foram enviadas junto (não apague nem achate a estrutura).
3. Depois do deploy, teste diretamente pelo navegador se `https://SEU-DOMINIO/icons/icon-512.png` e `https://SEU-DOMINIO/screenshots/login.png` abrem a imagem — se derem 404, a Vercel não recebeu as pastas.
4. Só então rode o PWA Builder apontando para a URL publicada.
