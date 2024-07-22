import getSumOfHoods from '../3-default-parameter';

test('getSumOfHoods should return the correct sum when only initialNumber is provided', () => {
    expect(getSumOfHoods(34)).toBe(142);  // 34 + 89 + 19
});

test('getSumOfHoods should return the correct sum when initialNumber and expansion1989 are provided', () => {
    expect(getSumOfHoods(34, 3)).toBe(56);  // 34 + 3 + 19
});

test('getSumOfHoods should return the correct sum when all parameters are provided', () => {
    expect(getSumOfHoods(34, 3, 4)).toBe(41);  // 34 + 3 + 4
});
