
describe("New User is able to select item and add it to basket", () => {
    it("Launch", function() {
      cy.visit('https://gocity.com/boston/en-us/products/all-inclusive')
    }
    );

    it("Purchase 7 days All-Inclusive Pass", function(){
      //cy.get('.pass-product-buy').click({ multiple: true } )
      cy.get('.row > .react-component > .cart-icon > .pass-product-buy > .lc-font__regular').click()
      cy.get('[data-index="-1"] > :nth-child(1) > .lc-products-list__item-wrapper > .lc-products-list__item > .btn').click()
      cy.get('.row > .react-component > .cart-icon > .cart-icon__icon').click()
      cy.get('.row > .react-component > .cart-icon > .cart-icon__icon').click()
      cy.get('.lc-cart__purchase').click()
  //Check the correct item in the baskey and the price is correct
      cy.get('.lc-cart__pass-product-name').contains('7 day pass Adult All-Inclusive')
      cy.get('.agree-button').click()

    })
    it("Checks the items in the basket", function(){
      cy.get('.lc-cart__prices-total > .lc-cart__prices-number > .formatted-price').contains('$191')
    })

    it("Checks the basket still shows purchased items if sale is not complete", function(){
      cy.get('.logo > img').click({force:true})
      //cy.get('.agree-button').click()
      //Appears to be a bug here where the basket is not shown and the purchase is lost as it is not complete
      //May also get a application error if repeated a few times
      //Instagram Feed: Your network has been temporary banned by Instagram because of too many requests. Consider increasing your 'cache_time'.
      //See https://github.com/jsanahuja/jquery.instagramFeed/issues/25 and https://github.com/jsanahuja/jquery.instagramFeed/issues/101
    })
    });
