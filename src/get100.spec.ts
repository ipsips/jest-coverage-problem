import { get } from './get100';

describe('get100', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});