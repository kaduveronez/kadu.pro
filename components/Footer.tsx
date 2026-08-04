import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-primary tracking-wide">KADU</span>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
          <Link href="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <Link href="/contato" className="hover:text-primary transition-colors">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
