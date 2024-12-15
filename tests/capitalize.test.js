import capitalize from "../src/capitalize.js"
import {strict as assert} from 'node:assert'

assert.equal(capitalize('hello'), 'Hello')

assert.equal(capitalize(''), '')

console.log('well done')