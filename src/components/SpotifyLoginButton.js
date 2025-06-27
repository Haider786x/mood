// SpotifyLoginButton.js
const SpotifyLoginButton = () => {
  const CLIENT_ID = "YOUR_SPOTIFY_CLIENT_ID"; // ← replace this
  const REDIRECT_URI = "http://localhost:3000/"; // or your Netlify URL
  const SCOPES = ["user-read-email", "user-read-private"].join("%20");

  const handleLogin = () => {
    const authURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
    window.location.href = authURL;
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        backgroundColor: "#1DB954",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
      }}
    >
      Login with Spotify
    </button>
  );
};

export default SpotifyLoginButton;
