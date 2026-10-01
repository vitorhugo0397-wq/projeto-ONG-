# ONG — Inclusão Digital

Site acadêmico com navegação por âncoras, formulário HTML e exemplos de modal e toast.

## Pré-requisitos e execução
Node.js 22.12 ou superior e NPM. Na pasta do projeto:

```bash
npm install
npm run dev
```
Abra o endereço exibido no terminal. Para produção:

```bash
npm run build
npm run preview
```
A build é gerada em `dist`. Na Vercel: framework Vite, build `npm run build`, saída `dist`. A publicação depende de criar e conectar o repositório.

## Alto contraste
O botão no cabeçalho alterna a classe `alto-contraste` no body e informa seu estado com `aria-pressed`. A preferência é salva no localStorage quando disponível. O tema utiliza branco sobre preto e links amarelos; inclui títulos, campos, alertas, modal e toast. O foco de teclado é destacado.

## Limites do projeto
O formulário é demonstrativo e não possui backend. As imagens permanecem em PNG. Este pacote não certifica conformidade integral WCAG e não inclui deploy ou histórico Git. O modal original ainda exige revisão do controle de foco.
