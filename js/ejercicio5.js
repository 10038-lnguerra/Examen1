// Ejercicio 5: Gestión de Estado

class ContadorComponent extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        this._contador = 0;
        const container = document.createElement('div');
        this._contadorParrafo = document.createElement('p');
        this._actualizarContador();
        const botonIncrementar = document.createElement('button');
        botonIncrementar.textContent = 'Incrementar';
        botonIncrementar.addEventListener('click', () => this._incrementarContador());

        const botonDisminuir = document.createElement('button');
        botonDisminuir.textContent = 'Disminuir';
        botonDisminuir.addEventListener('click', () => this._disminuirContador());

        container.appendChild(this._contadorParrafo);
        container.appendChild(botonIncrementar);
        container.appendChild(botonDisminuir);

        shadowRoot.appendChild(container);
    }

    _incrementarContador() {
        this._contador++;
        this._actualizarContador();
    }

    _disminuirContador() {
        this._contador--;
        this._actualizarContador();
    }

    _actualizarContador() {
        this._contadorParrafo.textContent = `Contador: ${this._contador}`;
    }
}

customElements.define('contador-component', ContadorComponent);
s