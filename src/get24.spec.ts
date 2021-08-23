import { get } from './get24';

describe('get24', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});