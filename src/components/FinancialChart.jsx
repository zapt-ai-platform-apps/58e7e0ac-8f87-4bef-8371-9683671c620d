import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function FinancialChart({ data }) {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Budget',
        data: data.budget,
        backgroundColor: 'rgba(29, 78, 216, 0.6)',
      },
      {
        label: 'Expenses',
        data: data.expenses,
        backgroundColor: 'rgba(147, 51, 234, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Financial Overview',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}