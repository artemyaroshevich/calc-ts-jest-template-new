import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Alice', 'Ott', '554455', 'Eesti')
  processor = new Processor()
})

test('check user underfunded', () => {
  expect(user.consentGiven).toBeUndefined()
})

test('check Processor approve', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('check processor verify', () => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('negative check consent', () => {
  expect(processor.checkConsent(user)).toBeFalsy()
})
