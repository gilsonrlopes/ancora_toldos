export default function Home() {
  const whatsapp = `https://wa.me/5541999372194?text=${encodeURIComponent(
    "Olá Gilson! Analisei a proposta da Âncora Toldos e quero conversar sobre os próximos passos."
  )}`;

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <span className="rounded-full border px-4 py-2 text-sm font-medium">
            Projeto de Posicionamento Digital
          </span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Daniel, sua empresa já entrega grandes projetos.
            <br />
            Agora ela precisa ser encontrada por mais clientes.
          </h1>
          <p className="mt-8 max-w-3xl text-xl text-zinc-600">
            Projeto desenvolvido para fortalecer a presença digital da{" "}
            <strong>Âncora Toldos</strong>, gerar mais oportunidades através do
            Google e expandir sua autoridade em Colombo, Curitiba e Região
            Metropolitana.
          </p>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-4xl font-bold">
            Diagnóstico da presença digital atual
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Site sem estratégia SEO estruturada",
              "Dependência excessiva de indicações",
              "Baixa presença nas buscas regionais",
              "Pouca autoridade digital percebida",
              "Concorrentes capturando pesquisas locais",
              "Potencial de crescimento não explorado",
            ].map((item) => (
              <div key={item} className="rounded-2xl border p-6">
                ❌ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE É SEO PRAGMÁTICO — PARA LEIGO */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/60">
            Entenda o que vamos fazer
          </span>
          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            O que é SEO Local — explicado sem complicação.
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-zinc-300">
            SEO é a sigla para "Search Engine Optimization" — em português,
            otimização para mecanismos de busca. Na prática, significa{" "}
            <strong className="text-white">
              fazer o Google entender o que sua empresa faz e onde ela atende
            </strong>
            , para que ela apareça quando alguém pesquisar.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Como funciona na prática</h3>
              <p className="text-zinc-400 leading-relaxed">
                Quando alguém em Colombo pega o celular e pesquisa{" "}
                <em>"toldos em Colombo"</em> ou{" "}
                <em>"cobertura de policarbonato perto de mim"</em>, o Google
                mostra as empresas que ele considera mais relevantes para
                aquela busca. Com SEO bem feito, a Âncora aparece entre as
                primeiras.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Por que "local"?</h3>
              <p className="text-zinc-400 leading-relaxed">
                SEO local significa que vamos criar páginas específicas para
                cada cidade que a Âncora atende. Uma página para Colombo,
                uma para São José dos Pinhais, uma para Pinhais... Cada
                página fala diretamente com quem está naquela cidade,
                aumentando muito a chance de aparecer na busca certa.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Por que é diferente de anúncio?</h3>
              <p className="text-zinc-400 leading-relaxed">
                No Google Ads você paga toda vez que alguém clica. Quando você
                para de pagar, some. Com SEO, você aparece de graça — o Google
                te mostra porque reconhece sua autoridade. O resultado demora
                um pouco mais para vir, mas{" "}
                <strong className="text-white">
                  continua gerando clientes mesmo sem pagar nada todo mês.
                </strong>
              </p>
            </div>
          </div>

          {/* Exemplo visual */}
          <div className="mt-12 rounded-2xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-xl font-bold mb-6 text-white">
              Um exemplo real de como vai funcionar:
            </h3>
            <div className="space-y-4">
              {[
                {
                  passo: "1",
                  desc: "Moradora de São José dos Pinhais quer colocar toldo na área gourmet",
                  detalhe: "Ela pega o celular e digita: \"toldo retrátil São José dos Pinhais\"",
                },
                {
                  passo: "2",
                  desc: "O Google mostra as empresas mais relevantes para aquela busca",
                  detalhe: "Com o SEO certo, a Âncora aparece entre as primeiras opções",
                },
                {
                  passo: "3",
                  desc: "Ela clica no site da Âncora, vê os projetos realizados e entra em contato",
                  detalhe: "Sem você gastar um centavo em anúncio — o Google fez o trabalho",
                },
              ].map((p) => (
                <div key={p.passo} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-sm font-bold">
                    {p.passo}
                  </div>
                  <div>
                    <p className="text-white font-medium">{p.desc}</p>
                    <p className="text-zinc-400 text-sm mt-1">{p.detalhe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-4xl font-bold">
            Todos os dias existem clientes procurando por:
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Toldos em Colombo",
              "Toldos em Curitiba",
              "Cobertura em Policarbonato",
              "Cobertura Retrátil",
              "Pergolados",
              "Fechamento de Ambientes",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm font-medium">
                🔎 {item}
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-zinc-600">
            Quando a Âncora não aparece nas primeiras posições, esses clientes
            acabam encontrando outra empresa. Cada busca sem resposta é um
            orçamento que vai para o concorrente.
          </p>
        </div>
      </section>

      {/* ATIVO DIGITAL */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="text-5xl font-bold">
            Um site não é um custo.
            <br />
            É um ativo da empresa.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-600">
            Um vendedor trabalha 8 horas por dia.
            <br />
            Um site trabalha 24 horas por dia.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              { icone: "🌙", label: "Nunca tira férias" },
              { icone: "💬", label: "Recebe contatos enquanto você dorme" },
              { icone: "🏆", label: "Fortalece a marca diariamente" },
              { icone: "📲", label: "Gera orçamentos continuamente" },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border p-6">
                <div className="text-3xl mb-3">{b.icone}</div>
                <p className="font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS DETALHADOS */}
      <section className="bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-4xl font-bold mb-4">
            O que muda na prática para a Âncora Toldos
          </h2>
          <p className="text-zinc-600 text-lg mb-12 max-w-3xl">
            Não é só sobre aparecer no Google. É sobre o que acontece com o
            negócio quando as pessoas certas te encontram no momento certo.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icone: "📱",
                titulo: "Clientes te encontram pelo celular",
                desc: "A maioria das buscas hoje vem do celular. O novo site vai ser construído pensando primeiro no mobile — rápido, bonito e fácil de navegar na tela pequena.",
              },
              {
                icone: "🗺️",
                titulo: "Aparece no Google Maps",
                desc: "Com o Google Meu Negócio otimizado, a Âncora aparece no mapa quando alguém busca toldos perto de casa. Isso gera ligações diretas, sem nem precisar entrar no site.",
              },
              {
                icone: "🏙️",
                titulo: "Presença em toda a Região Metropolitana",
                desc: "Com páginas específicas para cada cidade — Colombo, SJP, Pinhais, Araucária, Campo Largo e mais — a Âncora aparece para quem pesquisa em qualquer cidade da RMC.",
              },
              {
                icone: "📸",
                titulo: "Galeria de projetos que convence",
                desc: "Seus trabalhos realizados viram prova de qualidade. Quem chega no site vê exemplos reais antes de pedir orçamento — chega mais confiante e mais pronto para fechar.",
              },
              {
                icone: "⚡",
                titulo: "Site ultrarrápido — nota 95+ no Google",
                desc: "Site lento afasta clientes e prejudica o ranqueamento. O novo site vai ser construído em Next.js, a tecnologia mais moderna do mercado, garantindo carregamento em menos de 2 segundos.",
              },
              {
                icone: "📊",
                titulo: "Você sabe de onde vêm seus clientes",
                desc: "Com Google Analytics e Search Console configurados, você acompanha quantas pessoas acessaram o site, de qual cidade vieram, o que pesquisaram e quais páginas visitaram.",
              },
            ].map((b) => (
              <div key={b.titulo} className="bg-white rounded-2xl border p-8">
                <div className="text-3xl mb-4">{b.icone}</div>
                <h3 className="text-xl font-bold mb-3">{b.titulo}</h3>
                <p className="text-zinc-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-5xl font-bold">Proposta Comercial</h2>
          <p className="text-center text-zinc-600 mt-4 text-lg max-w-2xl mx-auto">
            Dois caminhos para posicionar a Âncora no Google. Escolha o que faz
            mais sentido para o momento da empresa.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Plano 1 */}
            <div className="rounded-3xl border bg-white p-10">
              <h3 className="text-3xl font-bold">Presença Local</h3>
              <p className="mt-3 text-zinc-600">
                Foco em Colombo. Ideal para começar com presença sólida na
                cidade principal antes de expandir.
              </p>
              <div className="mt-8 text-5xl font-bold">R$ 2.500</div>
              <p className="text-zinc-500 text-sm mt-1">
                50% para iniciar · 50% na entrega
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Novo site profissional em Next.js",
                  "Design moderno e mobile first",
                  "SEO Local otimizado para Colombo",
                  "Google Meu Negócio configurado",
                  "Estrutura otimizada para o Google",
                  "Formulário de orçamento",
                  "Botão WhatsApp direto",
                  "Performance 95+ no PageSpeed",
                  "Entrega em 15 dias úteis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block w-full text-center rounded-2xl border-2 border-zinc-900 py-4 font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all"
              >
                Quero este plano →
              </a>
            </div>

            {/* Plano 2 */}
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-900 p-10 text-white">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-900">
                ⭐ MAIS RECOMENDADO
              </span>
              <h3 className="mt-6 text-3xl font-bold">Expansão Regional</h3>
              <p className="mt-3 text-zinc-300">
                Colombo + Curitiba + toda a Região Metropolitana. A Âncora
                aparece onde o cliente pesquisar.
              </p>
              <div className="mt-8 text-5xl font-bold">R$ 3.500</div>
              <p className="text-zinc-400 text-sm mt-1">
                50% para iniciar · 50% na entrega
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Tudo do Plano Presença Local",
                  "SEO para Curitiba e 7 cidades da RMC",
                  "Páginas dedicadas por cidade",
                  "Páginas por tipo de serviço",
                  "Google Analytics configurado",
                  "Google Search Console configurado",
                  "Estrutura de autoridade regional",
                  "90 dias de acompanhamento SEO",
                  "Relatório mensal de desempenho",
                  "Suporte técnico incluso",
                  "Entrega em 15 dias úteis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white/10 p-5 text-zinc-300 text-sm leading-relaxed">
                🎁 <strong className="text-white">Bônus:</strong> 3 meses de
                acompanhamento SEO inclusos no plano. Após esse período,
                continuidade opcional por R$ 250/mês.
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center rounded-2xl bg-white py-4 font-bold text-zinc-900 hover:bg-zinc-100 transition-all"
              >
                Quero este plano →
              </a>
            </div>
          </div>

          {/* Condições */}
          <div className="mt-10 rounded-2xl bg-zinc-50 border border-zinc-200 p-6 flex flex-wrap gap-6 justify-center text-center">
            {[
              { icone: "📅", label: "Prazo de entrega", valor: "15 dias úteis" },
              { icone: "💳", label: "Pagamento", valor: "50% início · 50% entrega" },
              { icone: "⚡", label: "PIX ou Cartão", valor: "Parcelado" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{c.icone}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{c.label}</span>
                <span className="font-bold text-zinc-900">{c.valor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-5xl font-bold">
            O objetivo não é criar apenas um site.
          </h2>
          <p className="mt-8 text-xl text-zinc-600">
            O objetivo é construir um ativo digital que fortaleça a marca
            Âncora Toldos, gere autoridade e aumente a geração de oportunidades
            através do Google.
          </p>
          <div className="mt-12 rounded-3xl bg-zinc-900 p-10 text-white">
            <h3 className="text-3xl font-bold">
              Uma única obra pode pagar o investimento.
            </h3>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Considerando que projetos de cobertura e toldos costumam variar
              entre R$ 5.000 e R$ 20.000 ou mais, uma única oportunidade
              convertida pelo Google já recupera o valor investido — e o site
              continua trabalhando por anos.
            </p>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-zinc-900 text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
          >
            Falar com Gilson no WhatsApp →
          </a>
          <p className="mt-5 text-zinc-400 text-sm">
            GR Sites · contato@grsites.com.br · (41) 99937-2194
          </p>
        </div>
      </section>

    </main>
  );
}