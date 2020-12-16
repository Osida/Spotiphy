const _token = "";
// the initial state of the data layer
export const initialState = {
  user: null,
  playlists: [],
  // spotify: null,
  discover_weekly: null,
  // top_artists: null,
  playing: false,
  item: null,
  // token: process.env.REACT_APP_URL_TOKEN,
};

// state => the current look of the data layer
// action => how we manipulate what/how the data layer looks like
// reducer => primary job is to listen to/for actions
const reducer = (state, action) => {
  console.log("action = ", action);

  // action -> type, [payload] *can be called anything we want
  switch (action.type) {
    case "SET_USER":
      // how the new state will look
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
