import { get } from './get25';

describe('get25', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});