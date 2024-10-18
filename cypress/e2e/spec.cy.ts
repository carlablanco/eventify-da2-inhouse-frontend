describe('Tests de integracion>', () => {
  it('Devuelve toast de error al ingresar credenciales invalidas', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.get('ol').should(
      'have.text',
      'Uh oh! Algo salió mal.Hubo un problema al ingresar. Intentá nuevamente.'
    );
  });

  it('Llama al endpoint de login con el payload correspondiente', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/login', (req) => {
      expect(req.body).to.deep.equal({
        email: 'example@example.com',
        password: 'password'
      });
    }).as('login');
  });

  it('Devuelve una lista de usuarios al llamar al endpoint de la API correspondiente', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/users', {
      fixture: 'users.json'
    }).as('users');
  });

  it('Redirige a la pagina de dashboard al loguearse correctamente', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:3000/dashboard');
  });
});
