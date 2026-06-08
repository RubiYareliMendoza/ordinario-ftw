const contenedor =
document.getElementById(
"contenedor-favoritos"
);

const favoritos =
JSON.parse(
localStorage.getItem("favoritos")
) || [];

if(favoritos.length === 0){

    contenedor.innerHTML = `
    
    <h2>
    No tienes libros favoritos.
    </h2>
    
    `;

}else{

    favoritos.forEach(libro => {

        contenedor.innerHTML += `
        
        <article class="tarjeta-libro">

            <img
            src="${libro.portada}"
            alt="Portada de ${libro.titulo}">

            <div class="info-libro">

                <h3>${libro.titulo}</h3>

                <p>${libro.autor}</p>

                <span>${libro.categoria}</span>

            </div>

        </article>
        
        `;

    });

}