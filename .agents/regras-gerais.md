# Regras Gerais - Kadu Hub

Estas são as regras fundamentais que todos os agentes devem seguir ao desenvolver soluções para o ecossistema Kadu (`kadu.pro`):

## 1. Diretrizes de Desenvolvimento
1. **Framework e Estilo:** Todo código gerado deve assumir o uso de React/Next.js (App Router) e Tailwind CSS v4.
2. **Uso de Cores Semânticas:** Nunca utilize cores fixas arbitrárias (ex: `bg-orange-500`). Utilize as variáveis do tema (ex: `bg-primary`, `text-muted-foreground`, `border-border`).
3. **Tipografia Correta:** Use as fontes estipuladas. Para textos gerais e botões, use `font-sans` (Oxanium). Para títulos em destaque ou editoriais, `font-serif` (Merriweather). Para dados e código, `font-mono` (Fira Code).
4. **Design Adaptativo (Dark Mode):** Todo componente criado deve ser testado ou pensado para funcionar harmoniosamente nas versões Light e Dark configuradas nas raízes do CSS. O sistema tem suporte ao Dark Mode via classe `.dark`.
5. **Estrutura de Hub:** O site em kadu.pro deve ter uma arquitetura de "Portal", com navegação global e cards que redirecionem de forma clara para as ferramentas específicas do ecossistema hospedadas em subdomínios (como `qrcode.kadu.pro`).

## 2. Infraestrutura
- **Hospedagem:** Vercel.
- **Deploy:** Automático da branch principal (Production) e em PRs/branches secundárias (Preview).
- **Roteamento:** O domínio raiz (`kadu.pro`) funciona como o hub principal. Ferramentas são hospedadas em subdomínios.
