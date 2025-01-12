// fetch data from  ---

const genreOptionValue = fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Convert the response to JSON
  })
  .then((data) => {
    console.log(data.movies);
    renderGenre(data.movies); // Use the fetched data here
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
//   verify data is valid or shows
console.log(genreOptionValue);
//
function renderGenre(movies) {
  const genreSelect = document.getElementById("genre");
  const durationSelect = document.getElementById("duration");
  const moodSelect = document.getElementById("mood");

  // Clear existing options
  genreSelect.innerHTML = '<option value="">Select Genre</option>';
  durationSelect.innerHTML = '<option value="">Select Duration</option>';
  moodSelect.innerHTML = '<option value="">Select Mood</option>';

  // Create unique genre, duration, and mood options
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const durations = [...new Set(movies.map((movie) => movie.duration))];
  const moods = [...new Set(movies.map((movie) => movie.mood))];

  // Populate genre options
  genres.forEach((genre) => {
    const genreOption = document.createElement("option");
    genreOption.value = genre;
    genreOption.textContent = genre;
    genreSelect.appendChild(genreOption);
  });

  // Populate duration options
  durations.forEach((duration) => {
    const durationOption = document.createElement("option");
    durationOption.value = duration;
    durationOption.textContent = duration;
    durationSelect.appendChild(durationOption);
  });

  // Populate mood options
  moods.forEach((mood) => {
    const moodOption = document.createElement("option");
    moodOption.value = mood;
    moodOption.textContent = mood;
    moodSelect.appendChild(moodOption);
  });
}

// trigger button and event listener (click)
const genreButton = document
  .getElementById("genre-submit")
  .addEventListener("click", filterMovie);
const durationButton = document
  .getElementById("duration-submit")
  .addEventListener("click", filterMovie);
const moodButton = document
  .getElementById("mood-submit")
  .addEventListener("click", filterMovie);
document
  .getElementById("filter-submit")
  .addEventListener("click", filterMovies);

//filter data based on option selected
function filterMovie() {
  const genreValue = document.getElementById("genre").value;
  const moodValue = document.getElementById("mood").value;
  const durationValue = document.getElementById("duration").value;

  // if (!genreValue || !moodValue || !durationValue) {
  //   alert("Please select all options to filter the movies.");
  //   return;
  // }

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const noFiltersApplied = !genreValue && !moodValue && !durationValue;

      // Filter movies based on selected criteria or show all if no filters
      const moviesToDisplay = noFiltersApplied
        ? data.movies
        : data.movies.filter((movie) => {
            return (
              (genreValue ? movie.genre === genreValue : true) &&
              (moodValue ? movie.mood === moodValue : true) &&
              (durationValue ? movie.duration === durationValue : true)
            );
          });

      displayResults(
        moviesToDisplay,
        !(genreValue || moodValue || durationValue)
      );
      // displayResults(filterMovieValue);
    })
    .catch((error) => {
      console.error("There was an issue fetching the movie data:", error);
    });
}

function displayResults(movies, highlightAll = false) {
  const result = document.getElementById("result");
  result.innerHTML = ""; // Clear previous results

  if (movies.length === 0) {
    result.innerHTML = "<h3>No movies found matching your criteria.</h3>";
    return;
  }
  if (highlightAll) {
    movieCard.classList.add("highlight");
  }
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
      <h2>${movie.title}</h2>
      <h3>Genre: ${movie.genre}</h3>
      <h3>Duration: ${movie.duration}</h3>
      <h3>Mood: ${movie.mood}</h3>
    `;
    result.appendChild(movieCard);
  });
}
