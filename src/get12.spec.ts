import { get } from './get12';

describe('get12', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});