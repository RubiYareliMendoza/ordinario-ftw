document.getElementById("librosTotal")
.textContent = libros.length;

const categorias =
[...new Set(libros.map(
libro => libro.categoria
))];

document.getElementById("categoriasTotal")
.textContent = categorias.length;

const autores =
[...new Set(libros.map(
libro => libro.autor
))];

document.getElementById("autoresTotal")
.textContent = autores.length;

const tabla =
document.getElementById(
"tablaCategorias"
);

categorias.forEach(categoria => {

    const cantidad =
    libros.filter(libro =>
        libro.categoria === categoria
    ).length;

    tabla.innerHTML += `

    <tr>

        <td>${categoria}</td>

        <td>${cantidad}</td>

    </tr>

    `;

});