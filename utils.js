/**
 * @param {number} a Start
 * @param {number} b End
 * @returns {number} - A random integer n in [a, b)
 */
export const randInt = (a, b) => a + Math.floor(Math.random() * (b - a))

/**
 * @param {number} N The number of items
 * @returns {Array} - An array full of random integers in [1, 100)
 */
export const randArray = N => Array.from({ length: N }, () => randInt(1, 100))
