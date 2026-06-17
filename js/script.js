// Menu function //

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('.nav a[href="#home"]');
  const homeLinkResponsive = document.querySelector('.nav-responsive a[href="#home"]');
  
  if (homeLink) homeLink.classList.add('active');
  if (homeLinkResponsive) homeLinkResponsive.classList.add('active');
});

const menuLinks = document.querySelectorAll('.nav a');
const menuLink = document.querySelectorAll('.nav-responsive a');
const sections = document.querySelectorAll('section');
const menu = document.querySelector('.nav'); 
const menuResponsive = document.querySelector('.nav-responsive');

function handleMenuClick(event) {
  menuLinks.forEach(link => link.classList.remove('active'));
  menuLink.forEach(link => link.classList.remove('active'));

  event.target.classList.add('active');
}

function activateMenuOnScroll() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      const targetId = section.getAttribute('id');

      menuLinks.forEach(link => link.classList.remove('active'));
      menuLink.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(`.nav a[href="#${targetId}"]`);
      const activeLinkResponsive = document.querySelector(`.nav-responsive a[href="#${targetId}"]`);

      if (activeLink) activeLink.classList.add('active');
      if (activeLinkResponsive) activeLinkResponsive.classList.add('active');
    }
  });

  if (window.scrollY > 50) {
    menu.classList.add('fixed');
    menuResponsive.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
    menuResponsive.classList.remove('fixed');
  }
}

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    handleMenuClick(event);
  });
});

menuLink.forEach(link => {
  link.addEventListener('click', (event) => {
    handleMenuClick(event);
  });
});

window.addEventListener('scroll', activateMenuOnScroll);

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(event.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
    event.preventDefault();
  });
});

menuLink.forEach(link => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(event.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
    event.preventDefault();
  });
});

// /Menu function //

// Menu Mobile // 

const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', ()=> {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuMobile.classList.toggle('change');

    if(menuMobile.classList.contains('change')){
        nav.style.display = 'block'

    } else{
        nav.style.display = 'none'
    }

}

// /Menu Mobile //

// Read More / Read Less //

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
      e.preventDefault(); 

      const description = this.closest('.services-box').querySelector('.description');
      const isExpanded = description.classList.contains('expanded');
      const lang = localStorage.getItem('lang') || 'en';

      if (isExpanded) {
          description.classList.remove('expanded');
          this.textContent = lang === 'pt' ? 'Leia Mais' : 'Read More';
      } else {
          description.classList.add('expanded');
          this.textContent = lang === 'pt' ? 'Leia Menos' : 'Read Less';
      }
  });
});

// /Read More / Read Less //

// See More / Ver Mais (Portfolio) //

document.addEventListener('DOMContentLoaded', () => {
  const btnSeeMore = document.getElementById('btn-seemore');
  if (!btnSeeMore) return;

  btnSeeMore.addEventListener('click', function (e) {
    e.preventDefault();
    const extras = document.querySelectorAll('.portifolio-extra');
    const lang = localStorage.getItem('lang') || 'en';
    const isHidden = extras[0].style.display === 'none';

    extras.forEach(el => {
      el.style.display = isHidden ? '' : 'none';
      // Apply reveal animation to new cards
      if (isHidden) {
        el.classList.add('reveal');
        setTimeout(() => el.classList.add('visible'), 50);
      } else {
        el.classList.remove('visible');
      }
    });

    this.setAttribute('data-i18n', isHidden ? 'btn-seeless' : 'btn-seemore');
    this.textContent = isHidden
      ? (lang === 'pt' ? 'Ver Menos' : 'See Less')
      : (lang === 'pt' ? 'Ver Mais'  : 'See More');
  });
});

// /See More / Ver Mais //

// Tradução para inglês do PT-BR //

