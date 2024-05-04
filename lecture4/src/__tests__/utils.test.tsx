import { render, screen } from '@testing-library/react';
import { sum } from '../helper/utils';
describe("Validate calculation functions", () => {
  test("sum two integers", () => {
    const res = sum(1, 2);
    expect(res).toEqual(3);
  })
  it("sum two floats", () => {
    const res = sum(1.7, 1.5);
    expect(res).toEqual(3.2);
  })
})