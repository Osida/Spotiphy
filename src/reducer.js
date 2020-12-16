// the initial state of the data layer
export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQAsxfBQYSnG3LdI0zpiNB1SwUZstisjq_WbwrP2krlSikHPbeaRdL02kg_I_gm6DZgHLco7QjNmdtX5r97YHE63y6ja3Q62om23HjPSIfk40Zew2BT9_pP30Hznkl-gQse7q3k7nyVL_WsTQ6NTIFdOfBIat9QhSxpIRYDhA-ph2HpwtkwX3DOXryNaK_bvYvEKEfgGvJPGse72wnIwCris6Btp_Flj1QfInrJQ8_gOoqEU_RlTWpm1zIpL8Do43DHm0YYzB8vIDSNgRS1i0Xp0Boue3Zo",
  // token: null,
  discover_weekly: [],
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
    case "SET_DISCOVER_WEEKLy":
      return {
        ...state,
        discover_weeklY: action.discover_weeklY,
      };
    default:
      return state;
  }
};

export default reducer;
