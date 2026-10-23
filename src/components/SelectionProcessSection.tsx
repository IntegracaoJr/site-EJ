
interface Edital{
  "semestre": string,
  "descricao": string,
  "link": string,
  "status": string
  "tipo": string
}

const editais:Edital[] = [
  {
    "semestre": "2026/1",
    "descricao": "Consulte o edital do processo seletivo anterior da EJ PUC Minas Barreiro.",
    "link": "https://drive.google.com/file/d/12-SCCpQ9NzM__BGsQnpJx7jw2UBGzyPA/view?usp=sharing",
    "status": "fechado",
    "tipo" : "edital"
  },
  {
    "semestre": "2026/2",
    "descricao": "Confira o edital, os requisitos e todas as informações para participar do processo seletivo da EJ PUC Minas Barreiro.",
    "link": "https://drive.google.com/file/d/12-SCCpQ9NzM__BGsQnpJx7jw2UBGzyPA/view?usp=sharing",
    "status": "fechado",
    "tipo" : "edital"
  },
  {
    "semestre": "2026/2",
    "descricao": "Processo simplificado. Acesse o formulário de inscrição e candita-se na EJ da PUC Minas Barreiro",
    "link": "https://forms.gle/LjRK6TJDmmahsAj68",
    "status": "aberto",
    "tipo" : "formulario"
  }

]

function SelectionProcessSection(){


  return (
    <section
      id="faca-parte"
      className="py-24 bg-[#f7f8fa] relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
            Faça parte da nossa Empresa Júnior
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quer desenvolver seus conhecimentos, participar de projetos reais
            e fazer parte da EJP PUC Minas Barreiro? Confira nossos editais.
          </p>
        </div>

        {/* Editais */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">


          {
            (editais ?? []).map((edital:Edital) =>{
              return(
                <div className="bg-background border border-border rounded-2xl p-8 shadow-sm flex flex-col">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-5">
                      {edital.status}
                    </span>

                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Processo Seletivo {edital.semestre}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {edital.descricao}
                    </p>
                  </div>

                  {/* Botão alinhado com os demais */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-8">
                    <a
                      href={edital.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-cta flex-1 px-6 py-3 rounded-xl text-accent-foreground font-bold text-center hover:opacity-90 transition-opacity"
                    >
                      Ver {edital.tipo}
                    </a>

                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  );
};

export default SelectionProcessSection;
