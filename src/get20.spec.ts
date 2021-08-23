import { get } from './get20';

describe('get20', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});