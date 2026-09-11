import './App.css'
import profileImage from './assets/foto Celso.png'
import facensImage from './assets/facens-banca.jpeg'
import formaturaImage from './assets/formatura-tiago-06082026.png'
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import whatsappIcon from './assets/whats verde.png'

const skills = [
  'Python',
  'SQL',
  'JavaScript',
  'React',
  'Flutter',
  'Firebase',
  'Git/GitHub',
]

const projects = [
  {
    number: '01',
    title: 'QueroPro',
    subtitle: 'Marketplace de serviços sob demanda',
    description:
      'Projeto inicialmente idealizado e desenvolvido no contexto acadêmico da FACENS e posteriormente retomado para evolução em um novo contexto, com trabalho colaborativo e novos requisitos.',
    concepts: 'Clientes e profissionais, geolocalização, disponibilidade, chamados, avaliações, score, regras de negócio, banco de dados e segurança.',
  },
  {
    number: '02',
    title: 'UrbiTech',
    subtitle: 'Gestão inteligente de mobilidade urbana',
    description:
      'Projeto conceitual voltado à utilização de dados e tecnologia na gestão de mobilidade urbana, considerando coleta de informações, análise de lotação e alertas para apoiar decisões sobre gestão de frotas.',
    concepts: 'Python, modelagem de dados, regras de negócio e análise preditiva.',
  },
  {
    number: '03',
    title: 'Reino Defense',
    subtitle: 'Lógica e desenvolvimento de software',
    description:
      'Projeto prático desenvolvido em equipe para exercitar lógica de programação, organização de código e construção de uma experiência interativa.',
    concepts: 'JavaScript, lógica de programação e desenvolvimento colaborativo.',
  },
  {
    number: '04',
    title: 'Celsoflix',
    subtitle: 'Aplicação web',
    description:
      'Projeto web desenvolvido em equipe para praticar construção de interfaces, organização de informações e integração entre componentes.',
    concepts: 'React, JavaScript, consumo de dados e experiência do usuário.',
  },
]

const journeyHighlights = [
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
            <span className="react-pill">ADS • TI</span>
        </div>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__content">
            <p className="eyebrow">Olá, eu sou</p>
            <h1>
              Celso Batista
              <span>Tecnólogo em Análise e Desenvolvimento de Sistemas</span>
            </h1>
            <p className="lead">
              <strong>Análise de Sistemas <span className="lead__separator">•</span> Dados <span className="lead__separator">•</span> Projetos de Software</strong>
              <br /><br />
              Profissional em transição de carreira para Tecnologia, com formação em ADS e experiência de décadas em
              trabalho, empreendedorismo, atendimento a clientes, gestão operacional e resolução de problemas.
              Atualmente desenvolvo projetos utilizando Python, SQL, JavaScript, Flutter e Firebase, enquanto aprofundo
              meus conhecimentos em programação, dados e inteligência artificial.
            </p>

            <div className="hero__badges" aria-label="Principais habilidades">
              {skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>

            <div className="cta-row">
              <a href="#projetos" className="button button--primary">
                Conheça meus projetos
              </a>
              <a href="#contato" className="button button--secondary">
                Vamos conversar
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
                Minha trajetória profissional foi construída ao longo de décadas de trabalho, incluindo experiência
                como empreendedor no setor automotivo. Nesse período, atuei diretamente com clientes, fornecedores,
                equipe, operação e resolução de problemas.
              </p>
            </div>

            <div className="about-card">
              <p>
                Essa vivência me proporcionou uma visão prática de processos, necessidades de negócio e experiência
                do usuário. Tenho uma postura analítica e ponderada, valorizando a escuta ativa para compreender
                cenários complexos antes de propor decisões e soluções.
              </p>
            </div>

            <div className="about-card about-card--highlight">
              <p>
                Concluí a graduação em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Facens e sigo
                me aprimorando no programa Dev. Full Stack Jr. (Codifica Edu). Durante minha formação, idealizei e
                participei do desenvolvimento de projetos práticos em equipe. Hoje, uno experiência empresarial,
                formação em tecnologia e vontade de transformar problemas e necessidades em soluções utilizando
                tecnologia.
              </p>
            </div>
          </div>
        </section>

        <section className="section projects" id="projetos">
          <div className="section__heading">
            <p className="eyebrow">Projetos em destaque</p>
            <h2>Soluções pensadas a partir de problemas reais</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-card__number">{project.number}</span>
                <div>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-card__concepts"><strong>Conceitos:</strong> {project.concepts}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="trajetoria">
          <div className="section__heading">
            <p className="eyebrow">Minha trajetória</p>
            <h2>Experiência, formação e novos caminhos</h2>
          </div>

          <div className="highlights-grid">
            {journeyHighlights.map((item) => (
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
