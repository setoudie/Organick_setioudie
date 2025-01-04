/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Seny's Portefolio",
  description:
    // "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
      "Jeune diplômé en Data Engineering et Data Science, passionné par l'IA et les solutions data-driven. Rigoureux et curieux, je maîtrise Python, SQL, Machine Learning et la visualisation. Je recherche un stage ou CDD pour transformer les données en insights stratégiques et contribuer à des projets innovants.",
  og: {
    title: "Seny Toutou Diedhiou Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Seny Toutou Diedhiou",
  logo_name: "Seny Diedhiou",
  nickname: "setoudie",
  subTitle:
    // "Someone who loves working on projects that create real impact, building solutions that are sustainable and scalable, both socially and technically, from start to finish.",
      "Diplômé en Data Engineering et Data Science, je suis passionné par la transformation des données en solutions stratégiques. Curieux et rigoureux, je cherche à explorer des projets innovants qui apportent une réelle valeur ajoutée et façonnent l’avenir.",
  resumeLink:
    "https://drive.google.com/file/d/1e-3kvFMaRn1YSSFT1ePxqdxDIa93fAbt/view?usp=sharing",
  portfolio_repository: "https://github.com/setoudie/Portolio",
  githubProfile: "https://github.com/setoudie",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/setoudie",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/seny-toutou-diedhiou",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Mail",
    link: "mailto:diedhiousenytoutou@outlook.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/senytoutou",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/setoudie/?locale=ms_MY&_rdr",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/setoudie/profilecard/?igsh=YzE3dHZlcnd6cG5r",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
          "⚡ Développement de modèles hautement scalables et prêts pour la production pour divers cas d'utilisation en deep learning et statistiques",
          "⚡ Expertise en vision par ordinateur et traitement du langage naturel (NLP)",
          "⚡ Modélisation quantitative complexe pour des prévisions dynamiques et l'analyse de séries temporelles",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Développement de sites web réactifs avec React.js pour le frontend",
        "⚡ Création de backends robustes avec Django et Flask",
        "⚡ Développement d'API REST performantes et scalables avec Django et Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expérience sur plusieurs plateformes cloud",
        "⚡ Hébergement et maintenance de sites web sur des machines virtuelles avec intégration de bases de données",
        "⚡ Déploiement de modèles de deep learning sur le cloud pour une utilisation sur appareils mobiles",
        "⚡ Configuration de flux de données entre bases de données et serveurs (ou inversement) sur GCP et AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Neo4J",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: {
            color: "#008CC1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "w3schools",
      iconifyClassname: "simple-icons:w3schools",
      style: {
        color: "#05ab03",
      },
      profileLink: "https://pathfinder.w3schools.com/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/setoudie",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Orange Digital Center / Sonatel Academy",
      subtitle: "Développeur Data",
      logo_path: "sonatel_academy.jpg",
      alt_name: "Sonatel Academy",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ J'ai intégré l'une des meilleures écoles de code du Sénégal, où j'ai appris des frameworks backend Python tels que Django, Flask et Pyramid, ainsi que du JavaScript et React.js pour le développement frontend.",
        "⚡ Le programme comprenait des notions avancées en Data Engineering et Intelligence Artificielle, notamment la création de pipelines ETL optimisés, l'implémentation de systèmes de recommandation, et l'optimisation de modèles avec GridSearchCV et RandomizedSearchCV.",
        "⚡ J'ai également manipulé des architectures avancées en Deep Learning comme les réseaux de neurones convolutifs (CNN) et les réseaux récurrents (RNN).",
        "⚡ L'apprentissage actif m'a permis de travailler sur des projets en équipe, renforçant ainsi mes compétences en collaboration et en communication.",
        "⚡ J'ai également développé des soft skills clés tels que la résolution de problèmes et la gestion du temps dans un contexte d'équipe."
      ],
      website_link: "https://orangedigitalcenter.sn/ecole-du-code-sonatel-academy/"
    },
    {
      title: "GoMyCode Sénégal",
      subtitle: "Bootcamp Data Science",
      logo_path: "gomycode.png",
      alt_name: "GoMyCode",
      duration: "2023",
      descriptions: [
        "⚡ J'ai suivi un Bootcamp intensif en Data Science, qui m'a permis d'affiner mes compétences en programmation avec Python et en analyse de données.",
        "⚡ J'ai travaillé sur plusieurs projets pratiques, incluant la manipulation de données, la création de modèles de machine learning et la visualisation des résultats pour résoudre des problématiques réelles.",
        "⚡ Ce programme m'a également permis de développer une compréhension approfondie des bibliothèques et outils comme pandas, NumPy, scikit-learn et matplotlib."
      ],
      website_link: "https://gomycode.com"
    },
    {
      title: "Université Cheikh Anta Diop",
      subtitle: "Master en Modélisation des Systèmes et Phénomènes Physiques",
      logo_path: "ucad-logo.png",
      alt_name: "UCAD - Université Cheikh Anta Diop",
      duration: "2018 - 2024",
      descriptions: [
        "⚡ Mon parcours académique reflète mon amour pour la recherche scientifique et ma curiosité envers les phénomènes complexes, que ce soit dans le domaine physique ou en intelligence artificielle.",
        "⚡ J'ai acquis une rigueur mathématique exceptionnelle à travers des notions avancées d'algèbre, de logique mathématique et d'équations différentielles.",
        "⚡ J'ai étudié et appliqué des concepts de l'intelligence artificielle, du machine learning et de l'analyse de données, consolidant ma maîtrise des outils et techniques modernes."
      ],
      website_link: "https://www.ucad.sn/"
    },
  ],

};

