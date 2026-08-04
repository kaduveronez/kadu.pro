import { ProductCard } from "@/components/ProductCard";
import { QrCode, Link2, ImageIcon, Zap, Shield, Layers, ArrowRight } from "lucide-react";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function Home() {
  const products = [
    {
      title: "QR Code",
      description: "Crie, gerencie e acompanhe QR Codes dinâmicos com análise avançada.",
      href: "https://qrcode.kadu.pro",
      icon: QrCode,
      badge: "Lançamento",
    },
    {
      title: "Geração de Links (Em breve)",
      description: "Encurtador de links, geração de links para WhatsApp e outras ferramentas.",
      href: "#",
      icon: Link2,
      disabled: true,
    },
    {
      title: "Calculadora Universal (Em breve)",
      description: "Calcule de tudo: espaços, tamanhos, pesos e conversores diversos.",
      href: "#",
      icon: ImageIcon,
      disabled: true,
    }
  ];

  const features = [
    {
      title: "Ultra Rápido",
      description: "Ferramentas otimizadas para carregar instantaneamente, sem atrasos.",
      icon: Zap,
    },
    {
      title: "Focado em Privacidade",
      description: "Não vendemos seus dados. Operamos com transparência e segurança.",
      icon: Shield,
    },
    {
      title: "Design Unificado",
      description: "Uma única identidade visual fluida e coesa por todo o ecossistema.",
      icon: Layers,
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <KineticGrid>
        <section className="relative pt-24 pb-32 overflow-hidden bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight leading-tight md:leading-tight">
              O ecossistema definitivo para <br className="hidden md:block" />
              <span className="text-primary">criadores e devs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
              Utilitários web rápidos, elegantes e diretos ao ponto. Descubra nossas ferramentas
              projetadas para economizar seu tempo com um design impecável.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="#produtos" 
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                Explorar Soluções
              </a>
            </div>
          </div>
        </section>
      </KineticGrid>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Feito para quem não tem tempo a perder
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A KADU nasceu da necessidade de ter ferramentas utilitárias que simplesmente funcionem, sem anúncios invasivos ou interfaces poluídas. Nós unificamos as melhores soluções em um ecossistema projetado com paixão pela estética e obsessão por performance.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Nossas Soluções</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Selecione uma das ferramentas abaixo para ser redirecionado à plataforma correspondente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                title={product.title}
                description={product.description}
                href={product.href}
                icon={product.icon}
                badge={product.badge}
                disabled={product.disabled}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Por que usar o Ecossistema KADU?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Pronto para otimizar seu fluxo de trabalho?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Comece usando nosso Gerador de QR Code agora mesmo e sinta a diferença de uma ferramenta pensada em cada detalhe.
          </p>
          <a 
            href="https://qrcode.kadu.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-background text-foreground font-bold hover:bg-muted transition-colors shadow-lg group"
          >
            Acessar QR Code
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
