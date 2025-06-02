import React from 'react';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    title: "LLM Training Operations Specialist",
    company: "ByteDance",
    location: "Singapore",
    period: "May 2024 – Present",
    bullets: [
      "Directed an end-to-end RL data pipeline with ~100 annotators, weekly vendor calibrations, and production-incident triage, delivering 10K+ test cases for LLMs on competitive programming.",
      "Managed a Supervised Fine-Tuning (SFT) project with 2K+ curated examples for code tasks in Python, JS, SQL, and Go.",
      "Diagnosed model failure modes from 3K+ evaluation outputs and proposed patch roadmaps based on root cause analysis.",
      "Built automation tools and prompt templates for training workflow: data conversion, adversarial filtering, and metric extraction."
    ]
  },
  {
    title: "NLP Research Assistant",
    company: "National University of Singapore",
    location: "Singapore",
    period: "Sep 2022 – Feb 2024",
    bullets: [
      "Co-authored two ACL 2024 papers on timeline summarization and word semantics.",
      "Fine-tuned LLMs (Llama 2, Mistral, FLAN-T5) with LoRA + 4-bit QLoRA and tuned hyperparameters using Weights & Biases.",
      "Built LangChain + ChromaDB pipelines for LLM-based pairwise clustering; deployed scalable NLP systems for GEC with Flask and Docker.",
      "Published system demos at EACL 2023 and IJCNLP-AACL 2023 on GEC applications."
    ]
  },
  {
    title: "Machine Learning Engineer",
    company: "Apple (via TransPerfect)",
    location: "Singapore",
    period: "May 2022 – Sep 2022",
    bullets: [
      "Worked with the Global Siri Team to fine-tune model inputs and conduct in-depth error analyses for improving NLU accuracy.",
      "Implemented transformer-based data augmentation (BERT, T5) using back-translation and paraphrasing.",
      "Automated dialogue optimization pipeline with Python scripts and regex, reducing noise in utterances by ~30%."
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
