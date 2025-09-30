"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PrivacyPage() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden">
      {/* Mouse follower glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.06), transparent 40%)`,
        }}
      />

      {/* Background pattern with enhanced green glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35)_0,transparent_70%)] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-green-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-emerald-400 p-0">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("privacy.backToHome")}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-400 mb-8">{t("privacy.lastUpdated")}</p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-black/40 border border-gray-800 rounded-lg p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">{t("privacy.welcome")}</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">{t("privacy.section1.title")}</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>{t("privacy.section1.item1")}</li>
                    <li>{t("privacy.section1.item2")}</li>
                    <li>{t("privacy.section1.item3")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">{t("privacy.section2.title")}</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>{t("privacy.section2.item1")}</li>
                    <li>{t("privacy.section2.item2")}</li>
                    <li>{t("privacy.section2.item3")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">{t("privacy.section3.title")}</h2>
                  <p className="text-gray-300 leading-relaxed">{t("privacy.section3.content")}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">{t("privacy.section4.title")}</h2>
                  <p className="text-gray-300 leading-relaxed">{t("privacy.section4.content")}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">{t("privacy.section5.title")}</h2>
                  <p className="text-gray-300 leading-relaxed">{t("privacy.section5.content")}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">{t("privacy.section6.title")}</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t("privacy.section6.content")}
                  </p>
                  <div className="mt-4 pl-4 text-gray-300">
                    <p className="mb-1">Envaire</p>
                    <p className="mb-1">{t("footer.businessId")}: 3559524-3</p>
                    <p>Email: <a href="mailto:info@envaire.com" className="text-emerald-400 hover:text-emerald-300 underline">info@envaire.com</a></p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-800 pt-8">
          <div className="max-w-4xl mx-auto flex justify-center items-center gap-4">
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
              {t("footer.termsOfService")}
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
