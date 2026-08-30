import './App.css'
import profileImage from './assets/foto Celso.png'
import facensImage from './assets/facens-banca.jpeg'
import formaturaImage from './assets/formatura-tiago-06082026.png'
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import whatsappIcon from './assets/whats verde.png'

const skills = [
  'Python',
  'JavaScript',
  'React',
  'SQL',
  'Flutter',
  'Firebase',
  'GitHub',
  'Arquitetura de Software',
]

const highlights = [
  {
    title: 'Projeto para banca na Facens',
    image: facensImage,
    description: 'Momento marcante de apresentação acadêmica e evolução profissional.',
  },
  {
    title: 'Formatura com Tiago Henrique',
    image: formaturaImage,
    description: '06/08/2026 — momento especial em família e conquista compartilhada.',
  },
]

const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/celso-batista-de-oliveira-b513612b6', icon: linkedinIcon },
  { name: 'GitHub', url: 'https://github.com/Celsoibiuna', icon: githubIcon },
  { name: 'WhatsApp', url: 'https://wa.me/5515997975551', icon: whatsappIcon },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand">Celso Batista</div>
          <span className="react-pill">React</span>
        </div>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#destaques">Destaques</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__content">
            <p className="eyebrow">Olá, eu sou</p>
            <h1>
              Celso Batista
              <span> | Tecnólogo em ADS</span>
            </h1>
            <p className="lead">
              Desenvolvedor Backend &amp; Analista de Dados | Python, SQL e Arquitetura de Software.<br /><br />
              Profissional de 52 anos, residente em Ibiúna/SP, com uma trajetória marcada pelo trabalho árduo,
              resiliência e visão empreendedora. Unindo maturidade profissional com formação técnica atualizada,
              atuo no desenvolvimento de sistemas web e mobile, modelagem de banco de dados, lógica de programação,
              análise de requisitos e soluções digitais orientadas por impacto real.
            </p>

            <div className="hero__badges" aria-label="Principais habilidades">
              {skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>

            <div className="cta-row">
              <a href="#contato" className="button button--primary">
                Fale comigo
              </a>
              <a href="#sobre" className="button button--secondary">
                Sobre mim
              </a>
            </div>
          </div>

          <div className="hero__image-wrap">
            <img src={profileImage} alt="Celso Batista" className="hero__image" />
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="section__heading">
            <p className="eyebrow">Sobre mim</p>
            <h2>Uma trajetória construída com determinação, propósito e reinvenção contínua</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>
                Minha trajetória é pautada pela ética, pelo trabalho prático e pelo espírito empreendedor. Durante
                anos, atuei em funções essenciais que moldaram minha resiliência e, posteriormente, administrei meu
                próprio negócio no ramo automotivo, onde adquiri ampla bagagem em gestão operacional, negociação,
                atendimento ao cliente e resolução de problemas sob pressão.
              </p>
            </div>

            <div className="about-card">
              <p>
                Casado e pai de dois filhos dos quais me orgulho muito, valorizo a tranquilidade do lar, o convívio
                familiar e o contato com a natureza. Sou cristão, palmeirense, apreciador de pesca esportiva e
                entusiasta do universo de jogos digitais e cinema. Tenho uma postura analítica e ponderada: valorizo
                a escuta ativa para compreender cenários complexos antes de tomar decisões, mantendo relacionamentos
                pautados pelo respeito e pela confiança.
              </p>
            </div>

            <div className="about-card about-card--highlight">
              <p>
                Movido pela paixão por inovação e pelo desejo constante de me superar, concluí a graduação em
                Análise e Desenvolvimento de Sistemas pelo Centro Universitário Facens e sigo me aprimorando no
                programa Dev. Full Stack Jr. (Codifica Edu). Durante minha formação, idealizei e desenvolvi projetos
                práticos completos, como KeroPro, UrbisTech, Reino Defense e Celsoflix. Uno a maturidade
                profissional de uma vida de trabalho com a capacidade técnica atualizada em desenvolvimento de
                sistemas. Estou pronto para novos desafios no mercado de tecnologia, entregando código limpo,
                lógica eficiente e soluções de alto impacto.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="destaques">
          <div className="section__heading">
            <p className="eyebrow">Destaques</p>
            <h2>Momentos marcantes da minha jornada</h2>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <img src={item.image} alt={item.title} className="highlight-card__image" />
                <div className="highlight-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="section__heading">
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar?</h2>
          </div>

          <div className="contact__list" aria-label="Redes sociais e contatos">
            {links.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="contact__link">
                <img src={link.icon} alt={link.name} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">Desenvolvido por Celso Ibiúna.</footer>
    </div>
  )
}

export default App
