import capitalize from "../src/capitalize.js"

if (capitalize('hello') !== 'Hello') {
    throw new Error('test does not pass')
}

if (capitalize('') !== '') {
    throw new Error('test doesnt pass')
}

console.log('well done')