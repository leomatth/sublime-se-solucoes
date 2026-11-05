import LegalLayout from '../components/LegalLayout'
import { openCookieSettings } from '../lib/cookieConsent'

const EMAIL = 'diretoria@solucoes.sublime-se.com'

export default function Privacidade() {
  return (
    <LegalLayout
      path="/privacidade"
      title="Política de Privacidade"
      description="Como a Sublime-se Soluções trata seus dados pessoais no site, no formulário de contato e no atendimento pelo WhatsApp."
      updated="5 de novembro de 2026"
    >
      <p>
        Esta política explica quais dados pessoais a Sublime-se Soluções coleta quando você visita o site
        solucoes.sublime-se.com, preenche o formulário de contato ou fala com a gente pelo WhatsApp, por e-mail
        ou pelo Instagram, e o que fazemos com eles. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei
        13.709/2018) no Brasil e o Regulamento Geral sobre a Proteção de Dados (RGPD) em Portugal e na União Europeia.
      </p>

      <h2>1. Quem é o responsável</h2>
      <p>
        O responsável (controlador) pelos dados é a <strong>Sublime-se Soluções</strong>, que atende clientes no Brasil
        e em Portugal. Para qualquer assunto sobre privacidade, incluindo falar com o encarregado de proteção de dados,
        escreva para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <ul>
        <li><strong>Formulário de contato:</strong> nome, e-mail, nome da empresa (opcional) e a descrição do projeto que você escrever.</li>
        <li><strong>Conversas:</strong> o que você nos enviar por WhatsApp, e-mail ou Instagram, com o número de telefone ou o perfil de onde a mensagem veio.</li>
        <li><strong>Propostas e contratos:</strong> dados de faturamento e de contato necessários para orçar, contratar e entregar o serviço.</li>
        <li><strong>Navegação (só se você aceitar):</strong> páginas visitadas, origem da visita, tipo de dispositivo e navegador, cidade ou país aproximados e um identificador do navegador, coletados pelo Google Analytics.</li>
      </ul>
      <p>Não pedimos dados sensíveis e não vendemos dados pessoais.</p>

      <h2>3. Para que usamos e com que base legal</h2>
      <ul>
        <li><strong>Responder ao seu pedido e preparar uma proposta:</strong> diligências pré-contratuais a seu pedido.</li>
        <li><strong>Executar o serviço contratado</strong> (sites, landing pages, automações e manutenção): execução de contrato.</li>
        <li><strong>Emitir documentos fiscais e cumprir obrigações legais:</strong> cumprimento de obrigação legal.</li>
        <li><strong>Medir o uso do site para melhorá-lo:</strong> seu consentimento, que pode ser retirado a qualquer momento.</li>
        <li><strong>Segurança do site e prevenção de abusos:</strong> legítimo interesse.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        O site só usa cookies de análise (Google Analytics: <code>_ga</code> e <code>_ga_*</code>, guardados por até 2 anos)
        se você clicar em <strong>Aceitar</strong> no aviso de cookies. Se recusar, nenhum script de análise é carregado.
        Guardamos apenas sua escolha no próprio navegador, para não perguntar de novo. Não usamos cookies de publicidade.
      </p>
      <p>
        <button type="button" className="legal-link-button" onClick={openCookieSettings}>Alterar minha escolha de cookies</button>
      </p>

      <h2>5. Com quem compartilhamos</h2>
      <p>Usamos fornecedores que tratam dados em nosso nome, apenas para as finalidades acima:</p>
      <ul>
        <li><strong>EmailJS</strong>: envio das mensagens do formulário para nosso e-mail.</li>
        <li><strong>Meta</strong> (WhatsApp e Instagram): conversas que você inicia nesses canais.</li>
        <li><strong>Google</strong>: e-mail e, com seu consentimento, Google Analytics.</li>
        <li><strong>Hostinger</strong>: hospedagem do site.</li>
      </ul>
      <p>
        Alguns destes fornecedores tratam dados fora do Brasil e do Espaço Econômico Europeu, sobretudo nos Estados Unidos.
        Nesses casos a transferência apoia-se nas garantias previstas na LGPD e no RGPD, como cláusulas contratuais-padrão
        ou decisões de adequação. Também podemos compartilhar dados quando a lei ou uma autoridade o exigir.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <ul>
        <li>Contatos que não viram contrato: até 2 anos depois da última conversa.</li>
        <li>Dados de clientes: durante o contrato e, depois, pelo prazo exigido pela lei fiscal e contábil (até 10 anos em Portugal e 5 anos no Brasil).</li>
        <li>Dados do Google Analytics: até 14 meses.</li>
      </ul>

      <h2>7. Os seus direitos</h2>
      <p>
        Você pode pedir a qualquer momento: confirmação de que tratamos seus dados, acesso, correção, exclusão,
        portabilidade, limitação ou oposição ao tratamento, e retirar o consentimento dado. Escreva para{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>; respondemos em até 15 dias.
      </p>
      <p>
        Se achar que seus dados não foram bem tratados, pode reclamar à ANPD (Autoridade Nacional de Proteção de Dados,
        no Brasil) ou à CNPD (Comissão Nacional de Proteção de Dados, em Portugal).
      </p>

      <h2>8. Segurança</h2>
      <p>
        O site usa conexão criptografada (HTTPS) e só a equipe da Sublime-se tem acesso às mensagens recebidas. Nenhum sistema
        é infalível; se houver um incidente que o afete, avisamos você e as autoridades nos prazos da lei.
      </p>

      <h2>9. Menores</h2>
      <p>Nossos serviços destinam-se a empresas e profissionais. Não coletamos intencionalmente dados de menores de 18 anos.</p>

      <h2>10. Alterações</h2>
      <p>
        Podemos atualizar esta política quando mudarmos a forma como tratamos dados. A data no topo indica a versão em vigor;
        mudanças importantes serão destacadas no site.
      </p>
    </LegalLayout>
  )
}
