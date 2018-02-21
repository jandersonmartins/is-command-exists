'use strict'

const child = require('child_process')
const exec = require('util').promisify(child.exec)

/**
 * @param {String} command
 * @returns {Promise<Boolean>}
 */
async function isCommandExists (command) {
  const cmd = `command -v ${command} >/dev/null || { exit 1; }`

  try {
    await exec(cmd)
    return true
  } catch (error) {
    return false
  }
}

module.exports = isCommandExists
