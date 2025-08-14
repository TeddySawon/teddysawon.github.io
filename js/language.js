// Language configuration
const languageTexts = {
    'id': {
        // Global texts
        'language-text': 'ID',
        'nav-home': 'Home',
        'nav-professional': 'Professional',
        'nav-non-professional': 'Non-Professional',
        
        // Index page
        'hero-title': 'Teddy Sawon Setyo',
        'hero-subtitle': 'I create beautiful, functional websites and stunning 3D visuals. Passionate about blending technology and art to build immersive digital experiences.',
        'skills-title': 'Keahlian Saya',
        'skills-programming': 'Programming',
        'skills-others': 'Others',
        'skills-about': 'Tentang Saya',
        'view-skills': 'Lihat Keahlian Saya',
        'view-bio': 'View About Me',
        
        // Non-professional page
        'np-title': 'Proyek Non-Professional',
        'filter-all': 'Semua',
        'filter-web-dev': 'Web Development',
        'filter-web-design': 'Web Design',
        'filter-animation': 'Animasi',
        'filter-certificate': 'Sertifikat',
        'modal-category': 'Kategori',
        'modal-date': 'Tanggal',
        'modal-description': 'Deskripsi',
        'modal-technologies': 'Teknologi',
        'modal-view': 'Lihat Proyek',
        'modal-close': 'Tutup',

        //bio
        'skills-about': 'Tentang Saya',
        'bio-text-1': 'Saya adalah seorang Full Stack Developer dengan passion dalam teknologi web modern dan 3D modeling. Dengan pengalaman dalam berbagai teknologi, saya senang menciptakan solusi yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa.',
        'bio-text-2': 'Selain coding, saya juga tertarik pada dunia 3D art dan game development, yang membantu saya mengembangkan perspektif kreatif dalam setiap project yang saya kerjakan.',

        //Professional
        'professional-title': 'Pengalaman Professional',
        'empty-title': 'Belum Ada Pengalaman Professional',
        'empty-description': 'Saat ini saya masih fokus pada pengembangan skill dan proyek non-profesional.',
        'empty-button': 'Lihat Proyek Non-Professional'
    
    },
    'en': {
        // Global texts
        'language-text': 'EN',
        'nav-home': 'Home',
        'nav-professional': 'Professional',
        'nav-non-professional': 'Non-Professional',
        
        // Index page
        'hero-title': 'Teddy Sawon Setyo',
        'hero-subtitle': 'I create beautiful, functional websites and stunning 3D visuals. Passionate about blending technology and art to build immersive digital experiences.',
        'skills-title': 'My Skills',
        'skills-programming': 'Programming',
        'skills-others': 'Others',
        'skills-about': 'About Me',
        'view-skills': 'View My Skills',
        'view-bio': 'View About Me',
        
        // Non-professional page
        'np-title': 'Non-Professional Projects',
        'filter-all': 'All',
        'filter-web-dev': 'Web Development',
        'filter-web-design': 'Web Design',
        'filter-animation': 'Animation',
        'filter-certificate': 'Certificates',
        'modal-category': 'Category',
        'modal-date': 'Date',
        'modal-description': 'Description',
        'modal-technologies': 'Technologies',
        'modal-view': 'View Project',
        'modal-close': 'Close',

        //bio
        'skills-about': 'About Me',
        'bio-text-1': 'I am a Full Stack Developer with a passion for modern web technologies and 3D modeling. With experience in various technologies, I enjoy creating solutions that are not only functional but also provide an exceptional user experience.',
        'bio-text-2': 'Besides coding, I am also interested in 3D art and game development, which helps me develop a creative perspective in every project I work on.',
    
        //Professional
        'professional-title': 'Professional Experience',
        'empty-title': 'No Professional Experience Yet',
        'empty-description': 'Currently I am focusing on skill development and non-professional projects.',
        'empty-button': 'View Non-Professional Projects',
    }
};

// Function to toggle language
function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'id';
    const newLang = currentLang === 'id' ? 'en' : 'id';
    
    localStorage.setItem('language', newLang);
    applyLanguage(newLang);
    
    // Reload portfolio items if on non-professional page
    if (typeof loadPortfolio === 'function') {
        loadPortfolio();
    }
}

// Function to apply language
function applyLanguage(lang) {
    const elements = languageTexts[lang];
    
    // Apply to all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (elements[key]) {
            element.textContent = elements[key];
        }
    });
    
    // Update language toggle text
    document.getElementById('language-text').textContent = lang.toUpperCase();
}

// Load saved language
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'id';
    applyLanguage(savedLang);
});
