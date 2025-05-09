
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { cropProductionData } from '../../data/indiaData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium text-xs">{`${payload[0].name}: ${payload[0].value.toLocaleString()} thousand tons`}</p>
      </div>
    );
  }
  return null;
};

const CropProduction = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Crop Production</h3>
        <div className="flex items-center gap-2">
          <select className="text-xs border border-gray-300 rounded-md px-2 py-1">
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <button className="text-xs text-kisan-green font-medium">Export</button>
        </div>
      </div>
      
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={cropProductionData}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            onMouseMove={(data) => {
              if (data && data.activeTooltipIndex !== undefined) {
                setActiveIndex(data.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Bar 
              dataKey="production" 
              radius={[4, 4, 0, 0]}
            >
              {cropProductionData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === activeIndex ? entry.color : `${entry.color}99`}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-2">
        {cropProductionData.slice(0, 4).map((crop, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div style={{ backgroundColor: crop.color }} className="w-3 h-3 rounded-full mr-1"></div>
              <span className="text-xs font-medium">{crop.name}</span>
            </div>
            <p className="text-xs text-gray-500">{(crop.production / 1000).toFixed(1)}k tons</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropProduction;
