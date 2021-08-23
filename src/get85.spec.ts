import { get } from './get85';

describe('get85', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});