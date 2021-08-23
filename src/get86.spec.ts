import { get } from './get86';

describe('get86', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});