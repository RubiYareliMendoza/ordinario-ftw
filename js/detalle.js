const parametros =
new URLSearchParams(window.location.search);

const id =
parseInt(parametros.get("id"));

const libro =
libros.find(libro => libro.id === id);

const contenedor =
document.getElementById("detalle-libro");

contenedor.innerHTML = `

<div class="detalle-container">

    <img
        src="${libro.portada}"
        alt="Portada del libro ${libro.titulo}"
    >

    <div class="detalle-info">

        <h1>${libro.titulo}</h1>

        <h2>${libro.autor}</h2>

        <p><strong>Categoría:</strong>
        ${libro.categoria}</p>

        <p><strong>Año:</strong>
        ${libro.anio}</p>

        <p>${libro.descripcion}</p>
        <button
        id="btnFavorito"
       class="btn-favorito"
       >
       ⭐ Agregar a Favoritos
    </button>

    </div>

</div>

`;
const btnFavorito =
document.getElementById("btnFavorito");

btnFavorito.addEventListener("click", () => {

    let favoritos =
    JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];

    const existe =
    favoritos.some(
        favorito => favorito.id === libro.id
    );

    if(!existe){

        favoritos.push(libro);

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

        alert(
            "Libro agregado a favoritos ⭐"
        );

    }else{

        alert(
            "Este libro ya está en favoritos"
        );

    }

});