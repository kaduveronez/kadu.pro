# Design System Reference - Kadu Hub

Este documento estende as variáveis globais de CSS, especificando os tokens de UI usados no Tailwind v4.

## Variáveis (Tailwind v4 theme inline)
As seguintes variáveis estão disponíveis globalmente através da injeção do `@theme inline`:

**Cores:**
- `bg-background`: Fundo principal.
- `text-foreground`: Texto principal.
- `bg-primary`, `text-primary-foreground`: Ação principal (ex: Laranja escuro no light, Vibrante no dark).
- `bg-secondary`, `text-secondary-foreground`: Elementos secundários.
- `bg-card`, `text-card-foreground`: Fundos de cards e superfícies elevadas.

**Tipografia:**
- `font-sans`: Fonte padrão para textos da UI (Oxanium).
- `font-serif`: Fonte para Destaques e Títulos Grandes (Merriweather).
- `font-mono`: Código ou informações técnicas (Fira Code).

**Sombras e Borda:**
- Radius segue `--radius` (0.3rem) e seus multiplicadores.
- Sombras seguem uma hierarquia suave (`shadow-sm`, `shadow`, `shadow-lg`) que devem reagir adequadamente ao Dark Mode mantendo profundidade, mas mudando a cor base da sombra (`--shadow-color`).
