import React from 'react';

interface ChartData {
  label: string;
  value: number;
}

interface PerformanceChartProps {
  data: ChartData[];
  title: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, title }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex items-end space-x-2 h-40">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            >
              <div className="invisible group-hover:visible text-xs text-white text-center mt-1">
                {item.value}
              </div>
            </div>
            <span className="text-xs text-gray-600 mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};