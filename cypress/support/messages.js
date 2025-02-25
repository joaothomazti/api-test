export const ERROR_MESSAGES = {
  emailInUse: 'Este email já está sendo usado',
  invalidEmail: 'email deve ser um email válido',
  invalidAdmin: "administrador deve ser 'true' ou 'false'",
  requiredFields: {
    nome: 'nome é obrigatório',
    email: 'email é obrigatório',
    password: 'password é obrigatório',
    administrador: 'administrador é obrigatório',
  },
  userNotFound: 'Usuário não encontrado',
  userNotDeleted: 'Nenhum registro excluído'
};

export const SUCCESS_MESSAGES = {
  userCreated: 'Cadastro realizado com sucesso',
  userUpdated: 'Registro alterado com sucesso',
  userDeleted: 'Registro excluído com sucesso',
  ProductCreated: 'Cadastro realizado com sucesso'
}