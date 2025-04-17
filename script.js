document.addEventListener("DOMContentLoaded", function () {
    const galeriaItens = document.querySelectorAll(".galeria img, .galeria video");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
    const closeBtn = document.querySelector(".lightbox .close");
  
    // Evento para abrir o lightbox
    galeriaItens.forEach((item) => {
      item.addEventListener("click", () => {
        lightbox.classList.add("active"); // Torna o lightbox visível
        lightboxContent.innerHTML = "";  // Limpa o conteúdo anterior
  
        const isVideo = item.tagName.toLowerCase() === "video"; // Verifica se é um vídeo ou uma imagem
        const clone = item.cloneNode(true);  // Clona o item clicado
  
        if (isVideo) {
          clone.controls = true; // Adiciona controles se for vídeo
          clone.autoplay = true;  // Inicia o vídeo automaticamente
        }
  
        lightboxContent.appendChild(clone);  // Adiciona a mídia ao lightbox
      });
    });
  
    // Evento para fechar o lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active"); // Remove a classe 'active' para esconder o lightbox
      lightboxContent.innerHTML = "";  // Limpa o conteúdo
    });
  
    // Fecha o lightbox ao clicar fora da imagem ou vídeo
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active"); // Remove a classe 'active'
        lightboxContent.innerHTML = "";  // Limpa o conteúdo
      }
    });
  });
  