import { get } from './get99';

describe('get99', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});