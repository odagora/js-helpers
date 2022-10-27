/**
 * Function converting an object in an array of objects to find an element by it's id
 * @param {object} obj
 * @param {number, string} id
 * @returns The element matching a certain id within an object
 */
function findObjectElement (obj, id) {
  return Object.keys(obj).map(key => ({key, value: obj[key]})).filter(item => item.key === id);
}
