import './App.css'
import profileImage from './assets/foto Celso.png'
import bancaCelsoImage from './assets/foto Celso banca.png'
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
      'Inicialmente idealizado por mim durante minha formação na FACENS, o projeto teve uma primeira versão acadêmica desenvolvida por uma equipe de cinco pessoas. Posteriormente, foi retomado e evoluído no contexto da +praTi, em uma equipe de sete pessoas no total, com revisão da proposta, dos requisitos e das possibilidades de aplicação.',
    technologies: 'Flutter • Dart • Firebase • Google Maps API • Git/GitHub • keropro-api',
    role:
      'Idealizador do projeto e participante do desenvolvimento em equipe. Contribuí para a definição da solução, discussão de requisitos e evolução do projeto.',
    learning:
      'O projeto ampliou minha compreensão sobre requisitos, regras de negócio, diferentes perfis de usuários, geolocalização, banco de dados e integração entre funcionalidades. Também reforçou a importância da comunicação, organização e colaboração no desenvolvimento em equipe.',
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
    title: 'Celsoflix',
    subtitle: 'Aplicação Web Responsiva',
    problem:
      'Criar uma interface web inspirada em plataformas de streaming, com organização de conteúdo e experiência adequada a diferentes tamanhos de tela.',
    solution:
      'O Celsoflix é uma aplicação web responsiva com elementos de interface inspirados em serviços de streaming, incluindo organização visual de conteúdos, carrosséis e interações dinâmicas.',
    technologies: 'HTML5 • CSS3 • JavaScript • React • Vercel',
    role:
      'Desenvolvimento individual do projeto, com foco na construção da interface web, responsividade, organização dos componentes e implementação das interações.',
    learning:
      'O projeto permitiu praticar desenvolvimento web responsivo, JavaScript, manipulação do DOM, organização de componentes, utilização de React, implementação de interações e organização de uma aplicação web.',
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
  {
    title: 'Formatura com Tiago Henrique',
    image: formaturaImage,
    description: '06/08/2026 — momento especial de conquista e celebração junto à família.',
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
              operacional e resolução de problemas. Atualmente, desenvolvo projetos práticos utilizando Python, SQL,
              JavaScript, Flutter e Firebase, enquanto continuo aprofundando meus conhecimentos em programação, dados e
              Inteligência Artificial.
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
                usuário. Desenvolvi uma postura analítica e ponderada, valorizando a escuta e a compreensão dos
                cenários antes de propor decisões e soluções.
              </p>
            </div>

            <div className="about-card about-card--highlight">
              <p>
                Concluí a graduação em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Facens e sigo me
                aprimorando em programação, dados e inteligência artificial. Durante minha formação, participei e
                desenvolvi projetos práticos em diferentes formatos. Também utilizo ferramentas de inteligência
                artificial como apoio aos estudos e ao desenvolvimento, buscando compreender os problemas, as soluções
                e as tecnologias utilizadas. Hoje, busco unir minha experiência profissional, minha formação em
                Tecnologia e minha capacidade de aprendizado contínuo para compreender problemas, analisar necessidades
                e contribuir para a construção de soluções.
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
                <p>Formação em Análise e Desenvolvimento de Sistemas, com participação e desenvolvimento de projetos acadêmicos.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Projetos acadêmicos</span>
                <p>Participação e desenvolvimento de projetos acadêmicos em diferentes formatos, incluindo KeroPro, UrbiTech e Reino Defense.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">+praTi</span>
                <p>Retomada e evolução do KeroPro em um novo contexto de aprendizagem e prática profissional.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-step">Transição para Tecnologia</span>
                <p>
                  Desenvolvimento de projetos práticos em diferentes formatos e aperfeiçoamento contínuo em
                  programação, dados e Inteligência Artificial.
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
