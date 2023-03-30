import {calcRectangleArea} from './main';

test('at least one parameter is zero', () => {
  expect(calcRectangleArea(0, 0)).toBe(0);
  expect(calcRectangleArea(0, 5)).toBe(0);
  expect(calcRectangleArea(5, 0)).toBe(0);
});

test('positive and negative parameters', () => {
  expect(calcRectangleArea(5, 11)).toBe(55);
  expect(calcRectangleArea(-5, 11)).toBe(55);
  expect(calcRectangleArea(5, -11)).toBe(55);
  expect(calcRectangleArea(-5, -11)).toBe(55);  
});