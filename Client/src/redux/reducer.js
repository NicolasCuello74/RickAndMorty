import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      // return {
      //   ...state,
      //   myFavorites: [...state.myFavorites, action.payload],
      //   allCharacters: [...state.allCharacters, action.payload],
      // };
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }
    case REMOVE_FAV:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter(
      //     (char) => char.id !== action.payload
      //   ),
      // };
  
      return { ...state, myFavorites: action.payload };
    case FILTER:
      const filterByGender = state.allCharacters.filter((char) => {
        if (char.gender === action.payload) {
          return true;
        } else if (action.payload === "Todos") {
          return true;
        }
        return false
      });
      return {
        ...state,
        myFavorites: filterByGender,
      };
    case ORDER:
      const ordered = state.allCharacters.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: ordered,
      };
    default:
      return state;
  }
}

export default rootReducer;
