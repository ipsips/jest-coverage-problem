import { get } from './get75';

describe('get75', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});