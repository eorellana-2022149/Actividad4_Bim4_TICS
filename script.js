const API_URL = 'https://jsonplaceholder.typicode.com/users';

const userListContainer = document.getElementById('user-list');
const searchInput = document.getElementById('search-input');

let usersData = [];

function renderUsers(users) {
    userListContainer.innerHTML = '';

    if (users.length === 0) {
        userListContainer.innerHTML = '<p class="no-results">No se encontraron usuarios.</p>';
        return;
    }

    users.forEach((user) => {
        const card = document.createElement('article');
        card.className = 'user-card';

        card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Usuario:</strong> @${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Empresa:</strong> ${user.company.name}</p>
    `;

        userListContainer.appendChild(card);
    });
}

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error al consultar la API');
        }
        usersData = await response.json();
        renderUsers(usersData);
    } catch (error) {
        userListContainer.innerHTML = `<p class="no-results">Error al cargar datos: ${error.message}</p>`;
    }
}

function filterUsers(searchTerm) {
    const term = searchTerm.toLowerCase();
    const filtered = usersData.filter((user) =>
        user.name.toLowerCase().includes(term)
    );
    renderUsers(filtered);
}

searchInput.addEventListener('input', (event) => {
    filterUsers(event.target.value);
});

document.addEventListener('DOMContentLoaded', fetchUsers);