import { get } from './get53';

describe('get53', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});