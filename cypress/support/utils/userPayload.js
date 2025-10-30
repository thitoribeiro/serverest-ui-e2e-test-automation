/**
 * Gera dados novos a cada execução.
 * Exemplo de e-mail: valid_user_1698690000000@uorak.com
 */
function seq() {
  return Date.now().toString();
}

function buildUser(overrides = {}) {
  const s = seq();
  const user = {
    name: `Usuário Teste ${s}`,
    email: `valid_user_${s}@uorak.com`,
    password: 'Teste@123',
    acceptTerms: true
  };
  return { ...user, ...overrides };
}

module.exports = { buildUser };
