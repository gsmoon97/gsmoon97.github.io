import React, { useEffect, useState } from 'react';
import { AlertTriangle, Github, Mail } from 'lucide-react';

const diagnostics = [
  "Need help decoding this resume? Ping me. If not, may your LLMs overfit gracefully.",
  "System idle. Awaiting recruiter input...",
  "Ping me before my RAM gets overwritten.",
  "Portfolio checksum verified. Integrity: 100%",
  "If found, return to `/dev/hire`.",
  "Warning: High potential detected. Deploy carefully.",
  "All neurons are firing. Awaiting prompt.",
  "Impostor syndrome: disabled 🔒",
  "LLM alignment successful. Personality: witty.",
  "Sleep schedule not found. Continuing execution anyway.",
  "You’ve reached the edge of the portfolio. There is no escape.",
];

const FunnyFooter = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const random = diagnostics[Math.floor(Math.random() * diagnostics.length)];
    setMessage(random);
  }, []);

  return (
    <div className="space-y-6">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-yellow-300" />
          <h2 className="text-xl font-bold">CONTACT_PROTOCOLS.sys</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span className="text-blue-200">GitHub:</span>
            <span className="hover:underline hover:text-white transition">github.com/gsmoon97</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-blue-200">Email:</span>
            <span className="hover:underline hover:text-white transition">geonsik.moon@columbia.edu</span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm space-y-2">
        <div className="border-t-2 border-blue-400 pt-4">
          <div className="text-blue-200 italic">{message}</div>
          <div className="text-xs mt-2 opacity-75">
            SYSTEM: PORTFOLIO_OS v2024.12 · Build: BSOD_THEME_v1.0 · Stability: Unstable but compiling...
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnyFooter;
