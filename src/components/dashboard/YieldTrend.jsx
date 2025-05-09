
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { monthlyYieldData } from '../../data/indiaData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
        <p className="text-xs font-medium text-gray-700 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="capitalize">{entry.name}:</span>
            <span className="font-medium">{entry.value.toFixed(1)}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const YieldTrend = () => {
  const [selectedCrops, setSelectedCrops] = useState({
    rice: true,
    wheat: true,
    maize: false,
    pulses: false,
    cotton: false
  });
  
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const years = Array.from({ length: 25 }, (_, i) => (2024 - i).toString());
  
  const toggleCrop = (crop) => {
    setSelectedCrops(prev => ({
      ...prev,
      [crop]: !prev[crop]
    }));
  };
  
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold">Crop Yield Trends</h3>
        
        <div className="flex flex-wrap items-center gap-2">
          <div className="w-32">
            <Select defaultValue={selectedYear} onValueChange={(value) => setSelectedYear(value)}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => (
                  <SelectItem key={year} value={year} className="text-xs">
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <button className="text-xs text-kisan-green font-medium">Export</button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.rice ? 'bg-kisan-green text-white border-kisan-green' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('rice')}
        >
          Rice
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.wheat ? 'bg-amber-500 text-white border-amber-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('wheat')}
        >
          Wheat
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.maize ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('maize')}
        >
          Maize
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.pulses ? 'bg-purple-500 text-white border-purple-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('pulses')}
        >
          Pulses
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.cotton ? 'bg-yellow-500 text-white border-yellow-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('cotton')}
        >
          Cotton
        </button>
      </div>
      
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyYieldData}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 'dataMax + 50']}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {selectedCrops.rice && (
              <Line
                type="monotone"
                dataKey="rice"
                stroke="#4CAF50"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#4CAF50", stroke: "white", strokeWidth: 2 }}
              />
            )}
            
            {selectedCrops.wheat && (
              <Line
                type="monotone"
                dataKey="wheat"
                stroke="#FFC107"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#FFC107", stroke: "white", strokeWidth: 2 }}
              />
            )}
            
            {selectedCrops.maize && (
              <Line
                type="monotone"
                dataKey="maize"
                stroke="#FF9800"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#FF9800", stroke: "white", strokeWidth: 2 }}
              />
            )}
            
            {selectedCrops.pulses && (
              <Line
                type="monotone"
                dataKey="pulses"
                stroke="#9C27B0"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#9C27B0", stroke: "white", strokeWidth: 2 }}
              />
            )}
            
            {selectedCrops.cotton && (
              <Line
                type="monotone"
                dataKey="cotton"
                stroke="#FFEB3B"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#FFEB3B", stroke: "white", strokeWidth: 2 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <div className="bg-gray-50 rounded-md p-3">
          <h4 className="text-sm font-medium mb-2">AI Insights</h4>
          <p className="text-xs text-gray-600">
            Wheat yield is projected to increase by 8.2% in the next season based on current weather patterns and soil conditions. 
            Rice production may face challenges due to predicted rainfall shortage in eastern states.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YieldTrend;
