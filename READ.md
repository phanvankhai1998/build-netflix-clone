##build-netflix-clone

get TMDB API Key

https://www.themoviedb.org/settings/api/request

#API Key (v3 auth)
9c8b7f71ccb275e81aaada5cf2009298
#Example API Request
https://api.themoviedb.org/3/movie/550?api_key=9c8b7f71ccb275e81aaada5cf2009298
#API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzhiN2Y3MWNjYjI3NWU4MWFhYWRhNWNmMjAwOTI5OCIsInN1YiI6IjYxNTkyY2NlZWIxNGZhMDA2MjgxNWE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5O6dp_kG3lJOdw5cVMfTL9BZAXMoYXfVT6-8NX3iO3o

https://console.firebase.google.com/project/build-netflix-clone/overview

npm install firebase

## Tiếp theo, khởi chạy Firebase và bắt đầu tận dụng SDK cho các sản phẩm bạn muốn sử dụng.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBX14a1wsUEleVQdVikIWtxIeJSamr9aTE",
authDomain: "build-netflix-clone.firebaseapp.com",
projectId: "build-netflix-clone",
storageBucket: "build-netflix-clone.appspot.com",
messagingSenderId: "726094933224",
appId: "1:726094933224:web:f58d3cda057788ae952d5d",
measurementId: "G-6XZQ0HMNWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

npm install -g firebase-tools

firebase login

firebase init

firebase deploy
