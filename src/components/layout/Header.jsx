import React from "react";
import { Search, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-kisan-green rounded-md flex items-center justify-center">
            <span className="text-white font-bold">KV</span>
          </div>
          <h1 className="text-lg font-bold text-kisan-green">Kisan Vision India</h1>
        </Link>
      </div>

      <nav className="flex items-center">
        <ul className="flex space-x-1">
          <li>
            <a href="#" className="bg-kisan-green text-white px-4 py-2 rounded-full text-sm font-medium">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-kisan-green px-4 py-2 rounded-full text-sm font-medium">
              Crop Analysis
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-kisan-green px-4 py-2 rounded-full text-sm font-medium">
              Predictions
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-kisan-green px-4 py-2 rounded-full text-sm font-medium">
Chatbot</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-kisan-amber flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AM</span>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;