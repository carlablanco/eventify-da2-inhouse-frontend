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
    cy.intercept(
      'POST',
      'http://backclusterinhouseloadbalancer-1956526135.us-east-1.elb.amazonaws.com:3001/api/v1/login',
      (req) => {
        expect(req.body).to.deep.equal({
          email: 'example@example.com',
          password: 'password'
        });
      }
    ).as('login');
  });

  it('Devuelve una lista de usuarios al llamar al endpoint de la API correspondiente', () => {
    cy.intercept(
      'GET',
      'http://backclusterinhouseloadbalancer-1956526135.us-east-1.elb.amazonaws.com:3001/api/v1/users',
      {
        fixture: 'users.json'
      }
    ).as('users');
  });

  it('Redirige a la pagina de dashboard al loguearse correctamente', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.intercept(
      'POST',
      'http://backclusterinhouseloadbalancer-1956526135.us-east-1.elb.amazonaws.com:3001/api/v1/login',
      {
        statusCode: 200,
        body: {
          user: {
            cn: 'brunodiaz@batman.com',
            sn: 'Bruno Diaz',
            id: 1,
            role: 'admin',
            image:
              'https://i.pinimg.com/474x/cb/07/78/cb0778d373be88116e143c9b8cadb682.jpg'
          },
          token: '1234567890'
        }
      }
    ).as('login');
    cy.url().should('eq', 'http://localhost:3000/dashboard');
  });
});
