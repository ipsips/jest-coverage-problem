import { get } from './get80';

describe('get80', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});