const portfolioData = {
  id: [
    // Web Development Projects
    {
      id: 1,
      title: "DroppBuss Development",
      category: "web-dev",
      image: "img/dropbuss.png",
      date: "",
      description:
        "Website statis sederhana untuk menghitung perencanaan bisnis dengan cepat dan matematis. Dibangun menggunakan HTML dan JavaScript, dengan tampilan menggunakan Boostrap.",
      technologies: "HTML, CSS, JavaScript, Boostrap",
      link: "https://tedoyshe.github.io/dropbuss.github.io/",
    },
    {
      id: 2,
      title: "Storage Resource Management",
      category: "web-dev",
      image: "img/warungsatya.png",
      date: "",
      description:
        "Website desain statis sederhana untuk manajemen sumber daya penyimpanan yang menyajikan informasi terkini dengan memanfaatkan integrasi efisien dengan Google Spreadsheets API sebagai database utama.",
      technologies: "HTML, CSS, JavaScript, Bootstrap, API",
      link: "https://tedoyshe.github.io/warungsetya/",
    },
    {
      id: 3,
      title: "Cashier",
      category: "web-dev",
      image: "img/DropThisBr.PNG",
      date: "",
      description:
        "Sistem Kasir berbasis web yang dirancang untuk memfasilitasi manajemen transaksi penjualan di toko atau bisnis ritel. Dibangun menggunakan framework Django dengan MySQL sebagai database utama. Menyediakan fitur CRUD untuk mengelola produk, kategori, pelanggan, dan transaksi penjualan.",
      technologies: "Django, Python, MySQL, Framework",
      link: "https://github.com/TeddySawon/kasir_django/tree/master",
    },

    // Web Designer Projects
    {
      id: 4,
      title: "Shops (The Concept)",
      category: "web-design",
       image:
        "img/shops1.png",
      date: "",
      description:
        "Konsep desain antarmuka pengguna untuk aplikasi mobile fiktif, fokus pada UX yang intuitif dengan estetika modern. Dibuat dengan Figma.",
      technologies: "Figma, Prinsip UI/UX, Prototyping",
      link: "https://www.figma.com/proto/fvRRmZvjX0l1D9PNih2onu/MyBusiness1?type=design&node-id=0-3&t=ckU1Um6eOo9J8cce-1&scaling=scale-down&page-id=0%253A1&starting-point-node-id=0%253A3&mode=design",
      figmaEmbed:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfvRRmZvjX0l1D9PNih2onu%2FMyBusiness1%3Ftype%3Ddesign%26node-id%3D0-3%26t%3DckU1Um6eOo9J8cce-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D0%253A3%26mode%3Ddesign",
    },

    // Animation Projects
    {
      id: 5,
      title: "Gambar PNG",
      category: "animation",
      image: "img/1.png",
      date: "",
      description:
        "Gambar ini dibuat dengan BLENDER. Tekstur gambar menggunakan gambar yang ditempelkan pada model 3D.",
      technologies: "Blender, PBR",
      link: "img/1_link.png",
    },
    {
      id: 6,
      title: "Gambar PNG",
      category: "animation",
      image: "img/2.png",
      date: "",
      description:
        "Gambar ini dibuat dengan BLENDER, dan menggunakan metode PBR dalam memproses gambar tekstur.",
      technologies: "Blender, PBR",
      link: "img/2_link.png",
    },
    {
      id: 7,
      title: "Gambar PNG",
      category: "animation",
      image: "img/3.png",
      date: "",
      description:
        "Gambar ini dibuat dengan BLENDER, dan menggunakan metode PBR dalam memproses gambar tekstur.",
      technologies: "Blender, PBR",
      link: "img/3_link.png",
    },
    {
      id: 8,
      title: "Gambar PNG",
      category: "animation",
      image: "img/4.png",
      date: "",
      description:
        "Gambar ini dibuat dengan BLENDER, dan menggunakan MIXAMO sebagai alat untuk membuat beberapa objek, serta masih menggunakan metode PBR dalam memproses gambar tekstur.",
      technologies: "Blender, Mixamo, PBR",
      link: "img/4_link.png",
    },

    // Certificates
    {
      id: 9,
      title: "Webinar Informatics",
      category: "certificate",
      image: "img/certificates/70.png",
      date: "",
      description: "Inovasi Artificial Intelligence dan Teknologi Android",
      technologies: "",
      link: "img/certificates/70.png",
      issuer: "Informatics",
    },
    {
      id: 10,
      title: "Sertifikat Kominfo",
      category: "certificate",
      image:
        "img/certificates/b81d5004-dbae-4ed6-99e8-0b0c791742b2_page-0001.jpg",
      date: "",
      description:
        "Literasi Digital dengan tema Siswa Berkompeten dan Berintegritas di Ruang Digital",
      technologies: "",
      link: "img/certificates/b81d5004-dbae-4ed6-99e8-0b0c791742b2_page-0001.jpg",
      issuer: "Kominfo",
    },
    {
      id: 11,
      title: "Sertifikat Kominfo",
      category: "certificate",
      image:
        "img/certificates/feb4df88-9f08-4771-b2fc-a63907bb38e0_page-0001.jpg",
      date: "",
      description:
        "Gerakan Literasi Digital Pandu Indonesia mengatasi tantangan pembelajaran melalui pendidikan online",
      technologies: "",
      link: "img/certificates/feb4df88-9f08-4771-b2fc-a63907bb38e0_page-0001.jpg",
      issuer: "Kominfo",
    },
    {
      id: 12,
      title: "Sertifikat Nasional",
      category: "certificate",
      image: "img/certificates/SERTIFIKAT Teddy Sawon Setyo_page-0001.jpg",
      date: "",
      description:
        "Eksistensi Jurnalisme Multimedia dalam Menyajikan Informasi Berkualitas",
      technologies: "",
      link: "img/certificates/SERTIFIKAT Teddy Sawon Setyo_page-0001.jpg",
      issuer: "National",
    },
    {
      id: 13,
      title: "Webinar Himatifta X SurabayaJS",
      category: "certificate",
      image: "img/certificates/Teddy Sawon Setyo.jpg",
      date: "",
      description: "Menjadi Software Developer Dengan JavaScript",
      technologies: "",
      link: "img/certificates/Teddy Sawon Setyo.jpg",
      issuer: "Himatifta X SurabayaJS",
    },
  ],
  en: [
    // Web Development Projects
    {
      id: 1,
      title: "DroppBuss Development",
      category: "web-dev",
      image: "img/dropbuss.png",
      date: "",
      description:
        "A simple static website to calculate business planning quickly and mathematically. Built using HTML and JavaScript, with display using Boostrap.",
      technologies: "HTML, CSS, JavaScript, Boostrap",
      link: "https://tedoyshe.github.io/dropbuss.github.io/",
    },
    {
      id: 2,
      title: "Storage Resource Management",
      category: "web-dev",
      image: "img/warungsatya.png",
      date: "",
      description:
        "A simple static design website for Storage Resource Management which presents up-to-date information by utilizing efficient integration with Google Spreadsheets API as its main database.",
      technologies: "HTML, CSS, JavaScript, Bootstrap, API",
      link: "https://tedoyshe.github.io/warungsetya/",
    },
    {
      id: 3,
      title: "Cashier",
      category: "web-dev",
      image: "img/DropThisBr.PNG",
      date: "",
      description:
        "Web-based Cashier System designed to facilitate sales transaction management in stores or retail businesses. Built using Django framework with MySQL as the main database. Provides CRUD features to manage products, categories, customers, and sales transactions.",
      technologies: "Django, Python, MySQL, Framework",
      link: "https://github.com/TeddySawon/kasir_django/tree/master",
    },

    // Web Designer Projects
    {
      id: 4,
      title: "Shops (The Concept)",
      category: "web-design",
      image:
        "img/shops1.png",
      date: "",
      description:
        "User interface design concept for fictitious mobile applications, focusing on intuitive UX with modern aesthetics. Made with Figma.",
      technologies: "Figma, UI/UX Principles, Prototyping",
      link: "https://www.figma.com/proto/fvRRmZvjX0l1D9PNih2onu/MyBusiness1?type=design&node-id=0-3&t=ckU1Um6eOo9J8cce-1&scaling=scale-down&page-id=0%253A1&starting-point-node-id=0%253A3&mode=design",
      figmaEmbed:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfvRRmZvjX0l1D9PNih2onu%2FMyBusiness1%3Ftype%3Ddesign%26node-id%3D0-3%26t%3DckU1Um6eOo9J8cce-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D0%253A3%26mode%3Ddesign",
    },

    // Animation Projects
    {
      id: 5,
      title: "PNG Images",
      category: "animation",
      image: "img/1.png",
      date: "",
      description:
        "This image was created with BLENDER. The texture of the image uses an image that is pasted on the 3D model.",
      technologies: "Blender, PBR",
      link: "img/1_link.png",
    },
    {
      id: 6,
      title: "PNG Images",
      category: "animation",
      image: "img/2.png",
      date: "",
      description:
        "This image is created with BLENDER, and uses the PBR method in processing a texture image.",
      technologies: "Blender, PBR",
      link: "img/2_link.png",
    },
    {
      id: 7,
      title: "PNG Images",
      category: "animation",
      image: "img/3.png",
      date: "",
      description:
        "This image is created with BLENDER, and uses the PBR method in processing a texture image.",
      technologies: "Blender, PBR",
      link: "img/3_link.png",
    },
    {
      id: 8,
      title: "PNG Images",
      category: "animation",
      image: "img/4.png",
      date: "",
      description:
        "This image is made with BLENDER, and uses MIXAMO as a tool to create several objects, and also still uses the PBR method in processing a texture image.",
      technologies: "Blender, Mixamo, PBR",
      link: "img/4_link.png",
    },

    // Certificates
    {
      id: 9,
      title: "Informatics Webinar",
      category: "certificate",
      image: "img/certificates/70.png",
      date: "",
      description: "Innovation Artificial Intelligence and Android Technology",
      technologies: "",
      link: "img/certificates/70.png",
      issuer: "Informatics",
    },
    {
      id: 10,
      title: "Kominfo Certificate",
      category: "certificate",
      image:
        "img/certificates/b81d5004-dbae-4ed6-99e8-0b0c791742b2_page-0001.jpg",
      date: "",
      description:
        "Digital Literacy with the theme Students with Competence and Integrity in Digital Space",
      technologies: "",
      link: "img/certificates/b81d5004-dbae-4ed6-99e8-0b0c791742b2_page-0001.jpg",
      issuer: "Kominfo",
    },
    {
      id: 11,
      title: "Kominfo Certificate",
      category: "certificate",
      image:
        "img/certificates/feb4df88-9f08-4771-b2fc-a63907bb38e0_page-0001.jpg",
      date: "",
      description:
        "Indonesia's Digital Pandu Literacy Movement addresses learning challenges through online education",
      technologies: "",
      link: "img/certificates/feb4df88-9f08-4771-b2fc-a63907bb38e0_page-0001.jpg",
      issuer: "Kominfo",
    },
    {
      id: 12,
      title: "National Certificate",
      category: "certificate",
      image: "img/certificates/SERTIFIKAT Teddy Sawon Setyo_page-0001.jpg",
      date: "",
      description:
        "The Existence of Multimedia Journalism in Providing Quality Information",
      technologies: "",
      link: "img/certificates/SERTIFIKAT Teddy Sawon Setyo_page-0001.jpg",
      issuer: "National",
    },
    {
      id: 13,
      title: "Webinar Himatifta X SurabayaJS",
      category: "certificate",
      image: "img/certificates/Teddy Sawon Setyo.jpg",
      date: "",
      description: "Be a Software Developer With JavaScript",
      technologies: "",
      link: "img/certificates/Teddy Sawon Setyo.jpg",
      issuer: "Himatifta X SurabayaJS",
    },
  ],
};

