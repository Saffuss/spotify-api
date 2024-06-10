const client_id = 'Y2bb296eed39c4be7bfd5ef153ef3097e'; // Replace with your Spotify app's client ID
const redirect_uri = 'http://localhost:3000'; // Replace with your redirect URI
const stateKey = 'spotify_auth_state';

// Function to generate a random string of a given length
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Generate a random state string
const state = generateRandomString(16);

// Save the state in local storage
localStorage.setItem(stateKey, state);

// Define the scope of the permissions
const scope = 'user-read-private user-read-email';

// Construct the URL for Spotify's authorization endpoint
const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(client_id)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${encodeURIComponent(state)}`;

// Redirect the user to the authorization URL
window.location.href = url;
