import { get } from './get98';

describe('get98', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});