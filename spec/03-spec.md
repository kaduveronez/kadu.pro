# Especificação: Kadu Hub (kadu.pro)

> **Documento central do Hub.** Todo o plano e execução de IA para o portal partem daqui.
> O Hub é a fundação do ecossistema e o roteador de tráfego para os subdomínios (produtos).

---

## 1. Visão Geral do Escopo
O Hub `kadu.pro` é uma landing page / portal interativo construído em React/Next.js (App Router) e Tailwind CSS v4.
Seu objetivo é:
- Apresentar a marca "Kadu" (atualmente usando tipografia estilizada `font-serif`).
- Listar o portfólio de ferramentas ativas (inicialmente, o Gerador de QR Code em `qrcode.kadu.pro`).
- Ter uma interface impressionante ("premium design") com micro-interações, hover effects e suporte perfeito a Dark Mode.

### 1.1 O que o Hub NÃO faz
- O Hub **não** executa a lógica das ferramentas. Ao clicar no card do QR Code, o usuário é redirecionado para `qrcode.kadu.pro`.
- Não possui sistema próprio de autenticação complexo ainda (auth descentralizado virá em futuras iterações do ecossistema).

---

## 2. Mapeamento de Rotas
| Rota | Descrição |
|---|---|
| `/` | Home do Hub. Hero section com apresentação da suíte Kadu. Grid de produtos disponíveis com cards interativos. Seção de features globais. Footer. |

---

## 3. Componentização Visual

### 3.1 `/` (Home Hub)
- **NavbarGlobal**: Logo estilizada, links de navegação para "Produtos", "Sobre", "Contato" e toggle de Dark Mode.
- **HeroSection**: Título impactante usando a tipografia Merriweather (serif), subtítulo descritivo em Oxanium (sans), e botões de chamada para ação.
- **ProductGrid**: Uma grade (CSS Grid) apresentando os cards de produtos.
- **ProductCard**: Componente visual do produto.
  - Hover effect com micro-animação de escala.
  - Sombra fluida usando variáveis `--shadow-lg`.
  - Link de redirecionamento apontando para o respectivo subdomínio (ex: `https://qrcode.kadu.pro`).
- **Footer**: Links úteis e copyright.

---

## 4. Regras de Negócio
- Todo link que aponta para uma ferramenta do ecossistema deve usar o subdomínio correspondente e abrir corretamente (idealmente na mesma aba ou em nova aba dependendo da UX desejada).
- A interface deve responder às configurações de tema de forma nativa e através do toggle da classe `.dark`.
