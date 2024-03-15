import { addMovieGridLayoutListener, addMovieListLayoutListener, addMovieSelectMovieTypeListener } from "../../events/events";

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
      <option value="popular">Popular</option>
      <option value="top_rated">Mejor valoradas</option>
      <option value="upcoming">Próximamente</option>
      </select>
      </div>
    </div>
  </div>`
  appElement.appendChild(toolbar)

  addMovieGridLayoutListener()
  addMovieListLayoutListener()
  addMovieSelectMovieTypeListener()
}


export function addMovieDetailsToolbar(): void {
  const appElement: any = document.getElementById("app");
  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";
  toolbar.innerHTML =
    `<div class="toolbar">
    <div class="container">
      <div>
      <button type="button" id="movie-details" class="btn btn-icon">
        <img src="grid-layout.svg" alt="grid icon">
      </button>
      </div>
    </div>
  </div>`
  appElement.appendChild(toolbar)

}
