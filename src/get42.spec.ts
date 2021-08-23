import { get } from './get42';

describe('get42', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});