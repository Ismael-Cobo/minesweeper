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
            const errorText = 'Probability must be between 0 to 1'

            expect(() => fieldGenerator(1, -1)).toThrow(errorText)
            expect(() => fieldGenerator(1, 2)).toThrow(errorText)
        })

        it('Smallest posible fiel without mine', () => {
            expect(fieldGenerator(1, 0)).toStrictEqual([[empty]])
        })

        it('Big field without mine', () => {
            expect(fieldGenerator(10, 0)).toStrictEqual([
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
                [empty ,empty, empty, empty ,empty, empty, empty ,empty, empty, empty],
            ])
        })

        it('Smallest posible fiel with mine', () => {
            expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]])
        })

        it('2 x 2 field with 100% mines', () => {
            expect(fieldGenerator(2, 1)).toStrictEqual([
                [bomb, bomb],
                [bomb, bomb]
            ])
        })

        it('2 x 2 field with 50% mines', () => {
            
            const field = fieldGenerator(2, 0.5)
            const flatField = field.flat()

            console.table(field)

            const fieldsWithBombs = flatField.filter( field => field === bomb)
            const fieldsWithoutBombs = flatField.filter( field => field === 2)

            expect(fieldsWithBombs).toHaveLength(2)
            expect(fieldsWithoutBombs).toHaveLength(2)
        })

        it('10 x 10 field with 25 mines', () => {
            
            const size = 10
            const mines = 25

            const probability = mines / (size*size)
            const field = fieldGenerator(size, probability)

            const flatField = field.flat()

            const fieldWithBombs = flatField.filter( field => field === bomb)
            const fieldWithoutBombs = flatField.filter( field => field <= 8)
            

            expect(fieldWithBombs).toHaveLength(25)
            expect(fieldWithoutBombs).toHaveLength(75)

        })

    })
})