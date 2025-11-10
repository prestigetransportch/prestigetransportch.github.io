document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
    switchLang('en');
    autoSlide();
});

const translations = {
    en: {
        home: 'Home',
        gallery: 'Gallery',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact',
        tagline1: 'Because Luxury Deserves First-Class Transport',
        tagline2: 'Swiss-Based, Serving All of Europe',
        'gallery-title': 'Gallery',
        'about-title': 'About Us',
        'about-text': 'Prestige Transport is a leading provider of luxury car transportation services. We are based in Switzerland and serve clients all over Europe. Our mission is to provide first-class transport for your valuable vehicles, ensuring they arrive safely and on time. We pride ourselves on our professionalism, reliability, and commitment to customer satisfaction.',
        'services-title': 'Our Services',
        'service1-title': 'Door-to-Door Car Transport',
        'service1-desc': 'We collect and deliver your vehicle directly from your chosen locations anywhere in Europe.',
        'service2-title': 'Enclosed Carrier Transport',
        'service2-desc': 'Your car travels in a fully enclosed trailer, protected from weather, road debris, and prying eyes.',
        'service3-title': 'European Vehicle Transport',
        'service3-desc': 'Reliable and secure car delivery between any European countries.',
        'service4-title': 'Seasonal Relocation',
        'service4-desc': 'Ideal for holiday homes or temporary stays — move your car with you anywhere in Europe.',
        'service5-title': 'Insurance',
        'service5-desc': 'Comprehensive insurance for total peace of mind.',
        'contact-title': 'Contact Us',
        'contact-text': 'For inquiries and bookings, please contact us at:',
        'address-title': 'Our Address',
        'social-title': 'Follow Us',
    },
    fr: {
        home: 'Accueil',
        gallery: 'Galerie',
        about: 'À propos de nous',
        services: 'Services',
        contact: 'Contact',
        tagline1: 'Because Luxury Deserves First-Class Transport',
        tagline2: 'Basé en Suisse, au service de toute l\'Europe',
        'gallery-title': 'Galerie',
        'about-title': 'À propos de nous',
        'about-text': 'Prestige Transport est un fournisseur de premier plan de services de transport de voitures de luxe. Nous sommes basés en Suisse et servons des clients dans toute l\'Europe. Notre mission est de fournir un transport de première classe pour vos précieux véhicules, en veillant à ce qu\'ils arrivent en toute sécurité et à temps. Nous sommes fiers de notre professionnalisme, de notre fiabilité et de notre engagement envers la satisfaction du client.',
        'services-title': 'Nos Services',
        'service1-title': 'Transport de voiture de porte à porte',
        'service1-desc': 'Nous enlevons et livrons votre véhicule directement aux endroits de votre choix, partout en Europe.',
        'service2-title': 'Transport par transporteur fermé',
        'service2-desc': 'Votre voiture voyage dans une remorque entièrement fermée, protégée des intempéries, des débris de la route et des regards indiscrets.',
        'service3-title': 'Transport de véhicules européens',
        'service3-desc': 'Livraison de voiture fiable and sécurisée entre tous les pays européens.',
        'service4-title': 'Déménagement saisonnier',
        'service4-desc': 'Idéal pour les maisons de vacances ou les séjours temporaires - déplacez votre voiture avec vous partout en Europe.',
        'service5-title': 'Assurance',
        'service5-desc': 'Une assurance complète pour une tranquillité d\'esprit totale.',
        'contact-title': 'Contactez-nous',
        'contact-text': 'Pour les demandes et les réservations, veuillez nous contacter à:',
        'address-title': 'Notre adresse',
        'social-title': 'Suivez-nous',
    },
    de: {
        home: 'Startseite',
        gallery: 'Galerie',
        about: 'Über uns',
        services: 'Dienstleistungen',
        contact: 'Kontakt',
        tagline1: 'Because Luxury Deserves First-Class Transport',
        tagline2: 'Sitz in der Schweiz, für ganz Europa',
        'gallery-title': 'Galerie',
        'about-title': 'Über uns',
        'about-text': 'Prestige Transport ist ein führender Anbieter von Luxus-Autotransportdienstleistungen. Wir haben unseren Sitz in der Schweiz und bedienen Kunden in ganz Europa. Unsere Mission ist es, einen erstklassigen Transport für Ihre wertvollen Fahrzeuge zu gewährleisten, damit sie sicher und pünktlich ankommen. Wir sind stolz auf unsere Professionalität, Zuverlässigkeit und unser Engagement für die Kundenzufriedenheit.',
        'services-title': 'Unsere Dienstleistungen',
        'service1-title': 'Tür-zu-Tür-Autotransport',
        'service1-desc': 'Wir holen Ihr Fahrzeug direkt an den von Ihnen gewählten Standorten in ganz Europa ab und liefern es aus.',
        'service2-title': 'Transport im geschlossenen Transporter',
        'service2-desc': 'Ihr Auto reist in einem vollständig geschlossenen Anhänger, geschützt vor Wetter, Straßenschmutz und neugierigen Blicken.',
        'service3-title': 'Europäischer Fahrzeugtransport',
        'service3-desc': 'Zuverlässige und sichere Autozustellung zwischen allen europäischen Ländern.',
        'service4-title': 'Saisonaler Umzug',
        'service4-desc': 'Ideal für Ferienhäuser oder temporäre Aufenthalte - bewegen Sie Ihr Auto mit Ihnen überall in Europa.',
        'service5-title': 'Versicherung',
        'service5-desc': 'Umfassende Versicherung für absolute Sorgenfreiheit.',
        'contact-title': 'Kontaktieren Sie uns',
        'contact-text': 'Für Anfragen und Buchungen kontaktieren Sie uns bitte unter:',
        'address-title': 'Unsere Adresse',
        'social-title': 'Folgen Sie uns',
    },
};

function switchLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-switcher button[onclick="switchLang('${lang}')"]`).classList.add('active');
}

const galleryImages = [
    'imgs/gallery/IMG_0957.png',
    'imgs/gallery/IMG_1187.png',
    'imgs/gallery/IMG_1204.png'
];

let slideIndex = 0;

function loadGalleryImages() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = galleryImages.map(src => `<img src="${src}" alt="Gallery Image">`).join('');
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 3000); // Change image every 3 seconds
}