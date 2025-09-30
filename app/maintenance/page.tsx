"use client"

import { useState, useEffect } from "react"

export default function MaintenancePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Generate floating dots
    const newDots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 5,
    }))
    setDots(newDots)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Enhanced mouse glow effect */}
      <div
        className="fixed hidden md:block pointer-events-none z-30 w-96 h-96 rounded-full opacity-40 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.4) 25%, rgba(34, 197, 94, 0.2) 50%, rgba(16, 185, 129, 0.1) 70%, transparent 90%)",
          filter: "blur(60px)",
        }}
      />

      {/* Background pattern with enhanced green glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />
        <div className="absolute hidden md:block inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25)_0,transparent_70%)] pointer-events-none" />
        <div className="absolute hidden md:block -top-40 -left-40 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute hidden md:block top-1/3 -right-20 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute hidden md:block bottom-1/4 left-1/4 w-80 h-80 bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute hidden md:block top-1/4 right-1/3 w-72 h-72 bg-emerald-800/25 rounded-full blur-2xl" />
      </div>

      {/* Floating animated dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-2 h-2 bg-emerald-500/30 rounded-full animate-pulse"
          style={{
            left: dot.x,
            top: dot.y,
            animationDelay: `${dot.delay}s`,
            animation: `float 6s ease-in-out infinite ${dot.delay}s, pulse 2s infinite ${dot.delay}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-emerald-500">.</span>ENVAIRE
          </h1>
        </div>

        {/* Animated status indicator */}
        <div className="inline-block mb-8 px-4 py-2 bg-black/30 border border-gray-700 rounded-full text-sm">
          <span
            className="inline-block w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 mr-3 animate-pulse"
            style={{ 
              boxShadow: "0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981",
              animation: "pulse 2s infinite, glow 3s ease-in-out infinite alternate"
            }}
          />
          Under Maintenance
        </div>

        {/* Main message with typing animation */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">
            Website is being updated
            <span className="inline-block animate-pulse ml-2">...</span>
          </h2>
          
          {/* Animated loading bar */}
          <div className="w-full max-w-md mx-auto bg-gray-800 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-600 to-green-400 rounded-full animate-pulse"
              style={{
                width: "75%",
                animation: "loading 3s ease-in-out infinite, glow-bar 2s ease-in-out infinite alternate"
              }}
            />
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
          We're working hard to bring you an even better experience. 
          <br />
        </p>

        {/* Animated tech icons */}
        <div className="flex justify-center items-center space-x-8 opacity-60">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-400/20 rounded-lg flex items-center justify-center"
              style={{
                animation: `float 4s ease-in-out infinite ${i * 0.5}s, glow-icon 3s ease-in-out infinite alternate ${i * 0.3}s`
              }}
            >
              <div className="w-6 h-6 bg-emerald-500/40 rounded-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981; }
          100% { box-shadow: 0 0 20px #10b981, 0 0 30px #10b981, 0 0 40px #10b981; }
        }
        
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 75%; }
          100% { width: 85%; }
        }
        
        @keyframes glow-bar {
          0% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
          100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4); }
        }
        
        @keyframes glow-icon {
          0% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.3); }
          100% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.6); }
        }
      `}</style>
    </div>
  )
}