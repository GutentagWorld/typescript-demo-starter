import { test, expect } from '@playwright/test';
import { add, multiply, isEven } from '../src/utils';

test('add function', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});

test('multiply function', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(-2, 5)).toBe(-10);
  expect(multiply(0, 10)).toBe(0);
});

test('isEven function', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(0)).toBe(true);
  expect(isEven(-2)).toBe(true);
  expect(isEven(-3)).toBe(false);
});