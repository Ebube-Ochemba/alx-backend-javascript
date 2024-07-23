import getBudgetForCurrentYear from '../8-getBudgetCurrentYear';

test('getBudgetForCurrentYear should return an object with the correct properties and values for the current year', () => {
    const income = 2100;
    const gdp = 5200;
    const capita = 1090;

    const currentYear = new Date().getFullYear();
    const expectedObject = {
        [`income-${currentYear}`]: income,
        [`gdp-${currentYear}`]: gdp,
        [`capita-${currentYear}`]: capita,
    };

    expect(getBudgetForCurrentYear(income, gdp, capita)).toEqual(expectedObject);
});
