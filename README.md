
# 🎬 Netflix Clone

A fully functional **Netflix Clone** built using **React.js** that mimics the real Netflix website. It includes features like movie listings from TMDB API, authentication (login/logout), favorites, search, and a responsive modern UI.

## 🚀 Features

- 🔐 **Authentication** with Firebase (Login/Logout)
- 🎞️ **TMDB API Integration** to fetch real movie data
- ❤️ **Favorites System** (Add & View Favorites)
- 🔍 **Search Functionality** to search movies
- 🌙 **Responsive UI** similar to Netflix
- 👤 **Dynamic User Avatars** based on email
- 🎯 **Protected Routes** – Only logged-in users can access home content

## 🛠️ Technologies Used

- **React.js**
- **React Router**
- **Firebase Auth**
- **TMDB API**
- **CSS Modules**
- **Axios**
- **React Icons**

## 📷 Screenshots

| Login Page | Home Page | Search | Favorites |
|------------|-----------|--------|-----------|
| ![Login](‪C:\Users\Hello\Desktop\login.JPG) | ![Home](‪C:\Users\Hello\Desktop\Home-image.JPG) | ![Search](‪C:\Users\Hello\Desktop\search-page.JPG) | ![Favorites](‪C:\Users\Hello\Desktop\favourite-movies.JPG) |

## 🔧 Setup Instructions

### 1. Clone the repository

git clone https://github.com/kirti095/netflix-clone.git
cd netflix-clone

### 2. Install dependencies
bash
Copy
Edit
npm install

### 3. Set up environment variables
Create a .env file in the root with the following:

env
Copy
Edit
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
Also, configure your Firebase project and add your Firebase config inside firebase.js.

### 4. Start the development server
bash
Copy
Edit
npm start
App will run at: http://localhost:3000

### 🧪 Folder Structure
css
Copy
Edit
src/
├── components/
│   ├── Banner.jsx
│   ├── Row.jsx
│   ├── Nav.jsx
│   ├── Login.jsx
│   ├── Favorites.jsx
│   ├── Search.jsx
│   └── ...
├── firebase.js
├── requests.js
├── App.js
└── index.js

### 📝 Credits
  * Movie Data API: TMDB
  * Hosting & Auth: Firebase
  * Avatars: Custom sprite sheet
  * Icons: React Icons

### 🪄 Future Improvements
  * Add profile management
  * Pagination and infinite scroll
  * Dark/light theme toggle
  * Movie trailers modal
  * Multi-user support


### 🌐 Live Demo
  DEMO.. (Link  [https://github.com/kirti095/netflix-clone.git] )


### 📄 License
 This project is licensed under MIT License.

### ✅ Instructions:

- Save this content into a `README.md` file in your project root.
- Replace `"your_tmdb_api_key"` with your actual TMDB key.
- Replace GitHub and live demo URLs.
- Add screenshots in `public/screenshots/` if you want visuals.

Let me know if you'd like to generate the license file (`MIT`, `Apache`, etc.) too!


### 📣 Feedback
  We’d love to hear your thoughts about this Netflix Clone!

  If you find a bug, have suggestions for improvements, or want to share what you liked — feel free to:

 ⭐ Star the repository on GitHub

 🐛 Open an issue for bugs or enhancements

 💬 Leave a comment or feedback through pull requests

 Your feedback helps improve the project and is always appreciated! 🙌


