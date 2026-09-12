import './App.css'
import profileImage from './assets/foto Celso.png'
import facensImage from './assets/facens-banca.jpeg'
import formaturaImage from './assets/formatura-tiago-06082026.png'
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import whatsappIcon from './assets/whats verde.png'

const skills = ['Python', 'SQL', 'JavaScript', 'Flutter', 'Firebase', 'Git/GitHub']

const projects = [
  {
    number: '01',
    title: 'KeroPro',
    subtitle: 'Marketplace de serviços sob demanda',
    problem:
      'Encontrar profissionais para serviços técnicos pode ser um processo pouco organizado, principalmente quando existe necessidade de rapidez, localização e confiança entre cliente e profissional.',
    solution:
      'O KeroPro foi idealizado como uma plataforma que conecta clientes a profissionais de serviços sob demanda. A solução considera disponibilidade, localização, solicitação de atendimento e acompanhamento do deslocamento em tempo real, além de diferentes níveis de urgência, autenticação, certificados, avaliações e pontuação.',
    evolution:
      'Inicialmente idealizado e desenvolvido em contexto acadêmico na FACENS, o projeto foi posteriormente retomado e evoluído no contexto da +praTi, com revisão da proposta, dos requisitos e das possibilidades de aplicação.',
    technologies: 'Flutter • Dart • Firebase • Google Maps API • Git/GitHub',
    role:
      'Idealizador do projeto e participante do desenvolvimento em equipe. Contribuí para a definição da solução, discussão de requisitos e evolução do projeto.',
    learning:
      'O projeto ampliou minha compreensão sobre requisitos, regras de negócio, diferentes perfis de usuários, geolocalização, banco de dados e integração entre funcionalidades. Também reforçou a importância da comunicação e colaboração no desenvolvimento em equipe.',
  },
  {
    number: '02',
    title: 'UrbiTech',
    subtitle: 'Gestão inteligente de mobilidade urbana',
    problem:
      'A gestão do transporte público precisa lidar com situações que mudam constantemente, como concentração de passageiros, alterações na demanda e problemas na frota.',
    solution:
      'O UrbiTech é um projeto conceitual voltado à gestão inteligente da mobilidade urbana. A proposta utiliza dados coletados por sensores e câmeras para identificar situações como aumento da concentração de passageiros e gerar alertas que apoiem decisões relacionadas à gestão da frota.',
    technologies: 'Python • Modelagem de Dados • Regras de Negócio • Análise de Dados',
    role:
      'Idealizador do projeto e participante do desenvolvimento em equipe, contribuindo para a concepção da solução e definição de sua lógica de funcionamento.',
    learning:
      'O projeto ampliou minha visão sobre como dados podem ser utilizados para identificar situações, gerar informações relevantes e apoiar decisões. Também permitiu compreender melhor a relação entre dados, regras de negócio e necessidades de gestão.',
  },
  {
    number: '03',
    title: 'Reino Defense',
    subtitle: 'Jogo 2D mobile',
    problem:
      'O desenvolvimento de um jogo envolve diversos elementos funcionando simultaneamente, como movimentação, colisões, ondas de inimigos, interação entre componentes e controle dos estados da aplicação.',
    solution:
      'O Reino Defense é um projeto desenvolvido em equipe no formato tower defense, no qual o jogador enfrenta ondas de inimigos utilizando elementos de defesa. O projeto envolve mecânicas de jogo, renderização 2D, detecção de colisões e controle dos estados da aplicação.',
    technologies: 'Flutter • Dart • Flame Engine • Git/GitHub',
    role:
      'Participação no desenvolvimento do projeto em equipe, contribuindo para a implementação e integração das funcionalidades.',
    learning:
      'O projeto ajudou a fortalecer minha compreensão de lógica de programação, estruturas de controle, organização de código e interação entre componentes de uma aplicação, além da experiência com uma engine 2D e desenvolvimento colaborativo.',
  },
  {
    number: '04',
    title: 'Celsoflix',
    subtitle: 'Aplicação web responsiva',
    problem:
      'Criar uma interface web inspirada em plataformas de streaming, com organização de conteúdo e experiência adequada a diferentes tamanhos de tela.',
    solution:
      'O Celsoflix é uma aplicação web responsiva com elementos de interface inspirados em serviços de streaming, incluindo organização visual de conteúdos, carrosséis e interações dinâmicas.',
    technologies: 'HTML5 • CSS3 • JavaScript • React • Vercel',
    role:
      'Projeto prático desenvolvido para exercitar desenvolvimento de interfaces web, responsividade e organização de componentes.',
    learning:
      'O projeto permitiu praticar desenvolvimento responsivo, manipulação do DOM, organização de componentes visuais e criação de interações utilizando JavaScript e React.',
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
              <strong>
                Análise de Sistemas <span className="lead__separator">•</span> Dados{' '}
                <span className="lead__separator">•</span> Projetos de Software
              </strong>
              <br />
              <br />
              Profissional em transição de carreira para Tecnologia, com formação em Análise e Desenvolvimento de
              Sistemas e experiência profissional construída ao longo de décadas de trabalho, empreendedorismo,
              atendimento a clientes, gestão
              operacional e resolução de problemas. Atualmente venho desenvolvendo projetos práticos utilizando Python,
              SQL, JavaScript,
              Flutter e Firebase, enquanto aprofundo meus conhecimentos em programação, dados e inteligência artificial.
              <br />
              <br />
              Minha experiência profissional também me permite trazer uma visão prática de processos, necessidades dos
              usuários, regras de negócio e resolução de problemas.
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
                Minha trajetória profissional foi construída ao longo de décadas de trabalho, incluindo experiência como
                empreendedor no setor automotivo. Nesse período, atuei diretamente com clientes, fornecedores, equipe,
                operação e resolução de problemas.
              </p>
            </div>

            <div className="about-card">
              <p>
                Essa vivência me proporcionou uma visão prática de processos, necessidades de negócio e experiência do
                usuário. Tenho uma postura analítica e ponderada, valorizando a escuta ativa para compreender cenários
                antes de propor decisões e soluções.
              </p>
            </div>

            <div className="about-card about-card--highlight">
              <p>
                Concluí a graduação em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Facens e sigo me
                aprimorando em programação, dados e inteligência artificial. Durante minha formação, idealizei e
                participei do desenvolvimento de projetos práticos em equipe. Hoje, busco unir experiência profissional,
                formação em tecnologia e capacidade de aprender continuamente para compreender problemas, analisar
                necessidades e contribuir para a construção de soluções.
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
                <p>Décadas de trabalho com atendimento, negociação, operação, gestão e resolução de problemas.</p>
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
                <p>Formação em Análise e Desenvolvimento de Sistemas, com participação em projetos acadêmicos.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Projetos acadêmicos</span>
                <p>Idealização e desenvolvimento em equipe de soluções como KeroPro, UrbiTech e Reino Defense.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">+praTi</span>
                <p>Retomada e evolução do KeroPro em um novo contexto de aprendizagem e prática profissional.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Transição para Tecnologia</span>
                <p>
                  Projetos práticos, desenvolvimento em equipe e aperfeiçoamento contínuo em programação, dados e
                  inteligência artificial.
                </p>
              </div>
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
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="section__heading">
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar?</h2>
          </div>

          <p className="contact__intro">
            Estou aberto a oportunidades na área de Tecnologia, especialmente em posições de Analista de Sistemas Júnior
            e áreas relacionadas a dados e desenvolvimento de software.
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
