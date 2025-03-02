
import { SUCCESS_MESSAGES } from '../support/messages';
import { generateProductData } from '../support/mocks';
import { createProduct, loginUser } from '../support/service/userService';

describe('Create product API', () => {

    before(() => {
        cy.fixture('loginData').then((loginData)=> {
            loginUser(loginData)
        })
    });

    it('Deve criar um produto com dados aleatorios', () => {
        const token = Cypress.env('authToken');

        createProduct(generateProductData, token).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', SUCCESS_MESSAGES.ProductCreated);
            expect(response.body).to.have.property('_id');
        })
    });
});