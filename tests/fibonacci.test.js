import { expect, test, describe, vi } from 'vitest'

describe('fibonacci', async () => {

    const spy = vi.spyOn(console, 'log')

    await import('../tasks/fibonacci.js')

    const calls = spy.calls.flat()

    test('console output', () => {
        expect(calls).toEqual([
            0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229
        ])
    })
})