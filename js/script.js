// js/script.js

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  document.body.classList.add('loaded'); 

  const homeSection = document.getElementById('home');
  if (homeSection) {
      homeSection.classList.add('loaded');
  }
  const professionalContent = document.getElementById('professional-content');
  if (professionalContent) {
      professionalContent.classList.add('loaded');
  }

  document.querySelectorAll('a.dropdown-item[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // --- Fungsi untuk memuat proyek non-profesional dari database ---
  function loadNonProfessionalProjects() {
    if (typeof nonProfessionalProjects === "undefined") {
      console.error(
        "nonProfessionalProjects database not found. Make sure js/nonProfessional.js is loaded."
      );
      return;
    }
    // Hapus baris ini dari sini, karena 'project' belum didefinisikan di sini
    // const isAnimationPng = project.type === 'animation' && project.link && !isVideo && !isFigmaEmbed; 

    const webDevContainer = document.getElementById(
      "webdev-projects-container"
    );
    const webDesignerContainer = document.getElementById(
      "webdesigner-projects-container"
    );
    const animationContainer = document.getElementById(
      "animation-projects-container"
    );
    const certificatesContainer = document.getElementById(
      "certificates-container"
    );

    // Fungsi pembantu untuk membuat card HTML
    function createProjectCard(project) {
      const isVideo = project.videoEmbed && project.videoEmbed !== "";
      const isFigmaEmbed = project.figmaEmbed && project.figmaEmbed !== ""; 
      // Pindahkan deklarasi isAnimationPng ke sini, di mana 'project' sudah didefinisikan
      const isAnimationPng = project.type === 'animation' && project.link && !isVideo && !isFigmaEmbed;


      let mediaContent = "";
      let buttonText = 'See the Detail'; // Default
      let buttonAttributes = `href="${project.link}" target="_blank"`; // Default
      let buttonClasses = 'btn btn-primary btn-sm mt-2'; // Default

      if (isVideo) {
        mediaContent = `
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe src="${project.videoEmbed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>`;
        buttonText = 'Watch the video';
      } else if (isFigmaEmbed) {
        mediaContent = `
                    <div class="embed-responsive embed-responsive-16by9 figma-embed-wrapper">
                        <iframe class="w-full rounded-lg shadow-md" style="border: 1px solid rgba(0, 0, 0, 0.1);" src="${project.figmaEmbed}" allowfullscreen></iframe>
                    </div>`;
        buttonText = 'See design';
      } else if (isAnimationPng) { // Add condition for PNG animations
          mediaContent = `<img src="${project.image}" class="card-img-top project-image-clickable" alt="${project.title}" data-bs-toggle="modal" data-bs-target="#imageModal" data-image-url="${project.link}">`;
          buttonText = 'Enlarge Image'; // Changed text to English for consistency
          buttonAttributes = `data-bs-toggle="modal" data-bs-target="#imageModal" data-image-url="${project.link}" class="btn-animated-png"`; // Add btn-animated-png for specific styling if needed
          buttonClasses = 'btn btn-primary btn-sm mt-2 btn-animated-png'; // Added for the button
      }
      else {
        mediaContent = `<img src="${project.image}" class="card-img-top" alt="${project.title}">`;
      }

      return `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        ${mediaContent}
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            ${
                              project.tech
                                ? `<p class="card-text"><small class="text-light">${project.tech.join(
                                    ", "
                                  )}</small></p>`
                                : ""
                            }
                            ${
                              project.issuer
                                ? `<p class="card-text"><small class="text-light">Issued by: ${project.issuer}</small></p>`
                                : ""
                            }
                            <a ${buttonAttributes} class="${buttonClasses}">${buttonText}</a>
                        </div>
                    </div>
                </div>
            `;
    }

    // Muat proyek Web Dev
    if (webDevContainer) {
      webDevContainer.innerHTML = nonProfessionalProjects.webDev
        .map(createProjectCard)
        .join("");
    }

    // Muat proyek Web Designer
    if (webDesignerContainer) {
      webDesignerContainer.innerHTML = nonProfessionalProjects.webDesigner
        .map(createProjectCard)
        .join("");
    }

    // Muat proyek Animasi
    if (animationContainer) {
      animationContainer.innerHTML = nonProfessionalProjects.animation
        .map(createProjectCard)
        .join("");
    }

    // Muat Sertifikat
    if (certificatesContainer) {
      certificatesContainer.innerHTML = nonProfessionalProjects.certificates
        .map(createProjectCard)
        .join("");
    }
  }

  // Panggil fungsi untuk memuat proyek hanya jika kita berada di halaman nonProfessional.html
  if (window.location.pathname.includes("nonProfessional.html")) {
    loadNonProfessionalProjects();
    setupImageModal(); // Panggil fungsi setup modal setelah proyek dimuat
  }

  // --- Logika untuk Modal Gambar (Lightbox) ---
  function setupImageModal() {
      const imageModal = document.getElementById('imageModal');
      if (!imageModal) return; // Make sure the modal exists

      imageModal.addEventListener('show.bs.modal', function (event) {
          // Button that triggered the modal
          const opener = event.relatedTarget;
          // Extract info from data-image-url attributes
          const imageUrl = opener.getAttribute('data-image-url');

          // Update the modal's content.
          const modalImage = imageModal.querySelector('.modal-body img');
          if (modalImage) {
              modalImage.src = imageUrl;
          }

          const modalTitle = imageModal.querySelector('.modal-title');
          if (modalTitle && opener.closest('.card-body')) {
              const projectTitle = opener.closest('.card-body').querySelector('.card-title')?.textContent;
              modalTitle.textContent = projectTitle || 'Image Detail'; // Changed text to English
          }
      });
  }
});