// Function to load portfolio items
function loadPortfolio() {
  const portfolioGrid = document.getElementById("portfolio-grid");
  const currentLang = localStorage.getItem("language") || "id";
  const data = portfolioData[currentLang];

  // Clear existing items
  portfolioGrid.innerHTML = "";

  // Load items for current language
  data.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "col-lg-4 col-md-6 portfolio-item";
    portfolioItem.setAttribute("data-category", item.category);
    portfolioItem.setAttribute("data-aos", "fade-up");

    portfolioItem.innerHTML = `
            <div class="portfolio-card" onclick="loadModal(${
              item.id
            })" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                <img src="${item.image}" alt="${
      item.title
    }" class="portfolio-img">
                <div class="portfolio-body">
                    <span class="portfolio-category">${item.category.replace(
                      "-",
                      " "
                    )}</span>
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p>${item.description.substring(0, 100)}...</p>
            ${
              item.technologies
                ? `
                <div class="tech-badges mt-2">
                    ${item.technologies
                      .split(",")
                      .map(
                        (tech) =>
                          `<span class="portfolio-tech">${tech.trim()}</span>`
                      )
                      .join("")}
                </div>
            `
                : ""
            }
                    <p>${item.date}</p>
                </div>
            </div>
        `;

    portfolioGrid.appendChild(portfolioItem);
  });
}

