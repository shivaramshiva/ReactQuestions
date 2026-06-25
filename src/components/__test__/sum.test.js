import { sum } from '../sum';
test('sum adds two numbers', () => {
    const result = sum(1, 2);
    // Assertions -- to check if the result is correct
    expect(result).toBe(3);
});
