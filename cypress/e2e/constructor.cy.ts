const login = 'mediumAndrew@yandex.ru';
const password = 'burger234';
const constructor = '[data-cy=constructor]';
const ingredients = 'div[data-cy=ingredients]';

describe('service is available', function () {
  it('should be available on localhost:3000', function () {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 1000);
  });
});

describe('Make order works correctly', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
    cy.viewport(1300, 1000);
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
  })

  it('Should drag bun', function () {
    cy.get(ingredients)
      .contains("Краторная булка N-200i")
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get('[data-cy=constructor-bun-1]')
      .contains("Краторная булка N-200i")
      .should('exist')
    cy.get('[data-cy=constructor-bun-2]')
      .contains("Краторная булка N-200i")
      .should('exist');
  })

  it('Should drag ingredient ', function () {
    cy.get(ingredients)
      .contains("Соус Spicy-X")
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get('[data-cy=constructor-ingredient]')
      .contains("Соус Spicy-X")
      .should('exist');
  })

  it('Should make drag bun and ingredient, and make order', function () {
    cy.visit('http://localhost:3000/stellarBurgers#/login');
    cy.get('[data-cy=login-form]').contains('Вход');
    cy.get('input[type=email]').type(login);
    cy.get('input[type=password]').type(password);
    cy.get('button[type=submit]').click();

    cy.get('ul[data-cy=bun] li').first()
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get('ul[data-cy=sauce] li').first()
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get('ul[data-cy=main] li').first()
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');

    cy.get('button[aria-label="Оформить заказ"]').click();
    cy.get('[data-cy=order-preloader]').contains('Пожалуйста, подождите');
    cy.get('[data-cy=order-number]', { timeout: 20000 }).should("be.visible");
  })
});



describe('ingredient modal works correctly', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000/');
    cy.viewport(1300, 1000);
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
  })
  it('Should open modal with ingredient details', function () {
    cy.contains('Детали ингредиента').should('not.exist');
    cy.contains("Соус Spicy-X").click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('#react-modals').contains("Соус Spicy-X").should('exist');
  })

  it('Should close modal on button click', function () {
    cy.contains('Детали ингредиента').should('not.exist');
    cy.contains("Соус Spicy-X").click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('#react-modals button[aria-label=закрыть]').click();
    cy.contains('Детали ингредиента').should('not.exist');
  })

  it('Should close modal on overlay click', function () {
    cy.contains('Детали ингредиента').should('not.exist');
    cy.contains("Соус Spicy-X").click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('[data-cy=modal-overlay]').click({ force: true });
    cy.contains('Детали ингредиента').should('not.exist');
  })
});
