// Ejercicio 3: Uso de Slots

class ContenedorComponent extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');

        container.innerHTML = `
        <div>
            <slot name="encabezado"></slot>
        </div>
        <div>
            <slot name="cuerpo"></slot>
        </div>

         <style>
            h1 {
                color: #14C8E8; 
                font-family: 'Arial', sans-serif; 
            }
        </style>
      `;

        container.style.border = '3px solid #ccc';
        container.style.padding = '10px';
        container.style.color = '#0F841B';

        shadowRoot.appendChild(container);
    }
}

customElements.define('contenedor-component', ContenedorComponent);
