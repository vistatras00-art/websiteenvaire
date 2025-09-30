"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "fi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "header.letsTalk": "Let's Talk",

    // Hero Section
    "hero.online": "Online",
    "hero.title": "The Era of AI is Here",
    "hero.subtitle": "Envaire helps you master it",
    "hero.description":
      "We're a global collective of AI innovators, empowering you to leverage AI in ways that transform your business - no complexity; just elegant, value-driven solutions.",
    "hero.bookMeeting": "Book a Meeting",
    "hero.technologies": "Our core technologies",

    // Navigation
    "nav.services": "Services",
    "nav.process": "Process",

    // Services Section
    "services.title": "AI Automation Solutions That Drive Growth",
    "services.description":
      "Transform your business operations with intelligent automation that saves time, increases revenue, and eliminates repetitive work.",
    "services.social.title": "Social Media Automation",
    "services.social.description":
      "Automate your LinkedIn, Instagram, Facebook, and TikTok presence with AI-powered content generation, community management, and intelligent DM responses that engage your audience 24/7.",
    "services.social.benefit1": "AI content creation for all platforms",
    "services.social.benefit2": "Automated DM & comment responses",
    "services.social.benefit3": "Smart scheduling & community management",
    "services.data.title": "Data Entry Automation",
    "services.data.description":
      "Perfect for e-commerce businesses. Our smart AI data processing eliminates hours of manual data entry work, ensuring accuracy while saving thousands in labor costs monthly.",
    "services.data.benefit1": "Process thousands of entries in minutes",
    "services.data.benefit2": "99.9% accuracy with AI validation",
    "services.data.benefit3": "Seamless integration with your systems",
    "services.email.title": "Email Automation & Lead Generation",
    "services.email.description":
      "Intelligent email systems that automatically respond to inquiries, qualify leads, and generate new business opportunities while you focus on closing deals.",
    "services.email.benefit1": "Instant automated responses 24/7",
    "services.email.benefit2": "AI-powered lead qualification",
    "services.email.benefit3": "Smart follow-up sequences",
    "services.agents.title": "Voice AI",
    "services.agents.description":
      "Deploy intelligent AI agents that handle customer support, sales calls, and conversations with human-like quality across voice and chat channels, reducing support costs by up to 70%.",
    "services.agents.benefit1": "24/7 multilingual support",
    "services.agents.benefit2": "Natural voice & text conversations",
    "services.agents.benefit3": "Seamless human handoff when needed",
    "services.seo.title": "AI-Powered SEO Blog Automation",
    "services.seo.description":
      "Dominate search rankings with AI-generated, SEO-optimized blog content that drives organic traffic and establishes your authority. Automated content creation that ranks high and converts visitors into customers.",
    "services.seo.benefit1": "SEO-optimized content that ranks",
    "services.seo.benefit2": "Consistent publishing schedule",
    "services.seo.benefit3": "Keyword research & optimization included",
    "services.reputation.title": "Online Reputation Management",
    "services.reputation.description":
      "Protect and restore your brand's online reputation with AI-powered monitoring and response systems. Remove negative content, suppress bad reviews, and build a positive online presence that drives trust and sales.",
    "services.reputation.benefit1": "24/7 reputation monitoring",
    "services.reputation.benefit2": "Negative content suppression",
    "services.reputation.benefit3": "Review management & response",

    // CTA Sections
    "cta1.title": "Ready to Transform Your Business?",
    "cta1.description":
      "Let's assess your current workflows and identify the perfect AI automation opportunities for your business.",
    "cta1.button": "Get Assessed",
    "cta2.title": "Start Your AI Journey Today",
    "cta2.description": "Book a consultation to begin your three-step transformation with our proven process.",
    "cta2.button": "Get Assessed",

    // Process Section
    "process.title": "Our Process",
    "process.description":
      "A proven three-step approach that ensures successful AI implementation from concept to deployment.",
    "process.assess.title": "Assess",
    "process.assess.description":
      "We analyze your current workflows and identify automation opportunities that deliver maximum ROI.",
    "process.assess.detail1": "Business process mapping",
    "process.assess.detail2": "Technical requirements analysis",
    "process.assess.detail3": "ROI calculation",
    "process.assess.detail4": "Timeline planning",
    "process.demos.title": "Build Demos",
    "process.demos.description":
      "We create working prototypes that demonstrate the AI solution's capabilities with your actual data.",
    "process.demos.detail1": "Rapid prototyping",
    "process.demos.detail2": "Real data integration",
    "process.demos.detail3": "User experience testing",
    "process.demos.detail4": "Stakeholder feedback",
    "process.deploy.title": "Deploy",
    "process.deploy.description":
      "We implement the full solution with comprehensive training and ongoing support for your team.",
    "process.deploy.detail1": "Production deployment",
    "process.deploy.detail2": "Team training",
    "process.deploy.detail3": "Performance monitoring",
    "process.deploy.detail4": "Continuous optimization",

    // Booking Modal
    "booking.title": "Book a Meeting with Envaire",
    "booking.subtitle": "Schedule a consultation to discuss how AI can transform your business",
    "booking.selectDate": "Select Date",
    "booking.selectTime": "Select Time",
    "booking.chooseTime": "Choose a time slot",
    "booking.fullName": "Full Name",
    "booking.enterName": "Enter your full name",
    "booking.email": "Email Address",
    "booking.enterEmail": "Enter your email address",
    "booking.company": "Company",
    "booking.enterCompany": "Enter your company name",
    "booking.message": "Message (Optional)",
    "booking.messagePlaceholder": "Tell us about your AI automation needs...",
    "booking.cancel": "Cancel",
    "booking.bookMeeting": "Book Meeting",
    "booking.summary": "Meeting Summary",

    // Footer
    "footer.businessId": "Business ID",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",

    // Terms of Service
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last Updated: June 25, 2025",
    "terms.backToHome": "Back to Home",
    "terms.welcome":
      'Welcome to Envaire.com ("we," "us," or "our"). These Terms of Service ("Terms") apply to your use of our website and booking services.',
    "terms.section1.title": "1. Use of Website",
    "terms.section1.content":
      "Our website provides information about our AI automation services and allows you to book consultation calls by submitting your contact details and service requests.",
    "terms.section2.title": "2. Booking Calls",
    "terms.section2.content":
      "By submitting a booking request, you agree to provide accurate and complete information. We will use this information solely to contact you and discuss your needs.",
    "terms.section3.title": "3. No Sale of Goods or Services on Site",
    "terms.section3.content":
      "Our website does not sell products or services directly. All arrangements for services occur separately during or after consultation.",
    "terms.section4.title": "4. Project Acceptance",
    "terms.section4.content":
      "At Envaire, we carefully assess every project inquiry to ensure we can deliver high-quality, effective AI automation solutions. We only proceed with projects that align with our expertise and resources to guarantee the best outcomes for our clients. This helps us maintain a high standard of service and avoid commitments that may not be feasible.",
    "terms.section5.title": "5. User Conduct",
    "terms.section5.content":
      "You agree not to misuse our website or provide false information. We reserve the right to refuse or cancel bookings at our discretion.",
    "terms.section6.title": "6. Privacy",
    "terms.section6.content":
      "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your data.",
    "terms.section7.title": "7. Changes to Terms",
    "terms.section7.content":
      "We may update these Terms at any time. Continued use of the website means you accept any changes.",
    "terms.contact.title": "Contact",
    "terms.contact.content": "Questions? Contact us at",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated: June 25, 2025",
    "privacy.backToHome": "Back to Home",
    "privacy.welcome":
      "At Envaire (Business ID: 3559524-3), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.",
    "privacy.section1.title": "1. Information We Collect",
    "privacy.section1.item1": "Contact details (name, email, phone) when you reach out to us.",
    "privacy.section1.item2": "Business information you provide when using our AI solutions.",
    "privacy.section1.item3": "Usage data, such as interactions with our website or AI tools.",
    "privacy.section2.title": "2. How We Use Your Information",
    "privacy.section2.item1": "To provide and improve our AI services.",
    "privacy.section2.item2": "To communicate with you about projects, support, or updates.",
    "privacy.section2.item3": "To comply with legal obligations.",
    "privacy.section3.title": "3. Data Sharing",
    "privacy.section3.content":
      "We do not sell your personal data. We may share information only with trusted service providers or if required by law.",
    "privacy.section4.title": "4. Data Security",
    "privacy.section4.content":
      "We use appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.",
    "privacy.section5.title": "5. Your Rights",
    "privacy.section5.content":
      "You may request access, correction, or deletion of your personal data at any time by contacting us.",
    "privacy.section6.title": "6. Contact",
    "privacy.section6.content":
      "If you have any questions about this Privacy Policy, please contact us at:",
  },
  fi: {
    // Header
    "header.letsTalk": "Keskustellaan",

    // Hero Section
    "hero.online": "Verkossa",
    "hero.title": "Tekoälyn aikakausi on täällä",
    "hero.subtitle": "Envaire auttaa sinua hallitsemaan sen",
    "hero.description":
      "Olemme maailmanlaajuinen tekoälyinnovaattoreiden kollektiivi, joka valtuuttaa sinut hyödyntämään tekoälyä tavoilla, jotka muuttavat liiketoimintaasi - ei monimutkaisuutta; vain elegantit, arvoa tuottavat ratkaisut.",
    "hero.bookMeeting": "Varaa tapaaminen",
    "hero.technologies": "Ydinteknologiamme",

    // Navigation
    "nav.services": "Palvelut",
    "nav.process": "Prosessi",

    // Services Section
    "services.title": "Tekoälyautomaatioratkaisut jotka kasvattavat liiketoimintaa",
    "services.description":
      "Muuta liiketoimintasi tehokkuutta älykkäällä automaatiolla, joka säästää aikaa, kasvattaa liikevaihtoa ja eliminoi toistuvat työt.",
    "services.social.title": "Sosiaalisen median automaatio",
    "services.social.description":
      "Automatisoi LinkedIn-, Instagram-, Facebook- ja TikTok-läsnäolosi tekoälypohjaisella sisällöntuotannolla, yhteisöhallinnalla ja älykkäillä DM-vastauksilla, jotka sitouttavat yleisöäsi 24/7.",
    "services.social.benefit1": "Tekoälyn sisällöntuotanto kaikille alustoille",
    "services.social.benefit2": "Automatisoidut DM- ja kommenttivastaukset",
    "services.social.benefit3": "Älykäs aikataulutus & yhteisöhallinta",
    "services.data.title": "Tietojen syöttöautomaatio",
    "services.data.description":
      "Täydellinen verkkokauppayrityksille. Älykäs tekoälypohjainen tietojenkäsittely eliminoi tunnit manuaalista työtä, taaten tarkkuuden ja säästäen tuhansia euroja työvoimakustannuksissa kuukausittain.",
    "services.data.benefit1": "Käsittele tuhansia merkintöjä minuuteissa",
    "services.data.benefit2": "99,9% tarkkuus tekoälyvalidoinnilla",
    "services.data.benefit3": "Saumaton integraatio järjestelmiisi",
    "services.email.title": "Sähköpostiautomaatio & liidit",
    "services.email.description":
      "Älykkäät sähköpostijärjestelmät, jotka vastaavat automaattisesti kyselyihin, kvalifioivat liidejä ja luovat uusia liiketoimintamahdollisuuksia, kun keskityt kauppojen sulkemiseen.",
    "services.email.benefit1": "Välittömät automaattiset vastaukset 24/7",
    "services.email.benefit2": "Tekoälypohjainen liidien kvalifiointi",
    "services.email.benefit3": "Älykkäät seurantasekvenssit",
    "services.agents.title": "Ääni- ja chat-tekoälyagentit",
    "services.agents.description":
      "Ota käyttöön älykkäät tekoälyagentit, jotka hoitavat asiakastukea, myyntipuheluita ja keskusteluja ihmismäisellä laadulla ääni- ja chat-kanavissa, vähentäen tukikustannuksia jopa 70%.",
    "services.agents.benefit1": "24/7 monikielinen tuki",
    "services.agents.benefit2": "Luonnolliset ääni- ja tekstikeskustelut",
    "services.agents.benefit3": "Saumaton siirto ihmiselle tarvittaessa",
    "services.seo.title": "Tekoälypohjainen SEO-blogiautomaatio",
    "services.seo.description":
      "Hallitse hakutuloksia tekoälyn tuottamalla, SEO-optimoidulla blogisisällöllä, joka kasvattaa orgaanista liikennettä ja vahvistaa auktoriteettisi. Automatisoitu sisällöntuotanto, joka sijoittuu korkealle ja muuttaa kävijät asiakkaiksi.",
    "services.seo.benefit1": "SEO-optimoitu sisältö, joka rankataan",
    "services.seo.benefit2": "Johdonmukainen julkaisuaikataulu",
    "services.seo.benefit3": "Avainsanatutkimus & optimointi mukana",
    "services.reputation.title": "Verkkoreputaation hallinta",
    "services.reputation.description":
      "Suojele ja palauta brändisi verkkoreputaatio tekoälypohjaisella valvonta- ja vastaamisjärjestelmällä. Poista negatiivista sisältöä, tukahduta huonoja arvosteluja ja rakenna positiivinen verkkoläsnäolo, joka herättää luottamusta ja kasvattaa myyntiä.",
    "services.reputation.benefit1": "24/7 reputaation valvonta",
    "services.reputation.benefit2": "Negatiivisen sisällön tukahduttaminen",
    "services.reputation.benefit3": "Arvostelujen hallinta & vastaus",

    // CTA Sections
    "cta1.title": "Valmis muuttamaan liiketoimintaasi?",
    "cta1.description":
      "Arvioidaan nykyiset työnkulkusi ja tunnistetaan täydelliset tekoälyautomaatiomahdollisuudet liiketoiminnallesi.",
    "cta1.button": "Hanki arviointi",
    "cta2.title": "Aloita tekoälymatkasi tänään",
    "cta2.description": "Varaa konsultaatio aloittaaksesi kolmivaiheisen muutoksesi todistetulla prosessillamme.",
    "cta2.button": "Hanki arviointi",

    // Process Section
    "process.title": "Prosessimme",
    "process.description":
      "Todistettu kolmivaiheinen lähestymistapa, joka varmistaa onnistuneen tekoälyn käyttöönoton konseptista käyttöönottoon.",
    "process.assess.title": "Arviointi",
    "process.assess.description":
      "Analysoimme nykyiset työnkulkusi ja tunnistamme automaatiomahdollisuudet, jotka tuottavat maksimaalisen sijoitetun pääoman tuoton.",
    "process.assess.detail1": "Liiketoimintaprosessien kartoitus",
    "process.assess.detail2": "Teknisten vaatimusten analyysi",
    "process.assess.detail3": "ROI-laskenta",
    "process.assess.detail4": "Aikataulun suunnittelu",
    "process.demos.title": "Demojen rakentaminen",
    "process.demos.description":
      "Luomme toimivia prototyyppejä, jotka osoittavat tekoälyratkaisun kyvyt todellisilla tiedoillasi.",
    "process.demos.detail1": "Nopea prototyyppien kehitys",
    "process.demos.detail2": "Todellisten tietojen integrointi",
    "process.demos.detail3": "Käyttökokemuksen testaus",
    "process.demos.detail4": "Sidosryhmien palaute",
    "process.deploy.title": "Käyttöönotto",
    "process.deploy.description":
      "Toteutamme täydellisen ratkaisun kattavalla koulutuksella ja jatkuvalla tuella tiimillesi.",
    "process.deploy.detail1": "Tuotantokäyttöönotto",
    "process.deploy.detail2": "Tiimin koulutus",
    "process.deploy.detail3": "Suorituskyvyn seuranta",
    "process.deploy.detail4": "Jatkuva optimointi",

    // Booking Modal
    "booking.title": "Varaa tapaaminen Envairen kanssa",
    "booking.subtitle": "Ajoita konsultaatio keskustellaksesi siitä, miten tekoäly voi muuttaa liiketoimintaasi",
    "booking.selectDate": "Valitse päivämäärä",
    "booking.selectTime": "Valitse aika",
    "booking.chooseTime": "Valitse aikavälisi",
    "booking.fullName": "Koko nimi",
    "booking.enterName": "Syötä koko nimesi",
    "booking.email": "Sähköpostiosoite",
    "booking.enterEmail": "Syötä sähköpostiosoitteesi",
    "booking.company": "Yritys",
    "booking.enterCompany": "Syötä yrityksesi nimi",
    "booking.message": "Viesti (Valinnainen)",
    "booking.messagePlaceholder": "Kerro meille tekoälyautomaatiotarpeistasi...",
    "booking.cancel": "Peruuta",
    "booking.bookMeeting": "Varaa tapaaminen",
    "booking.summary": "Tapaamisen yhteenveto",

    // Footer
    "footer.businessId": "Y-tunnus",
    "footer.termsOfService": "Käyttöehdot",
    "footer.privacyPolicy": "Tietosuojakäytäntö",

    // Terms of Service
    "terms.title": "Käyttöehdot",
    "terms.lastUpdated": "Viimeksi päivitetty: 25. kesäkuuta 2025",
    "terms.backToHome": "Takaisin etusivulle",
    "terms.welcome":
      'Tervetuloa Envaire.com-sivustolle ("me", "meidän" tai "meidät"). Nämä käyttöehdot ("Ehdot") koskevat verkkosivustomme ja varauspalveluidemme käyttöä.',
    "terms.section1.title": "1. Verkkosivuston käyttö",
    "terms.section1.content":
      "Verkkosivustomme tarjoaa tietoa tekoälyautomaatiopalveluistamme ja mahdollistaa konsultaatiopuhelujen varaamisen lähettämällä yhteystietosi ja palvelupyynnöt.",
    "terms.section2.title": "2. Puhelujen varaaminen",
    "terms.section2.content":
      "Lähettämällä varauspyynnön sitoudut antamaan tarkkoja ja täydellisiä tietoja. Käytämme näitä tietoja ainoastaan ottaaksemme sinuun yhteyttä ja keskustellaksemme tarpeistasi.",
    "terms.section3.title": "3. Ei tuotteiden tai palveluiden myyntiä sivustolla",
    "terms.section3.content":
      "Verkkosivustomme ei myy tuotteita tai palveluita suoraan. Kaikki palvelujärjestelyt tapahtuvat erikseen konsultaation aikana tai sen jälkeen.",
    "terms.section4.title": "4. Projektin hyväksyminen",
    "terms.section4.content":
      "Envairessa arvioimme huolellisesti jokaisen projektikyselyn varmistaaksemme, että voimme toimittaa korkealaatuisia, tehokkaita tekoälyautomaatioratkaisuja. Jatkamme vain projektien kanssa, jotka sopivat asiantuntemukseemme ja resursseihin taataksemme parhaat tulokset asiakkaillemme. Tämä auttaa meitä ylläpitämään korkeaa palvelutasoa ja välttämään sitoumuksia, jotka eivät ehkä ole toteutettavissa.",
    "terms.section5.title": "5. Käyttäjän käyttäytyminen",
    "terms.section5.content":
      "Sitoudut olemaan väärinkäyttämättä verkkosivustoamme tai antamatta vääriä tietoja. Pidätämme oikeuden kieltäytyä tai peruuttaa varauksia harkintamme mukaan.",
    "terms.section6.title": "6. Yksityisyys",
    "terms.section6.content":
      "Yksityisyytesi on meille tärkeää. Tutustu tietosuojakäytäntöömme ymmärtääksesi, miten keräämme ja käytämme tietojasi.",
    "terms.section7.title": "7. Ehtojen muutokset",
    "terms.section7.content":
      "Voimme päivittää näitä ehtoja milloin tahansa. Verkkosivuston jatkuva käyttö tarkoittaa, että hyväksyt mahdolliset muutokset.",
    "terms.contact.title": "Yhteystiedot",
    "terms.contact.content": "Kysymyksiä? Ota yhteyttä osoitteeseen",

    // Privacy Policy
    "privacy.title": "Tietosuojakäytäntö",
    "privacy.lastUpdated": "Viimeksi päivitetty: 25. kesäkuuta 2025",
    "privacy.backToHome": "Takaisin etusivulle",
    "privacy.welcome":
      "Envairessa (Y-tunnus: 3559524-3) kunnioitamme yksityisyyttäsi ja olemme sitoutuneet suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, miten keräämme, käytämme ja suojaamme tietojasi, kun käytät palveluitamme.",
    "privacy.section1.title": "1. Keräämämme tiedot",
    "privacy.section1.item1": "Yhteystiedot (nimi, sähköposti, puhelin), kun otat meihin yhteyttä.",
    "privacy.section1.item2": "Liiketoimintatiedot, jotka annat käyttäessäsi tekoälyratkaisujamme.",
    "privacy.section1.item3": "Käyttötiedot, kuten vuorovaikutukset verkkosivustomme tai tekoälytyökalujemme kanssa.",
    "privacy.section2.title": "2. Miten käytämme tietojasi",
    "privacy.section2.item1": "Tekoälypalveluidemme tarjoamiseen ja parantamiseen.",
    "privacy.section2.item2": "Viestintään projekteihin, tukeen tai päivityksiin liittyen.",
    "privacy.section2.item3": "Lakisääteisten velvoitteiden noudattamiseen.",
    "privacy.section3.title": "3. Tietojen jakaminen",
    "privacy.section3.content":
      "Emme myy henkilötietojasi. Voimme jakaa tietoja vain luotettujen palveluntarjoajien kanssa tai lain vaatimana.",
    "privacy.section4.title": "4. Tietoturva",
    "privacy.section4.content":
      "Käytämme asianmukaisia teknisiä ja organisatorisia toimenpiteitä suojaamaan tietojasi luvattomalta käytöltä, katoamiselta tai väärinkäytöltä.",
    "privacy.section5.title": "5. Oikeutesi",
    "privacy.section5.content":
      "Voit milloin tahansa pyytää pääsyä, korjausta tai poistamista henkilötietoihisi ottamalla meihin yhteyttä.",
    "privacy.section6.title": "6. Yhteystiedot",
    "privacy.section6.content":
      "Jos sinulla on kysymyksiä tästä tietosuojakäytännöstä, ota yhteyttä:",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