// =============================================
// BILINGUAL CONTENT — EN / PT-BR
// =============================================
const translations = {
  en: {
    'nav-home':             'Home',
    'nav-education':        'Education',
    'nav-experience':       'Experience',
    'nav-services':         'Services',
    'nav-portfolio':        'Portfolio',
    'nav-contact':          'Contact',

    'home-greeting':        "Hi, It's",
    'home-iam':             "I'm a",
    'home-bio':             'Full Stack Developer with a degree in Systems Analysis and Development, experienced in building web and mobile applications focused on delivering efficient, responsive, and well-structured solutions. Skilled in JavaScript, HTML5, CSS3, PHP, and MySQL, with experience in API integration, database modeling, and improving operational processes supported by data and controls. Also experienced in UX/UI Design and Social Media, creating user-centered interfaces and managing digital content and brand presence.',
    'btn-hire':             'Hire me',
    'btn-contact':          'Contact',

    'section-my-edu':       'My',
    'section-educations':   'Education',
    'edu1-badge':           'Feb 2021 – Jul 2023',
    'edu1-org':             'Universidade Nove de Julho',
    'edu1-title':           'Systems Analysis and Development',
    'edu1-desc':            'Coursework focused on front-end and back-end development, programming logic, databases, software engineering, computer architecture, and information security fundamentals.',
    'edu2-badge':           '2025 – Currently',
    'edu2-org':             'Language Course',
    'edu2-title':           'English – Advanced',
    'edu2-desc':            'Currently improving English skills with a focus on conversation, aiming to strengthen communication in web and mobile development environments.',

    'section-my-exp':       'My',
    'section-experiences':  'Experience',
    'exp1-badge':           'Aug 2023 – Jan 2025',
    'exp1-org':             'Developer in Training',
    'exp1-title':           'Academic Projects & Independent Development',
    'exp1-li1':             'Developed practical projects to strengthen skills in front-end, back-end, and database development.',
    'exp1-li2':             'Built web pages and applications focusing on structure, responsiveness, and MySQL integration.',
    'exp1-li3':             'Applied version control practices, programming logic, and project organization techniques.',
    'exp1-li4':             'Continuously improved technical skills in web technologies and software development fundamentals.',
    'exp2-badge':           'Feb 2025 – Jan 2026',
    'exp2-org':             'Full Stack Developer · Early Technical Leadership',
    'exp2-title':           'AprendiInvest',
    'exp2-li1':             'Contributed to the application from concept to implementation, defining both visual and technical structure.',
    'exp2-li2':             'Built the front-end using a mobile-first approach, focusing on responsiveness, performance, and UX.',
    'exp2-li3':             'Developed the back-end in PHP, integrating APIs related to the financial market.',
    'exp2-li4':             'Designed and implemented the core database structure with a focus on organization and scalability.',
    'exp2-li5':             'Supported technical leadership in daily project activities, including task organization and delivery validation.',
    'exp3-badge':           'Jan 2025 – Currently',
    'exp3-org':             'UX/UI Designer & Social Media',
    'exp3-title':           'Freelance · Digital Presence & Product Design',
    'exp3-li1':             'Designed user interfaces and wireframes in Figma, focusing on usability, visual hierarchy, and consistent design systems.',
    'exp3-li2':             'Conducted basic UX research and user flow mapping to guide layout and navigation decisions before development.',
    'exp3-li3':             'Planned and managed social media content, creating posts and visual identity aligned with each brand.',
    'exp3-li4':             'Analyzed engagement metrics to adjust content strategy and improve audience reach and interaction.',
    'exp3-li5':             'Bridged design and development by translating UI concepts directly into functional, responsive front-end code.',

    'section-my-svc':       'My',
    'section-services':     'Services',
    'section-latest':       'Latest',
    'svc1-title':           'Web Development',
    'svc1-desc':            'I possess strong skills in web development and UI/UX design, specializing in designing and implementing user-centered visual interfaces for websites and applications using HTML, CSS, and JavaScript. I am proficient in creating dynamic, responsive, and accessible web pages with a focus on delivering an exceptional user experience.<br><br>Currently, I am enhancing my JavaScript knowledge by exploring modern frameworks like React.js and React Native, allowing me to build scalable, maintainable, and professional-grade applications for web and mobile platforms.',
    'svc2-title':           'Mobile Development',
    'svc2-desc':            'I enjoy exploring mobile development to improve my Front-End skills. By using web technologies like HTML, CSS, and JavaScript, I focus on creating hybrid mobile applications that work seamlessly on both Android and iOS platforms.<br><br>This approach simplifies development by eliminating the need to learn native languages for each operating system. By leveraging tools like Apache Cordova or Capacitor, I ensure a smooth and reliable user experience on both platforms.',
    'svc3-title':           'Back-End Development',
    'svc3-desc':            'I have knowledge of PHP and Python. I started learning Python due to its simple yet powerful syntax, which provided a strong foundation in programming.<br><br>Currently, my focus is on PHP, as I aim to pursue a career in web development, where PHP plays an essential role in building dynamic websites and web systems. Additionally, I am beginning my studies in MySQL to improve my database skills and becoming proficient in managing and manipulating databases.',
    'btn-readmore':         'Read More',

    'section-projects':     'Projects',
    'proj1-title':          'Design Gallery',
    'proj1-desc':           "A gallery of the design work I've done — UI/UX screens, visual identities, and landing pages, from sketch to final version.",
    'proj2-title':          'Pokédex',
    'proj2-desc':           'In this project, I use HTML, CSS, and JavaScript to create an interactive Pokédex. It utilizes the PokéAPI to fetch dynamic Pokémon data. Navigation between Pokémon is done by ID, simulating a database.',
    'proj3-title':          'To Do List',
    'proj3-desc':           "The To Do List application is a project developed in JavaScript and React, allowing users to add, edit, mark as complete, and delete tasks. It uses React's state to manage the tasks interactively.",
    'proj4-title':          'Project 4',
    'proj4-desc':           'Add your project description here. Replace this image and text with your own project details.',
    'proj5-title':          'Project 5',
    'proj5-desc':           'Add your project description here. Replace this image and text with your own project details.',
    'proj6-title':          'Project 6',
    'proj6-desc':           'Add your project description here. Replace this image and text with your own project details.',
    'btn-seemore':          'See More',
    'btn-seeless':          'See Less',

    'section-contact':      'Contact',
    'section-contact-me':   'Me!',
    'ph-fullname':          'Full Name',
    'ph-phone':             'Phone Number',
    'ph-subject':           'Subject',
    'ph-message':           'Message',
    'btn-send':             'Send Message',

    'footer-services':      'Services',
    'footer-about':         'About Me',
    'footer-experience':    'Experience',
    'footer-contact':       'Contact',
    'footer-projects':      'Projects',
    'footer-copy':          'Copyright \u00A9 2026 by </Gustavo Strada>. All Right Reserved.',
    'tooltip-cv':           'Download CV',
  },

  pt: {
    'nav-home':             'Início',
    'nav-education':        'Educação',
    'nav-experience':       'Experiência',
    'nav-services':         'Serviços',
    'nav-portfolio':        'Portfólio',
    'nav-contact':          'Contato',

    'home-greeting':        'Olá, eu sou',
    'home-iam':             'Sou um',
    'home-bio':             'Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de Sistemas, experiente na criação de aplicações web e mobile com foco em soluções eficientes, responsivas e bem estruturadas. Habilidades em JavaScript, HTML5, CSS3, PHP e MySQL, com experiência em integração de APIs, modelagem de banco de dados e melhoria de processos operacionais apoiados por dados e controles. Também possuo experiência em Design UX/UI e Social Media, criando interfaces centradas no usuário e gerenciando conteúdo digital e presença de marca.',
    'btn-hire':             'Contrate-me',
    'btn-contact':          'Contato',

    'section-my-edu':       'Minhas',
    'section-educations':   'Formações',
    'edu1-badge':           'Fev 2021 – Jul 2023',
    'edu1-org':             'Universidade Nove de Julho',
    'edu1-title':           'Análise e Desenvolvimento de Sistemas',
    'edu1-desc':            'Formação com foco em desenvolvimento front-end e back-end, lógica de programação, bancos de dados, engenharia de software, arquitetura de computadores e fundamentos de segurança da informação.',
    'edu2-badge':           '2025 – Atualmente',
    'edu2-org':             'Curso de Idiomas',
    'edu2-title':           'Inglês – Avançado',
    'edu2-desc':            'Aprimorando habilidades em inglês com foco em conversação, visando fortalecer a comunicação em ambientes de desenvolvimento web e mobile.',

    'section-my-exp':       'Minhas',
    'section-experiences':  'Experiências',
    'exp1-badge':           'Ago 2023 – Jan 2025',
    'exp1-org':             'Desenvolvedor em Formação',
    'exp1-title':           'Projetos Acadêmicos e Desenvolvimento Independente',
    'exp1-li1':             'Desenvolvi projetos práticos para fortalecer habilidades em front-end, back-end e desenvolvimento de banco de dados.',
    'exp1-li2':             'Construí páginas web e aplicações com foco em estrutura, responsividade e integração com MySQL.',
    'exp1-li3':             'Apliquei práticas de controle de versão, lógica de programação e técnicas de organização de projetos.',
    'exp1-li4':             'Aprimorei continuamente habilidades técnicas em tecnologias web e fundamentos de desenvolvimento de software.',
    'exp2-badge':           'Fev 2025 – Jan 2026',
    'exp2-org':             'Desenvolvedor Full Stack · Liderança Técnica Inicial',
    'exp2-title':           'AprendiInvest',
    'exp2-li1':             'Contribuí para a aplicação do conceito à implementação, definindo tanto a estrutura visual quanto a técnica.',
    'exp2-li2':             'Desenvolvi o front-end com abordagem mobile-first, focando em responsividade, performance e UX.',
    'exp2-li3':             'Desenvolvi o back-end em PHP, integrando APIs relacionadas ao mercado financeiro.',
    'exp2-li4':             'Projetei e implementei a estrutura central do banco de dados com foco em organização e escalabilidade.',
    'exp2-li5':             'Apoiei a liderança técnica nas atividades diárias do projeto, incluindo organização de tarefas e validação de entregas.',
    'exp3-badge':           'Jan 2025 – Atualmente',
    'exp3-org':             'Designer UX/UI & Social Media',
    'exp3-title':           'Freelancer · Presença Digital e Design de Produto',
    'exp3-li1':             'Projetei interfaces e wireframes no Figma, com foco em usabilidade, hierarquia visual e consistência no design system.',
    'exp3-li2':             'Realizei pesquisas básicas de UX e mapeamento de fluxo de usuário para guiar decisões de layout e navegação antes do desenvolvimento.',
    'exp3-li3':             'Planejei e gerenciei conteúdo para redes sociais, criando posts e identidade visual alinhados a cada marca.',
    'exp3-li4':             'Analisei métricas de engajamento para ajustar a estratégia de conteúdo e melhorar o alcance e a interação do público.',
    'exp3-li5':             'Conectei design e desenvolvimento ao traduzir conceitos de UI diretamente em código front-end funcional e responsivo.',

    'section-my-svc':       'Meus',
    'section-services':     'Serviços',
    'section-latest':       'Últimos',
    'svc1-title':           'Desenvolvimento Web',
    'svc1-desc':            'Possuo fortes habilidades em desenvolvimento web e design UI/UX, especializando-me na criação e implementação de interfaces visuais centradas no usuário para sites e aplicações usando HTML, CSS e JavaScript. Sou proficiente na criação de páginas web dinâmicas, responsivas e acessíveis, com foco em entregar uma experiência de usuário excepcional.<br><br>Atualmente, estou aprimorando meus conhecimentos em JavaScript explorando frameworks modernos como React.js e React Native, permitindo que eu construa aplicações escaláveis, de fácil manutenção e de nível profissional para plataformas web e mobile.',
    'svc2-title':           'Desenvolvimento Mobile',
    'svc2-desc':            'Gosto de explorar o desenvolvimento mobile para aprimorar minhas habilidades de Front-End. Utilizando tecnologias web como HTML, CSS e JavaScript, foco na criação de aplicações mobile híbridas que funcionam perfeitamente nas plataformas Android e iOS.<br><br>Essa abordagem simplifica o desenvolvimento eliminando a necessidade de aprender linguagens nativas para cada sistema operacional. Utilizo ferramentas como Apache Cordova ou Capacitor para garantir uma experiência de usuário fluida e confiável em ambas as plataformas.',
    'svc3-title':           'Desenvolvimento Back-End',
    'svc3-desc':            'Tenho conhecimento em PHP e Python. Comecei a aprender Python devido à sua sintaxe simples e poderosa, que forneceu uma base sólida em programação.<br><br>Atualmente, meu foco está no PHP, pois pretendo seguir carreira em desenvolvimento web, onde o PHP desempenha um papel essencial na criação de sites e sistemas dinâmicos. Além disso, estou iniciando meus estudos em MySQL para aprimorar minhas habilidades com banco de dados e me tornar proficiente no gerenciamento e manipulação de dados.',
    'btn-readmore':         'Leia Mais',

    'section-projects':     'Projetos',
    'proj1-title':          'Galeria de Design',
    'proj1-desc':           'Galeria com os trabalhos de design que já fiz: telas de UI/UX, identidades visuais e landing pages, do rascunho até a versão final.',
    'proj2-title':          'Pokédex',
    'proj2-desc':           'Neste projeto, utilizo HTML, CSS e JavaScript para criar uma Pokédex interativa. Ela usa a PokéAPI para buscar dados dinâmicos de Pokémon. A navegação entre Pokémon é feita por ID, simulando um banco de dados.',
    'proj3-title':          'Lista de Tarefas',
    'proj3-desc':           'O aplicativo de Lista de Tarefas é um projeto desenvolvido em JavaScript e React, permitindo que os usuários adicionem, editem, marquem como concluídas e excluam tarefas. Utiliza o estado do React para gerenciar as tarefas de forma interativa.',
    'proj4-title':          'Projeto 4',
    'proj4-desc':           'Adicione a descrição do seu projeto aqui. Substitua esta imagem e este texto pelos detalhes do seu projeto.',
    'proj5-title':          'Projeto 5',
    'proj5-desc':           'Adicione a descrição do seu projeto aqui. Substitua esta imagem e este texto pelos detalhes do seu projeto.',
    'proj6-title':          'Projeto 6',
    'proj6-desc':           'Adicione a descrição do seu projeto aqui. Substitua esta imagem e este texto pelos detalhes do seu projeto.',
    'btn-seemore':          'Ver Mais',
    'btn-seeless':          'Ver Menos',

    'section-contact':      'Entre em Contato',
    'section-contact-me':   'Comigo!',
    'ph-fullname':          'Nome Completo',
    'ph-phone':             'Número de Telefone',
    'ph-subject':           'Assunto',
    'ph-message':           'Mensagem',
    'btn-send':             'Enviar Mensagem',

    'footer-services':      'Serviços',
    'footer-about':         'Sobre Mim',
    'footer-experience':    'Experiência',
    'footer-contact':       'Contato',
    'footer-projects':      'Projetos',
    'footer-copy':          'Copyright \u00A9 2026 por </Gustavo Strada>. Todos os Direitos Reservados.',
    'tooltip-cv':           'Baixar CV',
  }
};

function setLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // Active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            if (el.classList.contains('description')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('lang', lang);

    // Swap animated role keyframes based on language
    const rolesPT = [
        'Desenvolvedor Front-End',
        'Desenvolvedor Back-End',
        'Desenvolvedor Mobile',
        'Desenvolvedor Web',
        'Designer UI / UX'
    ];
    const rolesEN = [
        'Front-End Development',
        'Back-End Development',
        'Mobile Development',
        'Web Development',
        'IU / UX Designer'
    ];
    const roles = lang === 'pt' ? rolesPT : rolesEN;
    const step = 100 / roles.length;
    let kf = '@keyframes words{';
    roles.forEach((role, i) => {
        const start = (i * step).toFixed(1);
        const end   = ((i + 1) * step - 1).toFixed(1);
        kf += `${start}%,${end}%{ content: "${role}"; }`;
    });
    kf += '}';
    let dynStyle = document.getElementById('dynamic-roles-kf');
    if (!dynStyle) {
        dynStyle = document.createElement('style');
        dynStyle.id = 'dynamic-roles-kf';
        document.head.appendChild(dynStyle);
    }
    // Translate tooltips
    document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
        const key = el.getAttribute('data-i18n-tooltip');
        if (t[key] !== undefined) el.setAttribute('data-tooltip', t[key]);
    });

    dynStyle.textContent = kf;
}

// Apply saved preference on load
(function() {
    const saved = localStorage.getItem('lang') || 'en';
    if (saved !== 'en') setLang(saved);
})();

// Tradução para inglês do PT-BR //

// =============================================
// SCROLL REVEAL
// =============================================
(function () {
  // Adiciona classes de reveal nos elementos das seções
  const revealMap = {
    '.home-content':      'reveal-left',
    '.home-img':          'reveal-right',
    '.tl-left .tl-card':  'reveal-left',
    '.tl-right .tl-card': 'reveal-right',
    '.services-box':      'reveal',
    '.box-portifolio':    'reveal',
    '.form':              'reveal',
    '.education h2':      'reveal',
    '.experience h2':     'reveal',
    '.services h2':       'reveal',
    '.portifolio h2':     'reveal',
    '.contact h2':        'reveal',
  };

  Object.entries(revealMap).forEach(([selector, cls]) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add(cls);
      el.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
})();
// =============================================
// /SCROLL REVEAL
// =============================================