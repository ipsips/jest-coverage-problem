import { get } from './get45';

describe('get45', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});