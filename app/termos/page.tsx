export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <h1>Termos de Uso</h1>
        <p className="lead text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e utilizar as ferramentas do ecossistema KADU (kadu.pro e seus subdomínios associados), 
          você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer 
          parte destes termos, não deve utilizar nossos serviços.
        </p>

        <h2>2. Descrição do Serviço</h2>
        <p>
          A KADU fornece um conjunto de utilitários web para criadores e desenvolvedores, incluindo mas não se limitando a 
          geração de QR Codes, gerenciamento de links e ferramentas de cálculo. O serviço é fornecido "no estado em que se encontra", 
          podendo sofrer alterações, atualizações ou descontinuidade sem aviso prévio.
        </p>

        <h2>3. Uso Aceitável</h2>
        <p>
          Você concorda em utilizar nossos serviços de forma responsável e legal. É estritamente proibido o uso das ferramentas da KADU para:
        </p>
        <ul>
          <li>Criar ou disseminar conteúdo malicioso (malware, phishing, spam).</li>
          <li>Violar direitos de propriedade intelectual de terceiros.</li>
          <li>Realizar atividades fraudulentas ou ilegais sob qualquer jurisdição aplicável.</li>
          <li>Tentar sobrecarregar, atacar ou explorar vulnerabilidades em nossa infraestrutura.</li>
        </ul>

        <h2>4. Propriedade Intelectual</h2>
        <p>
          A interface, design, tipografia, logotipo e código fonte original (quando não especificado como open-source) do ecossistema 
          KADU são de propriedade exclusiva da KADU. O uso das nossas ferramentas não lhe concede direitos de propriedade sobre o nosso software.
        </p>

        <h2>5. Limitação de Responsabilidade</h2>
        <p>
          A KADU se esforça para manter a máxima disponibilidade e segurança de seus serviços. No entanto, não garantimos 
          que a plataforma será ininterrupta ou livre de erros. Em nenhuma hipótese a KADU será responsabilizada por 
          quaisquer danos diretos, indiretos, perdas de dados ou lucros cessantes decorrentes do uso ou da incapacidade 
          de uso das nossas ferramentas.
        </p>

        <h2>6. Encerramento de Acesso</h2>
        <p>
          Reservamo-nos o direito de bloquear, suspender ou encerrar o acesso aos nossos serviços para qualquer usuário ou endereço IP 
          que viole estes Termos de Uso ou represente risco à segurança da nossa infraestrutura, sem aviso prévio.
        </p>

        <h2>7. Contato e Suporte</h2>
        <p>
          Dúvidas sobre estes Termos de Uso devem ser enviadas através da nossa <a href="/contato">página de contato</a>.
        </p>
      </div>
    </div>
  );
}
