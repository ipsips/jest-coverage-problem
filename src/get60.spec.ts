import { get } from './get60';

describe('get60', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});