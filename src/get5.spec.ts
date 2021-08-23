import { get } from './get5';

describe('get5', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});