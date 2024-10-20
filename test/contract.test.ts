import {UserLatvia} from "../src/UserLatvia";
import {UserEstonia} from "../src/UserEstonia";
import {KYC} from "../src/KYC";
import {Contract} from "../src/Contract";

let userLatvia: UserLatvia
let userEstonia: UserEstonia
let contractTrue: Contract
let contractFalse: Contract

beforeEach(() => {
    userLatvia = new UserLatvia('Alex', 'Ott', 20, '124', '33333', 'test')
    userEstonia = new UserEstonia('Alex', 'Ott', 19, '124', '33333', 'test')
    contractTrue = new Contract('Job offer', true)
    contractFalse = new Contract('Job offer', false)
})

describe('test for estonia user', () => {
    test('new user mobile', () => {
        expect(userEstonia.mobileIDAuthorization).toBeUndefined()
    })


    test('check sign Estonia true', () => {
        expect(() => {
            contractTrue.signEstonia(userEstonia)
        }).toBeTruthy()
    })

    test('check sign Estonia false', () => {
        expect(() => {
            contractFalse.signEstonia(userEstonia)
        }).toBeFalsy()
    })

    test('check sign Latvia true', () => {
        expect(() => {
            contractTrue.signLatvia(userLatvia)
        }).toBeTruthy()
    })

    test('check sign Latvia false', () => {
        expect(() => {
            contractFalse.signLatvia(userLatvia)
        }).toBeFalsy()
    })

})