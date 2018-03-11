import {
  GET_INITIAL,
  SUM,
  SUBSTRACTION,
  MULTIPLY,
  DIVISION
} from './actions/calculator '

export default function calculatorReducer(state = 0, action) {
  switch (action.type) {
    case GET_INITIAL:
      return 10
    default:
      return state
  }
}