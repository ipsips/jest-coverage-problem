import { get } from './get40';

describe('get40', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});