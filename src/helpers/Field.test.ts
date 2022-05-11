import { emptyFieldGenerator, CellState, fieldGenerator } from './Fiel';

const { empty, bomb, hidden } = CellState

describe('Field generator', () => {

    describe('emptyFieldGenerator tests', () => {

        it('2 x 2', () => {

            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty, empty],
                [empty, empty],
            ])

        })

        it('3 x 3', () => {

            expect(emptyFieldGenerator(3)).toStrictEqual([
                [empty, empty, empty],
                [empty, empty, empty],
                [empty, empty, empty],
            ])

        })

        it('3 x 3 with hidden state', () => {

            expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
            ])

        })
    })

    describe('simple cases', () => {
        it('wrong dencity', () => {
            const errorText = 'Dencity must be between 0 to 1'

            expect(() => fieldGenerator(1, -1)).toThrow(errorText)
            expect(() => fieldGenerator(1, 2)).toThrow(errorText)
        })

        it('Smallest posible fiel without mine', () => {
            expect(fieldGenerator(1, 0)).toStrictEqual([[empty]])
        })
    })
})