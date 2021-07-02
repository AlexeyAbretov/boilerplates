import { flat } from '../flat';

describe('utils/array/flat tests', () => {
    it('no params', () => {
        const result = flat();

        expect(result).toEqual([]);
    })

    it('should flat two level array', () => {
        const result = flat({
            arr: [1, [4, 5], 2, 3]
        });

        expect(result).toEqual([1, 4, 5, 2, 3]);
    })

    it('should flat three level array', () => {
        const result = flat({
            arr: [1, [4, 5], 2, 3, [1, [5, 6]]]
        });

        expect(result).toEqual([1, 4, 5, 2, 3, 1, 5, 6]);
    })

    it('no dub should flat three level array', () => {
        const result = flat({
            arr: [1, [4, 5], 2, 3, [1, [5, 6]]],
            hasDub: false
        });

        expect(result).toEqual([1, 4, 5, 2, 3, 6]);
    })
})