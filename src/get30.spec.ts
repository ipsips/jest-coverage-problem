import { get } from './get30';

describe('get30', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});