"use client"

import { useState } from "react"
import { Search, Wrench, Rocket, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const { t } = useLanguage()

  const steps = [
    {
      icon: Search,
      number: "01",
      title: t("process.assess.title"),
      description: t("process.assess.description"),
      highlights: [
        t("process.assess.detail1"),
        t("process.assess.detail2"),
      ],
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Wrench,
      number: "02",
      title: t("process.demos.title"),
      description: t("process.demos.description"),
      highlights: [
        t("process.demos.detail1"),
        t("process.demos.detail2"),
      ],
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Rocket,
      number: "03",
      title: t("process.deploy.title"),
      description: t("process.deploy.description"),
      highlights: [
        t("process.deploy.detail1"),
        t("process.deploy.detail2"),
      ],
      color: "from-emerald-600 to-green-500",
    },
  ]

  return (
    <section id="process" className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
          {t("process.title")}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-xl">{t("process.description")}</p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          {/* Connection Line */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2 rounded-full" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 -translate-y-1/2 rounded-full transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index <= activeStep
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="group relative"
                  >
                    <div
                      className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                        isActive ? "border-emerald-500 bg-emerald-500/20 scale-110" : "border-gray-600 bg-black/80"
                      }`}
                      style={{
                        boxShadow: isActive ? "0 0 30px rgba(34, 197, 94, 0.5)" : "none",
                      }}
                    >
                      <Icon className={`w-10 h-10 transition-colors ${isActive ? "text-emerald-400" : "text-gray-500"}`} />
                    </div>

                    {/* Number badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                      isActive ? "border-emerald-500 bg-emerald-500 text-black" : "border-gray-600 bg-black text-gray-500"
                    }`}>
                      {step.number}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeStep === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg border-2 border-emerald-500/50 rounded-3xl p-10 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-8">
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-6 flex-shrink-0`}
                          style={{ boxShadow: "0 0 40px rgba(34, 197, 94, 0.3)" }}>
                          <Icon className="w-full h-full text-black" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-4xl font-bold text-white mb-4">{step.title}</h3>
                          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{step.description}</p>

                          <div className="grid grid-cols-2 gap-4">
                            {step.highlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-center gap-3 bg-black/40 rounded-xl p-4 border border-gray-700/50">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.8)" }} />
                                <span className="text-gray-200">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-700/50">
                        <button
                          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                          disabled={activeStep === 0}
                          className="text-gray-400 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                        >
                          <ArrowRight className="rotate-180 w-5 h-5" />
                          Previous
                        </button>

                        <div className="flex gap-2">
                          {steps.map((_, idx) => (
                            <div
                              key={idx}
                              className={`h-2 rounded-full transition-all ${
                                idx === activeStep ? "w-8 bg-emerald-500" : "w-2 bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                          disabled={activeStep === steps.length - 1}
                          className="text-gray-400 hover:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                        >
                          Next
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Vertical Cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeStep
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left transition-all duration-300 ${
                  isActive ? "scale-100" : "scale-95 opacity-60"
                }`}
              >
                <div className={`bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg border-2 rounded-3xl p-6 relative overflow-hidden ${
                  isActive ? "border-emerald-500/50" : "border-gray-700"
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} ${isActive ? "opacity-5" : "opacity-0"}`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4`}>
                        <Icon className="w-full h-full text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-emerald-400 font-bold mb-1">Step {step.number}</div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>

                    {isActive && (
                      <div className="mt-4 space-y-3">
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                        <div className="space-y-2">
                          {step.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center gap-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}