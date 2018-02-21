'use strict'

const test = require('ava')
const isCommandExists = require('./')

test('return true when command exists', async t => {
  const exists = await isCommandExists('ls')
  t.true(exists)
})

test('return false when command not exists', async t => {
  const exists = await isCommandExists('notexists')
  t.false(exists)
})
