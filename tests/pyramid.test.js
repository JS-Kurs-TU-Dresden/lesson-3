import { expect, test, describe, vi } from 'vitest'

vi.mock('../prompt.js', () => {
    let counter = 0

    return {
        prompt: () => {
            if (counter === 0) {
                counter++
                return "3"
            } else {
                return "7"
            }


        }
    }
})

describe('pyramid', async () => {

    const spy = vi.spyOn(console, 'log')

    await import('../tasks/pyramid.js')
    await import('../tasks/pyramid.js?buster=1')

    const pyramid3 = spy.calls.flat().slice(0, 3)
    const pyramid7 = spy.calls.flat().slice(3, 10)

    test('with height 3', () => {
        expect(pyramid3).toEqual([
            "  #",
            " ###",
            "#####"
        ])
    })


    test('with height 7', () => {
        expect(pyramid7).toEqual([
            "      #",
            "     ###",
            "    #####",
            "   #######",
            "  #########",
            " ###########",
            "#############"
        ])
    })
})