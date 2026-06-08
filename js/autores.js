const contenedorAutores =
document.getElementById(
"contenedor-autores"
);

const autoresUnicos =
[...new Set(
libros.map(libro => libro.autor)
)];

autoresUnicos.forEach(autor => {

    const cantidadLibros =
    libros.filter(libro =>
        libro.autor === autor
    ).length;

    contenedorAutores.innerHTML += `

    <article class="autor-card">

        <h2>${autor}</h2>

        <p>
            Libros disponibles:
            ${cantidadLibros}
        </p>

    </article>

    `;

});