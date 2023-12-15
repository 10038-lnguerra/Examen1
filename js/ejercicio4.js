class UserListComponent extends HTMLElement {
    constructor() {
        super();

        // Utiliza el shadow DOM para encapsular el componente
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Crea el contenedor principal del componente
        const container = document.createElement('div');
        container.setAttribute('class', 'user-list-container'); // Agrega una clase para estilos CSS

        this.loadUserList(container);

        // Agrega estilos CSS específicos al shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            .user-list-container {
                font-family: 'Arial', sans-serif;
                margin: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                overflow: hidden;
            }

            table {
                width: 100%;
                border-collapse: collapse;
            }

            th, td {
                padding: 12px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }

            th {
                background-color: #f2f2f2;
            }
        `;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }

    async loadUserList(container) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();

            const userTable = document.createElement('table');
            const headerRow = document.createElement('tr');
            const headers = ['ID', 'Nombre', 'Email'];

            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            userTable.appendChild(headerRow);

            users.forEach(user => {
                const row = document.createElement('tr');
                const columns = [user.id, user.name, user.email];

                columns.forEach(columnText => {
                    const td = document.createElement('td');
                    td.textContent = columnText;
                    row.appendChild(td);
                });

                userTable.appendChild(row);
            });

            container.appendChild(userTable);
        } catch (error) {
            console.error('Error al cargar la lista de usuarios:', error);
            container.textContent = 'Error al cargar la lista de usuarios.';
        }
    }
}

customElements.define('user-list-component', UserListComponent);
