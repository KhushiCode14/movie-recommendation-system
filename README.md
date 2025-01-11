Movie Recommender
This project is a Movie Recommender application that helps users find movies based on different filters, such as Genre, Duration, and Mood. Users can select their preferences from dropdowns and receive movie recommendations that match their criteria.

Features
Genre Filter: Filter movies by genre such as Comedy, Action, Drama, etc.
Duration Filter: Filter movies based on their length: Short (under 90 minutes), Medium (90-120 minutes), and Long (over 120 minutes).
Mood Filter: Filter movies based on your mood: Happy, Relaxed, Excited, or Adventurous.
Responsive Design: The website is responsive and adjusts seamlessly across different screen sizes.
Dynamic Data: Fetches movie data from a JSON file and dynamically updates the options and movie cards based on the user’s selections.
Tech Stack
HTML5: Structure and content of the webpage.
CSS3: Styling the website with modern layout techniques.
JavaScript: For dynamic behavior, such as fetching data and filtering results.
JSON: Movie data is fetched from a local JSON file.

Installation
To run this project locally on your machine, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/movie-recommender.git
Navigate to the project directory:

bash
Copy code
cd movie-recommender
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
Example of data.json file
The data.json file contains movie data structured as follows:

json
Copy code
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
