import { Globe, BarChart3, Megaphone, Users, CheckCircle2 } from 'lucide-react';

// Nova estrutura de dados dividida estritamente pelos setores da EJ
const sectors = [
  {
    id: 'projetos',
    name: 'Projetos & TI',
    icon: Globe,
    description: 'Desenvolvimento de soluções digitais e engenharia de software sob medida.',
    services: [
      {
        title: 'Desenvolvimento Web',
        description: 'Sites institucionais, landing pages e plataformas web completas para o seu negócio.',
      },
      {
        title: 'Soluções em Tecnologia',
        description: 'Automação, sistemas internos e aplicações personalizadas para otimizar resultados.',
      }
    ],
    members: [
      { name: "Ana Silva Almeida da costa serranhos", role: "Diretora de TI", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=47" },
      { name: "Bruno Costa", role: "Desenvolvedor Web", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=12" },
      { name: "Carla Mendes", role: "Analista de Dados", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=32" },
      { name: "Ana Silva", role: "Diretora de TI", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=47" },
      { name: "Bruno Costa", role: "Desenvolvedor Web", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=12" },
      { name: "Carla Mendes", role: "Analista de Dados", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=32" },
    ]
  },
  {
    id: 'comercial',
    name: 'Comercial',
    icon: BarChart3,
    description: 'Estruturação estratégica e inteligência de negócios.',
    services: [
      {
        title: 'Consultoria Empresarial',
        description: 'Diagnóstico organizacional completo, mapeamento de mercado e estratégias de vendas.',
      }
    ],
    members: [
      { name: "Diego Ramos", role: "Designer UX", link: "https://linkedin.com", avatar: "https://i.pravatar.cc/150?img=15" },
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    description: 'Posicionamento de marca e captação de clientes.',
    services: [
      {
        title: 'Marketing Digital',
        description: 'Estratégias de redes sociais, construção de identidade visual e campanhas de divulgação.',
      }
    ]
  },
  {
    id: 'gp',
    name: 'Gestão de Pessoas',
    icon: Users,
    description: 'Desenvolvimento profissional, posicionamento e preparação para o mercado.',
    services: [
      {
        title: 'Construção de Currículo Profissional',
        description: 'Elaboração de um currículo personalizado, organizado e alinhado às exigências do mercado. Inclui análise da trajetória acadêmica e profissional, destacando experiências e competências. Entrega em dois modelos: tradicional (Word) e estético (Canva/PDF).',
      },
      {
        title: 'Desenvolvimento de Perfil no LinkedIn',
        description: 'Otimização completa do perfil para aumentar a visibilidade e atrair oportunidades. Inclui análise, melhoria de seções principais, orientações sobre networking, produção de conteúdo e um texto estratégico pronto.',
      },
      {
        title: 'Entrevista Simulada',
        description: 'Simulação prática conduzida por consultores, próxima à realidade dos processos seletivos. O cliente recebe feedback personalizado sobre comunicação, postura, organização de respostas e pontos de melhoria.',
      }
    ]
  }
];

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho principal */}
        <div className="text-center mb-20">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">O que fazemos</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Nossos Setores e Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções inteligentes divididas por núcleos especializados para atender às necessidades do seu negócio ou carreira.
          </p>
        </div>

        {/* Grid Principal por Setores */}
        <div className="space-y-16">
          {sectors.map((sector) => (
            <div key={sector.id} className="bg-card p-8 md:p-10 rounded-2xl shadow-card border border-border/50">
              
              {/* Header do Setor */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border pb-6 mb-8">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground shrink-0 shadow-md">
                  <sector.icon size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-foreground">{sector.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{sector.description}</p>
                </div>
              </div>

              {/* Serviços específicos deste Setor */}
              <div className={`grid gap-6 ${sector.services.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {sector.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary/40 p-6 rounded-xl border border-border/30 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-accent">
                        <CheckCircle2 size={18} className="shrink-0" />
                        <h4 className="font-bold text-foreground text-lg leading-snug">{service.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Integrantes especificos desse setor */}
              {sector.members != null && ( 
                <div className="px-8 pb-8">
                  <hr className="border-gray-100 mb-6" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6b6b8a] mb-4">Integrantes</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {sector.members.map((m, index) =>(
                      <div
                        key={index}
                        className="flex flex-col items-center text-center gap-2.5 border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#eaeaf2]"
                        />
                        <div>
                          <p className="text-[#1a1340] font-semibold text-sm leading-tight">{m.name}</p>
                          <p className="text-[#6b6b8a] text-xs mt-0.5">{m.role}</p>
                        </div>
                        <a
                          href={m.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-[#e5433e] hover:text-[#c93934] transition-colors mt-auto"
                        >
                          <LinkedInIcon />
                          Ver perfil
                        </a>
                      </div>
                    ))}
                  </div>  
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;