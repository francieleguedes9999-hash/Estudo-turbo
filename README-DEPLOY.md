# Estudo Turbo — pacote PWA para Vercel + PWABuilder

## O que este pacote contém
- `index.html`: seu HTML original, com apenas a configuração pública do Supabase preenchida e a infraestrutura PWA adicionada.
- `manifest.webmanifest`: manifesto PWA.
- `sw.js`: service worker.
- `icons/icon-192.png` e `icons/icon-512.png`: ícones PWA.
- `privacy.html`: política de privacidade pública para o endereço da Vercel.
- `terms.html`: termos de uso públicos.
- `vercel.json`: configuração básica de headers.
- `PWABUILDER-CHECKLIST.md`: checklist de publicação.

## Importante
Não coloque nenhuma chave secreta de IA no HTML. Chaves de Groq, Cerebras, Gemini, Llama/Meta, VAPID privada, service_role etc. permanecem no Supabase/servidor.

## Publicação na Vercel
1. Crie um repositório GitHub e envie o conteúdo desta pasta.
2. Na Vercel, importe o repositório.
3. Framework Preset: Other.
4. Build Command: deixe vazio.
5. Output Directory: `.`
6. Deploy.
7. O site deverá abrir na raiz e os arquivos `/manifest.webmanifest`, `/sw.js`, `/privacy.html` e `/terms.html` deverão estar acessíveis.

## Depois do primeiro deploy
Atualize no Supabase Auth > URL Configuration:
- Site URL = endereço final da Vercel.
- Redirect URLs = endereço final da Vercel e, se necessário, os caminhos usados pelo login OAuth.

## Google Play / PWABuilder
O PWABuilder usa a PWA publicada na web para gerar o pacote de loja. Depois do deploy:
1. Abra a URL HTTPS pública no PWABuilder.
2. Corrija eventuais avisos do relatório.
3. Gere o pacote Android.
4. No Google Play Console, configure a ficha da loja, conteúdo do app, segurança de dados, classificação etária, público-alvo, suporte e dados de contato.
5. Para Premium/assinaturas, finalize o Google Play Billing e a verificação de compras no backend antes de vender.

## Antes de publicar
Substitua os placeholders em `privacy.html` e `terms.html` pelos dados reais do responsável e contato.
