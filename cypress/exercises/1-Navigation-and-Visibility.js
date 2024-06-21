// Step 1: Visit https://www.demoblaze.com/index.html and verify the "Home" [nav link] is visible with correct text

cy.visit(''); // change this to the correct URL

// Step 2: Verify the "Contact" [nav link] is visible with correct text

cy.get('').contains('').should('be.visible'); // change this to the correct selector and text

// Step 3: Verify the "About Us" [nav link] is visible with correct text

cy.get('').contains('').should('be.visible'); // change this to the correct selector and text

// Step 4: Verify the "Cart" [nav link] is visible with correct text

cy.get('').contains('').should('be.visible'); // change this to the correct selector and text