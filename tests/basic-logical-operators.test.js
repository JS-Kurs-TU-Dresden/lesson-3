import { expect, test, describe } from 'vitest'
import { resultA, resultB, resultC, resultD, resultE, resultF, resultG, resultH } from '../tasks/basic-logical-operators.js'

describe('basic comparisons', () => {

    test('resultA should be true', () => {
        expect(resultA).toBe(true)
    })

    test('resultB should be false', () => {
        expect(resultB).toBe(false)
    })

    test('resultC should be true', () => {
        expect(resultC).toBe(true)
    })

    test('resultD should be false', () => {
        expect(resultD).toBe(false)
    })

    test('resultE should be true', () => {
        expect(resultE).toBe(true)
    })

    test('resultF should be false', () => {
        expect(resultF).toBe(false)
    })

    test('resultG should be true', () => {
        expect(resultG).toBe(true)
    })

    test('resultH should be false', () => {
        expect(resultH).toBe(false)
    })

})