const users = [
  { id: 1, name: 'Carlos López', email: 'carlos@mail.com' },
  { id: 2, name: 'Ana Pérez', email: 'ana@mail.com' },
  { id: 3, name: 'David Torres', email: 'david@mail.com' },
  { id: 4, name: 'Laura Gómez', email: 'laura@mail.com' },
  { id: 5, name: 'Andrés Díaz', email: 'andres@mail.com' },
];

const tbody = document.getElementById('data');

users.forEach((user, index) => {
  const fila = document.createElement('tr');
  fila.style.backgroundColor = index % 2 === 0 ? 'white' : '#e9ecef';
  fila.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
  `;
  tbody.appendChild(fila);
});
