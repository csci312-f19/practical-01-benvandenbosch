/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  // Check accuracy on birthday when birthday is today
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  // Check for accuracy right after birthday
  test('Returns 0 if birthday is 1 day ago', () => {
    expect(birthday.howOld(new Date('31 Dec 2017'))).toBe(0);
  });

  // Check for accuracy right before birthday
  test('Returns 0 if birthday is 364 days ago', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });

  // Check for accuracy on birthday when birthday not today
  test('Returns 1 if birthday is 365 days ago', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });
});
