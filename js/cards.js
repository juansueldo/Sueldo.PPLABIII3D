const $home = document.getElementById("home");

export const crearCard = (data) => {
  if (Array.isArray(data)) {
    const divContenedor = document.createElement("div");
    divContenedor.classList.add("centrado");

    const imagenes = {
      fuerza: "/img/management.png",
      alias: "/img/detective.png",
      arma: "/img/fighting.png",
      editorial: "/img/comic-book.png",
    };

    data.forEach((objeto) => {
      const article = document.createElement("article");
      article.classList.add("contenedor");

      for (const key in objeto) {
        if (key === "id") continue;

        const p = document.createElement("p");
        p.classList.add("texto");
        p.textContent = key + ": " + objeto[key];

        if (key in imagenes) {
          const img = document.createElement("img");
          img.src = imagenes[key];
          img.classList.add("icons");
          p.appendChild(img);
        }

        article.appendChild(p);
      }

      divContenedor.appendChild(article);
    });

    $home.appendChild(divContenedor);
  }
};