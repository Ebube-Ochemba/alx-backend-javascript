import concatArrays from '../5-spread-operator';

test('concatArrays should correctly concatenate two arrays and a string', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
});

test('concatArrays should handle empty arrays and non-empty string', () => {
    expect(concatArrays([], [], 'Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
});

test('concatArrays should handle non-empty arrays and empty string', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], '')).toEqual(['a', 'b', 'c', 'd']);
});

test('concatArrays should handle empty arrays and empty string', () => {
    expect(concatArrays([], [], '')).toEqual([]);
});
