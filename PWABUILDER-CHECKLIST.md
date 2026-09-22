# Checklist — Estudo Turbo / PWABuilder / Google Play

## PWA
- [x] HTTPS via hospedagem Vercel
- [x] manifest.webmanifest
- [x] start_url
- [x] scope
- [x] display standalone
- [x] ícone 192x192
- [x] ícone 512x512
- [x] service worker
- [x] página de privacidade pública
- [x] termos públicos

## Supabase
- [x] Projeto Supabase configurado
- [x] Edge Functions publicadas
- [x] JWT obrigatório nas funções
- [x] Chaves de IA mantidas fora do HTML
- [ ] Configurar URL final da Vercel no Supabase Auth
- [ ] Testar login real no domínio publicado
- [ ] Gerar/configurar VAPID para notificações, se o lembrete push for ativado

## Google Play
- [ ] Criar conta Google Play Console
- [ ] Criar aplicativo Estudo Turbo
- [ ] Definir nome, descrição, categoria e contato
- [ ] Preencher Data Safety com base nos dados realmente coletados
- [ ] Definir público-alvo e classificação de conteúdo
- [ ] Publicar URL da política de privacidade
- [ ] Preparar screenshots e ícone da loja
- [ ] Configurar e-mail/site de suporte
- [ ] Se houver assinatura Premium: criar produto no Play Console e preencher `playSku`
- [ ] Implementar e validar a verificação de compra no backend antes de cobrar usuários

## Atenção legal
A política de privacidade precisa refletir exatamente os dados e fornecedores usados no lançamento. Os arquivos fornecidos aqui são uma base técnica e não substituem revisão jurídica.
