import { get } from './get48';

describe('get48', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});