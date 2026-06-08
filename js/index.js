const contenedor = document.getElementById("contenedor-libros");

const destacados = libros.slice(0, 5);

destacados.forEach(libro => {

    contenedor.innerHTML += `
    
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