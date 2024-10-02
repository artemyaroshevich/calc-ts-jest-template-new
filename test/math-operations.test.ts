import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing', () => {
  let mathOps: MathOperations

  test('should add two numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add two numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(-3, 3)).toBe(0)
  })

  describe('Math operation class testing ', () => {
    test('should squaring correctly positive number', () => {
      mathOps = new MathOperations()
      expect(mathOps.sqrt(2)).toBe(4)
    })
  })
})