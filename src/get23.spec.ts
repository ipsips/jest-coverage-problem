import { get } from './get23';

describe('get23', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});