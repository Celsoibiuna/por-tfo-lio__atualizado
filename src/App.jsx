import './App.css'
import profileImage from './assets/foto_do_celso.jpg'
import bancaCelsoImage from './assets/foto Celso banca.png'
import facensImage from './assets/facens-banca.jpeg'
import videoPoster from './assets/foto_celso.png'
import graduationVideo from './assets/video_formatura.mp4'
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import whatsappIcon from './assets/whats verde.png'

const skills = ['JavaScript', 'Python', 'SQL', 'React', 'Flutter', 'Git']

const knowledge = [
  'JavaScript',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'React',
  'Flutter',
  'Dart',
  'Firebase',
  'Git',
  'GitHub',
  'Banco de Dados',
  'Modelagem de Dados',
  'Levantamento de Requisitos',
  'Regras de Negócio',
]

const projects = [
  {
    number: '01',
    title: 'KeroPro',
    subtitle: 'Marketplace de serviços sob demanda',
    problem:
      'Encontrar profissionais para serviços técnicos pode ser um processo pouco organizado, principalmente quando existe necessidade de rapidez, localização e confiança entre cliente e profissional.',
    solution:
      'A versão atual do KeroPro, desenvolvida no programa +praTi, é uma aplicação com backend em Java e Spring Boot, banco de dados MySQL e frontend web. O projeto conecta usuários a profissionais, considerando disponibilidade, solicitação de serviços, geolocalização, avaliações e organização das informações.',
    evolution:
      'Inicialmente desenvolvido durante minha formação em ADS, o projeto teve uma primeira versão acadêmica com Flutter, Dart, Firebase e Google Maps API. Posteriormente, foi retomado e evoluído no programa +praTi, em uma equipe colaborativa, com revisão da proposta, dos requisitos e das possibilidades de aplicação.',
    technologies: 'Java • Spring Boot • MySQL • Frontend web • Git • GitHub',
    role:
      'Idealizador do projeto e participante do desenvolvimento em equipe. Contribuí para a definição da solução, discussão de requisitos e evolução do projeto.',
    learning:
      'O projeto ampliou minha compreensão sobre levantamento e discussão de requisitos, regras de negócio, usuários, disponibilidade de profissionais, solicitação de serviços, geolocalização, avaliações e banco de dados. Também reforçou a importância da comunicação, organização e colaboração no desenvolvimento de software.',
  },
  {
    number: '02',
    title: 'UrbiTech',
    subtitle: 'Gestão Inteligente de Mobilidade Urbana',
    problem:
      'A gestão do transporte público precisa lidar com situações que mudam constantemente, como concentração de passageiros, alterações na demanda e problemas na frota.',
    solution:
      'O UrbiTech é um projeto conceitual relacionado à mobilidade urbana. A proposta considera informações provenientes de sensores e câmeras para identificar situações como concentração de passageiros em pontos de ônibus, alterações na demanda e problemas na frota. A partir dessas informações, o sistema poderia gerar alertas para apoiar decisões do gestor, como avaliar o envio de outro ônibus para determinada região.',
    technologies: 'Python • Modelagem de Dados • Regras de Negócio • Análise de Dados • Conceitos de Análise e Predição',
    role:
      'Idealizador/contribuidor da proposta e participante do desenvolvimento em equipe, com contribuição na concepção da solução e na definição de sua lógica.',
    learning:
      'O projeto ampliou minha visão sobre como dados podem ser utilizados para identificar situações, gerar informações relevantes e apoiar decisões. Também permitiu compreender melhor a relação entre dados, regras de negócio e necessidades de gestão.',
  },
  {
    number: '03',
    title: 'Reino Defense',
    subtitle: 'Jogo 2D Mobile',
    problem:
      'O desenvolvimento de um jogo envolve diversos elementos funcionando simultaneamente, como movimentação, colisões, ondas de inimigos, interação entre componentes e controle dos estados da aplicação.',
    solution:
      'O Reino Defense é um projeto individual no formato tower defense, no qual o jogador enfrenta ondas de inimigos utilizando elementos de defesa. O projeto envolve movimentação, colisões, física 2D, renderização de sprites, controle de estados, interação entre componentes e mecânicas de jogo.',
    technologies: 'Flutter • Dart • Flame Engine • Git/GitHub',
    role:
      'Desenvolvimento individual do projeto, com foco na implementação das mecânicas de jogo, lógica de programação, integração dos componentes e funcionamento da aplicação.',
    learning:
      'O projeto ajudou a fortalecer minha compreensão de lógica de programação, estruturas de controle, organização do código, interação entre componentes, implementação de funcionalidades, utilização de uma engine 2D e organização de um projeto individual.',
  },
  {
    number: '04',
    title: 'CelsoFlix',
    subtitle: 'Aplicação Web Responsiva',
    problem:
      'Criar uma interface web inspirada em plataformas de streaming, com organização de conteúdo e experiência adequada a diferentes tamanhos de tela.',
    solution:
      'O Celsoflix é uma aplicação web responsiva com elementos de interface inspirados em serviços de streaming, incluindo organização visual de conteúdos, carrosséis e interações dinâmicas.',
    technologies: 'HTML • CSS • JavaScript • React',
    role:
      'Desenvolvimento individual do projeto, com foco na construção da interface web, responsividade, organização dos componentes e implementação das interações.',
    learning:
      'O projeto permitiu praticar desenvolvimento web responsivo, JavaScript, manipulação do DOM, organização de componentes, utilização de React, implementação de interações e organização de uma aplicação web.',
  },
  {
    number: '05',
    title: 'CelsoGames',
    subtitle: 'Projeto web acadêmico',
    problem:
      'Organizar diferentes conteúdos e funcionalidades em uma experiência web clara, permitindo que o usuário navegue e interaja com a aplicação.',
    solution:
      'O CelsoGames foi desenvolvido individualmente durante minha formação em ADS, com foco em desenvolvimento web, organização de conteúdo e funcionalidades para interação do usuário.',
    technologies: 'HTML • CSS • JavaScript',
    role: 'Desenvolvimento individual do projeto, com foco na estrutura da interface, organização dos conteúdos e implementação das interações.',
    learning:
      'O projeto fortaleceu minha prática em desenvolvimento web, estruturação de páginas, organização de informações e criação de funcionalidades voltadas à interação do usuário.',
  },
]

