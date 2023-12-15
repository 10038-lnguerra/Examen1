// Ejercicio 1: Creación de Componente Simple

class SaludoComponent extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const p = document.createElement('p');
        p.textContent = '¡Hola, Mundo!';
        shadowRoot.appendChild(p);
    }
}

customElements.define('saludo-component', SaludoComponent);
