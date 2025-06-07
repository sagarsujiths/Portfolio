
import { useState, useEffect } from "react";

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing data pipelines...",
    "Loading machine learning models...",
    "Analyzing datasets...",
    "Preparing visualizations...",
    "Configuring algorithms...",
    "Building neural networks...",
    "Processing analytics...",
    "Finalizing portfolio..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
        setCurrentText(loadingTexts[textIndex] || loadingTexts[loadingTexts.length - 1]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex items-center justify-center z-50">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Data Science Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating data science icons */}
        <div className="absolute top-20 left-20 animate-bounce delay-100">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
            ML
          </div>
        </div>
        
        <div className="absolute top-32 right-32 animate-bounce delay-300">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs">
            AI
          </div>
        </div>
        
        <div className="absolute bottom-32 left-32 animate-bounce delay-500">
          <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            📊
          </div>
        </div>
        
        <div className="absolute bottom-40 right-40 animate-bounce delay-700">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs">
            🐍
          </div>
        </div>

        {/* Animated data flow lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M 50 200 Q 250 100 450 200 T 850 200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M 100 400 Q 300 300 500 400 T 900 400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Computer with person working */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Computer screen */}
            <div className="w-32 h-20 bg-gray-800 rounded-lg border-4 border-gray-600 relative overflow-hidden">
              <div className="absolute inset-2 bg-black rounded flex flex-col">
                {/* Code lines animation */}
                <div className="flex-1 p-1 space-y-1">
                  <div className="h-1 bg-green-400 rounded animate-pulse w-3/4"></div>
                  <div className="h-1 bg-blue-400 rounded animate-pulse w-1/2" style={{ animationDelay: "0.2s" }}></div>
                  <div className="h-1 bg-yellow-400 rounded animate-pulse w-2/3" style={{ animationDelay: "0.4s" }}></div>
                  <div className="h-1 bg-purple-400 rounded animate-pulse w-1/3" style={{ animationDelay: "0.6s" }}></div>
                </div>
              </div>
            </div>
            
            {/* Computer stand */}
            <div className="w-4 h-6 bg-gray-600 mx-auto"></div>
            <div className="w-16 h-2 bg-gray-700 rounded-full mx-auto"></div>
            
            {/* Person silhouette */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-8 bg-gray-500 rounded-lg mx-auto -mt-2"></div>
            </div>

            {/* Floating elements around computer */}
            <div className="absolute -top-8 -left-8 animate-ping">
              <div className="w-4 h-4 bg-blue-500 rounded text-white text-xs flex items-center justify-center">R</div>
            </div>
            <div className="absolute -top-6 -right-6 animate-ping delay-500">
              <div className="w-4 h-4 bg-green-500 rounded text-white text-xs flex items-center justify-center">📈</div>
            </div>
            <div className="absolute -bottom-8 -left-6 animate-ping delay-1000">
              <div className="w-4 h-4 bg-purple-500 rounded text-white text-xs flex items-center justify-center">🔍</div>
            </div>
            <div className="absolute -bottom-6 -right-8 animate-ping delay-1500">
              <div className="w-4 h-4 bg-orange-500 rounded text-white text-xs flex items-center justify-center">⚡</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sagar's Portfolio
            </span>
          </h1>
          <p className="text-blue-300 text-lg mb-8">Data Scientist & ML Engineer</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-blue-300 mt-3 text-sm">{progress}%</p>
        </div>

        {/* Loading text */}
        <p className="text-gray-300 text-sm animate-pulse">{currentText}</p>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};
