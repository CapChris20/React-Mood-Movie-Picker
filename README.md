# 🎬 CineMood - Mood-Based Movie Discovery App

> **"Pick your vibe. We'll pick your movie."**

A cinematic React application that helps users discover movies based on their current mood. Built with modern web technologies and featuring immersive video backgrounds.

🌐 **[Live Demo](https://cinemood-movie-picke.web.app)** | 📱 **Responsive Design** | 🚀 **Firebase Hosted**

## 🎯 What It Does

CineMood is a movie recommendation app that matches your mood with perfect movie suggestions. Choose from 8 distinct moods, and get personalized movie recommendations with beautiful cinematic backgrounds.

## ✨ Key Features

### 🎭 **8 Mood Categories**
- **Chill** - Relaxing, laid-back films
- **Dreamy** - Ethereal, fantasy movies  
- **Hype** - High-energy, exciting films
- **Melancholy** - Thoughtful, emotional movies
- **Nostalgic** - Classic, timeless films
- **Energetic** - Action-packed adventures
- **Lonely** - Introspective, character-driven stories
- **Superhero** - Epic, heroic tales

### 🎨 **Immersive Experience**
- **Cinematic Video Backgrounds** - Each page has custom video backgrounds
- **Smooth Navigation** - React Router for seamless transitions
- **Responsive Design** - Works perfectly on all devices
- **Interactive UI** - Hover effects and smooth animations

### 🎲 **Smart Features**
- **Random Shuffling** - Get fresh movie recommendations
- **TMDB Integration** - Real movie data with ratings and posters
- **Loading States** - Smooth user experience
- **Error Handling** - Graceful fallbacks

## 🛠️ Built With

- **React 19.0.0** - Modern React with hooks
- **React Router DOM 7.5.3** - Client-side routing
- **Vite 6.3.1** - Lightning-fast build tool
- **CSS3** - Custom styling with Orbitron font
- **Firebase Hosting** - Global CDN deployment
- **TMDB API** - Movie database integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cinemood-movie-picker.git

# Navigate to project directory
cd cinemood-movie-picker

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Firebase Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase
firebase deploy
```

## 📱 How It Works

1. **Landing Page** - Cinematic video background with call-to-action
2. **Mood Selection** - Choose from 8 beautifully designed mood cards
3. **Movie Discovery** - Browse 8 randomly selected movies for your mood
4. **Shuffle & Explore** - Get fresh recommendations anytime

## 🎬 Project Structure

```
src/
├── App.jsx           # Main app with routing
├── Home.jsx          # Landing page with video background
├── MoodPicker.jsx    # Mood selection interface
├── MovieList.jsx      # Movie discovery page
└── index.css         # Custom styling with Orbitron font

public/
├── *.mp4             # Video backgrounds for each page
├── *.jpeg            # Mood category images
└── *_movies.json     # Curated movie data for each mood
```

## 🎨 Design Highlights

- **Orbitron Font** - Futuristic, cinematic typography
- **Video Backgrounds** - Immersive full-screen videos
- **Card-Based UI** - Clean, modern interface
- **Smooth Animations** - Hover effects and transitions
- **Mobile-First** - Responsive design for all devices

## 🔧 Technical Features

- **React Hooks** - useState, useEffect for state management
- **Dynamic Routing** - URL parameters for mood-based navigation
- **API Integration** - TMDB for movie metadata and posters
- **Error Handling** - Graceful fallbacks for missing data
- **Performance** - Optimized video loading and rendering

## 📊 Data Structure

Each mood has a curated JSON file with 100+ movies:
```json
[
  1,
  [
    {
      "id": 123,
      "title": "Movie Title",
      "vote_average": 8.5,
      "poster_path": "/poster.jpg",
      "release_date": "2023-01-01"
    }
  ]
]
```

## 🌟 What Makes This Special

- **Curated Content** - Hand-picked movies for each mood
- **Cinematic Experience** - Video backgrounds create atmosphere
- **Smart Shuffling** - Algorithm ensures variety in recommendations
- **Real Movie Data** - TMDB integration for accurate information
- **Responsive Design** - Perfect on desktop, tablet, and mobile

## 🚀 Deployment

The app is deployed on Firebase Hosting with:
- Global CDN for fast loading
- Custom domain support
- Automatic HTTPS
- Optimized for production



## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for movie data
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
- [Firebase](https://firebase.google.com/) for hosting


**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/captainchris20/cinemood-movie-picker?style=social)](https://github.com/captainchris20/cinemood-movie-picker)

</div>
