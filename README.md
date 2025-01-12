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
- **index.html**: This is the main HTML file that contains the structure of the app.
- **style.css**: The CSS file used for styling the app. It defines the layout, fonts, colors, and other visual aspects.
- **script.js**: The JavaScript file that manages dynamic content rendering, movie filtering, and event handling.
- **data.json**: A JSON file containing an array of movie objects with attributes such as title, genre, duration, and mood.


## Installation

Follow the steps below to get the Movie Recommender app running locally on your machine.

### 1. Clone the Repository

First, clone the repository to your local machine by running the following command:

```bash
git clone https://github.com/your-username/movie-recommender.git
```

### 2. Navigate to the Project Directory
First, clone the repository to your local machine by running the following command:

```bash
cd movie-recommender
```
### 3. Open the Project in Your Browser
```open index.html    # For Mac
start index.html   # For Windows
 ```

## How to Use

1. **Select Filters**  
   Choose the desired **Genre**, **Duration**, and **Mood** filters from the dropdown menus.

2. **Apply Filters**  
   Click on the **Genre**, **Duration**, or **Mood** button to filter the movie list based on your selected criteria.

3. **View Results**  
   The app will display a list of movies that match your selected filters. You can browse the list of movies that fit the chosen genre, duration, and mood.

4. **No Results**  
   If no movies match your selected criteria, a message will inform you that **no results were found**.



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
```
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
