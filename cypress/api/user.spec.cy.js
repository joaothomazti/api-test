import { faker } from '@faker-js/faker';
import { createUser, deleteUser, getAllUsers, getUser, updateUser, userData } from '../support/service/userService';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../support/messages';
import { verifyResponseBody } from '../support/utils';

describe('Create User API', () => {

  const nonExistentUserId = 'Teste_id';

  it('Deve criar um usuário com sucesso', () => {
    createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', SUCCESS_MESSAGES.userCreated);
    });
  });

  it('Não deve permitir e-mails duplicados', () => {
    createUser(userData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', ERROR_MESSAGES.emailInUse)
    });
  });

  it('Não deve criar um usuário com e-mail inválido', () => {
    const invalidEmailUserData = { 
      ...userData, 
      email: 'invalid-email'
    };
  
    createUser(invalidEmailUserData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('email', ERROR_MESSAGES.invalidEmail);
    });
  });

  it('Não deve criar um usuário com valor inválido no campo administrador', () => {
    const invalidAdminUserData = { 
      ...userData, 
      administrador: 'yes'
    };
  
    createUser(invalidAdminUserData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('administrador', ERROR_MESSAGES.invalidAdmin);
    });
  });

  it('Deve retornar erro quando os campos obrigatórios estiverem ausentes', () => {
    const invalidData = {};

    createUser(invalidData).then((response) => {
      verifyResponseBody(response, ERROR_MESSAGES.requiredFields)
    });
  });

  it('Não deve criar um usuário sem nome', () => {
    const invalidData = { ...userData };
    delete invalidData.nome;

    createUser(invalidData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('nome', ERROR_MESSAGES.requiredFields.nome);
    });
  });

  it('Não deve criar um usuário sem email', () => {
    const invalidData = { ...userData };
    delete invalidData.email;

    createUser(invalidData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('email', ERROR_MESSAGES.requiredFields.email);
    });
  });

  it('Não deve criar um usuário sem senha', () => {
    const invalidData = { ...userData };
    delete invalidData.password;
    createUser(invalidData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('password', ERROR_MESSAGES.requiredFields.password);
    });
  });

  it('Não deve criar um usuário sem administrador', () => {
    const invalidData = { ...userData };
    delete invalidData.administrador; 

    createUser(invalidData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('administrador', ERROR_MESSAGES.requiredFields.administrador);
    });
  });

  it('Deve listar todos os usuários', () => {
    getAllUsers().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('usuarios')
      expect(response.body).to.have.property('quantidade');
    });
  });

  it('Deve listar apenas um usuários', () => {
    const newUserData = { ...userData, email: faker.internet.email() };

    createUser(newUserData).then((response) => {
      expect(response.status).to.eq(201);
      const userId = response.body._id;

      getUser(userId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('_id', userId);
        expect(response.body).to.have.property('nome', newUserData.nome);
      });
    });
  });

  it('Deve retornar erro ao buscar usuário inexistente', () => { 
  
    getUser(nonExistentUserId).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', ERROR_MESSAGES.userNotFound); 
    });
  });

  it('Deve atualizar um usuários', () => {
    const newUserData = { ...userData, email: faker.internet.email() };

    createUser(newUserData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('_id');

      const userId = response.body._id;

      const updateData = {
        ...newUserData,
        nome: 'Novo Nome'
      };

      updateUser(userId, updateData).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', SUCCESS_MESSAGES.userUpdated);
      })
    });
  });

  it('Deve excluir um usuários', () => {
    const newUserData = { ...userData, email: faker.internet.email() };

    createUser(newUserData).then((response) => {
      expect(response.status).to.eq(201);
      const userId = response.body._id;

      deleteUser(userId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(SUCCESS_MESSAGES.userDeleted);
      });
    });
  });

  it('Deve retornar erro ao tentar excluir um usuário inexistente', () => {  
    deleteUser(nonExistentUserId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', ERROR_MESSAGES.userNotDeleted);
    });
  });

});