// Function to load modal content
function loadModal(projectId) {
  const currentLang = localStorage.getItem("language") || "id";
  const project = portfolioData[currentLang].find(
    (item) => item.id === projectId
  );
  if (!project) return;

  document.getElementById("modalTitle").textContent = project.title;

  const modalContent = `
        <div class="row">
            <div class="col-md-6">
                <img src="${
                  project.image
                }" class="img-fluid rounded mb-3" alt="${project.title}">
            </div>
            <div class="col-md-6">
                <p><strong data-lang-key="modal-category">Category</strong>: <span class="badge bg-primary">${project.category.replace(
                  "-",
                  " "
                )}</span></p>
                <p><strong data-lang-key="modal-date">Date</strong>: ${
                  project.date
                }</p>
                ${
                  project.description
                    ? `<p><strong data-lang-key="modal-description">Description</strong>: ${project.description}</p>`
                    : ""
                }
                ${
                  project.technologies
                    ? `<p><strong data-lang-key="modal-technologies">Technologies</strong>: ${project.technologies}</p>`
                    : ""
                }
                ${
                  project.link
                    ? `<a href="${project.link}" target="_blank" class="btn btn-primary" data-lang-key="modal-view">View Project</a>`
                    : ""
                }
            </div>
        </div>
    `;

  document.getElementById("modalBody").innerHTML = modalContent;
  applyLanguage(currentLang); // Apply language to modal content
}

function initModalInteractions() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle Figma embed toggle
    document.querySelectorAll('.figma-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const embedContainer = this.closest('.position-relative').querySelector('.figma-embed-container');
            embedContainer.classList.toggle('d-none');
        });
    });

    // Handle favorite button
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.querySelector('i').classList.toggle('fas');
            this.querySelector('i').classList.toggle('far');
            
            const projectId = this.getAttribute('data-project-id');
            // Save to localStorage
            toggleFavorite(projectId);
        });
    });
    
    // Tambahkan event listener untuk membuka gambar di tab baru saat diklik
    document.querySelectorAll('.modal-main-image').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
}
// Favorite system
function toggleFavorite(projectId) {
  const favorites = JSON.parse(localStorage.getItem("favorites") || []);
  const index = favorites.indexOf(projectId);

  if (index === -1) {
    favorites.push(projectId);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Panggil initModalInteractions setelah modal dimuat
document.addEventListener("DOMContentLoaded", function () {
  const portfolioModal = document.getElementById("portfolioModal");
  if (portfolioModal) {
    portfolioModal.addEventListener("shown.bs.modal", function () {
      initModalInteractions();
    });
  }
});

// Load portfolio when DOM is ready
document.addEventListener("DOMContentLoaded", loadPortfolio);
