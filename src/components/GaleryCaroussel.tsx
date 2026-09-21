import { useState } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Reunião semanal de alinhamento entre os times de projetos e gestão.',
    date: '12 Mar 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Membros revisando entregáveis do cliente antes da apresentação final.',
    date: '28 Mar 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Confraternização após o fechamento de mais um projeto de sucesso.',
    date: '05 Abr 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Workshop interno de capacitação em metodologias ágeis.',
    date: '19 Abr 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Sprint de design com o time de novos projetos estratégicos.',
    date: '02 Mai 2025',
  },
]

export default function GaleryCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <div className=" flex items-center justify-center" style={{ background: '#f5f5f7' }}>
        <section className="w-full max-w-5xl mx-auto px-3.5 py-12">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Galeria</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Nossa Rotina
          </h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#1a1535' }}>
            {/* Image */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            {slides.map((s, i) => (
                <img
                key={i}
                src={s.image}
                alt={s.description}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: i === current ? 1 : 0 }}
                />
            ))}
            {/* dark overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,21,53,0.85) 0%, transparent 50%)' }} />
            </div>

            {/* Info bar */}
            <div className="px-6 py-5 flex items-end justify-between gap-4">
            <div className="flex-1 min-w-0">
                <p className="text-white text-base font-medium leading-snug">{slide.description}</p>
                <p className="mt-1 text-sm font-semibold" style={{ color: '#d94040' }}>{slide.date}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 shrink-0">
                <button
                onClick={prev}
                aria-label="Anterior"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                </button>
                <button
                onClick={next}
                aria-label="Próximo"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: '#d94040' }}
                >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
                </button>
            </div>
            </div>

            
        </div>
        </section>
    </div>
  )
}