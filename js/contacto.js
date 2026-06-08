const formulario =
document.getElementById("formContacto");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Mensaje enviado correctamente 📚"
    );

    formulario.reset();

});