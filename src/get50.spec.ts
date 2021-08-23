import { get } from './get50';

describe('get50', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});