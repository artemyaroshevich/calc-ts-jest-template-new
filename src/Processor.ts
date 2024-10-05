import {User} from './User'

export class Processor {
    givenConsent(user: User) {
        user.consentGiven = true
    }

    checkConsent(user: User): boolean {
        return user.consentGiven === true
    }

    checkAdult(user: User): boolean {
        return user.age > 18;
    }

    revokeConsent(user: User) {
        user.consentGiven === false
    }
}
