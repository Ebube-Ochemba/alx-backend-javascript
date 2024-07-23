import returnHowManyArguments from '../4-rest-parameter';

test('returnHowManyArguments should return 0 when no arguments are passed', () => {
    expect(returnHowManyArguments()).toBe(0);
});

test('returnHowManyArguments should return 1 when one argument is passed', () => {
    expect(returnHowManyArguments("one")).toBe(1);
});

test('returnHowManyArguments should return the correct count when multiple arguments are passed', () => {
    expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
});
