
import React, { useState } from 'react';
import { statesData } from '../../data/indiaData';

// This is a simplified outline SVG map of India for demonstration
// In a real application, you would use a more detailed GeoJSON map with TopoJSON or Mapbox
const StateMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  
  // Get state by ID helper function
  const getStateById = (id) => {
    return statesData.find(state => state.id === id) || null;
  };
  
  // Handle state selection
  const handleStateClick = (stateId) => {
    const state = getStateById(stateId);
    setSelectedState(state);
  };
  
  // Color states based on agricultural production
  const getStateColor = (stateId) => {
    const state = getStateById(stateId);
    if (!state) return '#e5e7eb';
    
    // Get total production from all crops
    const cropKeys = Object.keys(state.cropProduction);
    const totalProduction = cropKeys.reduce((sum, crop) => sum + state.cropProduction[crop], 0);
    
    // Color scale based on production
    if (totalProduction > 50000) return '#2e7d32';
    if (totalProduction > 25000) return '#4caf50';
    if (totalProduction > 10000) return '#8bc34a';
    if (totalProduction > 5000) return '#aed581';
    if (totalProduction > 1000) return '#c5e1a5';
    return '#dcedc8';
  };

  return (
    <div className="india-map relative rounded-lg bg-white p-4 shadow-sm h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Crop Production by State</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium">Low</span>
          <div className="flex items-center h-2">
            <div className="w-4 h-2 bg-[#dcedc8]"></div>
            <div className="w-4 h-2 bg-[#c5e1a5]"></div>
            <div className="w-4 h-2 bg-[#aed581]"></div>
            <div className="w-4 h-2 bg-[#8bc34a]"></div>
            <div className="w-4 h-2 bg-[#4caf50]"></div>
            <div className="w-4 h-2 bg-[#2e7d32]"></div>
          </div>
          <span className="text-xs font-medium">High</span>
        </div>
      </div>
      <div className="flex h-[calc(100%-2rem)]">
        <div className="w-2/3 flex items-center justify-center">
          {/* This is a simplified map of India for demonstration purposes */}
          <svg 
            viewBox="0 0 800 800"
            className="w-full h-full max-h-[500px]"
          >
            {/* Northern States */}
            <path id="JK" d="M250,100 L300,50 L350,75 L325,125 L275,150 Z" 
                  fill={getStateColor("JK")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("JK")}
                  onMouseEnter={() => setHoveredState(getStateById("JK"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="HP" d="M275,150 L325,125 L350,150 L325,175 L300,175 Z" 
                  fill={getStateColor("HP")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("HP")}
                  onMouseEnter={() => setHoveredState(getStateById("HP"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="PB" d="M275,175 L300,175 L325,200 L300,225 L275,200 Z" 
                  fill={getStateColor("PB")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("PB")}
                  onMouseEnter={() => setHoveredState(getStateById("PB"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="UK" d="M325,175 L350,150 L375,175 L375,200 L350,200 Z" 
                  fill={getStateColor("UK")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("UK")}
                  onMouseEnter={() => setHoveredState(getStateById("UK"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="HR" d="M300,225 L325,200 L350,200 L350,225 L325,250 Z" 
                  fill={getStateColor("HR")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("HR")}
                  onMouseEnter={() => setHoveredState(getStateById("HR"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Central States */}
            <path id="UP" d="M325,250 L350,225 L375,200 L400,225 L400,275 L350,275 Z" 
                  fill={getStateColor("UP")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("UP")}
                  onMouseEnter={() => setHoveredState(getStateById("UP"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="RJ" d="M250,250 L300,225 L325,250 L350,275 L300,300 L250,275 Z" 
                  fill={getStateColor("RJ")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("RJ")}
                  onMouseEnter={() => setHoveredState(getStateById("RJ"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="MP" d="M300,300 L350,275 L400,275 L425,325 L375,350 L325,325 Z" 
                  fill={getStateColor("MP")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("MP")}
                  onMouseEnter={() => setHoveredState(getStateById("MP"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Eastern States */}
            <path id="BR" d="M400,275 L450,250 L475,275 L450,300 L425,325 Z" 
                  fill={getStateColor("BR")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("BR")}
                  onMouseEnter={() => setHoveredState(getStateById("BR"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="WB" d="M450,300 L475,275 L500,275 L500,350 L475,325 Z" 
                  fill={getStateColor("WB")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("WB")}
                  onMouseEnter={() => setHoveredState(getStateById("WB"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="JH" d="M425,325 L450,300 L475,325 L450,350 L425,350 Z" 
                  fill={getStateColor("JH")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("JH")}
                  onMouseEnter={() => setHoveredState(getStateById("JH"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="OD" d="M425,350 L450,350 L475,375 L450,400 L425,375 Z" 
                  fill={getStateColor("OD")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("OD")}
                  onMouseEnter={() => setHoveredState(getStateById("OD"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Western States */}
            <path id="GJ" d="M200,300 L250,275 L275,300 L250,350 L225,325 Z" 
                  fill={getStateColor("GJ")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("GJ")}
                  onMouseEnter={() => setHoveredState(getStateById("GJ"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="MH" d="M275,300 L325,325 L375,350 L350,400 L275,350 Z" 
                  fill={getStateColor("MH")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("MH")}
                  onMouseEnter={() => setHoveredState(getStateById("MH"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Southern States */}
            <path id="CG" d="M375,350 L400,325 L425,350 L425,375 L400,400 Z" 
                  fill={getStateColor("CG")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("CG")}
                  onMouseEnter={() => setHoveredState(getStateById("CG"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="TS" d="M350,400 L375,375 L400,400 L375,425 L350,425 Z" 
                  fill={getStateColor("TS")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("TS")}
                  onMouseEnter={() => setHoveredState(getStateById("TS"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="AP" d="M350,425 L375,425 L425,450 L400,500 L350,475 Z" 
                  fill={getStateColor("AP")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("AP")}
                  onMouseEnter={() => setHoveredState(getStateById("AP"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="KA" d="M300,425 L350,425 L350,475 L300,500 L275,450 Z" 
                  fill={getStateColor("KA")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("KA")}
                  onMouseEnter={() => setHoveredState(getStateById("KA"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="TN" d="M350,475 L400,500 L375,550 L325,550 L325,500 Z" 
                  fill={getStateColor("TN")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("TN")}
                  onMouseEnter={() => setHoveredState(getStateById("TN"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="KL" d="M300,500 L325,500 L325,550 L300,550 L275,525 Z" 
                  fill={getStateColor("KL")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("KL")}
                  onMouseEnter={() => setHoveredState(getStateById("KL"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            
            {/* Northeastern States (simplified) */}
            <path id="AS" d="M500,250 L525,225 L575,250 L550,275 L500,275 Z" 
                  fill={getStateColor("AS")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("AS")}
                  onMouseEnter={() => setHoveredState(getStateById("AS"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="ML" d="M525,250 L550,275 L525,300 Z" 
                  fill={getStateColor("ML")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("ML")}
                  onMouseEnter={() => setHoveredState(getStateById("ML"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="MZ" d="M550,275 L575,250 L575,300 L550,300 Z" 
                  fill={getStateColor("MZ")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("MZ")}
                  onMouseEnter={() => setHoveredState(getStateById("MZ"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="TR" d="M550,275 L550,300 L525,300 Z" 
                  fill={getStateColor("TR")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("TR")}
                  onMouseEnter={() => setHoveredState(getStateById("TR"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="MN" d="M575,250 L600,250 L600,300 L575,300 Z" 
                  fill={getStateColor("MN")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("MN")}
                  onMouseEnter={() => setHoveredState(getStateById("MN"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="NL" d="M575,225 L600,225 L600,250 L575,250 Z" 
                  fill={getStateColor("NL")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("NL")}
                  onMouseEnter={() => setHoveredState(getStateById("NL"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="AR" d="M575,200 L600,175 L625,200 L625,225 L600,225 L575,225 Z" 
                  fill={getStateColor("AR")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("AR")}
                  onMouseEnter={() => setHoveredState(getStateById("AR"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="SK" d="M500,225 L525,225 L525,200 Z" 
                  fill={getStateColor("SK")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("SK")}
                  onMouseEnter={() => setHoveredState(getStateById("SK"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
            <path id="GA" d="M250,375 L275,375 L275,400 L250,400 Z" 
                  fill={getStateColor("GA")} 
                  stroke="#fff" 
                  strokeWidth="2"
                  onClick={() => handleStateClick("GA")}
                  onMouseEnter={() => setHoveredState(getStateById("GA"))}
                  onMouseLeave={() => setHoveredState(null)}
            />
          </svg>
        </div>
        
        <div className="w-1/3">
          {hoveredState && !selectedState && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700">{hoveredState.name}</h4>
              <p className="text-xs text-gray-500">Hover for details, click to select</p>
            </div>
          )}
          
          {selectedState && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-bold text-gray-800 mb-2">{selectedState.name}</h4>
              <p className="text-xs font-medium text-gray-600 mb-1">Region: {selectedState.region}</p>
              <div className="mb-3">
                <h5 className="text-xs font-semibold text-gray-700">Main Crops:</h5>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedState.mainCrops.map((crop, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs rounded-full bg-kisan-green bg-opacity-10 text-kisan-green"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              
              <h5 className="text-xs font-semibold text-gray-700 mb-1">Crop Production (000s Tons):</h5>
              <div className="space-y-1">
                {Object.entries(selectedState.cropProduction).map(([crop, production]) => (
                  <div key={crop} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{crop}</span>
                    <div className="flex items-center">
                      <div 
                        className="h-2 bg-kisan-green rounded-full"
                        style={{ width: `${Math.min(production / 300, 100)}px` }}
                      ></div>
                      <span className="ml-2 text-xs font-medium">{production.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-500">Annual Rainfall</p>
                    <p className="text-sm font-medium">{selectedState.annualRainfall} mm</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Irrigation Coverage</p>
                    <p className="text-sm font-medium">{selectedState.irrigationCoverage}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Agricultural Land</p>
                    <p className="text-sm font-medium">{selectedState.agriculturalLand} kha</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Soil Type</p>
                    <p className="text-sm font-medium truncate">{selectedState.soilType.split(',')[0]}...</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedState(null)}
                className="mt-4 w-full text-xs text-kisan-green hover:text-kisan-green hover:underline"
              >
                Clear Selection
              </button>
            </div>
          )}
          
          {!hoveredState && !selectedState && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-800">India Agricultural Map</h4>
              <p className="text-xs text-gray-600 mt-1">Hover over any state to see details and click to view crop production data.</p>
              <div className="mt-3">
                <h5 className="text-xs font-semibold mb-1">Top Producing Regions:</h5>
                <ul className="text-xs space-y-1">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#2e7d32] mr-2"></span>
                    North: Punjab, Haryana, UP (Wheat, Rice)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#4caf50] mr-2"></span>
                    South: TN, AP, Karnataka (Rice, Cotton)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#8bc34a] mr-2"></span>
                    East: WB, Bihar, Odisha (Rice, Jute)
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateMap;
