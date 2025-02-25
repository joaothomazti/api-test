
export const createProduct = (generateProductData, token) => {
  return cy.request({
    method: 'POST', 
    url: '/produtos',
    body: generateProductData,
    headers: {
      Authorization: `${token}`
    }
  })
}

export const loginUser = (loginData) => {
  return cy.request({
    method: 'POST',
    url: '/login',
    body: loginData,
  }).then((response => {
    expect(response.status).to.eq(200);
    const token = response.body.authorization;
    Cypress.env('authToken', token)
    return token;
  }))
}

export const createUser  = (userData) => {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: userData,
      failOnStatusCode: false
    });
  };

  export const getAllUsers = () => cy.request('GET', '/usuarios')

  export const getUser = (userId) => {
    return cy.request({
        method: 'GET',
        url: `/usuarios/${userId}`,
        failOnStatusCode: false
    });
  };
  
  export const updateUser = (userId, user) => {
    return cy.request({
        method: 'PUT',
        url: `/usuarios/${userId}`,
        body: user,
        failOnStatusCode: false
    });
  };

  export const deleteUser = (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `/usuarios/${userId}`,
        failOnStatusCode: false
    });
  };

  