// js/nonProfessional.js

const nonProfessionalProjects = {
  webDev: [
    {
      id: "webdev1",
      title: "DroppBuss Development",
      description:
        'A simple <a target="_blank" href="https://www.jagoanhosting.com/blog/website-statis/" style="color:#80AF70">Static Website</a> to calculate business planning quickly and mathematically. using HTML and Javascipt, and for display using <a target="_blank" href="https://tailwindcss.com/" style="color:#80AF70">Tailwind</a>.',
      image: "img/dropbuss.png",
      link: "https://tedoyshe.github.io/dropbuss.github.io/",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    },
    {
      id: "webdev2",
      title: "Storage Resource Management",
      description:
        "A simple static design website for Storage Resource Management which presents up-to-date information on storage resource management by utilizing efficient integration with Google Spreadsheets API as its main database.",
      image: "img/warungsatya.png",
      link: "https://tedoyshe.github.io/warungsetya/",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
    },
    {
      id: "webdev3",
      title: "Cashier",
      description:
        "Web-based Cashier System is a web application designed to facilitate the management of sales transactions in stores or retail businesses. This system is built using the Django framework and uses MySQL as the main database. This application provides CRUD (Create, Read, Update, Delete) features to manage products, categories, customers, and sales transactions.",
      image: "img/DropThisBr.PNG",
      link: "https://github.com/TeddySawon/kasir_django/tree/master",
      tech: ["Django", "Python", "MYSQL", "Framework"],
    },
    // Tambahkan lebih banyak proyek Web Dev di sini
  ],
  webDesigner: [
    {
      id: "webdesign1",
      title: "Desain UI Aplikasi Mobile (Konsep)",
      description:
        "The design concept of the user interface for fictitious mobile applications, focus on intuitive and modern aesthetic UX. Made with Figma.",
      image:
        "https://via.placeholder.com/400x250/1e40af/FFFFFF?text=Mobile+UI+Design",
      // --- Tambahkan properti figmaEmbed ini ---
      figmaEmbed:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfvRRmZvjX0l1D9PNih2onu%2FMyBusiness1%3Ftype%3Ddesign%26node-id%3D0-3%26t%3DckU1Um6eOo9J8cce-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D0%253A3%26mode%3Ddesign",
      // --- Hapus atau biarkan link jika Anda juga ingin tombol "Lihat Proyek" mengarah ke Figma ---
      link: "https://www.figma.com/proto/fvRRmZvjX0l1D9PNih2onu/MyBusiness1?type=design&node-id=0-3&t=ckU1Um6eOo9J8cce-1&scaling=scale-down&page-id=0%253A1&starting-point-node-id=0%253A3&mode=design", // Link ke proto langsung
      tech: ["Figma", "UI/UX Principles", "Prototyping"],
    },
  ],
  animation: [
    {
      id: "animation1",
      title: "Animasi Logo Pembuka (PNG Sequence)", // Ubah judul jika perlu
      description:
        'This image was created with <a target="_blank" href="https://www.blender.org/" style="color:#80AF70">BLENDER</a>. The texture of the image uses an image that is pasted on the 3D model.',
      image: "img/1.png",
      // isAnimatedPng: true, // Penanda opsional jika Anda ingin membedakan cara rendering
      // Untuk animasi PNG, link akan mengarah ke gambar full-size
      link: "img/1_link.png", // URL gambar PNG ukuran penuh yang ingin diperbesar
      tech: ["Blender"],
    },
    {
      id: "animation2",
      title: "Animasi Logo Pembuka (PNG Sequence)", // Ubah judul jika perlu
      description:
        'This image is created with <a target="_blank" href="https://www.blender.org/" style="color:#80AF70">BLENDER</a>, and uses the <a target="_blank" href="https://www.adobe.com/id_id/products/substance3d/discover/pbr.html#:~:text=PBR%20adalah%20alur%20kerja%20yang,ilmu%20yang%20sedang%20Anda%20lakukan.%E2%80%9D" style="color:#80AF70">PBR</a> method in processing a texture image.',
      image: "img/2.png",
      // isAnimatedPng: true, // Penanda opsional jika Anda ingin membedakan cara rendering
      // Untuk animasi PNG, link akan mengarah ke gambar full-size
      link: "img/2_link.png", // URL gambar PNG ukuran penuh yang ingin diperbesar
      tech: ["Blender"],
    },
    {
      id: "animation3",
      title: "Animasi Logo Pembuka (PNG Sequence)", // Ubah judul jika perlu
      description:
        'This image is created with <a target="_blank" href="https://www.blender.org/" style="color:#80AF70">BLENDER</a>, and uses the <a target="_blank" href="https://www.adobe.com/id_id/products/substance3d/discover/pbr.html#:~:text=PBR%20adalah%20alur%20kerja%20yang,ilmu%20yang%20sedang%20Anda%20lakukan.%E2%80%9D" style="color:#80AF70">PBR</a> method in processing a texture image.',
      image: "img/3.png",
      // isAnimatedPng: true, // Penanda opsional jika Anda ingin membedakan cara rendering
      // Untuk animasi PNG, link akan mengarah ke gambar full-size
      link: "img/3_link.png", // URL gambar PNG ukuran penuh yang ingin diperbesar
      tech: ["Blender"],
    },
    {
      id: "animation4",
      title: "Animasi Logo Pembuka (PNG Sequence)", // Ubah judul jika perlu
      description:
        'This image is made with <a target="_blank" href="https://www.blender.org/" style="color:#80AF70">BLENDER</a>, and uses <a target="_blank" href="https://www.mixamo.com/" style="color:#80AF70">MIXAMO</a> as a tool to create several objects, and also still uses the <a target="_blank" href="https://www.adobe.com/id_id/products/substance3d/discover/pbr.html#:~:text=PBR%20adalah%20alur%20kerja%20yang,ilmu%20yang%20sedang%20Anda%20lakukan.%E2%80%9D" style="color:#80AF70">PBR</a> method in processing a texture image.',
      image: "img/4.png", // Thumbnail gambar PNG
      // isAnimatedPng: true, // Penanda opsional jika Anda ingin membedakan cara rendering
      // Untuk animasi PNG, link akan mengarah ke gambar full-size
      link: "img/4_link.png", // URL gambar PNG ukuran penuh yang ingin diperbesar
      tech: ["Blender", "Mixamo"],
    },

    // Tambahkan lebih banyak proyek Animasi di sini
  ],
  certificates: [
    {
      id: "cert1",
      title: "Informatics Webinar",
      description: "Innovation Artificial Intelligence and Android Technology",
      image: "img/certificates/70.png",
      link: "img/certificates/70.png",
      issuer: "Informatics",
    },
    {
      id: "cert2",
      title: "Kominfo Certificate",
      description:
        "Digital Literacy with the theme Students with Competence and Integrity in Digital Space",
      image:
        "img/certificates/b81d5004-dbae-4ed6-99e8-0b0c791742b2_page-0001.jpg",
      link: "img/certificates/b81d5004-dbae-4ed6-99e8-0b0c791742b2_page-0001.jpg",
      issuer: "Kominfo",
    },
    {
      id: "cert3",
      title: "Kominfo Certificate",
      description:
        "Indonesia's Digital Pandu Literacy Movement addresses learning challenges through online education",
      image:
        "img/certificates/feb4df88-9f08-4771-b2fc-a63907bb38e0_page-0001.jpg",
      link: "img/certificates/feb4df88-9f08-4771-b2fc-a63907bb38e0_page-0001.jpg",
      issuer: "Kominfo",
    },
    {
      id: "cert4",
      title: "National Certificate",
      description:
        "The Existence of Multimedia Journalism in Providing Quality Information",
      image: "img/certificates/SERTIFIKAT Teddy Sawon Setyo_page-0001.jpg",
      link: "img/certificates/SERTIFIKAT Teddy Sawon Setyo_page-0001.jpg",
      issuer: "National",
    },
    {
      id: "cert5",
      title: "Webinar Himatifta X SurabayaJS",
      description: "Be a Software Developer With JavaScripts",
      image: "img/certificates/Teddy Sawon Setyo.jpg",
      link: "img/certificates/Teddy Sawon Setyo.jpg",
      issuer: "Himatifta X SurabayaJS",
    },
  ],
};
