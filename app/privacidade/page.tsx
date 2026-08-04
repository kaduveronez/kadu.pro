import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Política de Privacidade do ecossistema KADU. Entenda como tratamos e protegemos seus dados.",
};

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <h1>Política de Privacidade</h1>
        <p className="lead text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        
        <h2>1. Introdução</h2>
        <p>
          A privacidade dos nossos usuários é de extrema importância para a KADU. Esta Política de Privacidade descreve 
          quais informações coletamos, como as utilizamos e quais são as suas opções em relação aos seus dados ao utilizar 
          o ecossistema de ferramentas KADU.
        </p>

        <h2>2. Coleta de Informações</h2>
        <p>
          O ecossistema KADU foi projetado para ser o mais anônimo possível. Nós não exigimos criação de conta para a maioria das nossas 
          ferramentas. Coletamos apenas as informações estritamente necessárias para o funcionamento dos serviços, como:
        </p>
        <ul>
          <li><strong>Dados de uso técnico:</strong> Endereço IP (apenas para prevenção de abusos e segurança), tipo de navegador e estatísticas básicas de acesso.</li>
          <li><strong>Dados inseridos nas ferramentas:</strong> As informações que você ativamente submete para gerar URLs, QR Codes ou realizar cálculos. Essas informações são processadas mas não vendidas.</li>
        </ul>

        <h2>3. Uso das Informações</h2>
        <p>
          Os dados coletados são usados exclusivamente para:
        </p>
        <ul>
          <li>Garantir o funcionamento correto e a segurança da plataforma.</li>
          <li>Fornecer estatísticas (analytics) nos produtos que exigem acompanhamento, como QR Codes dinâmicos e Links Encurtados.</li>
          <li>Melhorar continuamente a interface e performance de nossos aplicativos.</li>
        </ul>

        <h2>4. Compartilhamento de Dados</h2>
        <p>
          <strong>Nós não vendemos, alugamos ou comercializamos seus dados pessoais para terceiros.</strong> Podemos compartilhar 
          informações genéricas e agregadas não vinculadas a informações de identificação pessoal com parceiros de infraestrutura 
          (como provedores de hospedagem) apenas para fins operacionais.
        </p>

        <h2>5. Cookies e Tecnologias de Rastreamento</h2>
        <p>
          A KADU utiliza cookies mínimos, estritamente para manter preferências de interface (como sua escolha entre o modo Claro e Escuro) 
          e garantir a segurança das requisições. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a 
          experiência na plataforma.
        </p>

        <h2>6. Seus Direitos</h2>
        <p>
          Você tem o direito de solicitar a exclusão de qualquer dado vinculado a você (caso possua uma conta em futuras atualizações 
          do ecossistema) entrando em contato através da nossa <a href="/contato">página de contato</a>.
        </p>

        <h2>7. Alterações nesta Política</h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise 
          esta página para se manter informado sobre como estamos protegendo suas informações.
        </p>
      </div>
    </div>
  );
}
