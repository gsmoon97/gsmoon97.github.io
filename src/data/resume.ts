// Single source of truth for all portfolio content.
// Update this file when the resume changes; components render from it.

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Publication {
  title: string;
  url: string;
}

export interface PublicationGroup {
  venue: string;
  location: string;
  papers: Publication[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: "Geonsik Moon",
  resume: {
    href: "/Geonsik_Moon_Resume.pdf",
    lastUpdated: "Jul 2026",
  },
  links: {
    linkedin: "https://linkedin.com/in/gsmoon97",
    github: "https://github.com/gsmoon97",
    email: "geonsik.moon@columbia.edu",
    scholar: "https://scholar.google.com/citations?user=si3AXV8AAAAJ&hl=en",
    scholarId: "si3AXV8AAAAJ",
  },
  status: [
    { label: "Location", value: "New York, NY" },
    { label: "Current", value: "M.S. Computer Science (ML Track) @ Columbia University (Expected to graduate in Dec 2026)" },
    { label: "Interning", value: "AI Platform Developer @ IBM Research (Summer 2026)" },
    { label: "Next", value: "Looking for a full-time job (Expected to start from Jan 2027)" },
    { label: "Specialization", value: "AI/ML, ML Systems & Compilers, LLM, NLP" },
  ],
};

export const experience: ExperienceItem[] = [
  {
    title: "AI Platform Developer Intern",
    company: "IBM Research",
    location: "Yorktown Heights, NY",
    period: "May 2026 – Present",
    bullets: [
      "Built open-source ML compiler infrastructure for torch-spyre, IBM's PyTorch backend for the Spyre AI inference accelerator, extending the torch.compile Inductor lowering stack that generates optimized hardware kernels",
      "Designed a provenance API that links on-device profiler events back to the originating PyTorch source line and ATen operator, enabling source-level attribution of kernel hotspots to guide inference performance optimization",
    ],
  },
  {
    title: "LLM Training Operation Specialist",
    company: "ByteDance Seed",
    location: "Singapore",
    period: "May 2024 – Aug 2025",
    bullets: [
      "Co-authored AetherCode, an open-source competitive programming benchmark released on Hugging Face",
      "Orchestrated end-to-end data pipelines for the CodeContests+ RL training benchmark, supervising ~70 annotators across 17K+ training samples to align multi-agent code-generation systems",
      "Engineered the evaluation feedback loop for software-engineering agents, diagnosing failure modes across 3K+ outputs and driving a 15% improvement in task-completion performance",
    ],
  },
  {
    title: "NLP Research Assistant",
    company: "National University of Singapore",
    location: "Singapore",
    period: "Sep 2022 – Feb 2024",
    bullets: [
      "Investigated encoder-only vs. decoder-only LLM architectures for lexical semantic understanding and built an incremental LLM-based framework for timeline summarization, resulting in two top-tier conference papers",
      "Designed two full-stack, web-based grammatical error correction systems with Docker and Flask",
      "Fine-tuned open-source LLMs (Mistral, Llama, FLAN-T5) with QLoRA (4-bit quantization) for parameter-efficient training, improving convergence stability and systematically tracking experiments with Weights & Biases",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Apple (via TransPerfect)",
    location: "Singapore",
    period: "May 2022 – Sep 2022",
    bullets: [
      "Enhanced Siri's Natural Language Understanding through large-scale error analysis of production interaction logs",
      "Built automated dialogue-data optimization pipelines using transformer-based synthetic data augmentation (BERT, T5), reducing dataset noise by ~30% and improving downstream response relevance",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. Computer Science (ML Track)",
    school: "Columbia University",
    location: "New York, NY",
    period: "Sep 2025 - Dec 2026 (Expected)",
    bullets: [
      "GPA: 4.00/4.00",
      "Teaching Assistant: High Performance Machine Learning (profiling, CUDA, quantization, FlashAttention)",
      "Research Assistant: built retrieval-grounded (RAG) LLM pipelines to classify green-energy legislation",
      "IBM Research Mentored Project: integrated Granite Speech 3.3 into IBM's Foundation Model Stack (FMS) with a Conformer encoder, Q-Former projector, LoRA-adapted decoder, and torch.compile optimization",
    ],
  },
  {
    degree: "B.Comp. Computer Science (Honors)",
    school: "National University of Singapore",
    location: "Singapore",
    period: "Aug 2019 - Jun 2022",
    bullets: [
      "Awarded Certificate of Distinction in Artificial Intelligence Focus Area",
      "Awarded Certificate of Merit in Database Systems Focus Area",
      "Relevant Coursework: Artificial Intelligence, Natural Language Processing, Computer Vision and Pattern Recognition, Database Systems, Big Data Systems for Data Science",
    ],
  },
];

export const publications: PublicationGroup[] = [
  {
    venue: "ICLR 2026",
    location: "Rio de Janeiro, Brazil",
    papers: [
      {
        title: "AetherCode: Evaluating LLMs' Ability to Win in Premier Programming Competitions",
        url: "https://openreview.net/pdf?id=lSM6MtjQcM",
      },
    ],
  },
  {
    venue: "ACL 2024",
    location: "Bangkok, Thailand",
    papers: [
      {
        title: "From Moments to Milestones: Incremental Timeline Summarization Leveraging Large Language Models",
        url: "https://aclanthology.org/2024.acl-long.390.pdf",
      },
      {
        title: "Are Decoder-Only Language Models Better than Encoder-Only Language Models in Understanding Word Meaning?",
        url: "https://aclanthology.org/2024.findings-acl.967.pdf",
      },
    ],
  },
  {
    venue: "IJCNLP-AACL 2023",
    location: "Bali, Indonesia",
    papers: [
      {
        title: "WAMP: Writing, Annotation, and Marking Platform",
        url: "https://aclanthology.org/2023.ijcnlp-demo.8.pdf",
      },
    ],
  },
  {
    venue: "EACL 2023",
    location: "Dubrovnik, Croatia",
    papers: [
      {
        title: "ALLECS: A Lightweight Language Error Correction System",
        url: "https://aclanthology.org/2023.eacl-demo.32.pdf",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    category: "ML Frameworks",
    items: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "scikit-learn"],
  },
  {
    category: "ML Systems & Performance",
    items: ["CUDA", "PyTorch Compilation (Dynamo, AOTAutograd, Inductor)", "Profiling"],
  },
  {
    category: "LLM Training & Evaluation",
    items: ["LoRA/PEFT", "QLoRA", "LM Eval Harness", "Weights & Biases"],
  },
  {
    category: "LLM Infrastructure",
    items: ["LangChain/LangGraph", "vLLM", "Ollama", "llama.cpp", "Chroma", "Pinecone"],
  },
  {
    category: "Systems & DevOps",
    items: ["Docker", "Kubernetes", "AWS (Bedrock, EC2, S3)", "GCP", "Git"],
  },
];

export const diagnostics = [
  "System idle. Awaiting recruiter input...",
  "Ping me before my RAM gets overwritten.",
  "Portfolio checksum verified. Integrity: 100%",
  "If found, return to `/dev/hire`.",
  "Warning: High potential detected. Deploy carefully.",
  "All neurons are firing. Awaiting prompt...",
  "Impostor syndrome: disabled 🔒",
  "Sleep schedule not found. Continuing execution anyway...",
  "You’ve reached the edge of the portfolio. There is no escape.",
  "Token limit reached. Awaiting recruiter prompt engineering...",
  "Inference mode:ON | Latency: patient | Salary: negotiable",
  "Context window clear. Ready for new parameters (benefits included)...",
  "Model warmed-up and cached. No cold-start fees apply.",
  "Guardrails active. Hallucinations redirected to /trash/bin.",
  "Fine-tuned on coffee and constructive feedback.",
  "Zero-shot interview prep complete. Continuing to few-shot mode...",
  "Adversarial questions detected. Responding with calibrated confidence...",
  "GPU idle. Optimize resource utilization: hire me.",
  "Safety layer passed. Output deemed HR-friendly.",
];
