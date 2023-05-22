/// <reference types="cypress" />

describe('degrees api', () => {
  it('GET /degrees', () => {
    const options = {
      method: 'GET',
      url: 'http://cms.chtoma.com/api/degrees',
    };

    cy.request(options).then((res) => {
      const data = res.body.data;
      expect(res.status).to.eq(200);
      expect(Array.isArray(data)).to.be.true; 
    });
  });
})
