# Estudo Turbo — pacote final Vercel / PWABuilder

## Estrutura
- index.html — aplicativo completo
- manifest.webmanifest — manifesto PWA
- sw.js — Service Worker
- icons/icon-192.png — ícone PWA
- icons/icon-512.png — ícone PWA
- terms.html — Termos de Uso
- privacy.html — Política de Privacidade
- vercel.json — ajustes de cache para PWA

## Vercel
Suba esta pasta como projeto estático. O `index.html` deve permanecer na raiz.

## Supabase
O frontend já aponta para o projeto Supabase do Estudo Turbo. A chave usada no frontend é uma chave pública; chaves secretas de provedores de IA devem permanecer nos Secrets das Edge Functions.

## PWABuilder
Depois do deploy, informe a URL pública da Vercel no PWABuilder. O manifesto, Service Worker e ícones estão na raiz/caminhos esperados.

## Antes da publicação na Google Play
Revise os dados de contato reais em `privacy.html` e `terms.html`, a declaração de segurança de dados, anúncios e demais informações exigidas pela Play Console.
