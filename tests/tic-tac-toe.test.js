import { expect, test, describe, vi } from 'vitest'

vi.mock('../prompt.js', () => {
    let counter = 0
    const responses = ["0", "0", "1", "1", "2", "2", "1", "0", "2", "0", "1", "2"]

    return {
        prompt: () => {
            if (counter >= responses.length) throw new Error("Too many prompts")
            return responses[counter++]
        }
    }
})

describe('tic-tac-toe', async () => {

    const log = vi.spyOn(console, 'log')

    const { markCell, checkWin, changeGrid } = await import('../tasks/tic-tac-toe.js')

    test('grid', () => {
        expect(log).toHaveBeenLastCalledWith("O won!")
    })

    test('markCell', () => {
        changeGrid([
            ['X', 'O', ' '],
            ['X', 'O', ' '],
            ['X', ' ', ' ']
        ])

        expect(markCell(0, 0, 'X')).toBe(false)
        expect(markCell(0, 2, '0')).toBe(false)
        expect(markCell(2, 0, 'X')).toBe(true)
        expect(markCell(2, 0, 'X')).toBe(false)
    })

    test('checkWin', () => {
        // Test vertical wins
        changeGrid([
            ['X', 'O', ' '],
            ['X', 'O', ' '],
            ['X', ' ', ' ']
        ])
        expect(checkWin()).toBe('X')

        changeGrid([
            ['O', 'X', ' '],
            ['O', 'X', ' '],
            [' ', 'X', ' ']
        ])

        expect(checkWin()).toBe('X')

        changeGrid([
            ['O', ' ', 'X'],
            ['O', ' ', 'X'],
            [' ', ' ', 'X']
        ])

        expect(checkWin()).toBe('X')

        // Test horizontal wins
        changeGrid([
            ['X', 'X', 'X'],
            ['O', 'O', ' '],
            [' ', ' ', ' ']
        ])

        expect(checkWin()).toBe('X')
        
        // Test diagonal wins
        changeGrid([
            ['X', 'O', ' '],
            ['O', 'X', ' '],
            [' ', ' ', 'X']
        ])

        expect(checkWin()).toBe('X')

        // Test no win

        changeGrid([
            ['X', 'O', ' '],
            ['O', 'X', ' '],
            [' ', ' ', ' ']
        ])

        expect(checkWin()).toBeUndefined()


    })
})