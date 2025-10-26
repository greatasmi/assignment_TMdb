# Getting Started TMDB booking app in react native 

# Features

### Movie Browsing

### Browse movies in multiple categories:

### Now Playing

### Popular

### Top Rated

### Upcoming

### Each movie shows:

### Poster image

### Title

### Release date

### Circular score (vote average)

2. Movie Details

### Detailed movie description

### Trailer video playback

### Genre, overview, and popularity metrics

3. Booking System

### Users can select:

### Movie

### Seats

### Date & Time

### Bookings are stored locally using AsyncStorage

### Booking details include:

### Movie Title

### Seats

### ate & Time

### Total Price

Booking history fetches movie title dynamically from TMDb API if only movieId is stored

4. UI & Design

Dark theme with contrasting colors

Rounded cards for movies and bookings

Circular rating indicator for movie scores

Smooth navigation using React Navigation

Screens Overview

Home Screen

Lists movies with posters, titles, release dates, and ratings.

Tab navigation for different movie categories.

Movie Detail Screen

Shows movie description, genres, trailers, and score.

Option to book tickets.

Booking Detail Screen

Displays all user bookings.

Fetches movie titles dynamically if needed.

Shows seats, date, time, and total price.

Dependencies

The project uses the following main packages:


```
Package	Version	Purpose
@react-native-async-storage/async-storage	2.2.0	Store booking data locally
@react-navigation/native	7.1.18	App navigation
@react-navigation/native-stack	7.5.1	Stack navigation
@react-navigation/bottom-tabs	7.5.0	Tab navigation
axios	1.12.2	API calls to TMDb
react-native-video	6.17.0	Video playback (trailers)
react-native-video-controls	2.8.1	Video controls
react-native-svg	15.14.0	Circular score visualization
react-native-linear-gradient	2.8.3	Gradient UI elements
react-native-safe-area-context	5.6.1	Safe area handling
react-native-gesture-handler	2.29.0	Gesture handling
react-native-vector-icons	10.3.0	Icon usage
react-native-image-slider-box	2.0.7	Image slider for movie posters
react-native-encrypted-storage	4.0.3	Secure storage option
react-native-asset	2.1.1	Asset management
Installation & Setup
```
Clone Repository

git clone <repository-url>
cd <project-folder>


Install Dependencies

npm install


Set TMDb API Key

Add your API key in API_ENDPOINTS.ts:

export const TMDB_API_KEY = 'YOUR_API_KEY_HERE';


Run App

npx react-native run-android   # for Android
npx react-native run-ios       # for iOS

Future Enhancements

Add search functionality by movie keyword


