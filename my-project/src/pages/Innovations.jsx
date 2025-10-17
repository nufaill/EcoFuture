import { useEffect } from 'react';
import { Trees, Route, Wind, Building } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import InnovationCard from '../components/InnovationCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Innovations() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const innovations = [
    {
      icon: Trees,
      title: 'Smart Forests',
      description: 'AI-powered sensors monitor tree health, detect deforestation in real-time, and predict forest fire risks using advanced machine learning algorithms.',
    },
    {
      icon: Route,
      title: 'Solar Roads',
      description: 'Revolutionary solar panel highways that generate clean energy while vehicles drive, transforming infrastructure into power stations.',
    },
    {
      icon: Wind,
      title: 'Floating Wind Turbines',
      description: 'Deep-sea wind farms utilizing floating platforms to harness stronger offshore winds, generating unprecedented amounts of renewable energy.',
    },
    {
      icon: Building,
      title: 'Recycled Smart Cities',
      description: 'Urban centers built entirely from recycled materials, featuring AI-optimized waste management and circular economy principles.',
    },
  ];

  const comparisonData = {
    labels: ['CO₂ Emissions', 'Energy Cost', 'Efficiency', 'Sustainability', 'Scalability'],
    datasets: [
      {
        label: 'Traditional Energy',
        data: [85, 70, 65, 30, 60],
        backgroundColor: 'rgba(248, 113, 113, 0.6)',
        borderColor: 'rgb(248, 113, 113)',
        borderWidth: 2,
      },
      {
        label: 'Renewable Energy',
        data: [15, 40, 85, 95, 90],
        backgroundColor: 'rgba(52, 211, 153, 0.6)',
        borderColor: 'rgb(52, 211, 153)',
        borderWidth: 2,
      },
    ],
  };

  const comparisonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e2e8f0',
          font: { size: 14 },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Performance Comparison (Higher is Better)',
        color: '#34d399',
        font: { size: 18, weight: 'bold' },
        padding: { top: 10, bottom: 30 },
      },
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', font: { size: 12 } },
        grid: { color: 'rgba(52, 211, 153, 0.1)' },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: '#94a3b8', font: { size: 12 } },
        grid: { color: 'rgba(52, 211, 153, 0.1)' },
      },
    },
  };

  const features = [
    { label: 'Reduced Carbon Footprint', value: '85%' },
    { label: 'Cost Savings Long-term', value: '60%' },
    { label: 'Energy Independence', value: '95%' },
    { label: 'Job Creation', value: '2M+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Green Tech Innovations
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Pioneering technologies that are reshaping our relationship with the planet.
              These innovations represent the future of sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {innovations.map((innovation, index) => (
              <InnovationCard
                key={index}
                icon={innovation.icon}
                title={innovation.title}
                description={innovation.description}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" data-aos="fade-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all text-center group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {feature.value}
                </div>
                <div className="text-sm text-gray-400">{feature.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/20" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-8 text-center">
              Why Renewable Energy Wins
            </h2>

            <div className="h-96 mb-8">
              <Bar data={comparisonData} options={comparisonOptions} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4">Traditional Energy Challenges</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    High carbon emissions contribute to climate change
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Depleting fossil fuel reserves
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Environmental degradation and pollution
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    Price volatility and energy dependence
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6 border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Renewable Energy Benefits</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Near-zero emissions for cleaner air
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Infinite and naturally replenishing resources
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Minimal environmental impact
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Energy independence and price stability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6">
            The Future is Green
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            These innovations are not just concepts—they're being implemented today.
            Join us in accelerating the transition to a sustainable tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/50 hover:border-emerald-500 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
