const contenedorCatalogo =
document.getElementById("catalogo-libros");

function mostrarLibros(lista){

    contenedorCatalogo.innerHTML = "";

    lista.forEach(libro => {

        contenedorCatalogo.innerHTML += `
        
        <article class="tarjeta-libro">

            <img
                src="${libro.portada}"
                alt="Portada del libro ${libro.titulo}"
            >

            <div class="info-libro">

                <h3>${libro.titulo}</h3>

                <p>${libro.autor}</p>

                <span>${libro.categoria}</span>

            </div>

        </article>
        
        `;
    });
}

mostrarLibros(libros);

const botonesFiltro =
document.querySelectorAll(".filtro-btn");

botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        const categoria =
        boton.dataset.categoria;

        if(categoria === "Todos"){

            mostrarLibros(libros);

        }else{

            const filtrados =
            libros.filter(libro =>
                libro.categoria === categoria
            );

            mostrarLibros(filtrados);

        }

    });

});
const buscador =
document.getElementById("buscarLibro");

buscador.addEventListener("input", () => {

    const texto =
    buscador.value.toLowerCase();

    const resultado =
    libros.filter(libro =>
        libro.titulo.toLowerCase()
        .includes(texto)
    );

    mostrarLibros(resultado);

});