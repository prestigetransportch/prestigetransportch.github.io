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
        contact: 'Contact',
        tagline1: 'Because Luxury Deserves First-Class Transport',
        tagline2: 'Swiss-Based, Serving All of Europe',
        'gallery-title': 'Gallery',
        'about-title': 'About Us',
        'about-text': 'Prestige Transport is a leading provider of luxury car transportation services. We are based in Switzerland and serve clients all over Europe. Our mission is to provide first-class transport for your valuable vehicles, ensuring they arrive safely and on time. We pride ourselves on our professionalism, reliability, and commitment to customer satisfaction.',
        'contact-title': 'Contact Us',
        'contact-text': 'For inquiries and bookings, please contact us at:',
        'address-title': 'Our Address',
        'social-title': 'Follow Us',
    },
    fr: {
        home: 'Accueil',
        gallery: 'Galerie',
        about: 'Qui sommes-nous',
        contact: 'Contact',
        tagline1: 'Parce que le luxe mérite un transport de première classe',
        tagline2: 'Basé en Suisse, au service de toute l\'Europe',
        'gallery-title': 'Galerie',
        'about-title': 'Qui sommes-nous',
        'about-text': 'Prestige Transport est un fournisseur de premier plan de services de transport de voitures de luxe. Nous sommes basés en Suisse et servons des clients dans toute l\'Europe. Notre mission est de fournir un transport de première classe pour vos précieux véhicules, en veillant à ce qu\'ils arrivent en toute sécurité et à temps. Nous sommes fiers de notre professionnalisme, de notre fiabilité et de notre engagement envers la satisfaction du client.',
        'contact-title': 'Contactez-nous',
        'contact-text': 'Pour les demandes et les réservations, veuillez nous contacter à:',
        'address-title': 'Notre adresse',
        'social-title': 'Suivez-nous',
    },
    de: {
        home: 'Startseite',
        gallery: 'Galerie',
        about: 'Über uns',
        contact: 'Kontakt',
        tagline1: 'Weil Luxus erstklassigen Transport verdient',
        tagline2: 'Sitz in der Schweiz, für ganz Europa',
        'gallery-title': 'Galerie',
        'about-title': 'Über uns',
        'about-text': 'Prestige Transport ist ein führender Anbieter von Luxus-Autotransportdienstleistungen. Wir haben unseren Sitz in der Schweiz und bedienen Kunden in ganz Europa. Unsere Mission ist es, einen erstklassigen Transport für Ihre wertvollen Fahrzeuge zu gewährleisten, damit sie sicher und pünktlich ankommen. Wir sind stolz auf unsere Professionalität, Zuverlässigkeit und unser Engagement für die Kundenzufriedenheit.',
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
