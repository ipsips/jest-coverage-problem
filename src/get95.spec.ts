import { get } from './get95';

describe('get95', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});