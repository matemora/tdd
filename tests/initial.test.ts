import { Initial } from "../src/initial";

describe('Test', () => {
  it('should return true', () => {
    const initialClass = new Initial();

    expect(initialClass.trueMethod()).toBe(true);
  })
});