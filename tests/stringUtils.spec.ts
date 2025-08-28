import { test, expect } from '@playwright/test';
import { capitalize, reverseString, isPalindrome, truncate } from '../src/stringUtils';

test('capitalize function', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('WORLD')).toBe('World');
  expect(capitalize('jAvAsCrIpT')).toBe('Javascript');
  expect(capitalize('')).toBe('');
});

test('reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('12345')).toBe('54321');
  expect(reverseString('')).toBe('');
  expect(reverseString('a')).toBe('a');
});

test('isPalindrome function', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  expect(isPalindrome('race a car')).toBe(false);
  expect(isPalindrome('hello')).toBe(false);
  expect(isPalindrome('')).toBe(true);
});

test('truncate function', () => {
  expect(truncate('Hello World', 20)).toBe('Hello World');
  expect(truncate('This is a long string', 10)).toBe('This is...');
  expect(truncate('Short', 10)).toBe('Short');
  expect(truncate('Exactly10!', 10)).toBe('Exactly10!');
});