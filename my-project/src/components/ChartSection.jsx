import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

export default function ChartSection() {
  const lineData = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Renewable Energy Growth (%)',
        data: [25, 30, 35, 42, 48, 55],
        borderColor: 'rgb(52, 211, 153)',
        backgroundColor: 'rgba(52, 211, 153, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ['Solar', 'Wind', 'Hydro', 'Geothermal', 'Biomass'],
    datasets: [
      {
        label: 'Energy Output (TWh)',
        data: [850, 1200, 680, 150, 320],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(20, 184, 166, 0.8)',
          'rgba(6, 182, 212, 0.8)',
          'rgba(14, 165, 233, 0.8)',
        ],
        borderColor: [
          'rgb(52, 211, 153)',
          'rgb(34, 197, 94)',
          'rgb(20, 184, 166)',
          'rgb(6, 182, 212)',
          'rgb(14, 165, 233)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const doughnutData = {
    labels: ['Renewable', 'Fossil Fuels', 'Nuclear'],
    datasets: [
      {
        label: 'Energy Mix 2025',
        data: [55, 35, 10],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)',
          'rgba(248, 113, 113, 0.8)',
          'rgba(251, 191, 36, 0.8)',
        ],
        borderColor: [
          'rgb(52, 211, 153)',
          'rgb(248, 113, 113)',
          'rgb(251, 191, 36)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e2e8f0',
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(52, 211, 153, 0.1)' },
      },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(52, 211, 153, 0.1)' },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' ,
        labels: {
          color: '#e2e8f0',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Impact by Numbers
          </h2>
          <p className="text-gray-400 text-lg">Real data driving real change</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Renewable Energy Growth</h3>
            <div className="h-64">
              <Line data={lineData} options={options} />
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Energy Output by Source</h3>
            <div className="h-64">
              <Bar data={barData} options={options} />
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 max-w-md mx-auto" data-aos="zoom-in">
          <h3 className="text-xl font-semibold text-emerald-400 mb-4 text-center">Global Energy Mix 2025</h3>
          <div className="h-64">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
