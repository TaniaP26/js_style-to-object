'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrSource = sourceString.split(';');

  for (let i = 0; i < arrSource.length; i++) {
    const resultItem = arrSource[i].split(':');

    if (resultItem.length === 2) {
      const key = resultItem[0].trim();
      const value = resultItem[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
