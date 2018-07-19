//action들을 먼저 정의해준다.
const TOGGLE = "timer/TOGGLE";
const DECREASE = "timer/DECREASE";
const RECOVER = "timer/RECOVER";

//action creators
export const toggle = () => ({
  type: TOGGLE
});

export const decrease = () => ({
  type: DECREASE
});

export const recover = () => ({
  type: RECOVER
});

//initialState

const initialState = {
  playing: false,
  leftTimes: 1500
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        playing: !state.playing,
        leftTimes: state.leftTimes
      };

    case DECREASE:
      return {
        ...state,
        leftTimes: state.leftTimes - 1
      };

    case RECOVER:
      return {
        ...state,
        leftTimes: 1500
      };

    default:
      return state;
  }
}
