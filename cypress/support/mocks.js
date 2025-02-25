import { faker } from '@faker-js/faker';

export const userData = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
};

export const generateProductData = {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price({ min: 10, max: 2000, dec: 0 }),
    descricao: faker.commerce.productAdjective().toLowerCase(),
    quantidade: faker.number.int({ min: 1, max: 250 }),
}