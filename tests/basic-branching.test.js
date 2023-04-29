import { expect, test, describe, vi } from 'vitest'
import { readFileSync } from 'fs'
import { afterEach } from 'vitest'

afterEach(() => {
    vi.clearAllMocks()
})

describe('basic branching', async () => {

    const spy = vi.spyOn(console, 'log')

    let file = readFileSync('tasks/basic-branching.js', 'utf8')

    eval(file)

    const calls = spy.calls.flat()


    test('first console output', () => {
        expect(calls[0]).toEqual("I have 5 apples")
    })

    test('second console output', () => {

        expect(calls[1]).toEqual("I have a full basket")
    })

    test('third console output', () => {
        expect(calls[2]).toEqual("I have 7 bananas")
    })
})

describe('basic branching edited', () => {
    const spy = vi.spyOn(console, 'log')

    let file = readFileSync('tasks/basic-branching.js', 'utf8')
        .replace('let apples = 5', 'let apples = 0')
        .replace('let oranges = 3', 'let oranges = 1')
        .replace('let bananas = 7', 'let bananas = 0')

    eval(file)

    const calls = spy.calls.flat()

    test('first console output', () => {
        expect(calls[0]).toEqual("I need more fruits")
    })

    test('second console output', () => {
        expect(calls[1]).toEqual("I have the same amount of apples and bananas")
    })
})