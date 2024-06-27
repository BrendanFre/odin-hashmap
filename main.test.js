import { test } from "./main.mjs";


test('Create a new hash', () => {
    expect(hash('hello')).toBe(3)
})