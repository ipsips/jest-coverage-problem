import { get } from './get10';

describe('get10', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});