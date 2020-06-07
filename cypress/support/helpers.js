export function getFullUrl(path = '') {
  return `${Cypress.config().baseUrl}/${path}`.trim();
}