const journeyHighlights = [
  {
    title: 'Campinas Innovation Week — 11ª edição',
    image: bancaCelsoImage,
    description: 'Registro de um evento do qual participei durante minha trajetória de formação e evolução profissional.',
  },
  {
    title: 'Projeto para banca na Facens',
    image: facensImage,
    description: 'Momento marcante de apresentação acadêmica e evolução profissional.',
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
          <a href="#conhecimentos">Conhecimentos</a>
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
              <strong>
                TECNOLOGIA <span className="lead__separator">•</span> DESENVOLVIMENTO{' '}
                <span className="lead__separator">•</span> DADOS <span className="lead__separator">•</span> SOLUÇÕES
              </strong>
              <br />
              <br />
              Profissional de Tecnologia em início de carreira, com experiência em projetos de software, desenvolvimento
              web e mobile, dados e resolução de problemas.
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
                Sou Tecnólogo em Análise e Desenvolvimento de Sistemas pela Facens e estou construindo minha carreira na
                área de Tecnologia.
              </p>
              <p>
                Minha trajetória profissional inclui experiência com empreendedorismo, atendimento a clientes, gestão de
                equipe, processos, negociação e resolução de problemas. Essa experiência contribui para uma visão prática
                de negócio e compreensão das necessidades dos usuários.
              </p>
            </div>

            <div className="about-card">
              <p>
                Durante minha formação, participei e desenvolvi projetos web, mobile e conceituais, envolvendo levantamento
                de requisitos, regras de negócio, banco de dados e desenvolvimento de software.
              </p>
              <p>
                Atualmente, participo do programa Dev. Full Stack Jr. (+praTi &amp; Codifica), ampliando meus conhecimentos
                por meio de projetos práticos e trabalho colaborativo.
              </p>
            </div>

            <div className="about-card about-card--highlight">
              <p>
                Estou aberto a novas oportunidades na área de Tecnologia, buscando aplicar meus conhecimentos, aprender
                continuamente e contribuir para a construção de soluções.
              </p>
            </div>
          </div>
        </section>

        <section className="section knowledge-section" id="conhecimentos">
          <div className="section__heading">
            <p className="eyebrow">Base de conhecimentos</p>
            <h2>Tecnologias e conhecimentos</h2>
          </div>

          <div className="knowledge-grid">
            {knowledge.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section projects" id="projetos">
          <div className="section__heading">
            <p className="eyebrow">Projetos em destaque</p>
            <h2>Soluções pensadas a partir de problemas reais</h2>
          </div>

          <p className="projects__intro">
            Projetos desenvolvidos durante minha formação e experiências de aprendizagem em Tecnologia.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card${project.title === 'KeroPro' ? ' project-card--featured' : ''}`}
                key={project.title}
              >
                <span className="project-card__number">{project.number}</span>
                <div className="project-card__body">
                  <p className="project-card__subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>

                  <h4>Problema</h4>
                  <p>{project.problem}</p>

                  <h4>Solução</h4>
                  <p>{project.solution}</p>

                  {project.evolution && (
                    <>
                      <h4>Evolução do projeto</h4>
                      <p>{project.evolution}</p>
                    </>
                  )}

                  <h4>Tecnologias</h4>
                  <p>{project.technologies}</p>

                  {project.title === 'KeroPro' && (
                    <p className="project-card__note">Repositório relacionado à API/backend: keropro-api</p>
                  )}

                  <h4>Meu papel</h4>
                  <p>{project.role}</p>

                  <h4>Aprendizados</h4>
                  <p>{project.learning}</p>
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

          <div className="trajectory-wrapper">
            <div className="trajectory-timeline">
              <div className="timeline-item">
                <span className="timeline-step">Experiência profissional</span>
                <p>Trajetória construída ao longo de décadas de trabalho, com experiência em atendimento, negociação, operação, gestão e resolução de problemas.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Empreendedorismo no ramo automotivo</span>
                <p>Experiência prática na condução de um negócio, relacionamento com clientes, fornecedores e equipe.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Retomada dos estudos</span>
                <p>Retorno à formação escolar e conclusão do Ensino Médio por meio do ENCCEJA.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">FACENS — ADS</span>
                <p>Formação em Análise e Desenvolvimento de Sistemas, com participação e desenvolvimento de projetos acadêmicos.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Projetos acadêmicos</span>
                <p>Participação e desenvolvimento de projetos acadêmicos em diferentes formatos, incluindo KeroPro, UrbiTech e Reino Defense.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">+praTi</span>
                <p>Participante — Programa Dev. Full Stack Jr. | Desenvolvimento de Software. Abril de 2026 — atual.</p>
                <p>Participação em projeto colaborativo, evolução do KeroPro, discussão de requisitos, regras de negócio, definição e organização de funcionalidades, Git, GitHub e trabalho em equipe.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Transição para Tecnologia</span>
                <p>
                  Desenvolvimento de projetos práticos em diferentes formatos e aperfeiçoamento contínuo em programação,
                  dados, banco de dados e desenvolvimento de software.
                </p>
              </div>
            </div>

            <div className="highlights-grid">
              {journeyHighlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="highlight-card__image-link"
                      aria-label={`Abrir publicação sobre ${item.title} no LinkedIn`}
                    >
                      <img src={item.image} alt={item.title} className="highlight-card__image" />
                    </a>
                  ) : (
                    <img src={item.image} alt={item.title} className="highlight-card__image" />
                  )}
                  <div className="highlight-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noreferrer" className="highlight-card__link">
                        Ver publicação no LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              ))}
              <article className="highlight-card">
                <video
                  className="highlight-card__video"
                  poster={videoPoster}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo da formatura de Celso Batista"
                >
                  <source src={graduationVideo} type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
                <div className="highlight-card__content">
                  <h3>Vídeo da formatura</h3>
                  <p>Registro em vídeo da conclusão da formação em Análise e Desenvolvimento de Sistemas, pai e filho.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="section__heading">
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar?</h2>
          </div>

          <p className="contact__intro">
            Estou aberto a oportunidades e diferentes caminhos na área de Tecnologia, buscando contribuir com projetos,
            aprender continuamente e aplicar minha formação, meus conhecimentos e minha experiência profissional.
          </p>

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

      <footer className="footer">© 2026 Celso Batista • Tecnologia, aprendizado e novos desafios.</footer>
    </div>
  )
}

export default App
