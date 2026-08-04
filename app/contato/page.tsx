"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[calc(100vh-140px)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Fale com a gente
          </h1>
          <p className="text-lg text-muted-foreground">
            Tem dúvidas, sugestões ou encontrou um bug? Adoraríamos ouvir de você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário (UI Only) */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea 
                  placeholder="Como podemos te ajudar?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                onClick={() => alert("Formulário simulado. Para testes reais, integre com Resend ou Formspree.")}
              >
                Enviar Mensagem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Infos de Contato Direto */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Contato Direto</h3>
              <p className="text-muted-foreground mb-6">
                Se preferir, nos mande um e-mail diretamente. Nós normalmente respondemos dentro de 24 horas úteis.
              </p>
              <a 
                href="mailto:contato@kadu.pro" 
                className="inline-flex items-center text-lg font-bold text-primary hover:text-primary/80 transition-colors gap-2"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                contato@kadu.pro
              </a>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Horário de Atendimento</h3>
              <p className="text-muted-foreground">
                Segunda a Sexta-feira, das 09h às 18h (Horário de Brasília).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
