# Estudo Turbo — Vercel v14

Pacote PWA para publicação na Vercel.

## O que mudou nesta versão

- **Cronograma:** não há mais upload/leitura de PDF por IA. O estudante cola o conteúdo programático, de qualquer tamanho dentro do limite do campo/requisição, e a IA separa **matéria → assunto → conteúdo/tópico** e monta os dias.
- **Ranking:** não envia prova para IA. O candidato informa concurso, banca, cargo, região/UF, tipo/cor da prova, número de questões, peso e nota máxima e preenche o próprio gabarito. O ranking é calculado por estatística entre participantes. Quando o gabarito oficial é publicado, todos os candidatos são recalculados.
- **Redação:** geração de temas e textos motivadores por IA. Para ENEM usa as 5 competências; para concurso considera banca, cargo, concurso e nível quando informados.
- **Estudo de caso:** geração de temas, enunciados e textos motivadores por IA; correção detalhada com erros de conteúdo, pontos fortes e ajustes.
- **Cronômetros:** cronômetro próprio para redação e estudo de caso, além do Pomodoro já existente.
- **Questões:** prompt reforçado para aproximar o estilo de ENEM e de bancas de concursos, sem copiar questões reais.
- Flashcards, resumos, caderno de erros, revisão e demais estruturas foram preservados.

## Supabase

O frontend usa o projeto Supabase já configurado no código. As chaves secretas dos provedores de IA permanecem somente nos Secrets das Edge Functions.

Edge Functions relevantes atualizadas:
- `ia-gerar-cronograma` v10
- `ia-corrigir-redacao` v4
- `ia-avaliar-caso` v4
- `ia-gerar-questoes` v8
- `ranking-concurso` v2

Tabela do ranking:
- `ranking_provas`
- `ranking_candidatos`

## Vercel

Suba o conteúdo deste ZIP como projeto estático. O `index.html` fica na raiz.

Não altere a estrutura do HTML antes do primeiro teste.
