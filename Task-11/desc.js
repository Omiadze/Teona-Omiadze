const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const main = document.getElementById("main");
const places = document.getElementById("seat");

const data = localStorage.getItem("movieData");

const movie = JSON.parse(data);

console.log(movie);

places.innerHTML = "";
main.innerHTML = "";

const seats = [
  {
    seat: "seat1",
    price: "25GEL",
  },
  {
    seat: "seat2",
    price: "25GEL",
  },
  {
    seat: "seat3",
    price: "25GEL",
  },
  {
    seat: "seat4",
    price: "25GEL",
  },
  {
    seat: "seat5",
    price: "25GEL",
  },
];

const movieEl = document.createElement("div");

movieEl.classList.add("single_movie_info");

movieEl.innerHTML = `
<div class="banner_img">
    <img src="${IMG_PATH + movie.backdrop_path}" alt="${movie.title}">
</div>
<div class="row">
    <div class="col-6">
    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
    </div>
    <div class="col-6">
            <div class="single_movie_info">
                <h3>${movie.title}</h3>
                <p>
                    ${movie.vote_average}
                </p>
                <p>
                    ${movie.overview}
                </p>
                <p>
                ${movie.original_language}
                </p>
                <p>
                ${movie.release_date}
                </p>
            </div>
    </div>
</div>
`;
main.appendChild(movieEl);

seats.forEach((seat) => {
  const seatEl = document.createElement("div");
  seatEl.classList.add("seat_places");
  seatEl.innerHTML = `
    <h1>${seat.seat}</h1>
    <h2>${seat.price}</h2>
    <button class="gelBtn" type="button">choose</button>
    `;
  places.appendChild(seatEl);
});

const calculate = document.createElement("div");
calculate.classList.add("calc");
const calculateH1 = document.createElement("h1");
calculateH1.textContent = "0";
calculate.appendChild(calculateH1);
const calculateDiv = document.createElement("div");
calculate.appendChild(calculateDiv);
const clearBtn = document.createElement("button");
clearBtn.textContent = "clear";
calculateDiv.appendChild(clearBtn);
const payBtn = document.createElement("button");
payBtn.textContent = "pay";
calculateDiv.appendChild(payBtn);

places.appendChild(calculate);

const handleClick = (e) => {
  calculateH1.textContent = parseInt(calculateH1.textContent) + 25;
  e.target.style.backgroundColor = "green";
};
const handleClearClick = () => {
  calculateH1.textContent = "0";
  removeEventListenerFromButtons();
  addEventListenerToButtons();
  places
    .querySelectorAll(".gelBtn")
    .forEach((btn) => btn.removeAttribute("style"));
};
const addEventListenerToButtons = () =>
  places
    .querySelectorAll(".gelBtn")
    .forEach((btn) =>
      btn.addEventListener("click", handleClick, { once: true })
    );
const removeEventListenerFromButtons = () =>
  places
    .querySelectorAll(".gelBtn")
    .forEach((btn) => btn.removeEventListener("click", handleClick));

addEventListenerToButtons();

clearBtn.addEventListener("click", handleClearClick);
payBtn.addEventListener("click", () => {
  if (calculateH1.textContent != "0") {
    window.location.href = "./pay.html";
  }
});

// get movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  // console.log(res)
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

const moviesDivS = document.createElement("div");
moviesDivS.classList.add("movies-div-s");
main.appendChild(moviesDivS);

function showMovies(moviesS) {
  let index;
  moviesS.forEach((m, i) => {
    if (m.id == movie.id) {
      index = i;
    }
  });
  let start = 20 - index < 5 ? 0 : index + 1;
  console.log(start);
  for (i = start; i < start + 4; i++) {
    const { poster_path, title } = moviesS[i];
    const divS = document.createElement("div");
    divS.innerHTML = `
        <img class="movie_img" src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie_info">
            <h3>${title}</h3>
        </div>
      `;
    moviesDivS.appendChild(divS);

    divS.addEventListener("click", () => {
      localStorage.setItem("movieData", JSON.stringify(moviesS[i]));
      window.location.href = "./movie.html";
    });
  }
}
