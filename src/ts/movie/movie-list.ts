export function addMovieListGrid(): void {
    const appElement:any = document.getElementById("app");
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML= `container`;

    const grid = document.createElement("div");
    grid.className = "d-grid mb-5 p-5";
    grid.innerHTML= `grid`;

   

    
    appElement.appendChild(container)
    container.appendChild(grid)

}
export function rowGrid(): void {
    for (var i = 0; i < 3; i++) {
        // Crear una nueva fila (row) con Bootstrap
        var row = document.createElement("div");
        row.className = "row";

        // Bucle para crear 4 celdas en cada fila
        for (var j = 1; j <= 4; j++) {
            // Crear una nueva celda (col-md-3) con Bootstrap
            var col = document.createElement("div");
            col.className = "col-md-3 grid-item";

            // Crear una imagen
            var img = document.createElement("img");
            img.src = "ruta-de-la-imagen.jpg"; // Coloca la ruta de tu imagen
            img.alt = "Descripción de la imagen";

            // Crear un título h4
            var title = document.createElement("h4");
            title.textContent = "Título";

            // Crear un párrafo
            var p = document.createElement("p");
            p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

            // Añadir elementos a la celda
            col.appendChild(img);
            col.appendChild(title);
            col.appendChild(p);

            // Anidar la celda dentro de la fila
            row.appendChild(col);
        }

        // Añadir la fila al cuerpo del documento
        grid.appendChild(row);
    }
}
