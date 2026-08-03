# Arquitetura e Engenharia - Kadu Hub

## Tech Stack
- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Componentes UI:** Construídos do zero baseados em nosso próprio Design System (sem Radix/Shadcn necessários inicialmente, a menos que complexidade demande).
- **Hospedagem & Deploy:** Vercel

## Padrões de Código
- **Componentização:** Manter componentes pequenos e focados. Pastas por feature (`src/components/`, `src/features/`).
- **Client vs Server:** Priorizar Server Components para performance e SEO. Utilizar `"use client"` estritamente onde houver interatividade e hooks (`useState`, `useEffect`).

## Roteamento de Subdomínios
- Os links externos para ferramentas do portfólio (`qrcode.kadu.pro`) devem ser explícitos e usar as âncoras corretas (`<a>` tag) com `target="_blank"` quando for desejável manter a landing page aberta, ou redirecionamento direto, garantindo continuidade do fluxo de navegação.
