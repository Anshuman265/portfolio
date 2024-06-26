// gitprofile.config.js

const config = {
  github: {
    username: 'anshuman265', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['portfolio'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'anshuman-verma-334465210',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //facebook: '',
    //instagram: '',
    //youtube: '', // example: 'pewdiepie'
    //dribbble: '',
    behance: 'anshumanverma1',
    //medium: 'arifszn',
    //dev: 'arifszn',
    stackoverflow: '15567103/anshuman-verma', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    //website: 'https://arifszn.com',
    phone: '+919637925946',
    email: 'verma77712@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1QSCXGYtuZ4EdwYV0GhoZjZwmB2aUU_FA/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'R',
    'Python',
    'PHP',
    'Django',
    'Flutter',
    'REST APIs',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Sharekhan by BNP Paribas',
      position: 'Artifical Intelligence Developer Intern',
      from: 'May 2023',
      to: 'July 2023',
      companyLink: 'https://www.sharekhan.com/',
    },
    {
      company: 'CTARA, IIT BOMBAY',
      position: 'Data Analyst',
      from: 'May 2022',
      to: 'July 2022',
      companyLink: 'https://www.prayog.ctara.iitb.ac.in/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'IIT Bombay',
      degree: 'B.Tech',
      from: '2020',
      to: '2024',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Dynamical , Symplectic And Stochastic Persepctives On Gradient-Based Optimization',
      description:
        'This project explores gradient-based optimization algorithms from a dynamical, symplectic, and stochastic perspective. The project implements various algorithms, including Gradient Descent, Momentum, and Nesterov\'s Accelerated Gradient Descent, and evaluates their performance on benchmark optimization problems.',
      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds',
      // link: 'https://example.com',
    },
    {
      title: 'TheaterHub',
      description:
        'A react-redux app where you can search for your favorite movies and get find out all you want about it.The application has been deployed on the vercel platform',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
      link: 'https://theatrehub.vercel.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
 /* 
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },*/
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Anshuman265/portfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
