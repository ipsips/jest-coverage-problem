import { get } from './get89';

describe('get89', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});