import { Injectable, signal } from '@angular/core';

export type LanguageCode = 'en' | 'es' | 'de' | 'ur' | 'ja' | 'zh' | 'fr';

const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  en: 'English',
  es: 'Spanish',
  de: 'German',
  ur: 'Urdu',
  ja: 'Japanese',
  zh: 'Chinese',
  fr: 'French',
};

const SUPPORTED_LANGUAGES: LanguageCode[] = ['en', 'es', 'de', 'ur', 'ja', 'zh', 'fr'];

type TranslationDictionary = Record<string, string>;

const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    // Header
    'header.nav.services': 'Services',
    'header.nav.about': 'About Us',
    'header.nav.whyUs': 'Why Us',
    'header.nav.work': 'Our Projects',
    'header.nav.process': 'Build Journey',
    'header.nav.contact': 'Contact',
    'header.cta.getInTouch': 'Get in Touch',
    'header.menu.open': 'Open menu',
    'header.menu.close': 'Close menu',
    'header.language.label': 'Language',

    // Hero
    'hero.badge': 'TECH studio — powered by young talent',
    'hero.quote': 'Intelligence is the ability to adapt to change.',
    'hero.quote2': 'Adaptability is the simple secret of survival.',
    'hero.quote3': 'Innovation distinguishes between a leader and a follower.',
    'hero.quote4': 'The only way to do great work is to love what you do.',
    'hero.quote5': 'Change is the end result of all true learning.',
    'hero.whatsNew': "What's New",
    'hero.title.prefix': 'We Build',
    'hero.title.highlight': 'Digital Experiences',
    'hero.title.suffix': 'That Scale Across Borders',
    'hero.subtitle':
      'We are a young team of developers combining solid engineering with powerful AI tooling — designing, building, documenting and testing modern products that feel great to use.',
    'hero.primaryCta': 'Explore Our Services',
    'hero.secondaryCta': 'Start a Project',
    'hero.stat.global': 'Global',
    'hero.stat.reach': 'Reach',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': 'Support',
    'hero.stat.enterprise': 'Enterprise',
    'hero.stat.grade': 'Grade',
    'hero.scroll': 'Scroll to explore',
    'hero.geoPopup.message': "We've detected you're in a different region. Would you like to view the site in your preferred language?",
    'hero.geoPopup.useSuggested': 'Use',
    'hero.geoPopup.continueEnglish': 'Continue in English',

    // Contact
    'contact.sectionTag': 'Contact',
    'contact.title': "Let's Build Something Together",
    'contact.lead':
      "Whether you have a new project in mind, need support for an existing application, or want to explore how we can help — we're here. Reach out and we'll get back to you promptly.",
    'contact.label.email': 'Email',
    'contact.value.services': 'Web Apps · Mobile Apps · Maintenance & Support',
    'contact.label.services': 'Services',
    'contact.label.reach': 'Reach',
    'contact.value.reach': 'Serving clients globally — we work across time zones.',
    'contact.form.name': 'Your Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'john@company.com',
    'contact.form.company': 'Company (optional)',
    'contact.form.company.placeholder': 'Your company',
    'contact.form.message': 'How can we help?',
    'contact.form.message.placeholder': 'Tell us about your project or inquiry...',
    'contact.form.submit': 'Send Message',
    'contact.form.thankYou': "Thank you! We'll get back to you soon.",

    // Footer
    'footer.tagline': 'IT solutions for businesses without borders. Part of Hanisha Exim.',
    'footer.nav.services': 'Services',
    'footer.nav.about': 'About Us',
    'footer.nav.whyUs': 'Why Us',
    'footer.nav.process': 'Build Journey',
    'footer.nav.work': 'Our Projects',
    'footer.nav.contact': 'Contact',
    'footer.copyright': 'TECH Studio. All rights reserved.',

    // About
    'about.sectionTag': 'About Us',
    'about.title': 'A young studio for modern IT',
    'about.lead':
      'TECH Studio is an independent startup led by young engineers focused on building dependable, future-ready IT systems. We pair human creativity with AI-assisted development to move fast without losing quality.',
    'about.text':
      'From customer-facing applications to internal tools, we design, build, document, and test everything with your long-term maintainability in mind. Our team cares about clean code, clear documentation, and experiences that feel effortless for your customers and your staff.',
    'about.point1': 'Cross-border project delivery and communication',
    'about.point2': 'Timezone-friendly support for international clients',
    'about.point3': 'Scalable architectures for global user bases',
    'about.point4': 'Security and compliance best practices',
    'about.card.globalFirst.title': 'Global First',
    'about.card.globalFirst.text': 'Designed for clients and users anywhere in the world.',
    'about.card.globalFirst.extra':
      'We deliver global IT services and software development for international clients. Our solutions support multiple time zones, languages, and regions — helping businesses scale worldwide. Find expert web development, mobile apps, and digital transformation services that work across borders.',
    'about.card.trustedPartner.title': 'Trusted Partner',
    'about.card.trustedPartner.text': 'A transparent, startup-sized team you can actually talk to.',

    // Services
    'services.sectionTag': 'What We Offer',
    'services.title': 'Full-Spectrum IT Services for Your Business',
    'services.subtitle':
      'From concept to deployment and beyond — we handle design, development, AI-assisted implementation, documentation, and testing so you can focus on growing your business.',
    'services.web.title': 'Web Application Development',
    'services.web.lead':
      "We design and build responsive, scalable web applications that work flawlessly for users everywhere — whether they're on desktop, tablet, or mobile browsers.",
    'services.web.point1':
      'Frontend & Backend: Modern frameworks (Angular, React, Vue, Node.js, .NET) for fast, maintainable applications.',
    'services.web.point2':
      'APIs & Integrations: RESTful and GraphQL APIs; seamless integration with third-party services and your existing systems.',
    'services.web.point3':
      'Cloud & DevOps: Deployment on AWS, Azure, or GCP with CI/CD pipelines for reliable releases.',
    'services.web.point4':
      'E-commerce & Portals: Online stores, customer portals, dashboards, and internal tools tailored to your workflow.',
    'services.web.cta': 'Discuss your web project →',

    'services.mobile.title': 'Mobile Application Development',
    'services.mobile.lead':
      'Native and cross-platform mobile apps that deliver a premium experience on iOS and Android, reaching your customers wherever they are.',
    'services.mobile.point1':
      'Native & Cross-Platform: Swift/Kotlin for native performance, or React Native / Flutter for one codebase, two platforms.',
    'services.mobile.point2':
      'UX & Performance: Smooth animations, offline capability, and battery-efficient design.',
    'services.mobile.point3':
      'App Store & Play Store: Full support for publishing, updates, and compliance with store guidelines.',
    'services.mobile.point4':
      'Enterprise Apps: Internal tools, field apps, and B2B solutions with security and device management in mind.',
    'services.mobile.cta': 'Plan your mobile app →',

    'services.maintenance.title': 'Application Maintenance & Support',
    'services.maintenance.lead':
      'Keep your existing applications secure, up-to-date, and performing at their best with proactive maintenance and round-the-clock support for international time zones.',
    'services.maintenance.point1':
      'Monitoring & Uptime: 24/7 monitoring, alerting, and quick response to incidents so your users stay unaffected.',
    'services.maintenance.point2':
      'Updates & Upgrades: Dependency updates, security patches, and version upgrades to keep tech debt under control.',
    'services.maintenance.point3':
      'Bug Fixes & Enhancements: Fast turnaround on fixes and small feature improvements without disrupting your operations.',
    'services.maintenance.point4':
      'Documentation & Handover: Clear documentation and smooth knowledge transfer so your team stays in control.',
    'services.maintenance.cta': 'Get maintenance support →',

    'services.cta.text':
      'Need a custom solution or a combination of services? We tailor our offerings to your goals.',
    'services.cta.button': "Let's Talk",

    // Process / How we work
    'process.sectionTag': 'Build Journey',
    'process.title': 'From first idea to launch',
    'process.subtitle':
      'From the first idea to post-launch support, we follow a proven path that keeps projects predictable, transparent, and aligned with your business goals.',
    'process.step1.title': 'Initial client contact',
    'process.step1.body':
      'We start with a short conversation to understand your idea, the problem you want to solve, who the users are, and what success looks like for your business.',
    'process.step2.title': 'Discovery & requirements',
    'process.step2.body':
      'We run workshops and interviews, map your workflows, research competitors, and capture detailed functional and non-functional requirements in an SRS.',
    'process.step3.title': 'Define scope & MVP',
    'process.step3.body':
      'Together we prioritise features, decide what goes into the first release (MVP), and what can be planned for later phases.',
    'process.step4.title': 'Technical feasibility',
    'process.step4.body':
      'We evaluate technology options, identify risks, and propose an architecture that fits your timelines, budget, and long-term roadmap.',
    'process.step5.title': 'Effort & estimation',
    'process.step5.body':
      'Using story points and task-level estimates, we convert requirements into a realistic timeline and budget for your team size.',
    'process.step6.title': 'Proposal & agreement',
    'process.step6.body':
      'You receive a written proposal covering scope, milestones, commercial terms, and any NDAs. Once signed, the project formally kicks off.',
    'process.step7.title': 'Product planning',
    'process.step7.body':
      'We translate scope into a product backlog, write user stories, and define acceptance criteria so every feature has a clear definition of “done”.',
    'process.step8.title': 'UI/UX design',
    'process.step8.body':
      'Our designers create wireframes, user flows, and high-fidelity screens in tools like Figma so you can see and click through the experience before we build it.',
    'process.step9.title': 'System architecture',
    'process.step9.body':
      'We lock in database schemas, APIs, integrations, security considerations, and deployment topology in clear architecture diagrams.',
    'process.step10.title': 'Sprint planning',
    'process.step10.body':
      'We break work into 1–2 week sprints, select the highest-value stories, assign owners, and agree on the sprint goal.',
    'process.step11.title': 'Agile development loop',
    'process.step11.body':
      'During each sprint we build, test, review code, and run daily stand-ups to keep progress visible and unblock issues quickly.',
    'process.step12.title': 'CI/CD & quality gates',
    'process.step12.body':
      'Automated builds, tests, and code checks run on every change so we can ship faster with fewer regressions.',
    'process.step13.title': 'User acceptance testing',
    'process.step13.body':
      'You and your stakeholders test the product in a staging environment to confirm it works for real-world scenarios before go-live.',
    'process.step14.title': 'Production launch',
    'process.step14.body':
      'We deploy to your chosen cloud, configure monitoring and logging, and make sure the cut-over is smooth for your users.',
    'process.step15.title': 'Post-launch support',
    'process.step15.body':
      'After launch we stay with you for bug fixes, performance tuning, minor enhancements, and planning for the next set of features.',
    'process.sidebar.title': 'Built for predictable delivery',
    'process.sidebar.body':
      'Every engagement follows this same backbone, adapted to your company size and domain so you always know where we are in the journey.',
    'process.sidebar.point1': 'Full visibility from idea to launch.',
    'process.sidebar.point2': 'Regular demos and feedback loops every sprint.',
    'process.sidebar.point3': 'Clear owners, timelines, and quality checks at every stage.',

    // Why Choose Us
    'why.sectionTag': 'Why TECH Studio',
    'why.title': 'Built for International Success',
    'why.subtitle':
      "We're not just another development shop. We're your long-term technology partner, designed from the ground up to serve businesses operating across borders.",
    'why.reason1.title': 'Global-Ready Delivery',
    'why.reason1.text':
      "We work across time zones and borders. Clear communication, structured sprints, and reliable delivery schedules mean your project stays on track no matter where you're based.",
    'why.reason2.title': 'Enterprise-Grade Quality',
    'why.reason2.text':
      'From architecture to security and testing, we follow industry best practices. Your application is built to scale, remain secure, and perform under real-world load.',
    'why.reason3.title': 'End-to-End Ownership',
    'why.reason3.text':
      'From initial idea to launch and ongoing maintenance — we can own the full lifecycle. No handoff chaos; one team that understands your system inside out.',
    'why.reason4.title': 'Trust & Transparency',
    'why.reason4.text':
      'We work like an extension of your team: clear communication, honest timelines, and visibility into how your product is being designed, built, and tested.',

    // Portfolio
    'portfolio.sectionTag': 'Our Projects',
    'portfolio.title': 'What We Build',
    'portfolio.subtitle':
      'From web platforms to mobile apps and ongoing maintenance — we deliver solutions that help businesses grow. Here’s the kind of work we do for clients worldwide.',
    'portfolio.web.title': 'Web Applications',
    'portfolio.web.text':
      'Custom web apps: e-commerce, dashboards, portals, and SaaS products — responsive, secure, and built to scale for global users.',
    'portfolio.mobile.title': 'Mobile Apps',
    'portfolio.mobile.text':
      'iOS and Android apps for consumers and enterprises: from customer-facing products to internal tools and field applications.',
    'portfolio.maintenance.title': 'Maintenance & Support',
    'portfolio.maintenance.text':
      'Keeping existing systems running smoothly: monitoring, updates, bug fixes, and enhancements so your business never skips a beat.',
    'portfolio.cta.text':
      'Ready to start your project? Tell us about your goals and we’ll outline how we can help.',
    'portfolio.cta.button': 'Get in Touch',
  },

  // NOTE: Non-English translations are intentionally concise and can be refined later.
  es: {
    'header.nav.services': 'Servicios',
    'header.nav.about': 'Sobre nosotros',
    'header.nav.whyUs': 'Por qué nosotros',
    'header.nav.work': 'Nuestro trabajo',
    'header.nav.contact': 'Contacto',
    'header.cta.getInTouch': 'Contactar',
    'header.menu.open': 'Abrir menú',
    'header.menu.close': 'Cerrar menú',
    'header.language.label': 'Idioma',

    'hero.badge': 'Estudio de TI independiente — Impulsado por talento joven',
    'hero.quote': 'La inteligencia es la capacidad de adaptarse al cambio.',
    'hero.quote2': 'La adaptabilidad es el simple secreto de la supervivencia.',
    'hero.quote3': 'La innovación distingue a un líder de un seguidor.',
    'hero.quote4': 'La única forma de hacer un gran trabajo es amar lo que haces.',
    'hero.quote5': 'El cambio es el resultado de todo aprendizaje verdadero.',
    'hero.whatsNew': 'Novedades',
    'hero.title.prefix': 'Creamos',
    'hero.title.highlight': 'experiencias digitales',
    'hero.title.suffix': 'que escalan sin fronteras',
    'hero.subtitle':
      'Desde aplicaciones web y móviles hasta mantenimiento y soporte continuo, TECH Studio ofrece soluciones de TI de nivel empresarial para empresas de todo el mundo.',
    'hero.primaryCta': 'Explorar servicios',
    'hero.secondaryCta': 'Iniciar un proyecto',
    'hero.stat.global': 'Global',
    'hero.stat.reach': 'Alcance',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': 'Soporte',
    'hero.stat.enterprise': 'Empresarial',
    'hero.stat.grade': 'Nivel',
    'hero.scroll': 'Desplázate para explorar',
    'hero.geoPopup.message': 'Parece que estás en otra región. ¿Quieres ver el sitio en tu idioma?',
    'hero.geoPopup.useSuggested': 'Usar',
    'hero.geoPopup.continueEnglish': 'Continuar en inglés',

    'contact.sectionTag': 'Contacto',
    'contact.title': 'Construyamos algo juntos',
    'contact.lead':
      'Nuevo proyecto, soporte para una aplicación existente o simplemente explorar cómo podemos ayudar: estamos aquí para ti.',
    'contact.label.email': 'Correo electrónico',
    'contact.value.services': 'Aplicaciones web · Aplicaciones móviles · Mantenimiento y soporte',
    'contact.label.services': 'Servicios',
    'contact.label.reach': 'Alcance',
    'contact.value.reach': 'Clientes en todo el mundo — trabajamos en varios husos horarios.',
    'contact.form.name': 'Tu nombre',
    'contact.form.name.placeholder': 'Juan Pérez',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email.placeholder': 'juan@empresa.com',
    'contact.form.company': 'Empresa (opcional)',
    'contact.form.company.placeholder': 'Tu empresa',
    'contact.form.message': '¿Cómo podemos ayudar?',
    'contact.form.message.placeholder': 'Cuéntanos sobre tu proyecto o consulta...',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.thankYou': '¡Gracias! Te responderemos muy pronto.',

    'footer.tagline': 'Soluciones de TI sin fronteras. Parte de Hanisha Exim.',
    'footer.nav.services': 'Servicios',
    'footer.nav.about': 'Sobre nosotros',
    'footer.nav.whyUs': 'Por qué nosotros',
    'footer.nav.work': 'Nuestro trabajo',
    'footer.nav.contact': 'Contacto',
    'footer.copyright': 'TECH Studio. Todos los derechos reservados.',

    'about.sectionTag': 'Sobre nosotros',
    'about.title': 'Un estudio joven para TI moderna',
    'about.lead':
      'TECH Studio es una startup independiente dirigida por ingenieros jóvenes, centrada en crear sistemas de TI fiables y preparados para el futuro. Combinamos creatividad humana con desarrollo asistido por IA para avanzar rápido sin perder calidad.',
    'about.text':
      'Ya sea que necesites una aplicación web para tus clientes, una app móvil para tu equipo o mantenimiento confiable para sistemas existentes, combinamos profundidad técnica con un fuerte entendimiento de los negocios globales. No solo escribimos código; entregamos soluciones que ayudan a tu empresa a crecer sin fronteras.',
    'about.point1': 'Entrega de proyectos y comunicación entre países',
    'about.point2': 'Soporte en horarios compatibles con clientes internacionales',
    'about.point3': 'Arquitecturas escalables para bases de usuarios globales',
    'about.point4': 'Buenas prácticas de seguridad y cumplimiento normativo',
    'about.card.globalFirst.title': 'Global por defecto',
    'about.card.globalFirst.text': 'Diseñado para clientes y usuarios en cualquier parte del mundo.',
    'about.card.globalFirst.extra':
      'Ofrecemos servicios de TI globales y desarrollo de software para clientes internacionales. Soluciones para múltiples zonas horarias, idiomas y regiones — escalables en todo el mundo.',
    'about.card.trustedPartner.title': 'Socio de confianza',
    'about.card.trustedPartner.text': 'Un equipo cercano y transparente, orientado a resultados.',

    'services.sectionTag': 'Qué ofrecemos',
    'services.title': 'Servicios de TI de extremo a extremo para tu negocio',
    'services.subtitle':
      'Desde la idea inicial hasta el despliegue y más allá: cubrimos todas las etapas del ciclo de vida del software para que puedas centrarte en hacer crecer tu negocio a nivel global.',
    'services.web.title': 'Desarrollo de aplicaciones web',
    'services.web.lead':
      'Diseñamos y construimos aplicaciones web responsivas y escalables que funcionan perfectamente para usuarios en cualquier lugar y dispositivo.',
    'services.web.point1':
      'Frontend y backend: frameworks modernos (Angular, React, Vue, Node.js, .NET) para aplicaciones rápidas y mantenibles.',
    'services.web.point2':
      'APIs e integraciones: APIs REST y GraphQL; integración fluida con servicios de terceros y tus sistemas actuales.',
    'services.web.point3':
      'Cloud y DevOps: despliegue en AWS, Azure o GCP con pipelines CI/CD para entregas confiables.',
    'services.web.point4':
      'E‑commerce y portales: tiendas online, portales de clientes, paneles y herramientas internas a tu medida.',
    'services.web.cta': 'Habla con nosotros sobre tu proyecto web →',

    'services.mobile.title': 'Desarrollo de aplicaciones móviles',
    'services.mobile.lead':
      'Aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de primer nivel en iOS y Android, llegando a tus clientes donde estén.',
    'services.mobile.point1':
      'Nativo y multiplataforma: Swift/Kotlin para máximo rendimiento o React Native / Flutter para una sola base de código.',
    'services.mobile.point2':
      'UX y rendimiento: animaciones fluidas, funcionamiento sin conexión y consumo eficiente de batería.',
    'services.mobile.point3':
      'Publicación en tiendas: soporte completo para publicar, actualizar y cumplir con las normas de App Store y Play Store.',
    'services.mobile.point4':
      'Apps empresariales: herramientas internas, apps de campo y soluciones B2B con seguridad y gestión de dispositivos.',
    'services.mobile.cta': 'Planifica tu app móvil →',

    'services.maintenance.title': 'Mantenimiento y soporte de aplicaciones',
    'services.maintenance.lead':
      'Mantén tus aplicaciones seguras, actualizadas y con el mejor rendimiento gracias a un mantenimiento proactivo y soporte 24/7 para distintos husos horarios.',
    'services.maintenance.point1':
      'Monitoreo y disponibilidad: supervisión 24/7, alertas y respuesta rápida para que tus usuarios no se vean afectados.',
    'services.maintenance.point2':
      'Actualizaciones y mejoras: actualizaciones de dependencias, parches de seguridad y upgrades de versión.',
    'services.maintenance.point3':
      'Corrección de errores y mejoras: resolución rápida de bugs y pequeñas mejoras sin interrumpir tus operaciones.',
    'services.maintenance.point4':
      'Documentación y traspaso: documentación clara y traspaso ordenado del conocimiento a tu equipo.',
    'services.maintenance.cta': 'Obtén soporte de mantenimiento →',

    'services.cta.text':
      '¿Necesitas una solución a medida o una combinación de servicios? Adaptamos nuestra oferta a tus objetivos.',
    'services.cta.button': 'Hablemos',

    'why.sectionTag': 'Por qué TECH Studio',
    'why.title': 'Pensado para el éxito internacional',
    'why.subtitle':
      'No somos solo otra empresa de desarrollo. Somos tu socio tecnológico a largo plazo, diseñado desde el inicio para servir a negocios que operan entre países.',
    'why.reason1.title': 'Entrega lista para lo global',
    'why.reason1.text':
      'Trabajamos a través de husos horarios y fronteras. Comunicación clara, sprints estructurados y calendarios confiables mantienen tu proyecto en curso.',
    'why.reason2.title': 'Calidad de nivel empresarial',
    'why.reason2.text':
      'Desde la arquitectura hasta la seguridad y las pruebas, seguimos las mejores prácticas del sector para aplicaciones escalables y seguras.',
    'why.reason3.title': 'Responsabilidad de extremo a extremo',
    'why.reason3.text':
      'Desde la idea inicial hasta el lanzamiento y el mantenimiento continuo, podemos encargarnos de todo el ciclo de vida.',
    'why.reason4.title': 'Confianza y transparencia',
    'why.reason4.text':
      'Trabajamos como una extensión de tu equipo: comunicación clara, plazos honestos y visibilidad en cómo se diseña, desarrolla y prueba tu producto.',

    'portfolio.sectionTag': 'Nuestro trabajo',
    'portfolio.title': 'Lo que construimos',
    'portfolio.subtitle':
      'De plataformas web a aplicaciones móviles y mantenimiento continuo: entregamos soluciones que ayudan a crecer a los negocios.',
    'portfolio.web.title': 'Aplicaciones web',
    'portfolio.web.text':
      'Aplicaciones web a medida: comercio electrónico, paneles, portales y productos SaaS — seguras y listas para escalar.',
    'portfolio.mobile.title': 'Aplicaciones móviles',
    'portfolio.mobile.text':
      'Apps iOS y Android para consumidores y empresas, desde productos de cara al cliente hasta herramientas internas.',
    'portfolio.maintenance.title': 'Mantenimiento y soporte',
    'portfolio.maintenance.text':
      'Mantenemos tus sistemas funcionando sin problemas con monitoreo, actualizaciones y mejoras continuas.',
    'portfolio.cta.text':
      '¿Listo para empezar tu proyecto? Cuéntanos tus objetivos y te mostraremos cómo podemos ayudarte.',
    'portfolio.cta.button': 'Contactar',
  },

  de: {
    'header.nav.services': 'Leistungen',
    'header.nav.about': 'Über uns',
    'header.nav.whyUs': 'Warum wir',
    'header.nav.work': 'Unsere Arbeit',
    'header.nav.contact': 'Kontakt',
    'header.cta.getInTouch': 'Kontakt aufnehmen',
    'header.menu.open': 'Menü öffnen',
    'header.menu.close': 'Menü schließen',
    'header.language.label': 'Sprache',

    'hero.badge': 'Unabhängiges IT‑Studio – junges Talent im Fokus',
    'hero.quote': 'Intelligenz ist die Fähigkeit, sich dem Wandel anzupassen.',
    'hero.quote2': 'Anpassungsfähigkeit ist das einfache Geheimnis des Überlebens.',
    'hero.quote3': 'Innovation unterscheidet einen Leader von einem Mitläufer.',
    'hero.quote4': 'Großartige Arbeit gelingt nur, wenn man liebt, was man tut.',
    'hero.quote5': 'Wandel ist das Ergebnis allen wahren Lernens.',
    'hero.whatsNew': 'Neuigkeiten',
    'hero.title.prefix': 'Wir schaffen',
    'hero.title.highlight': 'digitale Erlebnisse',
    'hero.title.suffix': 'die über Grenzen hinweg skalieren',
    'hero.subtitle':
      'Von Web- und Mobilanwendungen bis zu Wartung und Support liefert TECH Studio IT-Lösungen in Unternehmensqualität für Kunden weltweit.',
    'hero.primaryCta': 'Unsere Leistungen entdecken',
    'hero.secondaryCta': 'Projekt starten',
    'hero.stat.global': 'Global',
    'hero.stat.reach': 'Reichweite',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': 'Support',
    'hero.stat.enterprise': 'Enterprise',
    'hero.stat.grade': 'Level',
    'hero.scroll': 'Scrollen zum Entdecken',
    'hero.geoPopup.message': 'Sie scheinen aus einer anderen Region zu sein. Möchten Sie die Seite in Ihrer Sprache anzeigen?',
    'hero.geoPopup.useSuggested': 'Verwenden',
    'hero.geoPopup.continueEnglish': 'Auf Englisch fortfahren',

    'contact.sectionTag': 'Kontakt',
    'contact.title': 'Lassen Sie uns gemeinsam etwas aufbauen',
    'contact.lead':
      'Neues Projekt, Unterstützung für bestehende Anwendungen oder einfach ein Gespräch – wir sind für Sie da.',
    'contact.label.email': 'E-Mail',
    'contact.value.services': 'Web-Apps · Mobile Apps · Wartung & Support',
    'contact.label.services': 'Leistungen',
    'contact.label.reach': 'Reichweite',
    'contact.value.reach': 'Kunden weltweit – wir arbeiten über Zeitzonen hinweg.',
    'contact.form.name': 'Ihr Name',
    'contact.form.name.placeholder': 'Max Mustermann',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'max@firma.com',
    'contact.form.company': 'Firma (optional)',
    'contact.form.company.placeholder': 'Ihre Firma',
    'contact.form.message': 'Wie können wir helfen?',
    'contact.form.message.placeholder': 'Erzählen Sie uns von Ihrem Projekt...',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.thankYou': 'Danke! Wir melden uns in Kürze.',

    'footer.tagline': 'IT-Lösungen ohne Grenzen. Teil von Hanisha Exim.',
    'footer.nav.services': 'Leistungen',
    'footer.nav.about': 'Über uns',
    'footer.nav.whyUs': 'Warum wir',
    'footer.nav.work': 'Unsere Arbeit',
    'footer.nav.contact': 'Kontakt',
    'footer.copyright': 'TECH Studio. Alle Rechte vorbehalten.',

    'about.sectionTag': 'Über uns',
    'about.title': 'Junges Studio für moderne IT',
    'about.lead':
      'TECH Studio ist ein unabhängiges Startup junger Ingenieurinnen und Ingenieure, das robuste, zukunftsfähige IT‑Systeme baut. Wir verbinden menschliche Erfahrung mit KI‑unterstützter Entwicklung, um schnell und dennoch sorgfältig zu liefern.',
    'about.text':
      'Ob kundenorientierte Webanwendung, mobile App für Ihr Team oder zuverlässige Wartung bestehender Systeme – wir verbinden technische Tiefe mit einem starken Verständnis für globale Geschäftsanforderungen.',
    'about.point1': 'Projektabwicklung und Kommunikation über Ländergrenzen hinweg',
    'about.point2': 'Zeitzonenfreundlicher Support für internationale Kunden',
    'about.point3': 'Skalierbare Architekturen für weltweite Nutzerbasen',
    'about.point4': 'Sicherheits- und Compliance-Best Practices',
    'about.card.globalFirst.title': 'Global First',
    'about.card.globalFirst.text': 'Für Kunden und Nutzer weltweit konzipiert.',
    'about.card.globalFirst.extra':
      'Wir liefern globale IT-Dienstleistungen und Softwareentwicklung für internationale Kunden. Mehrere Zeitzonen, Sprachen und Regionen — für weltweites Skalieren.',
    'about.card.trustedPartner.title': 'Vertrauenswürdiger Partner',
    'about.card.trustedPartner.text': 'Ein kleines, transparentes Team mit direktem Draht.',

    'services.sectionTag': 'Unser Angebot',
    'services.title': 'Umfassende IT-Services für Ihr Unternehmen',
    'services.subtitle':
      'Von der Idee bis zum Betrieb – wir decken jede Phase des Software-Lifecycles ab, damit Sie sich auf Ihr Wachstum konzentrieren können.',
    'services.web.title': 'Webanwendungs-Entwicklung',
    'services.web.lead':
      'Wir entwerfen und entwickeln responsive, skalierbare Webanwendungen, die auf allen Geräten und weltweit zuverlässig funktionieren.',
    'services.web.point1':
      'Frontend & Backend: Moderne Frameworks (Angular, React, Vue, Node.js, .NET) für schnelle, wartbare Anwendungen.',
    'services.web.point2':
      'APIs & Integrationen: REST- und GraphQL-APIs; nahtlose Anbindung an Drittsysteme und bestehende Infrastruktur.',
    'services.web.point3':
      'Cloud & DevOps: Deployment in AWS, Azure oder GCP mit CI/CD-Pipelines für stabile Releases.',
    'services.web.point4':
      'E‑Commerce & Portale: Onlineshops, Kundenportale, Dashboards und interne Tools, zugeschnitten auf Ihre Abläufe.',
    'services.web.cta': 'Sprechen Sie über Ihr Webprojekt →',

    'services.mobile.title': 'Mobile App-Entwicklung',
    'services.mobile.lead':
      'Native und plattformübergreifende Apps mit Premium-Erlebnis auf iOS und Android – dort, wo Ihre Nutzer sind.',
    'services.mobile.point1':
      'Native & Cross-Platform: Swift/Kotlin für maximale Performance oder React Native / Flutter für eine Codebasis.',
    'services.mobile.point2':
      'UX & Performance: Sanfte Animationen, Offline-Fähigkeit und effiziente Ressourcennutzung.',
    'services.mobile.point3':
      'App-Store-Betreuung: Unterstützung bei Veröffentlichung, Updates und Richtlinienkonformität.',
    'services.mobile.point4':
      'Enterprise-Apps: Interne Tools, Außendienst-Apps und B2B-Lösungen mit hoher Sicherheit.',
    'services.mobile.cta': 'Planen Sie Ihre Mobile App →',

    'services.maintenance.title': 'Anwendungswartung & Support',
    'services.maintenance.lead':
      'Halten Sie bestehende Anwendungen sicher, aktuell und performant – mit proaktiver Wartung und Support über Zeitzonen hinweg.',
    'services.maintenance.point1':
      'Monitoring & Verfügbarkeit: 24/7-Überwachung, Alarme und schnelle Reaktion auf Vorfälle.',
    'services.maintenance.point2':
      'Updates & Upgrades: Aktualisierung von Abhängigkeiten, Security-Patches und Versionswechsel.',
    'services.maintenance.point3':
      'Bugfixes & Verbesserungen: Schnelle Korrekturen und kleinere Erweiterungen ohne Betriebsunterbrechung.',
    'services.maintenance.point4':
      'Dokumentation & Übergabe: Klare Unterlagen und strukturierte Wissensübergabe an Ihr Team.',
    'services.maintenance.cta': 'Wartungs-Support erhalten →',

    'services.cta.text':
      'Benötigen Sie eine individuelle Lösung oder eine Kombination unserer Services? Wir richten uns nach Ihren Zielen.',
    'services.cta.button': 'Lassen Sie uns sprechen',

    'why.sectionTag': 'Warum TECH Studio',
    'why.title': 'Für internationalen Erfolg gebaut',
    'why.subtitle':
      'Wir sind nicht nur eine weitere Agentur. Wir sind Ihr langfristiger Technologiepartner für grenzüberschreitende Geschäftsmodelle.',
    'why.reason1.title': 'Global bereite Lieferung',
    'why.reason1.text':
      'Wir arbeiten über Zeitzonen und Länder hinweg. Klare Kommunikation und verlässliche Planung halten Ihr Projekt auf Kurs.',
    'why.reason2.title': 'Qualität auf Enterprise-Niveau',
    'why.reason2.text':
      'Architektur, Sicherheit, Tests – wir folgen Best Practices, damit Ihre Anwendung skaliert und sicher bleibt.',
    'why.reason3.title': 'End-to-End-Verantwortung',
    'why.reason3.text':
      'Von der Idee bis zur Wartung übernehmen wir auf Wunsch den kompletten Lebenszyklus Ihrer Lösung.',
    'why.reason4.title': 'Vertrauen & Transparenz',
    'why.reason4.text':
      'Wir arbeiten wie ein Teil Ihres Teams: klare Absprachen, ehrliche Zeitpläne und Einblick in Architektur, Entwicklung und Tests.',

    'portfolio.sectionTag': 'Unsere Arbeit',
    'portfolio.title': 'Was wir bauen',
    'portfolio.subtitle':
      'Von Webplattformen über Mobile Apps bis zu laufender Wartung – wir liefern Lösungen, die Unternehmen voranbringen.',
    'portfolio.web.title': 'Webanwendungen',
    'portfolio.web.text':
      'Individuelle Webapps: E‑Commerce, Dashboards, Portale und SaaS-Produkte – sicher und skalierbar.',
    'portfolio.mobile.title': 'Mobile Apps',
    'portfolio.mobile.text':
      'iOS- und Android-Apps für Endkunden und Unternehmen, von Kundenprodukten bis zu internen Tools.',
    'portfolio.maintenance.title': 'Wartung & Support',
    'portfolio.maintenance.text':
      'Wir halten Ihre bestehenden Systeme mit Monitoring, Updates und Verbesserungen in Betrieb.',
    'portfolio.cta.text':
      'Bereit für Ihr nächstes Projekt? Teilen Sie uns Ihre Ziele mit, und wir skizzieren unseren Ansatz.',
    'portfolio.cta.button': 'Kontakt aufnehmen',
  },

  ur: {
    'header.nav.services': 'سروسز',
    'header.nav.about': 'ہمارے بارے میں',
    'header.nav.whyUs': 'کیوں ہم',
    'header.nav.work': 'ہمارا کام',
    'header.nav.contact': 'رابطہ',
    'header.cta.getInTouch': 'رابطہ کریں',
    'header.menu.open': 'مینو کھولیں',
    'header.menu.close': 'مینو بند کریں',
    'header.language.label': 'زبان',

    'hero.badge': 'آزاد آئی ٹی اسٹوڈیو — نوجوان ٹیلنٹ کے ساتھ',
    'hero.quote': 'ذہانت تبدیلی کے مطابق ڈھلنے کی صلاحیت ہے۔',
    'hero.quote2': 'لچک بقا کا سادہ راز ہے۔',
    'hero.quote3': 'جدت ایک رہنما اور پیروکار میں فرق کرتی ہے۔',
    'hero.quote4': 'عظیم کام کرنے کا واحد طریقہ یہ ہے کہ آپ جو کرتے ہیں اس سے محبت کریں۔',
    'hero.quote5': 'تبدیلی حقیقی سیکھنے کا نتیجہ ہے۔',
    'hero.whatsNew': 'نیا کیا ہے',
    'hero.title.prefix': 'ہم',
    'hero.title.highlight': 'ڈیجیٹل تجربات',
    'hero.title.suffix': 'بناتے ہیں جو سرحدوں سے آگے بڑھتے ہیں',
    'hero.subtitle':
      'ویب اور موبائل ایپلیکیشنز سے لے کر مینٹیننس اور سپورٹ تک، ہنیشا ڈیجیٹل دنیا بھر کے کاروباروں کو انٹرپرائز سطح کے آئی ٹی حل فراہم کرتا ہے۔',
    'hero.primaryCta': 'ہماری سروسز دیکھیں',
    'hero.secondaryCta': 'پروجیکٹ شروع کریں',
    'hero.stat.global': 'عالمی',
    'hero.stat.reach': 'رسائی',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': 'سپورٹ',
    'hero.stat.enterprise': 'انٹرپرائز',
    'hero.stat.grade': 'لیول',
    'hero.scroll': 'مزید دیکھنے کے لئے اسکرول کریں',
    'hero.geoPopup.message': 'آپ کا علاقہ مختلف لگتا ہے۔ کیا آپ سائٹ اپنی زبان میں دیکھنا چاہیں گے؟',
    'hero.geoPopup.useSuggested': 'استعمال کریں',
    'hero.geoPopup.continueEnglish': 'انگریزی میں جاری رکھیں',

    'contact.sectionTag': 'رابطہ',
    'contact.title': 'آئیں مل کر کچھ بنائیں',
    'contact.lead':
      'نیا پروجیکٹ، موجودہ سسٹم کی سپورٹ یا مشورہ — ہم آپ کے لئے حاضر ہیں۔',
    'contact.label.email': 'ای میل',
    'contact.value.services': 'ویب ایپس · موبائل ایپس · مینٹیننس اور سپورٹ',
    'contact.label.services': 'سروسز',
    'contact.label.reach': 'رسائی',
    'contact.value.reach': 'دنیا بھر کے کلائنٹس — ہم مختلف ٹائم زونز میں کام کرتے ہیں۔',
    'contact.form.name': 'آپ کا نام',
    'contact.form.name.placeholder': 'احمد خان',
    'contact.form.email': 'ای میل',
    'contact.form.email.placeholder': 'ahmed@company.com',
    'contact.form.company': 'کمپنی (اختیاری)',
    'contact.form.company.placeholder': 'آپ کی کمپنی',
    'contact.form.message': 'ہم کیسے مدد کر سکتے ہیں؟',
    'contact.form.message.placeholder': 'اپنے پروجیکٹ یا درخواست کے بارے میں لکھیں...',
    'contact.form.submit': 'پیغام بھیجیں',
    'contact.form.thankYou': 'شکریہ! ہم جلد آپ سے رابطہ کریں گے۔',

    'footer.tagline': 'بغیر سرحدوں کے آئی ٹی حل۔ ہنیشا ایکزم کا حصہ۔',
    'footer.nav.services': 'سروسز',
    'footer.nav.about': 'ہمارے بارے میں',
    'footer.nav.whyUs': 'کیوں ہم',
    'footer.nav.work': 'ہمارا کام',
    'footer.nav.contact': 'رابطہ',
    'footer.copyright': 'ہنیشا ڈیجیٹل۔ جملہ حقوق محفوظ ہیں۔',

    'about.sectionTag': 'ہمارے بارے میں',
    'about.title': 'جدید آئی ٹی کے لیے نوجوان اسٹوڈیو',
    'about.lead':
      'ہنیشا ڈیجیٹل ایک آزاد اسٹارٹ اپ ہے جس کی قیادت نوجوان انجنیئرز کر رہے ہیں۔ ہم مضبوط اور مستقبل کے لیے تیار آئی ٹی سسٹمز بناتے ہیں اور انسانی مہارت کو طاقتور AI ٹولز کے ساتھ جوڑتے ہیں۔',
    'about.text':
      'چاہے آپ کو کسٹمر فیسنگ ویب ایپ، اپنی ٹیم کے لیے موبائل ایپ، یا موجودہ سسٹمز کے لیے قابلِ اعتماد مینٹیننس درکار ہو، ہم تکنیکی مہارت کو عالمی کاروباری تقاضوں کی سمجھ کے ساتھ جوڑتے ہیں۔',
    'about.point1': 'سرحد پار پروجیکٹ ڈلیوری اور کمیونی کیشن',
    'about.point2': 'بین الاقوامی کلائنٹس کے لیے ٹائم زون دوستانہ سپورٹ',
    'about.point3': 'عالمی یوزر بیس کے لیے اسکیلیبل آرکیٹیکچر',
    'about.point4': 'سیکیورٹی اور کمپلائنس کی بہترین روایات',
    'about.card.globalFirst.title': 'گلوبل فرسٹ',
    'about.card.globalFirst.text': 'دنیا کے کسی بھی حصے کے یوزرز اور کلائنٹس کے لیے ڈیزائن کیا گیا۔',
    'about.card.globalFirst.extra':
      'ہم بین الاقوامی کلائنٹس کے لیے عالمی IT سروسز اور سافٹ ویئر ڈیولپمنٹ فراہم کرتے ہیں۔ متعدد ٹائم زونز، زبانیں اور خطے — عالمی پیمانے پر۔',
    'about.card.trustedPartner.title': 'بااعتماد پارٹنر',
    'about.card.trustedPartner.text': 'ایک چھوٹی، شفاف ٹیم جو براہِ راست آپ سے جڑی رہتی ہے۔',

    'services.sectionTag': 'ہم کیا پیش کرتے ہیں',
    'services.title': 'آپ کے کاروبار کے لیے مکمل آئی ٹی سروسز',
    'services.subtitle':
      'آئیڈیا سے لے کر ڈپلائمنٹ اور اس کے بعد تک — ہم سافٹ ویئر لائف سائیکل کے ہر مرحلے کا احاطہ کرتے ہیں تاکہ آپ اپنی عالمی گروتھ پر توجہ دے سکیں۔',
    'services.web.title': 'ویب ایپلیکیشن ڈیویلپمنٹ',
    'services.web.lead':
      'ہم ریسپانسیو اور اسکیلیبل ویب ایپلیکیشنز بناتے ہیں جو ہر ڈیوائس اور ہر جگہ پر بہترین انداز سے کام کرتی ہیں۔',
    'services.web.point1':
      'فرنٹ اینڈ اور بیک اینڈ: جدید فریم ورک (Angular, React, Vue, Node.js, .NET) کے ساتھ تیز اور مینٹیبل ایپلی کیشنز۔',
    'services.web.point2':
      'APIs اور انٹیگریشنز: REST اور GraphQL APIs؛ تھرڈ پارٹی سروسز اور آپ کے موجودہ سسٹمز کے ساتھ ہموار انضمام۔',
    'services.web.point3':
      'کلاؤڈ اور ڈیواپس: AWS، Azure یا GCP پر ڈپلائمنٹ، CI/CD پائپ لائنز کے ساتھ۔',
    'services.web.point4':
      'ای کامرس اور پورٹل: آن لائن اسٹورز، کسٹمر پورٹل، ڈیش بورڈز اور اندرونی ٹولز۔',
    'services.web.cta': 'اپنے ویب پروجیکٹ پر بات کریں →',

    'services.mobile.title': 'موبائل ایپلیکیشن ڈیویلپمنٹ',
    'services.mobile.lead':
      'نیٹو اور کراس پلیٹ فارم موبائل ایپس جو iOS اور Android پر زبردست تجربہ فراہم کرتی ہیں۔',
    'services.mobile.point1':
      'نیٹو اور کراس پلیٹ فارم: Swift/Kotlin یا React Native / Flutter کے ساتھ ایک ہی کوڈ بیس۔',
    'services.mobile.point2':
      'UX اور پرفارمنس: ملائم اینیمیشنز، آف لائن صلاحیت اور کم بیٹری استعمال۔',
    'services.mobile.point3':
      'ایپ اسٹور اور پلے اسٹور: پبلشنگ، اپ ڈیٹس اور گائیڈ لائنز پر مکمل سپورٹ۔',
    'services.mobile.point4':
      'انٹرپرائز ایپس: اندرونی ٹولز، فیلڈ ایپس اور B2B سلوشنز۔',
    'services.mobile.cta': 'اپنی موبائل ایپ کی منصوبہ بندی کریں →',

    'services.maintenance.title': 'ایپلیکیشن مینٹیننس اور سپورٹ',
    'services.maintenance.lead':
      'اپنی ایپلیکیشنز کو محفوظ، اپ ٹو ڈیٹ اور بہترین کارکردگی کے ساتھ رکھنے کے لیے پروایکٹیو مینٹیننس اور 24/7 سپورٹ۔',
    'services.maintenance.point1':
      'مانیٹرنگ اور اَپ ٹائم: 24/7 نگرانی، الرٹس اور واقعات پر تیز ردعمل۔',
    'services.maintenance.point2':
      'اپ ڈیٹس اور اپ گریڈز: ڈپینڈینسی اپ ڈیٹس، سیکیورٹی پیچ اور ورژن اپ گریڈ۔',
    'services.maintenance.point3':
      'بگ فکسز اور انہانسمنٹس: تیز رفتار اصلاحات اور چھوٹی بہتریاں۔',
    'services.maintenance.point4':
      'ڈاکومنٹیشن اور ہینڈ اوور: واضح ڈاکومنٹیشن اور علم کی منظم منتقلی۔',
    'services.maintenance.cta': 'مینٹیننس سپورٹ حاصل کریں →',

    'services.cta.text':
      'کیا آپ کو کسٹم سلوشن یا سروسز کے امتزاج کی ضرورت ہے؟ ہم آپ کے اہداف کے مطابق اپنی آفرنگ ڈیزائن کرتے ہیں۔',
    'services.cta.button': 'آئیے بات کریں',

    'why.sectionTag': 'کیوں ہنیشا ڈیجیٹل',
    'why.title': 'بین الاقوامی کامیابی کے لیے تیار',
    'why.subtitle':
      'ہم صرف ایک اور ڈیولپمنٹ شاپ نہیں۔ ہم آپ کے طویل مدتی ٹیکنالوجی پارٹنر ہیں، جو سرحدوں سے پرے کاروبار کے لیے بنائے گئے ہیں۔',
    'why.reason1.title': 'گلوبل ریڈی ڈلیوری',
    'why.reason1.text':
      'ہم مختلف ٹائم زونز اور ممالک میں کام کرتے ہیں۔ واضح کمیونی کیشن اور مربوط سپرنٹس آپ کے پروجیکٹ کو درست سمت میں رکھتے ہیں۔',
    'why.reason2.title': 'انٹرپرائز معیار',
    'why.reason2.text':
      'آرکیٹیکچر سے لے کر سیکیورٹی اور ٹیسٹنگ تک، ہم انڈسٹری کی بہترین روایات پر عمل کرتے ہیں۔',
    'why.reason3.title': 'اینڈ ٹو اینڈ اونرشپ',
    'why.reason3.text':
      'آئیڈیا سے لانچ اور اس کے بعد کی مینٹیننس تک، ہم مکمل لائف سائیکل سنبھال سکتے ہیں۔',
    'why.reason4.title': 'اعتماد اور شفافیت',
    'why.reason4.text':
      'ہم آپ کی ٹیم کا حصہ بن کر کام کرتے ہیں — واضح بات چیت، حقیقت پسند ٹائم لائنز اور ڈیزائن، ڈیویلپمنٹ اور ٹیسٹنگ میں مکمل شفافیت۔',

    'portfolio.sectionTag': 'ہمارا کام',
    'portfolio.title': 'ہم کیا بناتے ہیں',
    'portfolio.subtitle':
      'ویب پلیٹ فارمز، موبائل ایپس اور مسلسل مینٹیننس — ہم ایسے سلوشنز فراہم کرتے ہیں جو کاروبار کو آگے بڑھاتے ہیں۔',
    'portfolio.web.title': 'ویب ایپلیکیشنز',
    'portfolio.web.text':
      'کسٹم ویب ایپس: ای کامرس، ڈیش بورڈز، پورٹلز اور SaaS پروڈکٹس — اسکیلیبل اور محفوظ۔',
    'portfolio.mobile.title': 'موبائل ایپس',
    'portfolio.mobile.text':
      'iOS اور Android ایپس صارفین اور انٹرپرائزز کے لیے — کسٹمر فیسنگ سے لے کر انٹرنل ٹولز تک۔',
    'portfolio.maintenance.title': 'مینٹیننس اور سپورٹ',
    'portfolio.maintenance.text':
      'مانیٹرنگ، اپ ڈیٹس اور بہتریوں کے ساتھ آپ کے موجودہ سسٹمز کو رواں دواں رکھتے ہیں۔',
    'portfolio.cta.text':
      'کیا آپ اپنا پروجیکٹ شروع کرنے کے لیے تیار ہیں؟ ہمیں اپنے اہداف بتائیں اور ہم آپ کے لیے راستہ تجویز کریں گے۔',
    'portfolio.cta.button': 'رابطہ کریں',
  },

  ja: {
    'header.nav.services': 'サービス',
    'header.nav.about': '私たちについて',
    'header.nav.whyUs': '選ばれる理由',
    'header.nav.work': '実績',
    'header.nav.contact': 'お問い合わせ',
    'header.cta.getInTouch': 'お問い合わせ',
    'header.menu.open': 'メニューを開く',
    'header.menu.close': 'メニューを閉じる',
    'header.language.label': '言語',

    'hero.badge': '独立したITスタジオ — 若いエンジニアチーム',
    'hero.quote': '知性とは変化に適応する能力である。',
    'hero.quote2': '適応力は生き残りのシンプルな秘訣である。',
    'hero.quote3': 'イノベーションはリーダーとフォロワーを区別する。',
    'hero.quote4': '素晴らしい仕事をする唯一の方法は、やっていることを愛することだ。',
    'hero.quote5': '変化は真の学びの結果である。',
    'hero.whatsNew': '新着',
    'hero.title.prefix': '国境を越えて拡張できる',
    'hero.title.highlight': 'デジタル体験',
    'hero.title.suffix': 'を提供します',
    'hero.subtitle':
      'Web・モバイルアプリケーションから保守・サポートまで、TECH Studio は世界中の企業にエンタープライズ向け IT ソリューションを提供します。',
    'hero.primaryCta': 'サービスを見る',
    'hero.secondaryCta': 'プロジェクトを始める',
    'hero.stat.global': 'グローバル',
    'hero.stat.reach': '展開',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': 'サポート',
    'hero.stat.enterprise': 'エンタープライズ',
    'hero.stat.grade': '品質',
    'hero.scroll': 'スクロールして詳しく見る',
    'hero.geoPopup.message': '別の地域からアクセスされているようです。お好みの言語で表示しますか？',
    'hero.geoPopup.useSuggested': '使用する',
    'hero.geoPopup.continueEnglish': '英語のまま続ける',

    'contact.sectionTag': 'お問い合わせ',
    'contact.title': '一緒にプロジェクトを進めましょう',
    'contact.lead':
      '新規プロジェクト、既存システムのサポート、またはご相談など、まずはお気軽にご連絡ください。迅速に折り返しご連絡いたします。',
    'contact.label.email': 'メール',
    'contact.value.services': 'Web アプリ · モバイルアプリ · 保守・サポート',
    'contact.label.services': 'サービス',
    'contact.label.reach': '提供範囲',
    'contact.value.reach': '世界中のクライアントに対応し、複数のタイムゾーンで稼働しています。',
    'contact.form.name': 'お名前',
    'contact.form.name.placeholder': '山田 太郎',
    'contact.form.email': 'メールアドレス',
    'contact.form.email.placeholder': 'taro@company.com',
    'contact.form.company': '会社名（任意）',
    'contact.form.company.placeholder': '会社名',
    'contact.form.message': 'ご要望',
    'contact.form.message.placeholder': 'プロジェクトやご相談内容をご記入ください...',
    'contact.form.submit': '送信',
    'contact.form.thankYou': 'ありがとうございます。追ってご連絡いたします。',

    'footer.tagline': '国境を越える IT ソリューション。Hanisha Exim グループ。',
    'footer.nav.services': 'サービス',
    'footer.nav.about': '私たちについて',
    'footer.nav.whyUs': '選ばれる理由',
    'footer.nav.work': '実績',
    'footer.nav.contact': 'お問い合わせ',
    'footer.copyright': 'TECH Studio. All rights reserved.',

    'about.sectionTag': '私たちについて',
    'about.title': '若いチームによるモダンITスタジオ',
    'about.lead':
      'TECH Studio は、若いエンジニアが中心となった独立系スタートアップです。信頼できるITシステムを、AIを活用した開発プロセスと組み合わせて素早く構築します。',
    'about.text':
      '顧客向け Web アプリケーションや社内向けモバイルアプリ、既存システムの保守など、グローバルビジネスのニーズを理解したうえで技術力を提供します。',
    'about.point1': '国境を越えたプロジェクト推進とコミュニケーション',
    'about.point2': '国際クライアントに合わせたタイムゾーン対応サポート',
    'about.point3': 'グローバルユーザー向けにスケールするアーキテクチャ',
    'about.point4': 'セキュリティとコンプライアンスのベストプラクティス',
    'about.card.globalFirst.title': 'グローバルファースト',
    'about.card.globalFirst.text': 'どこにいても使いやすい体験を設計。',
    'about.card.globalFirst.extra':
      '国際クライアント向けのグローバルITサービスとソフトウェア開発。複数タイムゾーン・言語・地域に対応し、世界規模でスケール。',
    'about.card.trustedPartner.title': '信頼できるパートナー',
    'about.card.trustedPartner.text': '小さくて近い存在のチームとして、結果にこだわります。',

    'services.sectionTag': '提供サービス',
    'services.title': 'ビジネスを支えるフルスタック IT サービス',
    'services.subtitle':
      '企画から運用まで、ソフトウェアライフサイクルのすべての段階をサポートし、グローバルな成長を後押しします。',
    'services.web.title': 'Web アプリケーション開発',
    'services.web.lead':
      '世界中のユーザーがあらゆるデバイスから利用できる、レスポンシブでスケーラブルな Web アプリケーションを開発します。',
    'services.web.point1':
      'フロントエンド & バックエンド: Angular, React, Vue, Node.js, .NET などのモダンフレームワーク。',
    'services.web.point2':
      'API と連携: REST / GraphQL API、外部サービスや既存システムとの連携。',
    'services.web.point3':
      'クラウド & DevOps: AWS, Azure, GCP へのデプロイと CI/CD パイプライン。',
    'services.web.point4':
      'EC サイト & ポータル: オンラインストア、顧客ポータル、ダッシュボード、社内ツール。',
    'services.web.cta': 'Web プロジェクトについて相談する →',

    'services.mobile.title': 'モバイルアプリ開発',
    'services.mobile.lead':
      'iOS / Android 向けのネイティブおよびクロスプラットフォームアプリで、どこからでも高品質な体験を提供します。',
    'services.mobile.point1':
      'ネイティブ & クロスプラットフォーム: Swift/Kotlin または React Native / Flutter。',
    'services.mobile.point2':
      'UX とパフォーマンス: スムーズなアニメーション、オフライン対応、省電力設計。',
    'services.mobile.point3':
      'ストア公開: App Store / Play Store での公開・更新をサポート。',
    'services.mobile.point4':
      'エンタープライズアプリ: 社内ツールやフィールドアプリ、B2B ソリューション。',
    'services.mobile.cta': 'モバイルアプリの計画を立てる →',

    'services.maintenance.title': 'アプリケーション保守・サポート',
    'services.maintenance.lead':
      '既存アプリケーションを安全かつ最新の状態に保ち、グローバルなタイムゾーンに対応したサポートを提供します。',
    'services.maintenance.point1':
      '監視と稼働: 24/7 監視、アラート、インシデントへの迅速な対応。',
    'services.maintenance.point2':
      'アップデートとアップグレード: 依存パッケージやセキュリティパッチの更新。',
    'services.maintenance.point3':
      'バグ修正と改善: ビジネスを止めない素早い修正と小規模改善。',
    'services.maintenance.point4':
      'ドキュメントと引き継ぎ: 明確なドキュメントとナレッジトランスファー。',
    'services.maintenance.cta': '保守サポートについて相談する →',

    'services.cta.text':
      'カスタムソリューションや複数サービスの組み合わせも柔軟に対応します。',
    'services.cta.button': 'ご相談ください',

    'why.sectionTag': 'TECH Studio を選ぶ理由',
    'why.title': 'グローバルな成功のためのパートナー',
    'why.subtitle':
      '単なる開発会社ではなく、国境を越えて事業を展開する企業のための長期的なテクノロジーパートナーです。',
    'why.reason1.title': 'グローバル対応のデリバリー',
    'why.reason1.text':
      '時差と国境をまたいでプロジェクトを進行。明確なコミュニケーションと計画でスケジュールを守ります。',
    'why.reason2.title': 'エンタープライズ品質',
    'why.reason2.text':
      'アーキテクチャ、セキュリティ、テストなど業界標準のベストプラクティスに基づき構築します。',
    'why.reason3.title': 'エンドツーエンドの責任',
    'why.reason3.text':
      '構想からローンチ、その後の運用・保守まで一貫して担当できます。',
    'why.reason4.title': '信頼と透明性',
    'why.reason4.text':
      '設計からテストまでのプロセスをオープンにし、チームの一員として伴走します。',

    'portfolio.sectionTag': '実績',
    'portfolio.title': '私たちの提供物',
    'portfolio.subtitle':
      'Web プラットフォームからモバイルアプリ、継続的な保守まで、ビジネス成長を支えるソリューションを提供します。',
    'portfolio.web.title': 'Web アプリケーション',
    'portfolio.web.text':
      'EC サイト、ダッシュボード、ポータル、SaaS など、スケーラブルで安全な Web ソリューション。',
    'portfolio.mobile.title': 'モバイルアプリ',
    'portfolio.mobile.text':
      'B2C / B2B を問わず、顧客向け・社内向けの iOS / Android アプリケーション。',
    'portfolio.maintenance.title': '保守 & サポート',
    'portfolio.maintenance.text':
      '監視、アップデート、改善を通じて既存システムを安定稼働させます。',
    'portfolio.cta.text':
      'プロジェクトのご相談はお気軽に。目標を伺い、最適な進め方をご提案します。',
    'portfolio.cta.button': 'お問い合わせ',
  },

  zh: {
    'header.nav.services': '服务',
    'header.nav.about': '关于我们',
    'header.nav.whyUs': '为什么选择我们',
    'header.nav.work': '我们的作品',
    'header.nav.contact': '联系我们',
    'header.cta.getInTouch': '立即联系',
    'header.menu.open': '打开菜单',
    'header.menu.close': '关闭菜单',
    'header.language.label': '语言',

    'hero.badge': '独立 IT 工作室 — 由年轻开发者驱动',
    'hero.quote': '智慧是适应变化的能力。',
    'hero.quote2': '适应力是生存的简单秘诀。',
    'hero.quote3': '创新区分了领导者与追随者。',
    'hero.quote4': '做出伟大工作的唯一方法就是热爱你所做的事。',
    'hero.quote5': '改变是一切真正学习的最终结果。',
    'hero.whatsNew': '最新',
    'hero.title.prefix': '我们打造可跨国扩展的',
    'hero.title.highlight': '数字体验',
    'hero.title.suffix': '',
    'hero.subtitle':
      '从 Web 与移动应用到持续维护与技术支持，TECH Studio 为全球企业提供企业级 IT 解决方案。',
    'hero.primaryCta': '查看我们的服务',
    'hero.secondaryCta': '启动项目',
    'hero.stat.global': '全球',
    'hero.stat.reach': '覆盖',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': '支持',
    'hero.stat.enterprise': '企业级',
    'hero.stat.grade': '品质',
    'hero.scroll': '向下滚动了解更多',
    'hero.geoPopup.message': '我们检测到您可能来自其他地区。是否使用您的首选语言浏览？',
    'hero.geoPopup.useSuggested': '使用',
    'hero.geoPopup.continueEnglish': '继续使用英语',

    'contact.sectionTag': '联系',
    'contact.title': '一起打造您的下一步',
    'contact.lead':
      '无论是新项目、现有系统维护，还是希望了解更多合作方式，都欢迎与我们联系，我们会尽快回复您。',
    'contact.label.email': '邮箱',
    'contact.value.services': 'Web 应用 · 移动应用 · 维护与支持',
    'contact.label.services': '服务',
    'contact.label.reach': '覆盖范围',
    'contact.value.reach': '服务全球客户 — 跨时区协作。',
    'contact.form.name': '您的姓名',
    'contact.form.name.placeholder': '张三',
    'contact.form.email': '邮箱',
    'contact.form.email.placeholder': 'zhangsan@company.com',
    'contact.form.company': '公司（可选）',
    'contact.form.company.placeholder': '您的公司',
    'contact.form.message': '我们如何帮助您？',
    'contact.form.message.placeholder': '请简单描述您的项目或需求...',
    'contact.form.submit': '发送消息',
    'contact.form.thankYou': '谢谢！我们会尽快与您联系。',

    'footer.tagline': '为全球企业提供 IT 解决方案。Hanisha Exim 成员。',
    'footer.nav.services': '服务',
    'footer.nav.about': '关于我们',
    'footer.nav.whyUs': '为什么选择我们',
    'footer.nav.work': '我们的作品',
    'footer.nav.contact': '联系我们',
    'footer.copyright': 'TECH Studio. 版权所有。',

    'about.sectionTag': '关于我们',
    'about.title': '面向现代 IT 的青年团队',
    'about.lead':
      'TECH Studio 是一家由年轻工程师主导的独立初创公司，专注于构建可靠、面向未来的 IT 系统，并在开发过程中充分利用 AI 工具。',
    'about.text':
      '无论是面向客户的 Web 应用、团队使用的移动应用，还是现有系统的维护，我们都将技术深度与对全球业务的理解结合在一起。',
    'about.point1': '跨国项目交付与沟通',
    'about.point2': '面向不同时区的国际客户支持',
    'about.point3': '可支撑全球用户的可扩展架构设计',
    'about.point4': '安全与合规方面的最佳实践',
    'about.card.globalFirst.title': '全球优先',
    'about.card.globalFirst.text': '为世界各地的客户和用户设计。',
    'about.card.globalFirst.extra':
      '我们为国际客户提供全球IT服务与软件开发，支持多时区、多语言、多地区，助力企业全球扩展。',
    'about.card.trustedPartner.title': '值得信赖的合作伙伴',
    'about.card.trustedPartner.text': '小而精的团队，过程透明，结果导向。',

    'services.sectionTag': '我们的服务',
    'services.title': '助力企业的全方位 IT 服务',
    'services.subtitle':
      '从概念到上线及后续运维，我们覆盖软件生命周期的每个阶段，帮助你专注于业务增长。',
    'services.web.title': 'Web 应用开发',
    'services.web.lead':
      '构建响应迅速、易于扩展的 Web 应用，让世界各地的用户在任意设备上都能顺畅使用。',
    'services.web.point1':
      '前后端开发：基于 Angular、React、Vue、Node.js、.NET 等现代框架。',
    'services.web.point2':
      'API 与集成：REST / GraphQL API，轻松对接第三方服务和现有系统。',
    'services.web.point3':
      '云与 DevOps：在 AWS、Azure 或 GCP 上部署，并配置 CI/CD 流水线。',
    'services.web.point4':
      '电商与门户：电商网站、客户门户、仪表盘及内部工具。',
    'services.web.cta': '与我们聊聊你的 Web 项目 →',

    'services.mobile.title': '移动应用开发',
    'services.mobile.lead':
      '原生与跨平台移动应用，为 iOS 与 Android 用户提供高品质体验。',
    'services.mobile.point1':
      '原生与跨平台：Swift/Kotlin 或 React Native / Flutter 单一代码库。',
    'services.mobile.point2':
      '体验与性能：流畅动画、离线能力与省电设计。',
    'services.mobile.point3':
      '应用商店支持：协助上架、更新与合规。',
    'services.mobile.point4':
      '企业级应用：内部工具、外勤应用与 B2B 解决方案。',
    'services.mobile.cta': '规划你的移动应用 →',

    'services.maintenance.title': '应用维护与支持',
    'services.maintenance.lead':
      '让现有系统保持安全、最新、稳定运行，并面向多时区提供支持。',
    'services.maintenance.point1':
      '监控与可用性：7×24 小时监控与快速响应。',
    'services.maintenance.point2':
      '更新与升级：依赖更新、安全补丁与版本升级。',
    'services.maintenance.point3':
      '缺陷修复与改进：快速修复与小步快跑的改进。',
    'services.maintenance.point4':
      '文档与交接：清晰文档与顺畅的知识移交。',
    'services.maintenance.cta': '获得维护支持 →',

    'services.cta.text':
      '需要定制方案或服务组合？我们会根据你的目标灵活配置。',
    'services.cta.button': '和我们聊聊',

    'why.sectionTag': '为什么选择 TECH Studio',
    'why.title': '为国际成功而设计',
    'why.subtitle':
      '我们不仅仅是开发团队，而是面向跨国运营企业的长期技术合作伙伴。',
    'why.reason1.title': '全球化交付能力',
    'why.reason1.text':
      '覆盖多时区与多国家，清晰沟通与可靠节奏让项目保持在正确轨道。',
    'why.reason2.title': '企业级质量',
    'why.reason2.text':
      '从架构到安全与测试，我们遵循行业最佳实践。',
    'why.reason3.title': '端到端负责',
    'why.reason3.text':
      '从构想到上线以及后续维护，我们可以全程负责。',
    'why.reason4.title': '信任与透明',
    'why.reason4.text':
      '像内部团队一样工作：清晰沟通、真实时间预期，以及对设计、开发和测试全过程的可见性。',

    'portfolio.sectionTag': '我们的案例',
    'portfolio.title': '我们构建什么',
    'portfolio.subtitle':
      '从 Web 平台到移动应用与持续维护，我们交付帮助企业增长的解决方案。',
    'portfolio.web.title': 'Web 应用',
    'portfolio.web.text':
      '定制 Web 应用：电商、仪表盘、门户和 SaaS 产品——为全球用户而生。',
    'portfolio.mobile.title': '移动应用',
    'portfolio.mobile.text':
      '面向消费者和企业的 iOS / Android 应用，从客户产品到内部工具。',
    'portfolio.maintenance.title': '维护与支持',
    'portfolio.maintenance.text':
      '通过监控、更新与改进，让现有系统持续平稳运行。',
    'portfolio.cta.text':
      '准备启动项目了吗？告诉我们你的目标，我们会给出支持方式。',
    'portfolio.cta.button': '联系我们',
  },

  fr: {
    'header.nav.services': 'Services',
    'header.nav.about': 'À propos',
    'header.nav.whyUs': 'Pourquoi nous',
    'header.nav.work': 'Nos réalisations',
    'header.nav.contact': 'Contact',
    'header.cta.getInTouch': 'Nous contacter',
    'header.menu.open': 'Ouvrir le menu',
    'header.menu.close': 'Fermer le menu',
    'header.language.label': 'Langue',

    'hero.badge': 'Studio IT indépendant — porté par de jeunes talents',
    'hero.quote': "L'intelligence est la capacité de s'adapter au changement.",
    'hero.quote2': "L'adaptabilité est le simple secret de la survie.",
    'hero.quote3': "L'innovation distingue un leader d'un suiveur.",
    'hero.quote4': "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    'hero.quote5': "Le changement est le résultat de tout véritable apprentissage.",
    'hero.whatsNew': 'Nouveautés',
    'hero.title.prefix': 'Nous créons des',
    'hero.title.highlight': 'expériences numériques',
    'hero.title.suffix': 'qui franchissent les frontières',
    'hero.subtitle':
      'Des applications web et mobiles à la maintenance continue, TECH Studio fournit des solutions IT de niveau entreprise aux sociétés du monde entier.',
    'hero.primaryCta': 'Découvrir nos services',
    'hero.secondaryCta': 'Démarrer un projet',
    'hero.stat.global': 'Global',
    'hero.stat.reach': 'Portée',
    'hero.stat.supportValue': '24/7',
    'hero.stat.supportLabel': 'Support',
    'hero.stat.enterprise': 'Entreprise',
    'hero.stat.grade': 'Niveau',
    'hero.scroll': 'Faites défiler pour explorer',
    'hero.geoPopup.message': "Nous avons détecté que vous êtes dans une autre région. Souhaitez-vous afficher le site dans votre langue ?",
    'hero.geoPopup.useSuggested': 'Utiliser',
    'hero.geoPopup.continueEnglish': 'Continuer en anglais',

    'contact.sectionTag': 'Contact',
    'contact.title': 'Construisons ensemble votre prochain projet',
    'contact.lead':
      "Nouveau projet, support d'une application existante ou simple échange — contactez-nous et nous reviendrons vers vous rapidement.",
    'contact.label.email': 'E-mail',
    'contact.value.services': 'Applications web · Applications mobiles · Maintenance & support',
    'contact.label.services': 'Services',
    'contact.label.reach': 'Portée',
    'contact.value.reach': 'Clients dans le monde entier — nous travaillons à travers les fuseaux horaires.',
    'contact.form.name': 'Votre nom',
    'contact.form.name.placeholder': 'Jean Dupont',
    'contact.form.email': 'E-mail',
    'contact.form.email.placeholder': 'jean@entreprise.com',
    'contact.form.company': 'Entreprise (optionnel)',
    'contact.form.company.placeholder': 'Votre entreprise',
    'contact.form.message': 'Comment pouvons-nous aider ?',
    'contact.form.message.placeholder': 'Parlez-nous de votre projet ou de votre besoin...',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.thankYou': 'Merci ! Nous reviendrons vers vous très vite.',

    'footer.tagline': "Des solutions IT sans frontières. Membre de Hanisha Exim.",
    'footer.nav.services': 'Services',
    'footer.nav.about': 'À propos',
    'footer.nav.whyUs': 'Pourquoi nous',
    'footer.nav.work': 'Nos réalisations',
    'footer.nav.contact': 'Contact',
    'footer.copyright': 'TECH Studio. Tous droits réservés.',

    'about.sectionTag': 'À propos de nous',
    'about.title': 'Un jeune studio pour une IT moderne',
    'about.lead':
      'TECH Studio est une startup indépendante animée par une équipe d’ingénieurs jeunes et passionnés. Nous combinons expertise humaine et outils d’IA pour livrer des systèmes fiables et évolutifs.',
    'about.text':
      "Application web orientée client, application mobile pour vos équipes ou maintenance d’un système existant : nous allions expertise technique et compréhension des enjeux business globaux.",
    'about.point1': 'Gestion de projets et communication au-delà des frontières',
    'about.point2': 'Support compatible avec les fuseaux horaires internationaux',
    'about.point3': 'Architectures évolutives pour bases utilisateurs mondiales',
    'about.point4': 'Meilleures pratiques de sécurité et de conformité',
    'about.card.globalFirst.title': 'Orienté global',
    'about.card.globalFirst.text': 'Conçu pour des clients et utilisateurs partout dans le monde.',
    'about.card.globalFirst.extra':
      'Services IT mondiaux et développement logiciel pour clients internationaux. Multi-fuseaux, langues et régions — pour scaler à l’international.',
    'about.card.trustedPartner.title': 'Partenaire de confiance',
    'about.card.trustedPartner.text': 'Une petite équipe transparente, focalisée sur vos résultats.',

    'services.sectionTag': 'Ce que nous offrons',
    'services.title': 'Des services IT complets pour votre entreprise',
    'services.subtitle':
      'De la conception au déploiement et au-delà, nous couvrons chaque étape du cycle de vie logiciel pour accompagner votre croissance mondiale.',
    'services.web.title': 'Développement d’applications web',
    'services.web.lead':
      'Nous concevons des applications web responsives et évolutives, accessibles partout et sur tout type d’appareil.',
    'services.web.point1':
      'Frontend & backend : frameworks modernes (Angular, React, Vue, Node.js, .NET).',
    'services.web.point2':
      'APIs & intégrations : APIs REST / GraphQL, intégrations avec vos systèmes et services tiers.',
    'services.web.point3':
      'Cloud & DevOps : déploiement sur AWS, Azure ou GCP avec pipelines CI/CD.',
    'services.web.point4':
      'E‑commerce & portails : boutiques en ligne, portails clients, dashboards et outils internes.',
    'services.web.cta': 'Parler de votre projet web →',

    'services.mobile.title': 'Développement d’applications mobiles',
    'services.mobile.lead':
      'Applications mobiles natives et multiplateformes offrant une expérience haut de gamme sur iOS et Android.',
    'services.mobile.point1':
      'Natif & multiplateforme : Swift/Kotlin ou React Native / Flutter pour un code partagé.',
    'services.mobile.point2':
      'UX & performance : animations fluides, mode hors ligne et optimisation énergétique.',
    'services.mobile.point3':
      'App Store & Play Store : accompagnement pour la publication, les mises à jour et la conformité.',
    'services.mobile.point4':
      'Apps d’entreprise : outils internes, applications terrain et solutions B2B sécurisées.',
    'services.mobile.cta': 'Planifier votre application mobile →',

    'services.maintenance.title': 'Maintenance et support applicatifs',
    'services.maintenance.lead':
      'Assurez la sécurité, la mise à jour et la performance de vos applications grâce à une maintenance proactive.',
    'services.maintenance.point1':
      'Supervision & disponibilité : surveillance 24/7, alertes et réaction rapide.',
    'services.maintenance.point2':
      'Mises à jour & montées de version : mises à jour de dépendances et correctifs de sécurité.',
    'services.maintenance.point3':
      'Corrections et évolutions : corrections rapides et petites améliorations continues.',
    'services.maintenance.point4':
      'Documentation & transfert : documentation claire et transfert de connaissances maîtrisé.',
    'services.maintenance.cta': 'Obtenir un support de maintenance →',

    'services.cta.text':
      'Besoin d’une solution sur-mesure ou d’un bouquet de services ? Nous adaptons notre offre à vos objectifs.',
    'services.cta.button': 'Discutons-en',

    'why.sectionTag': 'Pourquoi TECH Studio',
    'why.title': 'Conçu pour la réussite internationale',
    'why.subtitle':
      'Nous ne sommes pas qu’un prestataire de développement : nous sommes un partenaire technologique de long terme pour les entreprises actives à l’international.',
    'why.reason1.title': 'Livraison prête pour le global',
    'why.reason1.text':
      'Gestion de projets à travers les fuseaux horaires, communication claire et plannings fiables.',
    'why.reason2.title': 'Qualité niveau entreprise',
    'why.reason2.text':
      'Architectures robustes, sécurité renforcée et tests rigoureux pour un comportement fiable en production.',
    'why.reason3.title': 'Responsabilité bout‑en‑bout',
    'why.reason3.text':
      'De l’idée à la maintenance, nous pouvons gérer l’intégralité du cycle de vie de vos applications.',
    'why.reason4.title': 'Confiance et transparence',
    'why.reason4.text':
      'Nous travaillons comme une équipe élargie : communication claire, engagements réalistes et visibilité sur la conception, le développement et les tests.',

    'portfolio.sectionTag': 'Nos réalisations',
    'portfolio.title': 'Ce que nous construisons',
    'portfolio.subtitle':
      'Plateformes web, applications mobiles, maintenance continue : nous livrons des solutions qui soutiennent la croissance de votre entreprise.',
    'portfolio.web.title': 'Applications web',
    'portfolio.web.text':
      'Applications web sur-mesure : e‑commerce, dashboards, portails et produits SaaS – sécurisés et évolutifs.',
    'portfolio.mobile.title': 'Applications mobiles',
    'portfolio.mobile.text':
      'Applications iOS et Android pour le grand public ou pour vos collaborateurs.',
    'portfolio.maintenance.title': 'Maintenance & support',
    'portfolio.maintenance.text':
      'Nous veillons au bon fonctionnement de vos systèmes existants grâce à la supervision et aux mises à jour.',
    'portfolio.cta.text':
      'Prêt à démarrer votre projet ? Partagez-nous vos objectifs et nous vous proposerons une approche adaptée.',
    'portfolio.cta.button': 'Nous contacter',
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly storageKey = 'preferredLanguage';
  private readonly lang = signal<LanguageCode>('en');

  currentLanguage = this.lang.asReadonly();

  getSupportedLanguages(): LanguageCode[] {
    return SUPPORTED_LANGUAGES;
  }

  getLanguageLabel(code: LanguageCode): string {
    return LANGUAGE_LABELS[code] ?? code;
  }

  getSavedLanguage(): LanguageCode | null {
    if (typeof window === 'undefined') {
      return null;
    }
    const stored = window.localStorage.getItem(this.storageKey);
    if (!stored) return null;
    if (SUPPORTED_LANGUAGES.includes(stored as LanguageCode)) {
      return stored as LanguageCode;
    }
    return null;
  }

  setLanguage(lang: LanguageCode) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      lang = 'en';
    }
    this.lang.set(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.storageKey, lang);
    }
  }

  translate(key: string): string {
    const active = this.lang();
    const dict = TRANSLATIONS[active] ?? TRANSLATIONS.en;
    const value = dict[key];
    if (value != null) return value;
    const fallback = TRANSLATIONS.en[key];
    return fallback ?? key;
  }

  /**
   * Suggest a language based on country code or browser language.
   * Returns null if suggestion should stay as English.
   */
  suggestLanguage(countryCode?: string | null): LanguageCode | null {
    const lowerCountry = countryCode?.toLowerCase();

    if (lowerCountry) {
      if (['es', 'mx', 'ar', 'co', 'cl', 'pe', 'uy', 'py', 'bo', 'cr', 'pa', 'do', 'sv', 'gt', 'hn', 'ni'].includes(lowerCountry)) {
        return 'es';
      }
      if (['de', 'at', 'ch', 'li'].includes(lowerCountry)) {
        return 'de';
      }
      // Urdu for Pakistan and select Gulf / Arab countries, but not India
      if (['pk', 'sa', 'ae', 'om', 'bh', 'qa', 'kw'].includes(lowerCountry)) {
        return 'ur';
      }
      if (['jp'].includes(lowerCountry)) {
        return 'ja';
      }
      if (['cn', 'tw', 'hk', 'mo', 'sg'].includes(lowerCountry)) {
        return 'zh';
      }
      if (['fr', 'be', 'ca', 'ch', 'lu'].includes(lowerCountry)) {
        return 'fr';
      }
    }

    if (typeof navigator !== 'undefined' && navigator.language) {
      const browser = navigator.language.slice(0, 2).toLowerCase();
      if (browser === 'es') return 'es';
      if (browser === 'de') return 'de';
      if (browser === 'fr') return 'fr';
      if (browser === 'ja') return 'ja';
      if (browser === 'zh') return 'zh';
      if (browser === 'ur') return 'ur';
    }

    return null;
  }
}

