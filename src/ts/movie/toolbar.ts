import { addMovieGridLayoutListener, addMovieSelectLayoutListener } from "../../events/events";

export function addMovieListToolbar(): void {
  const appElement: any = document.getElementById("app");
  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";
  toolbar.innerHTML =
    `<div class="toolbar">
    <div class="container">
      <div>
      <button type="button" id="movie-grid-btn" class="btn btn-icon">
        <img src="grid-layout.svg" alt="grid icon">
      </button>
      <button type="button" id="movie-list-btn" class="btn btn-icon">
        <img src="list-layout.svg" alt="list icon">
      </button>
      </div>
      <div>
      <!-- list type select -->
      <select
      id="movie-type-select"
      class="form-select"
      aria-label="Movie list type"
      >
      <option selected value="now_playing">En cartelera</option>
      <option selected value="popular">Popular</option>
      <option selected value="top_rated">Mejor valoradas</option>
      <option selected value="upcoming">Próximamente</option>
      </select>
      </div>
    </div>
  </div>`
  appElement.appendChild(toolbar)
  
addMovieGridLayoutListener()

addMovieSelectLayoutListener()
}


