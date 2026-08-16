export const experienceBuckets = [
  {
    id: 'industry',
    label: 'industry',
    path: 'experiences/industry/',
    empty: 'No industry entries yet.',
    items: [
      {
        id: 'pm-pms',
        title: "Prime Minister's Project Management System",
        blurb:
          'Worked on a project management system for a prime-minister-level initiative, built with Laravel and Blade.',
        stack: ['Laravel', 'Laravel Blade'],
      },
      {
        id: 'ev-charging',
        title: 'EV Charging System (IoT & SaaS)',
        blurb:
          'Contributed to an IoT and SaaS EV charging platform with Laravel and React. NestJS was already in the stack — studied and worked alongside it.',
        stack: ['Laravel', 'React', 'NestJS'],
      },
      {
        id: 'wms',
        title: 'Warehouse Management System',
        blurb: 'Backend-only development on a warehouse management system in Laravel.',
        stack: ['Laravel'],
      },
      {
        id: 'integrations',
        title: 'API & hardware integrations',
        blurb: 'Integrated services and devices across industry systems.',
        stack: ['REST', 'GraphQL'],
        details: [
          'Server-to-server integration (GraphQL, REST)',
          'Payment gateway integration (REST)',
          'POS hardware integration (GraphQL)',
          'Website and mobile frontend integration (GraphQL, REST)',
        ],
      },
    ],
  },
  {
    id: 'personal',
    label: 'personal',
    path: 'experiences/personal/',
    empty: 'No personal projects yet.',
    items: [
      {
        id: 'proalgebra',
        title: 'ProAlgebra',
        blurb:
          'Math skills assessment system for schools. I’m the developer and coach. Live since August 2025 as a monitored prototype, currently used by two schools.',
        status: 'Prototype · live Aug 2025',
        stack: ['Flask (Python)', 'AI / chatbot'],
        details: [
          'Gold Medal — Malaysia International Young Inventors Olympiad (MIYIO) 2025',
          'Gold Medal — International Invention, Innovation and Design Competition (INDES) 2026',
          'AI chatbot helps teachers draft Q&A and helps students understand answers',
          'Teachers always review and can edit AI-suggested answers before saving; student answers are checked against stored answers (supports multiple accepted answers in JSON)',
          'AI auto-validation of student answers is on hold — testing showed occasional wrong judgments; next plan is semantic match against stored answers so teachers don’t need every equivalent phrasing',
          'Admin can manage AI models, schools, and other users',
        ],
      },
      {
        id: 'ai-electronic-nose',
        title: 'AI Electronic Nose',
        blurb:
          'IoT-based odour detection and classification concept — still in planning. Digitally represent smell so similar scents can be found when memory alone isn’t enough.',
        status: 'Planning',
        stack: [],
        details: [
          'Inspiration: it’s hard to find a perfume again from memory of its smell alone — a digital odour identity could make “similar scent” searchable',
          'Problem: human smell memory is subjective and hard to describe or compare; detecting chemicals is not the same as classifying odour as people experience it',
          'Goal: convert odour into a unique digital representation and identify similar odours',
          'Concept: Odour → captured pattern → digital odour code → similar odours',
          'Overall plan: collect odour samples → train a model for classification and similarity → validate consistency across scents → package as a detection + matching platform (implementation details private while planning)',
          'Success intent: similar perfumes should map to sufficiently similar digital representations',
        ],
      },
    ],
  },
  {
    id: 'upskill',
    label: 'upskill',
    path: 'experiences/upskill/',
    empty: 'No upskill projects yet.',
    items: [
      {
        id: 'ui-validator',
        title: 'AI-Powered UI Validator',
        blurb:
          'Flask system that compares a Figma design against the implemented UI to spot visual mismatches.',
        stack: ['Flask', 'AI'],
        links: [{ label: 'GitHub', href: 'https://github.com/nanqis/Flask_Ai_Ui_Validator.git' }],
      },
      {
        id: 'blood-monthly',
        title: 'Monthly Blood Donation Prediction',
        blurb:
          'Ensemble regressors forecast monthly donations by state and blood type; shipped as a Flask app with a Pickle-deployed model (outlier handling, PCA, hyperparameter tuning).',
        stack: ['Python', 'Scikit-learn', 'Flask'],
        links: [
          { label: 'GitHub', href: 'https://github.com/nanqis/monthly_blooddonation_unit.git' },
          {
            label: 'ZIP',
            href: 'https://drive.google.com/file/d/1xgIdBQDYn8EiGwOlKuGRCFzPDvLNym0i/view?usp=sharing',
          },
        ],
      },
      {
        id: 'blood-daily',
        title: 'Daily Blood Donation Prediction (Time Series)',
        blurb:
          'SARIMAX forecasts for four Malaysian states with exogenous factors and weekly seasonality, including 30-day outlooks with confidence intervals.',
        stack: ['Python', 'SARIMAX'],
        links: [
          { label: 'GitHub', href: 'https://github.com/nanqis/timeseries_blooddonation.git' },
          {
            label: 'ZIP',
            href: 'https://drive.google.com/file/d/1cFucKyIhgTHzbSwWRbij4vbdbC1uZ8BX/view?usp=sharing',
          },
        ],
      },
      {
        id: 'tweet-sentiment',
        title: 'Tweet Sentiment Analysis',
        blurb:
          'TextBlob polarity plus Logistic Regression classification on a large tweet dataset, with NLP preprocessing and Malay translation via GoogleTranslator.',
        stack: ['NLP', 'TextBlob', 'Logistic Regression'],
        links: [
          {
            label: 'PDF',
            href: 'https://raw.githubusercontent.com/nanqis/nanqis.github.io/main/twittersentiment.pdf',
          },
          {
            label: 'ZIP',
            href: 'https://drive.google.com/file/d/1GXV27k8YgScjxJhbfQo1nx_Qi_ocAW6C/view?usp=sharing',
          },
        ],
      },
      {
        id: 'cifar-cnn',
        title: 'CIFAR-10 Image Recognition (CNN)',
        blurb:
          'TensorFlow/Keras CNN that classifies CIFAR-10 images into 10 categories, with accuracy tracking over training epochs.',
        stack: ['TensorFlow', 'Keras', 'CNN'],
        links: [
          { label: 'GitHub', href: 'https://github.com/nanqis/cnn' },
          {
            label: 'ZIP',
            href: 'https://drive.google.com/file/d/1s2RTpnRHA4BUOlFGnNvYoBTrXDJF9Hlf/view?usp=sharing',
          },
        ],
      },
      {
        id: 'bank-negara',
        title: 'Bank Negara Dataset Analysis',
        blurb:
          'Hierarchical clustering on Malaysia’s population age distribution versus economic indicators (GCF, GDS) to surface savings, investment, and urbanization patterns.',
        stack: ['Python', 'Clustering'],
        links: [
          { label: 'GitHub', href: 'https://github.com/nanqis/DataAnalysis_BankNegara.git' },
          {
            label: 'ZIP',
            href: 'https://drive.google.com/file/d/1fHtvoNwUqOewsjPk1hMX493HBaxbie6J/view?usp=sharing',
          },
        ],
      },
      {
        id: 'tax-mgmt',
        title: 'Tax Management System',
        blurb: 'Laravel app for storing receipts and calculating tax.',
        stack: ['Laravel', 'PHP'],
        links: [{ label: 'GitHub', href: 'https://github.com/nanqis/Tax_Management_System.git' }],
      },
    ],
  },
]


