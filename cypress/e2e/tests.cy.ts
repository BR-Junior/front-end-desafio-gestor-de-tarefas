// https://docs.cypress.io/api/introduction/api.html

describe('Teste das paginas', () => {
  it('sign up errado', () => {
    cy.visit('/')
    cy.get('.form-btn-sign-up').click()
    cy.get('h1').should('contain', 'Sign up')
    cy.get('.form-btn-sign-in').click()
    cy.get('p').contains('name é obrigatório')
    cy.get('p').contains('name é obrigatório')
    cy.get('p').contains('password é obrigatório')

  })

  it('sign up certo', () => {
    cy.visit('/')
    cy.get('.form-btn-sign-up').click()
    cy.get('h1').should('contain', 'Sign up')
    cy.get('#name').type('teste')
    cy.get('#email').type('teste_cypress@email.com')
    cy.get('#password').type('123456')
    cy.get('.form-btn-sign-in').click()
    cy.get('p').contains('Cadastro foito com suces')

  })

  it('Login campos vazios', () => {
    cy.visit('/')
    cy.get('.form-btn-sign-in').click()
    cy.get('p').contains('email obrigatório senha obrigatório')

  })

  it('Login com senha ou email errado', () => {
    cy.visit('/')
    cy.get('#email').type('teste@email')
    cy.get('#password').type('12345')
    cy.get('.form-btn-sign-in').click()
    cy.get('p').contains('Invalid email or password')
  })

  it('Login certo', () => {
    cy.visit('/')
    cy.get('#email').type('teste_cypress@email.com')
    cy.get('#password').type('123456')
    cy.get('.form-btn-sign-in').click()
    cy.get('.form-btn-create').should('contain', 'Create')
  })

  it('criar task', () => {
    cy.visit('/')
    cy.get('#email').type('teste_cypress@email.com')
    cy.get('#password').type('123456')
    cy.get('.form-btn-sign-in').click()
    cy.get('#task-fild').type('teste cypress')
    cy.get('#form-select-priority').select('low')
    cy.get('#form-select-status').select('open')
    cy.get('.form-btn-create').click()
    cy.get('.task-list').should('contain', 'teste cypress')
  })

  it('update task', () => {
    cy.visit('/')
    cy.get('#email').type('teste_cypress@email.com')
    cy.get('#password').type('123456')
    cy.get('.form-btn-sign-in').click()
    cy.get(':nth-child(4) > :nth-child(5) > .btn-task-update').click()
    cy.get('#task-fild').type(' update')
    cy.get('#form-select-priority').select('low')
    cy.get('#form-select-status').select('open')
    cy.get('.form-btn-create').click()
    cy.get('.task-list').should('contain', 'teste cypress update')
  })

  it('delete task', () => {
    cy.visit('/')
    cy.get('#email').type('teste_cypress@email.com')
    cy.get('#password').type('123456')
    cy.get('.form-btn-sign-in').click()
    cy.get(':nth-child(4) > :nth-child(5) > .btn-task-delete').click()
  })
})
