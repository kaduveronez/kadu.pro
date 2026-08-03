# Projeto e Contexto - Kadu

**Visão Geral do Projeto**
- **Nome da Marca:** Kadu
- **Domínio Principal:** kadu.pro
- **Nicho:** Desenvolvimento de soluções gerais de tecnologia e ferramentas utilitárias.
- **Arquitetura de Produtos:** Ecossistema baseado em um site principal (hub/portfólio de soluções) no domínio raiz (kadu.pro), com ferramentas específicas hospedadas em subdomínios.
- **Primeiro Produto Integrado:** Gerador de QR Code (disponível em qrcode.kadu.pro).

**Infraestrutura e Deploy**
- **Plataforma de Hospedagem:** Vercel.
- **Ambientes:** 
  - Production: Deploy automático da branch principal (main/master) no domínio oficial.
  - Preview: Deploys automáticos em Pull Requests/branches secundárias.
- **Estratégia de Roteamento:** Configuração de subdomínios (Wildcard ou individuais) apontando para os respectivos projetos/apps na Vercel.

**Identidade Visual e Design System**
- **Logo:** Temporariamente utilizar tipografia estilizada com o nome "Kadu".
- **Design System:** Utiliza Tailwind CSS (v4) com Design System próprio e suporte a Dark Mode via classe `.dark`.

**Tipografia**
- **Sans-serif (Padrão/UI):** Oxanium, sans-serif
- **Serif (Títulos/Destaques textuais):** Merriweather, serif
- **Monospace (Código/Dados técnicos):** Fira Code, monospace

**Estilos Globais e Variáveis de Tema**
- **Formas e Profundidade:** Cantos levemente arredondados (`radius: 0.3rem`) e sistema de sombras para profundidade.
- **Cores Principais:**
  - Background Light: #fdfbf7 | Background Dark: #1c1917
  - Primary Light: #b45309 | Primary Dark: #f97316
  - Secondary Light: #e4c090 | Secondary Dark: #57534e
  - Destructive Light: #991b1b | Destructive Dark: #dc2626

**Diretrizes para Agentes de IA (AI Prompts & Regras de Geração)**
1. **Framework e Estilo:** Todo código gerado deve assumir o uso de React/Next.js (ou framework definido pelo usuário) e Tailwind CSS v4.
2. **Uso de Cores Semânticas:** Nunca utilize cores fixas arbitrárias (ex: `bg-orange-500`). Utilize as variáveis do tema (ex: `bg-primary`, `text-muted-foreground`, `border-border`).
3. **Tipografia Correta:** Use as fontes estipuladas. Para textos gerais e botões, use `font-sans`. Para títulos em destaque ou editoriais, `font-serif`. Para dados e código, `font-mono`.
4. **Design Adaptativo (Dark Mode):** Todo componente criado deve ser testado ou pensado para funcionar harmoniosamente nas versões Light e Dark configuradas nas raízes do CSS.
5. **Estrutura de Hub:** O site em kadu.pro deve ter uma arquitetura de "Portal", com navegação e cards que redirecionem de forma clara para as ferramentas do ecossistema (como qrcode.kadu.pro).

**CSS Padrão de Referência**
```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: #fdfbf7;
  --foreground: #4a3b33;
  --card: #f8f4ee;
  --card-foreground: #4a3b33;
  --popover: #f8f4ee;
  --popover-foreground: #4a3b33;
  --primary: #b45309;
  --primary-foreground: #ffffff;
  --secondary: #e4c090;
  --secondary-foreground: #57534e;
  --muted: #f1e9da;
  --muted-foreground: #78716c;
  --accent: #f2daba;
  --accent-foreground: #57534e;
  --destructive: #991b1b;
  --destructive-foreground: #ffffff;
  --border: #e4d9bc;
  --input: #e4d9bc;
  --ring: #b45309;
  --chart-1: #b45309;
  --chart-2: #78716c;
  --chart-3: #a16207;
  --chart-4: #78716c;
  --chart-5: #ca8a04;
  --sidebar: #f1e9da;
  --sidebar-foreground: #4a3b33;
  --sidebar-primary: #b45309;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #a16207;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #e4d9bc;
  --sidebar-ring: #b45309;
  --font-sans: Oxanium, sans-serif;
  --font-serif: Merriweather, serif;
  --font-mono: Fira Code, monospace;
  --radius: 0.3rem;
  --shadow-x: 0px;
  --shadow-y: 2px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.18;
  --shadow-color: hsl(28 18% 25%);
  --shadow-2xs: 0px 2px 3px 0px hsl(28 18% 25% / 0.09);
  --shadow-xs: 0px 2px 3px 0px hsl(28 18% 25% / 0.09);
  --shadow-sm: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 1px 2px -1px hsl(28 18% 25% / 0.18);
  --shadow: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 1px 2px -1px hsl(28 18% 25% / 0.18);
  --shadow-md: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 2px 4px -1px hsl(28 18% 25% / 0.18);
  --shadow-lg: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 4px 6px -1px hsl(28 18% 25% / 0.18);
  --shadow-xl: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 8px 10px -1px hsl(28 18% 25% / 0.18);
  --shadow-2xl: 0px 2px 3px 0px hsl(28 18% 25% / 0.45);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: #1c1917;
  --foreground: #f5f5f4;
  --card: #292524;
  --card-foreground: #f5f5f4;
  --popover: #292524;
  --popover-foreground: #f5f5f4;
  --primary: #f97316;
  --primary-foreground: #ffffff;
  --secondary: #57534e;
  --secondary-foreground: #e7e5e4;
  --muted: #201d1a;
  --muted-foreground: #a8a29e;
  --accent: #1e4252;
  --accent-foreground: #e7e5e4;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --border: #44403c;
  --input: #44403c;
  --ring: #f97316;
  --chart-1: #f97316;
  --chart-2: #0ea5e9;
  --chart-3: #eab308;
  --chart-4: #a8a29e;
  --chart-5: #78716c;
  --sidebar: #292524;
  --sidebar-foreground: #f5f5f4;
  --sidebar-primary: #f97316;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #0ea5e9;
  --sidebar-accent-foreground: #0c2a4d;
  --sidebar-border: #44403c;
  --sidebar-ring: #f97316;
  --shadow-color: hsl(0 0% 5%);
  --shadow-2xs: 0px 2px 3px 0px hsl(0 0% 5% / 0.09);
  --shadow-xs: 0px 2px 3px 0px hsl(0 0% 5% / 0.09);
  --shadow-sm: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 1px 2px -1px hsl(0 0% 5% / 0.18);
  --shadow: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 1px 2px -1px hsl(0 0% 5% / 0.18);
  --shadow-md: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 2px 4px -1px hsl(0 0% 5% / 0.18);
  --shadow-lg: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 4px 6px -1px hsl(0 0% 5% / 0.18);
  --shadow-xl: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 8px 10px -1px hsl(0 0% 5% / 0.18);
  --shadow-2xl: 0px 2px 3px 0px hsl(0 0% 5% / 0.45);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  
  /* Fontes e Radius */
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);
  
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  /* Sombras */
  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground antialiased;
  }
}
```
