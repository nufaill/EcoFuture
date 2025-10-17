import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Building2, Brain } from 'lucide-react';
import ChartSection from '../components/ChartSection';
import InnovationCard from '../components/InnovationCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const visionCards = [
    {
      icon: Zap,
      title: 'Clean Energy',
      description: 'Harnessing renewable power sources to create a sustainable energy grid for generations to come.',
    },
    {
      icon: Building2,
      title: 'Smart Cities',
      description: 'Building intelligent urban ecosystems that optimize resources and enhance quality of life.',
    },
    {
      icon: Brain,
      title: 'AI for Nature',
      description: 'Leveraging artificial intelligence to monitor, protect, and restore our natural environment.',
    },
  ];

  const stats = [
    { value: '85%', label: 'CO₂ Reduction Target' },
    { value: '12B+', label: 'Trees Monitored' },
    { value: '50+', label: 'Smart Cities' },
    { value: '2030', label: 'Net Zero Goal' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-cyan-900/20"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Welcome to EcoFuture
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Where Sustainability Meets Innovation
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover how technology can shape a cleaner, smarter planet
            </p>

            <Link
              to="/innovations"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105"
            >
              <span>Explore the Future</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Our Vision
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building tomorrow's sustainable infrastructure today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionCards.map((card, index) => (
              <InnovationCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <ChartSection />

      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join us in creating a sustainable future powered by innovation
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105"
          >
            <span>Get Involved</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
