import { get } from './get65';

describe('get65', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});