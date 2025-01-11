# Movie Recommendor 

This project is a Movie Recommender application that helps users find movies based on different filters, such as Genre, Duration, and Mood. Users can select their preferences from dropdowns and receive movie recommendations that match their criteria.

Movie Recommender is a web application designed to provide movie suggestions based on user preferences, including genre, mood, and duration. The app pulls data from a `data.json` file and displays movie recommendations that match the selected criteria. Built using HTML, CSS, and JavaScript, this app is simple, yet effective in helping users discover new movies.

## Features

- **Genre Selection**: Choose from multiple genres (Comedy, Action, Drama, etc.).
- **Duration Filter**: Select movies based on the desired duration (Short, Medium, Long).
- **Mood Filter**: Choose movies based on your current mood (Happy, Excited, Relaxed, etc.).
- **Responsive Layout**: Works seamlessly on both desktop and mobile devices.
- **Movie Display**: Displays movie details such as title, genre, duration, and mood.

## Technologies Used

- **HTML**: Structure and content of the app.
- **CSS**: Styling and layout of the app.
- **JavaScript**: Dynamic functionality, including data fetching and user interaction.
- **JSON**: Stores movie data.

**Project Structure**
[index.html]: The main HTML file containing the structure of the app.
style.css: The CSS file used for styling the app.
script.js: The JavaScript file that handles dynamic content rendering, filtering, and event handling.
data.json: A JSON file containing movie data for the app to fetch.

**Installation**

To run this project locally on your machine, follow these steps:

Clone the repository:


`git clone https://github.com/your-username/movie-recommender.git
Navigate to the project directory:
cd movie-recommender`
Open index.html in your browser: You can now open the index.html file in your preferred browser to start using the Movie Recommender app.

How to Use
Select the Genre, Duration, and Mood filters from the dropdowns.
Click the Genre, Duration, or Mood button to filter the movie list.
The app will display a list of movies matching your selected criteria.
If no movies match your criteria, a message will inform you that no results were found.
Project Structure
graphql
Copy code
movie-recommender/
├── index.html           # The main HTML file
├── style.css            # CSS file for styling the webpage
├── script.js            # JavaScript file that handles the logic
├── data.json            # JSON file containing the movie data
└── README.md            # This README file
## Example of `data.json`

The `data.json` file contains movie data structured as follows:

```json
{
  "movies": [
    {
      "title": "The Matrix",
      "genre": "Sci-Fi",
      "duration": "Long",
      "mood": "Excited"
    },
    {
      "title": "The Pursuit of Happyness",
      "genre": "Drama",
      "duration": "Medium",
      "mood": "Happy"
    },
    {
      "title": "The Dark Knight",
      "genre": "Action",
      "duration": "Long",
      "mood": "Adventurous"
    }
  ]
}
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
