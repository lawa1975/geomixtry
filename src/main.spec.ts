import {calcRectangleArea, calcCircleArea} from './main';

test('calcRectangleArea with at least one parameter is zero', () => {
  expect(calcRectangleArea(0, 0)).toBe(0);
  expect(calcRectangleArea(0, 5)).toBe(0);
  expect(calcRectangleArea(5, 0)).toBe(0);
});

test('calcRectangleArea with positive and negative parameters', () => {
  expect(calcRectangleArea(5, 11)).toBe(55);
  expect(calcRectangleArea(-5, 11)).toBe(55);
  expect(calcRectangleArea(5, -11)).toBe(55);
  expect(calcRectangleArea(-5, -11)).toBe(55);  
});

test('calcCircleArea with radius is zero', () => {
  expect(calcCircleArea(0)).toBe(0);
});

test('calcCircleArea with radius is positive or negative', () => {
  expect(calcCircleArea(12.8)).toBeCloseTo(514.7185);
  expect(calcCircleArea(-12.8)).toBeCloseTo(514.7185);
});