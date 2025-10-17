import { useEffect } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const milestones = [
    { year: '2020', title: 'Foundation', description: 'EcoFuture initiative launched with vision for sustainable tech' },
    { year: '2022', title: '20% Renewable', description: 'Reached 20% renewable energy adoption in partner cities' },
    { year: '2024', title: '40% Milestone', description: 'Achieved 40% renewable energy usage globally' },
    { year: '2025', title: 'Smart Cities', description: 'Deployed AI monitoring in 50+ smart cities worldwide' },
    { year: '2028', title: '70% Target', description: 'Projected to reach 70% renewable energy transition' },
    { year: '2030', title: 'Net Zero', description: 'Global net-zero emissions goal for all partner cities' },
  ];

  const team = [
    {
      name: 'Dr. Elena Verde',
      role: 'Chief Sustainability Officer',
      description: 'Leading global renewable energy initiatives with 15+ years experience',
    },
    {
      name: 'Marcus Chen',
      role: 'AI & Innovation Director',
      description: 'Pioneering AI solutions for environmental monitoring and protection',
    },
    {
      name: 'Aria Solaris',
      role: 'Smart Cities Architect',
      description: 'Designing next-generation urban ecosystems for sustainable living',
    },
    {
      name: 'Dr. Kai Rivers',
      role: 'Climate Tech Researcher',
      description: 'Developing breakthrough technologies for carbon capture and reduction',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Accelerate the transition to sustainable energy through innovative technology and global collaboration.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where clean energy powers every aspect of life, creating harmony between technology and nature.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, sustainability, transparency, and unwavering commitment to our planet\'s future.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a global movement of change-makers dedicated to environmental transformation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-16 overflow-hidden">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              The Story Behind EcoFuture
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Born from a vision to merge cutting-edge technology with environmental stewardship,
              EcoFuture is reimagining how humanity interacts with our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/40 transition-all"></div>
                  <value.icon className="h-10 w-10 text-emerald-400 relative" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6 text-center">
              Our Journey
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              From humble beginnings to global impact, tracking our progress towards a sustainable future
            </p>

            <div className="relative overflow-hidden">
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-center mb-12 last:mb-0"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`w-full md:flex md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                        <div className="text-2xl font-bold text-emerald-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform shadow-lg shadow-emerald-500/50"></div>

                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg">
              Visionaries driving the green revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all"></div>

                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-4xl font-bold text-slate-900">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <h3 className="text-xl font-bold text-emerald-400 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-cyan-400 text-center mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}