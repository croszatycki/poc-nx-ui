describe('boostup-ui-shared: BuToggle component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=butoggle--primary&knob-disabled=true&knob-checked=true&knob-children='));

    it('should render the component', () => {
      cy.get('.css-z6m2w8').should('have.class', 'disabled');
    });
});
