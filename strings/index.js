/**
 * Format text string from snake_case to capitalized each word
 * @param {string} str
 * @return {string} text formatted
 */
function formatText(str) {
  const textNoCharacters = str.replace(/_+/g, ' ');
  const textCapitalized = textNoCharacters.replace(/(^\w{1})|(\s+\w{1})/g, c => c.toUpperCase());

  return textCapitalized;
}