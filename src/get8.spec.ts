import { get } from './get8';

describe('get8', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});