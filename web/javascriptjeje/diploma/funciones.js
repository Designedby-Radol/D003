function imprimir() {

    let cardContainer = document.querySelector("#cardContainer");
    cardContainer.innerHTML = `
            
      <div class="diploma">
      <div class="diploma-content">
        <h2 class="diploma-title">${titulo}x</h2>
        <p class="diploma-s">Otorgado a:</p>
        <p class="diploma-text text-uppercase">[Nombre del Recipiente]</p>
        <p class="diploma-text">Por su destacada dedicación y logros en el campo de [Área de Logros].</p>
        <p class="diploma-text">Fecha: [Fecha de Emisión]</p>
        <div class="diploma-signature">
          <img src="" alt="Firma del Director" class="signature-img">
          <p>[Nombre del Director]</p>
        </div>
      </div>
    </div>
    `;
  }