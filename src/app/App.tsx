import { Calendar, Clock, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import ganokLogo from '../imports/Знімок_екрана_2026-04-17_191411-removebg-preview.png';
import avatarImage from '../imports/5409157340042303203-photoaidcom-cropped.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Main container */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left column - Text content */}
        <div className="flex flex-col justify-between p-8 lg:p-12 xl:p-16 relative z-10">
          {/* Top section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-primary flex-1 max-w-[60px]" />
              <span
                className="uppercase tracking-[0.2em]"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: 'var(--foreground)',
                  letterSpacing: '0.2em'
                }}
              >
                МАЙСТЕР-КЛАС ДЛЯ ЖІНОК
              </span>
              <div className="h-px bg-primary flex-1 max-w-[60px]" />
            </div>

            {/* Title with heart */}
            <div className="relative">
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4rem, 11vw, 7.5rem)',
                  lineHeight: '0.9',
                  color: 'var(--primary)',
                  fontWeight: '300',
                  letterSpacing: '0.15em'
                }}
              >
                ДІВОЧІ
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <h2
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: 'clamp(3.5rem, 9vw, 6rem)',
                    color: 'var(--primary)',
                    fontWeight: '400'
                  }}
                >
                  секрети
                </h2>
                <span style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>♡</span>
              </div>

            </div>

            {/* Date, time and location */}
            <div className="flex flex-wrap gap-4">
              <div
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--foreground)'
                }}
              >
                <Calendar size={18} />
                <span>ЧЕТВЕР 23.04</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--foreground)'
                }}
              >
                <Clock size={18} />
                <span>18:30</span>
              </div>
            </div>

            {/* Location */}
            <div
              className="flex items-start gap-3 max-w-md"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--foreground)',
                fontWeight: '300'
              }}
            >
              <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--primary)' }} />
              <div>
                <span style={{ fontWeight: '500' }}>Місце:</span> Ресторан ГАНОК<br />
                вулиця Шевченка, 4, Мамаївці
              </div>
            </div>

            {/* Main text */}
            <div className="space-y-6 max-w-md">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: '1.7',
                  color: 'var(--foreground)',
                  fontWeight: '300'
                }}
              >
                Ми всі обираємо, яку роль грати, але інколи ми не можемо вийти з них і втрачаємо власну перспективу.
              </p>

              {/* Box with questions */}
              <div
                className="border border-primary/50 rounded-lg px-5 py-4 inline-block"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: 'var(--primary)',
                  fontWeight: '400'
                }}
              >
                <div>Мамою чи бізнесвумен?</div>
                <div>Жінкою чи дружиною?</div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: '1.7',
                  color: 'var(--foreground)',
                  fontWeight: '300'
                }}
              >
                Я запрошую вас на вечір Дівочих секретів, де познайомимося з власним задзеркаллям і звільнемо свою силу.
              </p>

              <p
                className="flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '2.5rem',
                  color: 'var(--foreground)',
                  lineHeight: '1.3'
                }}
              >
                Досить себе ховати від світу ♡
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-primary/20">
                <img
                  src={avatarImage}
                  alt="Юлія Сторожевська"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--foreground)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Юлія Сторожевська
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      lineHeight: '1.5',
                      color: 'var(--muted-foreground)',
                      fontWeight: '300'
                    }}
                  >
                    психотерапевт, гештальт-терапевт,<br />
                    тренер, супервізор
                  </p>
                </div>
              </div>

              <p
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  color: 'var(--foreground)',
                  fontWeight: '300',
                  fontStyle: 'italic'
                }}
              >
                Працює в інтегративному підході, експерт із психології стосунків з фокусом на особистісну глибину
              </p>

              {/* Register button */}
              <div className="mt-4">
                
                  <div
                    className="relative overflow-hidden px-8 py-4 border-2 transition-all duration-300 hover:bg-primary hover:border-primary"
                    style={{
                      borderColor: 'var(--primary)',
                      borderRadius: '8px'
                    }}
                  >
                    <span
                      className="relative z-10 transition-colors duration-300 group-hover:text-background"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--foreground)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Все розкуплено
                    </span>
                  </div>
               
                <p
                  className="mt-3"
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.6rem',
                    color: 'var(--primary)',
                    fontWeight: '400'
                  }}
                >
                  Кількість місць обмежена
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section - Logo */}
          <div className="flex items-end justify-end mt-12">
            <div className="w-28">
              <img
                src={ganokLogo}
                alt="Ganok"
                className="w-full h-auto opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="relative hidden lg:block">
          {/* Curved text above image */}
          <div className="absolute top-8 left-0 right-0 z-20 flex flex-col items-center px-8 gap-1">
            <svg width="600" height="80" viewBox="0 0 600 80" preserveAspectRatio="xMidYMid meet">
              <defs>
                <path id="curve1" d="M 50,70 Q 300,10 550,70" fill="transparent" />
              </defs>
              <text style={{
                fill: 'var(--foreground)',
                fontFamily: 'var(--font-script)',
                fontSize: '1.8rem',
                letterSpacing: '0.02em'
              }}>
                <textPath href="#curve1" startOffset="50%" textAnchor="middle">
                  Познайомся з власним задзеркаллям
                </textPath>
              </text>
            </svg>
            <svg width="600" height="80" viewBox="0 0 600 80" preserveAspectRatio="xMidYMid meet">
              <defs>
                <path id="curve2" d="M 50,70 Q 300,10 550,70" fill="transparent" />
              </defs>
              <text style={{
                fill: 'var(--foreground)',
                fontFamily: 'var(--font-script)',
                fontSize: '1.8rem',
                letterSpacing: '0.02em'
              }}>
                <textPath href="#curve2" startOffset="50%" textAnchor="middle">
                  і звільни свою силу ♡
                </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1687128425898-447578e8f936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Дівочі секрети"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to left, transparent 30%, rgba(10, 10, 10, 0.9) 100%)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10 pointer-events-none">
        <div
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
}
