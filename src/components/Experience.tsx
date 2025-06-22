import React from 'react';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    title: "LLM Training Operations Specialist",
    company: "ByteDance",
    location: "Singapore",
    period: "May 2024 – Present",
    bullets: [
      "Managed an end-to-end training data pipeline for Supervised Fine-Tuning (SFT) and Reinforcement Learning (RL) projects to improve the model's performance in solving coding tasks",
      // "Collaborated with Subject Matter Experts (SMEs) to diagnose model failure modes and translate insights into actionable root-cause reports and patch roadmaps",
      // "Streamlined training workflows by building Python automation and prompt-engineering templates cutting manual overhead while standardizing quality controls"
    ]
  },
  {
    title: "NLP Research Assistant",
    company: "National University of Singapore",
    location: "Singapore",
    period: "Sep 2022 – Feb 2024",
    bullets: [
      "Drove cutting-edge LLM research, co-authoring four peer-reviewed papers (ACL '24, EACL '23, IJCNLP-AACL '23) that advanced state-of-the-art timeline summarization, lexical semantics, and real-time GEC systems",
      // "Built and fine-tuned open-source models (Mistral, Llama 2, FLAN-T5) with LangChain, ChromaDB, and LoRA-based PEFT (4-bit) while orchestrating hyper-parameter sweeps in Weights & Biases to maximise downstream task performance",
      // "Engineered scalable NLP web applications and containerised microservices that deliver efficient GEC and incremental clustering, integrating LLM-powered pairwise classification into production pipelines",
    ]
  },
  {
    title: "Machine Learning Engineer",
    company: "Apple (via TransPerfect)",
    location: "Singapore",
    period: "May 2022 – Sep 2022",
    bullets: [
      "Enhanced Siri's natural-language understanding by conducting systematic error analyses and fine-tuning model inputs, boosting intent-resolution accuracy and response relevance",
      // "Expanded multilingual coverage through transformer-based synthetic data augmentation (BERT, T5), applying back-translation and context-aware paraphrasing to preserve semantic integrity",
      // "Cut extraneous utterances by ~30% and sped up responses by automating a dialogue-optimization pipeline with scheduled Python scripts and regex-driven filtering"
    ]
  }
];

const Experience = () => {
  return (
    <div className="mb-8">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-xl font-bold">EXPERIENCE.log</h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-400 pl-4">
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4" />
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                </div>
                <div className="text-blue-200 text-sm">
                  <span>{exp.company}</span> | <span>{exp.location}</span> | <span>{exp.period}</span>
                </div>
              </div>
              
              {exp.bullets.length > 0 && (
                <div className="mt-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="text-sm mb-1 flex">
                      <span className="text-blue-300 mr-2">{'>'}</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
