const scopes = [
  "ugc-image-upload",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "app-remote-control",
  "playlist-modify-public",
  "user-modify-playback-state",
  "playlist-modify-private",
  "user-follow-modify",
  "user-read-currently-playing",
  "user-follow-read",
  "user-library-modify",
  "user-read-playback-position",
  "user-library-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "streaming",
];

//   const scopes = [
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-read-playback-state",
//     "user-top-read",
//     "user-modify-playback-state",
//   ];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${
  process.env.REACT_APP_CLIENT_ID
}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
