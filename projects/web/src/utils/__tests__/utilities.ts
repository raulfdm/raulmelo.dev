import { isNilOrEmpty, isNotNilNorEmpty } from '../utilities';

describe('fn: isNilOrEmpty', () => {
  it('returns true when the param is undefined or null', () => {
    expect(isNilOrEmpty(undefined)).toBe(true);
    expect(isNilOrEmpty(null)).toBe(true);
  });

  it('returns true when the param is an empty array, string or object', () => {
    expect(isNilOrEmpty([])).toBe(true);
    expect(isNilOrEmpty('')).toBe(true);
    expect(isNilOrEmpty({})).toBe(true);
  });

  it('returns false when the param is not empty', () => {
    expect(
      isNilOrEmpty(() => {
        console.log('lol');
      }),
    ).toBe(false);
    expect(isNilOrEmpty('0')).toBe(false);
    expect(isNilOrEmpty(0)).toBe(false);
    expect(isNilOrEmpty(1)).toBe(false);
    expect(isNilOrEmpty('something')).toBe(false);
    expect(isNilOrEmpty(['lol', 1])).toBe(false);
    expect(isNilOrEmpty(Math.random() * 100)).toBe(false);
  });
});

describe('fn: isNotNilNorEmpty', () => {
  it('returns false when the param is undefined or null', () => {
    expect(isNotNilNorEmpty(undefined)).toBe(false);
    expect(isNotNilNorEmpty(null)).toBe(false);
  });

  it('returns false when the param is an empty array, string or object', () => {
    expect(isNotNilNorEmpty([])).toBe(false);
    expect(isNotNilNorEmpty('')).toBe(false);
    expect(isNotNilNorEmpty({})).toBe(false);
  });

  it('returns true when the param is not empty', () => {
    expect(
      isNotNilNorEmpty(() => {
        console.log('lol');
      }),
    ).toBe(true);
    expect(isNotNilNorEmpty('0')).toBe(true);
    expect(isNotNilNorEmpty(0)).toBe(true);
    expect(isNotNilNorEmpty(1)).toBe(true);
    expect(isNotNilNorEmpty('something')).toBe(true);
    expect(isNotNilNorEmpty(['lol', 1])).toBe(true);
    expect(isNotNilNorEmpty(Math.random() * 100)).toBe(true);
  });
});
