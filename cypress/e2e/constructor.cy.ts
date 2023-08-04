const login = 'mediumAndrew@yandex.ru';
const password = 'burger234';

const constructor = '[data-cy=constructor]';
const ingredients = 'div[data-cy=ingredients]';
const detailsTitle = 'Детали ингредиента';
const testBunName = "Краторная булка N-200i";
const testIngredientName = 'Соус Spicy-X';

describe('service is available', function () {
  it(`should be available`, function () {
    cy.visit('/');
    cy.viewport(1300, 1000);
  });
});

describe('Make order works correctly', function () {
  beforeEach(function () {
    cy.visit('/');
    cy.viewport(1300, 1000);
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
  })

  it('Should drag bun', function () {
    cy.get(ingredients)
      .contains(testBunName)
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get('[data-cy=constructor-bun-1]')
      .contains(testBunName)
      .should('exist')
    cy.get('[data-cy=constructor-bun-2]')
      .contains(testBunName)
      .should('exist');
  })

  it('Should drag ingredient ', function () {
    cy.get(ingredients)
      .contains(testIngredientName)
      .trigger('dragstart');
    cy.get(constructor).trigger('drop');
    cy.get('[data-cy=constructor-ingredient]')
      .contains(testIngredientName)
      .should('exist');
  })

  it('Should make drag bun and ingredient, and make order', function () {
    cy.visit(`/stellarBurgers#/login`);
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
    cy.visit('/');
    cy.viewport(1300, 1000);
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
  })
  it('Should open modal with ingredient details', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.get('#react-modals').contains(testIngredientName).should('exist');
  })

  it('Should close modal on button click', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.get('#react-modals button[aria-label=закрыть]').click();
    cy.contains(detailsTitle).should('not.exist');
  })

  it('Should close modal on overlay click', function () {
    cy.contains(detailsTitle).should('not.exist');
    cy.contains(testIngredientName).click();
    cy.contains(detailsTitle).should('exist');
    cy.get('[data-cy=modal-overlay]').click({ force: true });
    cy.contains(detailsTitle).should('not.exist');
  })
});
