import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    const result = greet('Osama');
    // expect(result).toBe('Welcome Osama');
    expect(result).toContain('Osama');
  })
})
