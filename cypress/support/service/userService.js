import { faker } from '@faker-js/faker';

export const userData = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: "true"
};

export const createUser  = (userData) => {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: userData,
      failOnStatusCode: false
    });
  };

  export const getAllUsers = () => {
    return cy.request({
        method: 'GET',
        url: '/usuarios',
    });
  };

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

  