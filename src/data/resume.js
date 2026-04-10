const resume = {
  name: 'Parthiv Chandra Gajula',
  contact: {
    phone: '(+1) 248-250-0975',
    email: 'sign2parthiv@gmail.com',
    location: 'Troy, MI',
    linkedin: 'https://www.linkedin.com/in/parthiv-gajula-b84a12182/',
    github: 'https://github.com/Parthiv12'
  },
  education: {
    school: 'Wayne State University',
    degree: 'B.S. Computer Science',
    expected: 'May 2026',
    coursework: ['Deep Learning', 'Training LLMS', 'Intelligent Systems', 'Ubuntu Administration']
  },
  skills: {
    languages: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'R', 'Kotlin'],
    frameworks: ['Flask', 'React', 'Next.js', 'HuggingFace', 'TensorFlow', 'Kubernetes', 'Docker']
  },
  experience: [
    {
      role: 'Database Intern',
      company: '365 Retail',
      period: 'May 2025 - Aug 2025',
      bullets: [
        'Optimized SQL queries, improving execution speed by up to 45% through indexing strategies and execution plan analysis',
        'Connected and managed remote database servers, configuring and starting replication between instances',
        'Analyzed ad-hoc queries, prepared statements, plan cache, and buffer pool for performance tuning',
        'Created and implemented custom trigger statements for automated data processing'
      ]
    }
  ],
  projects: [
    {
      name: 'TraceLens — Distributed Tracing Platform',
      period: 'March 2026',
      bullets: [
        'Built an observability platform using OpenTelemetry and Jaeger to trace microservice request flows',
        'Deployed services in Docker containers for real-time trace ingestion and analysis',
        'Engineered a NestJS pipeline to reconstruct cross-service request paths and span relationships',
        'Developed a graph-based UI to visualize execution flows and identify latency bottlenecks'
      ],
      tech: ['OpenTelemetry', 'Jaeger', 'Docker', 'NestJS', 'React']
    },
    {
      name: 'SpeechMatch — Capstone Team Lead',
      period: 'Jan 2026 - Present',
      bullets: [
        'Leading development of a mobile pronunciation platform with an end-to-end speech evaluation pipeline',
        'Built backend services for audio processing, OCR ingestion, and scoring using Azure Speech Services',
        'Implemented timing and deviation scoring using word-level alignment and edit distance'
      ],
      tech: ['Azure Speech', 'OCR', 'Python', 'Mobile']
    },
    {
      name: 'Retrieval-Augmented Generation (RAG) Research Study',
      period: 'Jan 2025 - May 2025',
      bullets: [
        'Implemented RAG pipelines using DPR, ColBERT, and SELF-RAG architectures',
        'Built retrieval systems with document chunking, indexing, and embedding-based search',
        'Benchmarked RAG vs LLM-only generation using MS MARCO'
      ],
      tech: ['Python', 'DPR', 'ColBERT', 'SELF-RAG', 'MS MARCO']
    },
    {
      name: 'HarmonAIze — Heart Rate Music Recommendation (GrizzHacks Winner)',
      period: '2024',
      bullets: [
        'Built a music recommendation system based on target heart rate using clustering',
        'Improved performance by replacing low-correlation supervised models with unsupervised clustering',
        'Integrated ML inference into a full-stack application with a user interface'
      ],
      tech: ['React', 'Flask', 'K-Means', 'Python']
    },
    {
      name: 'AWS S3 Encrypted FUSE Filesystem',
      period: 'Sep 2025 - Dec 2025',
      bullets: [
        'Built a FUSE3 filesystem that encrypts files before upload to an S3 bucket',
        'Intercepted file descriptor cache to insert write operations prior to upload',
        'Designed a SHA-256 hashing pipeline for data integrity'
      ],
      tech: ['C++', 'FUSE3', 'AWS S3', 'SHA-256']
    }
  ],
  current: []
}

export default resume
