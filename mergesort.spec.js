describe('Merge sort', function () {
    describe('split', function() {
        it('given one array, returns two arrays', function() {
            expect(split([])).toEqual([[],[]]);
        });
        it('splits array of even length', function() {
            expect(split([5,10])).toEqual([[5], [10]]);
        });
        it('splits array of odd length', function() {
            expect(split([5, 10, 11])).toEqual([[5], [10, 11]]);
        }); 
    });
    describe('merge', function() {
        it('given two arrays, returns one array', function() {
            expect(merge([1],[2])).toEqual([1,2]);
        });
        it('given two sorted arrays, returns sorted array', function() {
            expect(merge([1, 5, 6], [2, 6, 7])).toEqual([1,2,5,6,6,7]);
        });
        it('works for arrays of unequal length', function(){
            expect(merge([1, 2, 8, 10], [3, 6])).toEqual([1,2,3,6,8,10]);
        })
    });
    describe('mergeSort', function() {
        it('with 0 or 1 elements returns sorted array', function() {
            expect(mergeSort([4])).toEqual([4]);
        })
        it('works with more elements', function() {
            var sorted = mergeSort([1,4,3,8,1,7]);
            expect(sorted).toEqual([1,1,3,4,7,8]);
        });
    })
});