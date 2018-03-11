export const GET_INITIAL = '0'
export const SUM= 'SUM'
export const SUBSTRACTION = 'SUBSTRACTION'
export const MULTIPLY = 'MULTIPLY'
export const DIVISION = 'DIVISION'

export function getInitial() {
  return {
    type: GET_INITIAL,
    payload: 1
  }
}

export function SUM() {
  return {
    type: sum
  }
}

export function SUBSTRACTION() {
  return {
    type: substraction
  }
}

export function MULTIPLY() {
  return {
    type: multiply
  }
}

export function DIVISION {
  return {
    type: multiple
  }
}