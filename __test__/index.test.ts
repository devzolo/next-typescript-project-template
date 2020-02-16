import path from 'path';

describe('Example Test', () => {
  it('basic test', () => {
    console.log(path.resolve('.'));
    expect(1).toBe(1);
  });
});
