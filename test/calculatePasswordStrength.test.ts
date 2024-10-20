import {sum} from "../src/calculator";
import {calculatePasswordStrength} from "../src/calculatePasswordStrength";

test('check password length', () => {
    let passwordLength = calculatePasswordStrength('01234567')
    let passwordLengthToNumber = String(passwordLength).length
    expect(Number(passwordLengthToNumber)).toBe(9)
})

test('check password length max', () => {
    let passwordLength = calculatePasswordStrength('0123456789')
    let passwordLengthToNumber = String(passwordLength).length
    expect(Number(passwordLengthToNumber)).toBeLessThan(12)
})

test('check password letters ', () => {
    let password = calculatePasswordStrength('12345678aaA')
    expect(password).toMatch(/[A-Z]/)
})

test('check password little letters', () => {
    let password = calculatePasswordStrength('12345678aaA')
    expect(password).toMatch(/[a-z]/)
})
