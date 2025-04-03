const USERS_URL = '/usuarios';
const PRODUCTS_URL = '/produtos';
const LOGIN_URL = '/login';

const makeRequest = (method, endpoint, options = {}) => {
  const { body, headers, failOnStatusCode = false } = options;

  return cy.request({
    method,
    url: `${endpoint}`,
    body,
    headers,
    failOnStatusCode
  });
};

export const createProduct = (generateProductData, token) => {
  return makeRequest('POST', PRODUCTS_URL, {
    body: generateProductData,
    headers: { Authorization: token }
  })
}

export const loginUser = (loginData) => {
  return makeRequest('POST', LOGIN_URL, { body: loginData })
    .then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('authToken', response.body.authorization);
    });
}

export const createUser = (userData) => {
  return makeRequest('POST', USERS_URL, {
    body: userData,
  });
};

export const getAllUsers = () => { return makeRequest('GET', USERS_URL); }

export const getUser = (userId) => { return makeRequest('GET', `${USERS_URL}/${userId}`) }

export const updateUser = (userId, user) => {
return makeRequest('PUT', `${USERS_URL}/${userId}`, {
    body: user
  });
};

export const deleteUser = (userId) => { return makeRequest('DELETE', `${USERS_URL}/${userId}`) }