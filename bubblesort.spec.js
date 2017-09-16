
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual([]);
    });
    it('sorts an array of one element', function() {
        expect(bubbleSort([7])).toEqual([7]);
    });
    it('sorts an array of many elements', function() {
        expect(bubbleSort([1,4,5,2,18,7])).toEqual([1,2,4,5,7,18]);
    });
    it('compares the expected number of times', function() {
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([4,6,5,1]);
        expect(swap.calls.count()).toEqual(4);
    });
  });

