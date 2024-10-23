import { subtraction, sum } from '../src/calculator'

test('sums two positive integer numbers: basic', () => {
  const expectedResult: number = 4
  const actualResult: number = sum(2, 2)
  expect(expectedResult).toBe(actualResult)
})

test('sums two positive integer numbers', () => {
  expect(sum(2, 2)).toBe(4)
  expect('Alice').toBe('Alice')
})

test('sums two positive numbers: passed', () => {
  // Some decimal sums (like 0.1 + 2.1) don’t trigger floating-point
  // precision issues in JavaScript,
  expect(sum(0.1, 2.1)).toBe(2.2)
})

test('sums two positive numbers: failing test', () => {
  // Don't use toBe with floating-point numbers
  // test will fail
  let a = 1
  let b = 2
  expect(sum(a, b)).toBe(3)
})

test('sums two positive numbers with close to: default precision', () => {
  // toBeCloseTo is specifically designed to handle floating-point precision issues
  expect(sum(1, 1)).toBeCloseTo(2) // default rounding is 2
})

test('sums two positive numbers with close to: precision', () => {
  // this will fail: high precision
  expect(sum(1, 2)).toBeCloseTo(3, 3)
})

test('subtraction two positive: passed', () => {
  const expectedResult = 0
  const actualResult = subtraction(3, 3)
  expect(actualResult).toBe(expectedResult)
})

test('sums two positive numbers with close to: precision', () => {
  // this will fail: high precision
  expect(subtraction(4, 4)).toBeCloseTo(0)
})

test('sums two negative numbers: precision', () => {
  expect(subtraction(0, 0)).toBeCloseTo(0)
})
