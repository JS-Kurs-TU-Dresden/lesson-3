import { expect, test, describe } from 'vitest'

describe('return-values', async () => {

    const { findWithChar } = await import('../tasks/return-values.js')

    test('findWithChar', () => {
        expect(findWithChar(['hello', 'world'], 'o')).toBe('hello')
        expect(findWithChar(['hello', 'world'], 'x')).toBeUndefined()
        expect(findWithChar([], 'o')).toBeUndefined()
    })
})