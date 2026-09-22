# Estudo Turbo — pacote PWA corrigido

Este pacote preserva o HTML/design do Estudo Turbo e corrige a camada de integração:

- Supabase já configurado no frontend com URL e chave publishable.
- A chamada de IA aguarda a restauração da sessão antes de enviar o JWT.
- Erros de autenticação não são confundidos com indisponibilidade do provedor.
- O edital é filtrado para priorizar o conteúdo programático antes da detecção/geração do cronograma.
- O parser não transforma "Conhecimentos Básicos/Específicos" em matéria "Geral".
- Botão Voltar dentro da prova mantém a questão anterior e o tempo correspondente.
- Service worker v4 usa cache não atômico no pré-cache e rede primeiro para HTML, evitando 404 de ícones quebrar a instalação e reduzindo cache antigo.

## Publicação na Vercel

Envie o conteúdo desta pasta para o repositório GitHub conectado à Vercel.
Não envie secrets de IA ou service_role.

## Supabase

As Edge Functions continuam sendo executadas no Supabase. Este ZIP é o pacote para a Vercel/frontend.
