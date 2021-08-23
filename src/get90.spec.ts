import { get } from './get90';

describe('get90', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});