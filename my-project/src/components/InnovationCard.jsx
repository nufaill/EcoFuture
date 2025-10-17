import React from "react";

export default function InnovationCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <div
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:via-cyan-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="mb-6 relative inline-block">
          <div className="absolute inset-0 bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/40 transition-all"></div>
          <div className="relative bg-slate-900 p-4 rounded-xl border border-emerald-500/30 group-hover:border-emerald-500/60 transition-all">
            <Icon className="h-8 w-8 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}