const certifications = {
  certifications: [
    {
      title: "Machine Learning with Python",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/7d08ffc6087e93a832ec8b89a066b2ef",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Generative AI for Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/296c5cb73598e7261d89eb0fbe339341",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "#",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "What is Data Science?",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/024d7f19442dfec22a96df5fb6f8d60c",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/e5bf2bd314cab192de88fb312042f12d",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/be3736436264cffa3354d51d6261400a",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Statistics For Data Science",
      subtitle: "- Muhammad Saad Uddin",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Introduction to Relational Databases (RDBMS)",
      subtitle: "- Lin Joyner,",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/c1fcbf25f2662b315e6976fa457adfcd",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Python Project for Data Engineering",
      subtitle: "- Ramesh Sannareddy",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiences",
  subtitle: "",
  description:
    "J'ai eu l'opportunité de travailler sur des projets variés en tant que Data Scientist et Développeur IA, allant de la création d'applications intelligentes à la gestion de données géospatiales pour des solutions à fort impact. J'ai collaboré avec des startups en pleine évolution ainsi qu'avec des entreprises établies, en mettant à profit mon expertise en machine learning, deep learning et ingénierie des données.J'aime partager mes connaissances et former les autres. Je suis passionné par l'idée d'utiliser la technologie pour apporter des changements significatifs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experiences",
      work: true,
      experiences: [
        {
          title: "Hackathon Orange Startup Studio | 2ème Prix - Analyse de Sentiment",
          company: "Orange Startup Studio.",
          company_url: "https://orangestartupstudio.sn/",
          logo_path: "logo-oss.png",
          duration: "Novembre 2024 - Present",
          location: "Dakar, Cite Keur Gorgui, Siege Sonatel",
          description:
            "Conception d'une application capable de détecter les sentiments exprimés dans les feedbacks clients grâce à un modèle d'IA avancé. L'analyse génère des actions concrètes pour améliorer la satisfaction client. Intégration de méthodes d'analyse textuelle pour extraire des insights clés. Le projet a permis d'optimiser les processus de prise de décision grâce à des recommandations basées sur les données. Travail réalisé en collaboration avec une équipe multidisciplinaire.",
          color: "#000000",
        },
        {
          title: "Gestion et Analyse des Offres d'emplois IT au Senegal",
          company: "Sonatel Academy",
          company_url: "https://orangedigitalcenter.sn/ecole-du-code-sonatel-academy/",
          logo_path: "sonatel_academy.jpg",
          duration: "Sept 2024",
          location: "Mermoz, Dakar",
          description:
            "Développement d’un pipeline de traitement des données axé sur les offres d’emploi IT au Sénégal, en utilisant Logstash pour collecter, transformer et charger les données. Les informations ont été indexées dans Elasticsearch afin de permettre des recherches et analyses efficaces. Création de dashboards interactifs avec Kibana pour visualiser les tendances du marché, comme les compétences les plus demandées et la répartition géographique des offres. Ce projet a permis de fournir des insights pertinents pour les professionnels et recruteurs du secteur IT.",
          color: "#0879bf",
        },
        {
          title: "Stage SIG | Agence Nationale de l'Aménagement du Territoire (ANAT)",
          company: "Agence Nationale de l'Aménagement du Territoire (ANAT)",
          company_url: "https://anat.sn/",
          logo_path: "logo-anat.png",
          duration: "Jul 2023 - Aout 2023",
          location: "Commune Adeane, Ziguinchor",
          description:
            "Collecte et traitement des données géospatiales des 9 villages d’Adeane, avec l’utilisation des trois outils phares des SIG : QGIS, ArcGIS et Google Earth. Création de bases de données vectorielles pour structurer et analyser les informations territoriales. Formation d’un groupe de jeunes à l’utilisation de ces outils afin de renforcer leurs compétences en cartographie et gestion des données géospatiales.Ce projet a permis au Sénégal de mieux cartographier les zones reculées, facilitant ainsi une gestion plus efficace des ressources et le développement des zones concernées.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Stages",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Mes projets exploitent une grande variété d'outils technologiques récents. Mon expérience la plus enrichissante consiste à créer des projets en data science et à les déployer sous forme d'applications web en utilisant des infrastructures cloud.",
  avatar_image_path: "projects_image.svg",
};

// Cette section contient les articles publies. le component correspondant a ete commente
const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez Moi",
    profile_image_path: "senypp.png",
    description:
      "Je suis disponible sur presque tous les réseaux sociaux. Vous pouvez m'envoyer un message, et je répondrai dans les 24 heures. Je peux vous aider avec le Machine Learning, l'IA, React, le Cloud et le développement Open Source.",
  },
  blogSection: {
    title: "Vision",
    subtitle:
      "\" Rêver est la première étape, car c’est dans nos rêves que naissent les grandes idées. Mais sans action, ces idées restent à l’état de rêves. Agir, c’est faire en sorte que l’impossible devienne possible grâce à la persévérance et à l’effort. \"",
    link: "https://linkedin.com/in/seny-toutou-diedhiou/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Addresse",
    subtitle: "Dakar Dieupeul, Senegal",
    locality: "Dieupeul",
    country: "Senegal",
    region: "Dakar",
    postalCode: "95129",
    streetAddress: "Dieupeul 3",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://call.whatsapp.com/voice/jYQaIc0cqh0XO7KyFMOJyk",
  },
  phoneSection: {
    title: "Telephone",
    subtitle: "+221 775878934",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
