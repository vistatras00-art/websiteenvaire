"use client"

import { useState } from "react"
import { Share2, Database, Mail, MessageSquare, FileText, Shield, ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(0)
  const { t } = useLanguage()

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('contact')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Share2,
      title: t("services.social.title"),
      shortDesc: "Automate LinkedIn, Instagram, Facebook & TikTok content creation, scheduling, and engagement to build your brand presence while you focus on growing your business.",
      benefits: [
        t("services.social.benefit1"),
        t("services.social.benefit2"),
        t("services.social.benefit3"),
      ],
      features: [
        "AI-generated posts tailored to each platform",
        "Automated scheduling across all networks",
        "Smart engagement and response system",
        "Analytics and performance tracking"
      ],
      color: "from-emerald-500 to-green-400",
      stat: "10x",
      statLabel: "Engagement",
    },
    {
      icon: Database,
      title: t("services.data.title"),
      shortDesc: "Transform raw data into perfect product listings with AI-powered data entry for e-commerce stores, marketplaces, and inventory systems.",
      benefits: [t("services.data.benefit1"), t("services.data.benefit2"), t("services.data.benefit3")],
      features: [
        "Automated product catalog creation",
        "Image optimization and tagging",
        "Category mapping and organization",
        "Multi-channel inventory sync"
      ],
      color: "from-green-500 to-emerald-400",
      stat: "99.9%",
      statLabel: "Accuracy",
    },
    {
      icon: Mail,
      title: t("services.email.title"),
      shortDesc: "Never miss a lead again with AI email automation that responds instantly, qualifies prospects, and books meetings while you sleep.",
      benefits: [t("services.email.benefit1"), t("services.email.benefit2"), t("services.email.benefit3")],
      features: [
        "Instant intelligent auto-responses",
        "Lead scoring and qualification",
        "Automated follow-up sequences",
        "CRM integration and sync"
      ],
      color: "from-emerald-600 to-green-500",
      stat: "24/7",
      statLabel: "Automated",
    },
    {
      icon: MessageSquare,
      title: t("services.agents.title"),
      shortDesc: "Deploy AI agents with human-like conversation abilities that handle customer support, sales calls, and inquiries across voice and chat channels.",
      benefits: [t("services.agents.benefit1"), t("services.agents.benefit2"), t("services.agents.benefit3")],
      features: [
        "Natural voice and chat conversations",
        "Multilingual support capabilities",
        "Smart call routing and escalation",
        "Integration with your existing systems"
      ],
      color: "from-green-600 to-emerald-500",
      stat: "70%",
      statLabel: "Cost Savings",
    },
    {
      icon: FileText,
      title: t("services.seo.title"),
      shortDesc: "Dominate search results with AI-generated, SEO-optimized blog content that ranks high, drives organic traffic, and converts visitors into customers automatically.",
      benefits: [t("services.seo.benefit1"), t("services.seo.benefit2"), t("services.seo.benefit3")],
      features: [
        "Keyword research and targeting",
        "Automated content generation",
        "On-page SEO optimization",
        "Performance tracking and analytics"
      ],
      color: "from-emerald-500 to-green-500",
      stat: "#1",
      statLabel: "Rankings",
    },
    {
      icon: Shield,
      title: t("services.reputation.title"),
      shortDesc: "Protect your brand with 24/7 AI monitoring that detects negative content, suppresses bad reviews, and builds a positive online presence that drives trust and sales.",
      benefits: [t("services.reputation.benefit1"), t("services.reputation.benefit2"), t("services.reputation.benefit3")],
      features: [
        "Real-time reputation monitoring",
        "Negative content detection and alerts",
        "Review response automation",
        "Positive content amplification"
      ],
      color: "from-green-500 to-emerald-600",
      stat: "24/7",
      statLabel: "Monitoring",
    },
  ]

  const selectedServiceData = services[selectedService]
  const SelectedIcon = selectedServiceData.icon

  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
          {t("services.title")}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-xl">{t("services.description")}</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Service Selector Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isSelected = selectedService === index
            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 group ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-500/20 scale-105"
                    : "border-gray-700 bg-black/40 hover:border-emerald-500/50 hover:bg-black/60"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 transition-transform duration-300 ${
                      isSelected ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-full h-full text-black" />
                  </div>
                  <span className={`text-xs font-semibold text-center ${isSelected ? "text-emerald-300" : "text-gray-400"}`}>
                    {service.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </div>
                {isSelected && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 animate-pulse" />
                )}
              </button>
            )
          })}
        </div>

        {/* Featured Service Display */}
        <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg border-2 border-emerald-500/50 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Animated background glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${selectedServiceData.color} opacity-5`} />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Icon and Title */}
            <div>
              <div className="mb-6">
                <div
                  className={`inline-flex w-24 h-24 rounded-3xl bg-gradient-to-br ${selectedServiceData.color} p-6 mb-4`}
                  style={{ boxShadow: "0 0 40px rgba(34, 197, 94, 0.4)" }}
                >
                  <SelectedIcon className="w-full h-full text-black" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedServiceData.title}</h3>
              <p className="text-xl text-emerald-300 mb-6">{selectedServiceData.shortDesc}</p>

              {/* Stats */}
              <div className="flex items-center gap-8 mb-8">
                <div className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${selectedServiceData.color} bg-clip-text text-transparent`}>
                    {selectedServiceData.stat}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{selectedServiceData.statLabel}</div>
                </div>
              </div>

              <Button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black font-bold px-8 py-6 text-lg rounded-full group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right: Benefits & Features */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">Key Benefits</h4>
                {selectedServiceData.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">What's Included</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedServiceData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
