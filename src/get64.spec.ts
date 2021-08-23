import { get } from './get64';

describe('get64', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});