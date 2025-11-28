import { useState, useEffect, useRef } from 'react'
import './App.css'

// Import project images
import acoomhApp1 from './assets/acoomhapp/2e158a17-714d-4295-9273-8b490c4b2fa0.jpg'
import acoomhApp2 from './assets/acoomhapp/473a4781-b8e2-4480-80f1-59643e5188c6.jpg'
import acoomhApp3 from './assets/acoomhapp/5cc4a25c-8e36-4f48-b036-935714d36162.jpg'
import acoomhApp4 from './assets/acoomhapp/c49a3521-25fc-4e8f-8b70-2605dc6756f2.jpg'
import acoomhWeb1 from './assets/acoomhweb/74b2c2dd-d871-4c67-81e5-22be3d7988df.jpg'
import acoomhWeb2 from './assets/acoomhweb/aeb30e68-323f-4305-ac30-0e5102dec8e4.jpg'
import danfostApp1 from './assets/danfostanxiosapp/1000000027.png'
import danfostApp2 from './assets/danfostanxiosapp/1000000028.png'
import danfostApp3 from './assets/danfostanxiosapp/1000000029.png'
import danfostApp4 from './assets/danfostanxiosapp/1000000034.png'
import danfostApp5 from './assets/danfostanxiosapp/1000000035.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: '📱',
      title: 'Dezvoltare Aplicații Mobile',
      description: 'Aplicații native și cross-platform pentru iOS și Android pe care utilizatorii le adoră.',
    },
    {
      icon: '🌐',
      title: 'Dezvoltare Aplicații Web',
      description: 'Aplicații web moderne, rapide și scalabile construite cu tehnologii de ultimă generație.',
    },
    {
      icon: '⚙️',
      title: 'Backend & API',
      description: 'Arhitecturi server robuste și API-uri care alimentează aplicațiile tale.',
    },
    {
      icon: '🎨',
      title: 'Design UI/UX',
      description: 'Interfețe frumoase și intuitive care încântă utilizatorii și cresc engagement-ul.',
    },
    {
      icon: '🤖',
      title: 'Funcționalități AI',
      description: 'Integrează capabilități AI inteligente pentru a face aplicația ta adaptivă.',
    },
    {
      icon: '🚀',
      title: 'Lansare & Suport',
      description: 'De la deployment la mentenanță, ne asigurăm că aplicația ta prosperă.',
    },
  ]

  const projects = [
    {
      name: 'ACOOMH Aplicație Mobilă',
      description: 'O aplicație mobilă completă pentru descoperirea orasului tau cu o experiență de utilizare intuitivă.',
      images: [acoomhApp1, acoomhApp2, acoomhApp3, acoomhApp4],
      tags: ['Mobile', 'Sănătate', 'React Native'],
    },
    {
      name: 'ACOOMH Platformă Web',
      description: 'Platformă web modernă cu design responsive și interacțiuni fluide.',
      images: [acoomhWeb1, acoomhWeb2],
      tags: ['Web App', 'Dashboard', 'React'],
    },
    {
      name: 'Danfost Anxios App',
      description: 'Aplicație mobilă cu funcționalități avansate, interfață frumoasă și performanță excelentă.',
      images: [danfostApp1, danfostApp2, danfostApp3, danfostApp4, danfostApp5],
      tags: ['Mobile', 'Enterprise', 'iOS/Android'],
    },
  ]

  const features = [
    {
      icon: '⚡',
      title: 'Livrare Rapidă',
      description: 'Lucrăm eficient pentru a-ți aduce ideile la viață rapid, fără a compromite calitatea.',
    },
    {
      icon: '💻',
      title: 'Cod Curat',
      description: 'Cod bine structurat și ușor de întreținut, care scalează odată cu afacerea ta.',
    },
    {
      icon: '✨',
      title: 'Design Modern',
      description: 'Estetică contemporană care face aplicația ta să iasă în evidență pe piață.',
    },
    {
      icon: '💰',
      title: 'Prețuri Transparente',
      description: 'Fără costuri ascunse. Oferte clare și comunicare onestă pe tot parcursul.',
    },
    {
      icon: '🤝',
      title: 'Colaborare Prietenoasă',
      description: 'Lucrăm ca parteneri, implicându-te la fiecare pas al procesului.',
    },
    {
      icon: '🛡️',
      title: 'Asigurarea Calității',
      description: 'Testare riguroasă pentru a ne asigura că aplicația ta funcționează impecabil.',
    },
  ]

  const testimonials = [
    {
      name: 'Dan Olteanu',
      role: 'Fondator Dan fost Anxios aplicație pentru anxietate',
      text: `Cezar a fost developerul aplicației mele despre anxietate și pot spune sincer că a fost o colaborare foarte prietenoasă. Mi-a plăcut mult cât de repede înțelegea ce aveam nevoie și cât de rapid îmi răspundea de fiecare dată. Mi-a dat impresia că, indiferent ce provocare apărea, găsea imediat o soluție, de parcă nimic nu îl putea opri.
              Am simțit mereu că lucrez cu cineva foarte sigur pe el, care știe ce face și este deschis să găsească cea mai bună variantă pentru proiect. A fost implicat, atent la detalii și dispus să facă lucrurile să iasă cât mai bine.
              Pe scurt, cu Cezar am simțit că sunt pe mâini bune. Îl recomand cu încredere oricui își dorește un developer serios, capabil și ușor de lucrat cu el. Și chiar îl consider mai mult decât un developer care a lucrat la aplicația mea, îl consider un prieten.`,
      rating: 5,
    },
    {
      name: 'Alexandru Ionescu',
      role: 'Fondator, HealthTech Solutions',
      text: 'Colaborarea cu AppLaunch a fost o plăcere. Au înțeles cerințele noastre complexe și au livrat o platformă robustă la timp. Echipa a fost mereu disponibilă și a comunicat transparent pe tot parcursul proiectului.',
      rating: 5,
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Product Manager, InnovateCo',
      text: 'Atenția la detalii și calitatea designului au depășit așteptările noastre. Utilizatorii adoră noua interfață! Recomand cu căldură pentru orice proiect de dezvoltare.',
      rating: 5,
    },
  ]



  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${!isScrolled ? 'navbar-dark' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">AppLaunch<span className="logo-accent">.ro</span></span>
          </a>
          
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicii</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portofoliu</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>De Ce Noi</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimoniale</a>
            <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Începe Acum</a>
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt="Colaborare echipă" 
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">✨ Partenerul Tău Digital de Încredere</div>
          <h1 className="hero-title">
            Construiește-ți Aplicația.<br />
            <span className="gradient-text">Lansează-ți Viziunea.</span>
          </h1>
          <p className="hero-subtitle">
            Suntem un studio digital prietenos și modern care transformă ideile tale în aplicații 
            mobile frumoase, aplicații web performante și soluții software personalizate.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Începe Proiectul
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Solicită Ofertă Gratuită
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proiecte Livrate</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clienți Mulțumiți</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Ani Experiență</span>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll">
          <span>Descoperă mai mult</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Ce Facem</span>
            <h2 className="section-title">Servicii Care Aduc Succes</h2>
            <p className="section-subtitle">
              De la concept la lansare, oferim servicii complete de dezvoltare 
              pentru a-ți aduce viziunea digitală la viață.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#contact" className="service-link">
                  Află mai mult <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Lucrările Noastre</span>
            <h2 className="section-title">Proiecte Realizate</h2>
            <p className="section-subtitle">
              Aruncă o privire asupra unora dintre lucrările noastre recente. Fiecare proiect 
              reprezintă angajamentul nostru față de calitate și inovație.
            </p>
          </div>
          
          <div className="portfolio-slider-container">
            <button 
              className="slider-btn slider-prev" 
              onClick={() => setActiveProject(prev => prev === 0 ? projects.length - 1 : prev - 1)}
              aria-label="Proiect anterior"
            >
              ←
            </button>
            
            <div className="portfolio-slider" ref={sliderRef}>
              <div className="portfolio-slide">
                <div className="portfolio-slide-content">
                  <div className="portfolio-slide-info">
                    <h3 className="portfolio-project-name">{projects[activeProject].name}</h3>
                    <p className="portfolio-project-description">{projects[activeProject].description}</p>
                    <div className="portfolio-tags">
                      {projects[activeProject].tags.map((tag, index) => (
                        <span key={index} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                    <a href="#contact" className="btn btn-primary">
                      Începe un Proiect Similar
                    </a>
                  </div>
                  
                  <div className="portfolio-slide-gallery">
                    <div className="gallery-main">
                      <img 
                        src={projects[activeProject].images[currentSlide]} 
                        alt={`${projects[activeProject].name} captura ${currentSlide + 1}`} 
                      />
                    </div>
                    <div className="gallery-thumbnails">
                      {projects[activeProject].images.map((image, index) => (
                        <button
                          key={index}
                          className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
                          onClick={() => setCurrentSlide(index)}
                        >
                          <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="slider-btn slider-next" 
              onClick={() => {
                setActiveProject(prev => prev === projects.length - 1 ? 0 : prev + 1)
                setCurrentSlide(0)
              }}
              aria-label="Proiect următor"
            >
              →
            </button>
          </div>
          
          <div className="portfolio-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`portfolio-dot ${activeProject === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveProject(index)
                  setCurrentSlide(0)
                }}
                aria-label={`Mergi la proiectul ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <span className="section-badge">De Ce Noi</span>
              <h2 className="section-title">Suntem Mai Mult Decât Dezvoltatori</h2>
              <p className="section-subtitle">
                Suntem partenerii tăi în transformarea digitală. Iată ce face 
                colaborarea cu AppLaunch diferită.
              </p>
              
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="why-us-images">
              <div className="image-stack">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" 
                  alt="Team working on project"
                  className="stack-image img-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" 
                  alt="Developer coding"
                  className="stack-image img-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                  alt="App interface design"
                  className="stack-image img-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimoniale</span>
            <h2 className="section-title">Ce Spun Clienții Noștri</h2>
            <p className="section-subtitle">
              Nu ne lua doar pe cuvânt. Iată ce au de spus clienții noștri 
              despre colaborarea cu AppLaunch.
            </p>
          </div>
          
          <div className="testimonials-slider-container">
            <button 
              className="slider-btn slider-prev" 
              onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              aria-label="Testimonial anterior"
            >
              ←
            </button>
            
            <div className="testimonial-slide">
              <div className="testimonial-card-slider">
                <div className="testimonial-quote-icon">❝</div>
                <div className="testimonial-rating">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text-slider">{testimonials[activeTestimonial].text}</p>
                <div className="testimonial-author-slider">
                  <div className="testimonial-author-icon">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonials[activeTestimonial].name}</h4>
                    <p className="testimonial-role">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="slider-btn slider-next" 
              onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              aria-label="Testimonial următor"
            >
              →
            </button>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${activeTestimonial === index ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Mergi la testimonialul ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="offer-section">
        <div className="container">
          <div className="offer-content">
            <span className="section-badge">Prețuri Personalizate</span>
            <h2 className="section-title">Fiecare Proiect Este Unic</h2>
            <p className="offer-description">
              Nu credem în pachete standard. Fiecare proiect are nevoi diferite, 
              de aceea oferim prețuri personalizate bazate pe cerințele tale specifice. 
              Contactează-ne pentru o consultație gratuită și o ofertă adaptată proiectului tău.
            </p>
            <div className="offer-features">
              <div className="offer-feature">
                <span className="offer-icon">💬</span>
                <span>Consultație Gratuită</span>
              </div>
              <div className="offer-feature">
                <span className="offer-icon">📋</span>
                <span>Ofertă Personalizată</span>
              </div>
              <div className="offer-feature">
                <span className="offer-icon">🤝</span>
                <span>Fără Obligații</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary btn-large">
              Solicită o Ofertă Gratuită
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Tehnologie abstractă" 
            className="cta-bg-image"
          />
          <div className="cta-overlay"></div>
        </div>
        
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pregătit să-ți Lansezi Aplicația?</h2>
            <p className="cta-subtitle">
              Hai să transformăm ideea ta în realitate. Programează o consultație gratuită 
              și hai să discutăm cum te putem ajuta să ai succes.
            </p>
            <a href="#contact" className="btn btn-primary btn-large">
              Programează o Consultație Gratuită
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-badge">Contactează-ne</span>
              <h2 className="section-title">Hai să Începem Proiectul Tău</h2>
              <p className="section-subtitle">
                Ai un proiect în minte? Completează formularul și îți vom răspunde 
                în 24 de ore cu o consultație gratuită.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:hello@applaunch.ro">hello@applaunch.ro</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Telefon</h4>
                    <a href="tel:+40700000000">+40 700 000 000</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Locație</h4>
                    <span>București, România</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nume Complet</label>
                  <input type="text" id="name" placeholder="Ion Popescu" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Adresă Email</label>
                  <input type="email" id="email" placeholder="ion@exemplu.ro" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Companie (Opțional)</label>
                <input type="text" id="company" placeholder="Compania Ta" />
              </div>
              <div className="form-group">
                <label htmlFor="project-type">Tip Proiect</label>
                <select id="project-type" required>
                  <option value="">Selectează un serviciu</option>
                  <option value="mobile">Dezvoltare Aplicație Mobilă</option>
                  <option value="web">Dezvoltare Aplicație Web</option>
                  <option value="backend">Backend & API</option>
                  <option value="uiux">Design UI/UX</option>
                  <option value="ai">Funcționalități AI</option>
                  <option value="other">Altele</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Buget Estimat</label>
                <select id="budget">
                  <option value="">Selectează intervalul de buget</option>
                  <option value="starter">€2,000 - €5,000</option>
                  <option value="business">€5,000 - €15,000</option>
                  <option value="enterprise">€15,000+</option>
                  <option value="unsure">Nu sunt sigur încă</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Spune-ne Despre Proiectul Tău</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Descrie ideea proiectului, obiectivele și termenele dorite..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Trimite Mesajul
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-icon">🚀</span>
                <span className="logo-text">AppLaunch<span className="logo-accent">.ro</span></span>
              </a>
              <p className="footer-description">
                Partenerul tău de încredere pentru aplicații mobile, aplicații web și dezvoltare software personalizat.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Servicii</h4>
              <ul>
                <li><a href="#services">Dezvoltare Mobile</a></li>
                <li><a href="#services">Dezvoltare Web</a></li>
                <li><a href="#services">Design UI/UX</a></li>
                <li><a href="#services">Integrare AI</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Companie</h4>
              <ul>
                <li><a href="#portfolio">Portofoliu</a></li>
                <li><a href="#why-us">Despre Noi</a></li>
                <li><a href="#testimonials">Testimoniale</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Politica de Confidențialitate</a></li>
                <li><a href="#">Termeni și Condiții</a></li>
                <li><a href="#">Politica Cookie</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 AppLaunch.ro. Toate drepturile rezervate.</p>
            <p>Creat cu ❤️ în România</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
