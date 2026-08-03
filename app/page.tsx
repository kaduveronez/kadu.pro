import { ProductCard } from "@/components/ProductCard";
import { QrCode, Link2, ImageIcon } from "lucide-react";

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
    },
    {
      title: "Calculadora Universal (Em breve)",
      description: "Calcule de tudo: espaços, tamanhos, pesos e conversores diversos.",
      href: "#",
      icon: ImageIcon,
    }
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight leading-tight md:leading-tight">
            A suíte suíça para <br className="hidden md:block" />
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

      {/* Products Grid */}
      <section id="produtos" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Soluções</h2>
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
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