export const techStack = {
  disclaimer:
    'Depth varies: some tools I use often in industry and day-to-day work; others I’ve only touched lightly during self-exploration.',
  groups: [
    {
      id: 'languages',
      label: 'languages',
      title: 'Programming languages',
      items: ['Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    },
    {
      id: 'cloud',
      label: 'cloud_devops',
      title: 'Cloud & DevOps',
      items: ['AWS', 'GitLab', 'GitHub'],
    },
    {
      id: 'frameworks',
      label: 'frameworks',
      title: 'Web frameworks',
      items: ['Flask', 'Laravel', 'FastAPI', 'React'],
    },
    {
      id: 'cache',
      label: 'cache',
      title: 'Cache',
      items: ['Redis'],
    },
    {
      id: 'data-stores',
      label: 'data_stores',
      title: 'Databases & storage',
      items: ['MySQL', 'ChromaDB', 'Elasticsearch', 'S3'],
    },
    {
      id: 'ml',
      label: 'ml_dl',
      title: 'ML / DL',
      items: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'Keras'],
    },
    {
      id: 'nlp-cv',
      label: 'nlp_cv',
      title: 'NLP / CV',
      items: ['OpenCV', 'Tesseract OCR', 'Sentence-Transformers', 'spaCy', 'NLTK'],
    },
    {
      id: 'data-llms',
      label: 'data_llms',
      title: 'Data / LLMs',
      items: ['Pandas', 'NumPy', 'LangChain', 'RAG', 'AWS Bedrock'],
    },
    {
      id: 'ides',
      label: 'ides',
      title: 'IDEs',
      items: ['VS Code', 'Jupyter Notebook', 'Cursor'],
    },
    {
      id: 'envs',
      label: 'envs',
      title: 'Environments',
      items: ['Laragon', 'Herd'],
    },
  ],
}

export const softSkills = [
  { id: 'problem-solver', label: 'problem_solver', title: 'Problem solver' },
  { id: 'leader', label: 'leader', title: 'Leader' },
  { id: 'humble', label: 'humble', title: 'Humble' },
  { id: 'eager', label: 'eager_to_learn', title: 'Eager to learn' },
  { id: 'fast-learner', label: 'fast_learner', title: 'Fast learner' },
  { id: 'precise-terms', label: 'precise_terms', title: 'Correct terms, always' },
  { id: 'multi-project', label: 'multi_project', title: 'Many projects at once' },
  { id: 'focus-unblock', label: 'focus_vs_unblock', title: 'Focus one, unblock others' },
  { id: 'prioritize', label: 'prioritize', title: 'Prioritize & urgency' },
]

export const aiSection = {
  lead:
    'Formal ML training plus hands-on exploration across AI fields — that depth makes GenAI (prompts, tools) and day-to-day software work sharper.',
  bullets: [
    'Completed a 3-month machine learning bootcamp (July–October 2024)',
    'Personal exploration across many AI areas, including computer vision and related fields',
    'That technical grounding improves GenAI use and software delivery — knowing when to code vs when to prompt',
  ],
  cert: {
    label: 'ICTC – Professional Certification in Machine Learning and Data Science',
    href: '/Machine_Learning_Certificate.pdf',
  },
}

export const sections = [
  { id: 'hero', label: 'home', edge: 'top' },
  { id: 'experiences', label: 'xp', edge: 'right' },
  { id: 'tech', label: 'stack', edge: 'right' },
  { id: 'interpersonal', label: 'soft', edge: 'bottom' },
  { id: 'ai', label: 'ai', edge: 'left' },
  { id: 'weakness', label: 'quirk', edge: 'left' },
]

export const principleText =
  'Master the skills that make you faster than AI. Use AI when it makes you faster. But always choose the most effective approach. '

export const aboutMe = {
  name: 'Hannan Balqis',
  role: 'Software Engineer',
  home: 'Kuala Kangsar, Perak',
  currently: 'Based in Puchong, Selangor for work',
  loves: [
    'always learning something new',
    'sports and games — board games especially',
  ],
  notInto: 'not into the gym or running',
  gaming: 'stepped away from gaming to focus on my career',
  hiking: 'casual hiker — here for the views and fresh forest air',
}
