import { types } from "./types";

const initialState = {
  counter: 0,
  LT: null,
  LD: null,
  RT: null,
  RD: null,
};

export const reducer = (state = initialState, action) => {
  if (true) {
    let update = null;
    switch (action.type) {
      case types.INCREMENT:
        return {
          ...state,
          counter: state.counter + 1,
        };
      case types.DECREMENT:
        if (state.counter === 0) {
          return state;
        }
        return {
          ...state,
          counter: state.counter - 1,
        };
      case types.LEFT_TOP:
        update = expand(state, action.payload, ["LT"]);
        return {
          ...state,
          update,
        };
      case types.LEFT_DOWN:
        update = expand(state, action.payload, ["LT", "LD"]);
        return {
          ...state,
          update,
        };
      case types.RIGHT_TOP:
        update = expand(state, action.payload, ["LT", "LD", "RT"]);
        return {
          ...state,
          update,
        };
      case types.RIGHT_DOWN:
        update = expand(state, action.payload, ["LT", "LD", "RT", "RD"]);
        return {
          ...state,
          update,
        };
      case types.RESET:
        return {
          ...state,
          counter: 0,
          LT: null,
          LD: null,
          RT: null,
          RD: null,
        };
      default:
        return state;
    }
  }
};

//  utility function

/**
 *
 * @param {Object} Obj a source object
 * @param {value} value value to be assigned
 * @param {array} target array of keys to assign value
 * @returns updated Object
 * @description function to assign same value to multiple keys
 */
const expand = (Obj, value, target) => {
  Object.keys(Obj).forEach((key) => {
    if (target.includes(key)) {
      Obj[key] = value;
    }
  });
  return Obj;
};
