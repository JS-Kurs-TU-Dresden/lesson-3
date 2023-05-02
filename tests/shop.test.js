import { expect, test, describe, vi } from 'vitest'

vi.mock('../prompt.js', () => {
    let counter = 0
    const responses = ["4", "Milk", "Eggs", "Bread", "Wood", "DONE"]

    return {
        prompt: () => {
            if (counter >= responses.length) throw new Error("Too many prompts")
            return responses[counter++]
        }
    }
})

describe('shop', async () => {

    const log = vi.spyOn(console, 'log')

    const { buyItem, findItemIndex, changeMoney } = await import('../tasks/shop.js')

    test('Prompting', async () => {
        expect(log.calls[7]).toEqual(['You bought Milk'])
        expect(log.calls[8]).toEqual(['Sorry, you don\'t have enough money'])
        expect(log.calls[9]).toEqual(['You bought Bread'])
        expect(log.calls[10]).toEqual(['Sorry, we don\'t have that item'])
    })

    test('findItemIndex', () => {
        expect(findItemIndex('Bread')).toBe(0)
        expect(findItemIndex('Milk')).toBe(1)
        expect(findItemIndex('Tea')).toBe(6)
        expect(findItemIndex('Dinosaur')).toBe(-1)
    })

    test('buyItem', () => {
        changeMoney(10)

        expect(buyItem('Bread')).toBe(9)
        expect(buyItem('Milk')).toBe(7)
        expect(buyItem('A Dinosaur')).toBe(9)
        expect(buyItem('Dinosaur')).toBe(10)
    })
})