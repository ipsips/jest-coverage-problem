import { get } from './get52';

describe('get52', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});