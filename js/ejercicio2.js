class EmisorComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });

      const button = document.createElement('button');
      button.textContent = 'Enviar Mensaje';

      button.addEventListener('click', () => {
        const evento = new CustomEvent('mensajeEnviado', { detail: '¡Hola Mundo!' });
        document.dispatchEvent(evento);
      });
      shadowRoot.appendChild(button);
    }
  }

  customElements.define('emisor-component', EmisorComponent);

  class ReceptorComponent extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const mensajeParrafo = document.createElement('p');

      shadowRoot.appendChild(mensajeParrafo);

      document.addEventListener('mensajeEnviado', (event) => {
        mensajeParrafo.textContent = `Mensaje: ${event.detail}`;
      });
    }
  }

  customElements.define('receptor-component', ReceptorComponent);
