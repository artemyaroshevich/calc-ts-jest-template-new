import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor
let userMoreThenEight:User

beforeEach(() => {
  user = new User('Alex', 'Ott', '554455', 'Eesti',12)
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

test('check adult', () => {
  expect(processor.checkAdult(user)).toBeFalsy()
})

test('check adult more than 18',() => {
  userMoreThenEight = new User('Alex', 'Ott', '554455', 'Eesti',19)
  expect(processor.checkAdult(userMoreThenEight)).toBeTruthy()
})

test('check revokeConsent', () => {
  expect(processor.revokeConsent(user)).toBeFalsy()
})
