import { expect, test, describe } from 'vitest'

describe('default-arguments', async () => {

    const { substring, repeat } = await import('../tasks/default-arguments.js')

    test('substring', () => {
        expect(substring('hello', 1, 3)).toBe('el')
        expect(substring('hello', 2)).toBe('llo')
        expect(substring('hello')).toBe('hello')
        expect(substring('hello', -1, 3)).toBe('hel')
    })

    test('repeat', () => {
        expect(repeat('hello', 3)).toBe('hellohellohello')
        expect(repeat('hello')).toBe('hellohello')
        expect(repeat('hello', 0)).toBe('')
        expect(repeat('hello', -1)).toBe('')
    })
})