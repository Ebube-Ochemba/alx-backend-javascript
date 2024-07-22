import getBudgetObject from '../7-getBudgetObject';

test('getBudgetObject should return an object with the correct properties and values', () => {
    const income = 400;
    const gdp = 700;
    const capita = 900;

    const expectedObject = { income, gdp, capita };

    expect(getBudgetObject(income, gdp, capita)).toEqual(expectedObject);
});
