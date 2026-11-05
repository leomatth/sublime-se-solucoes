import { Link } from 'react-router-dom'
import LegalLayout from '../components/LegalLayout'

const EMAIL = 'diretoria@solucoes.sublime-se.com'

export default function Termos() {
  return (
    <LegalLayout
      path="/termos"
      title="Termos de Serviço"
      description="Condições de uso do site da Sublime-se Soluções e regras gerais para orçamentos, contratação, pagamento e entrega dos serviços."
      updated="5 de novembro de 2026"
    >
      <p>
        Estes termos regulam o uso do site solucoes.sublime-se.com e as condições gerais dos serviços da
        Sublime-se Soluções: criação de sites e landing pages, automações, dashboards, SEO, QA e manutenção.
        Cada projeto tem também uma proposta própria; se a proposta disser algo diferente, vale a proposta.
      </p>

      <h2>1. Uso do site</h2>
      <p>
        O site é informativo. Você pode navegar, pedir orçamento e falar com a gente. Não é permitido usar o site para
        enviar conteúdo ilegal, tentar acessar áreas restritas, sobrecarregar o servidor ou copiar o conteúdo para fins comerciais.
      </p>

      <h2>2. Preços e orçamentos</h2>
      <ul>
        <li>Os valores no site estão em reais (R$) e valem para clientes no Brasil e em Portugal.</li>
        <li>Preços de pacotes (como a Landing Page em 48h e o Plano Fundador) são os valores em vigor na data da contratação; promoções têm prazo e condições indicados na própria página.</li>
        <li>Serviços sem preço publicado são orçados depois de um diagnóstico gratuito.</li>
        <li>O orçamento só vira contrato quando você aprova a proposta por escrito (e-mail ou WhatsApp contam).</li>
      </ul>

      <h2>3. Pagamento</h2>
      <p>
        O pagamento é feito por Pix ou MB WAY, nas datas da proposta. Nos planos mensais e anuais, a mensalidade ou
        anuidade é paga antecipadamente. Atrasos podem suspender a hospedagem ou a manutenção até a regularização,
        com aviso prévio.
      </p>

      <h2>4. Prazos e entrega</h2>
      <ul>
        <li>Os prazos contam a partir do pagamento inicial e do envio de todo o material pedido (textos, fotos, logotipo, acessos).</li>
        <li>Atrasos no envio do material ou nas aprovações adiam a entrega na mesma medida.</li>
        <li>Cada etapa inclui as rodadas de ajustes indicadas na proposta; pedidos fora do escopo são orçados à parte.</li>
      </ul>

      <h2>5. Responsabilidades do cliente</h2>
      <p>
        Você garante que tem o direito de usar os textos, imagens, marcas e dados que nos envia, e que o conteúdo do seu
        site cumpre a lei. Também é responsável pelas informações que publica sobre seus produtos, preços e serviços.
      </p>

      <h2>6. Propriedade intelectual</h2>
      <ul>
        <li>Depois do pagamento integral, o site entregue e o seu conteúdo são do cliente, exceto componentes de terceiros, que seguem as licenças próprias.</li>
        <li>Ferramentas, código reutilizável e métodos internos da Sublime-se continuam nossos; você recebe licença de uso para o seu projeto.</li>
        <li>Podemos mostrar o projeto no nosso portfólio, salvo se você pedir o contrário por escrito.</li>
        <li>O conteúdo deste site (textos, layout, marca) pertence à Sublime-se Soluções.</li>
      </ul>

      <h2>7. Hospedagem, domínio e manutenção</h2>
      <p>
        Quando a hospedagem ou o domínio ficam a nosso cargo, mantemos o site no ar com o cuidado devido, mas dependemos
        de fornecedores (hospedagem, registro de domínio). Interrupções por falha desses fornecedores, manutenção programada
        ou força maior não geram indenização, mas trabalhamos para resolver o mais rápido possível. As alterações mensais
        incluídas não acumulam de um mês para o outro.
      </p>

      <h2>8. Cancelamento</h2>
      <p>
        Planos mensais podem ser cancelados com 30 dias de aviso. No cancelamento, entregamos os arquivos do site e
        ajudamos a transferir o domínio. Valores de etapas já executadas não são devolvidos. Seus direitos como
        consumidor, quando aplicáveis, continuam garantidos.
      </p>

      <h2>9. Limitação de responsabilidade</h2>
      <p>
        Trabalhamos para que cada projeto traga resultado, mas não garantimos números de vendas, posição no Google ou
        volume de contatos, que dependem de fatores fora do nosso controle. Nossa responsabilidade por um projeto fica
        limitada ao valor pago por ele, exceto em caso de dolo ou culpa grave.
      </p>

      <h2>10. Privacidade</h2>
      <p>
        O tratamento de dados pessoais está descrito na <Link to="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>11. Lei aplicável</h2>
      <p>
        Estes termos seguem a lei brasileira para clientes no Brasil e a lei portuguesa para clientes em Portugal.
        Consumidores podem sempre recorrer ao foro do seu domicílio e às órgãos de defesa do consumidor e de resolução de conflitos do seu país.
      </p>

      <h2>12. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou WhatsApp +351 937 700 520.
      </p>
    </LegalLayout>
  )
}
