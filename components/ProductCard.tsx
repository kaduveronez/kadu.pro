import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  disabled?: boolean;
}

export function ProductCard({ title, description, href, icon: Icon, badge, disabled }: ProductCardProps) {
  const content = (
    <>
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-muted rounded-lg text-primary">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="font-serif text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-primary/10 text-primary rounded-md tracking-wider">
            {badge}
          </span>
        )}
      </div>
      
      <p className="text-muted-foreground text-sm flex-grow mb-6">
        {description}
      </p>
      
      {!disabled && (
        <div className="flex items-center text-sm font-semibold text-primary mt-auto">
          Acessar Ferramenta
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </>
  );

  const baseClasses = "group relative flex flex-col p-6 rounded-xl bg-card border border-border shadow-sm overflow-hidden";
  
  if (disabled) {
    return (
      <div className={`${baseClasses} opacity-60 grayscale`}>
        {content}
      </div>
    );
  }

  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
    >
      {content}
    </Link>
  );
}
