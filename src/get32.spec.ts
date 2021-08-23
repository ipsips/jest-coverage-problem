import { get } from './get32';

describe('get32', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});