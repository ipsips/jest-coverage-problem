import { get } from './get96';

describe('get96', () => {
  it('should return "bar"', () => {
    expect(get()).toBe('bar');
  });
});