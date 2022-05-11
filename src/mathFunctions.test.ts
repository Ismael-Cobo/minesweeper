import { add } from './mathFunctions';



describe('test for mathFunctions', () => {

    it('check add function', () => {

        expect(add(1, 2)).toBe(3)

    })
})