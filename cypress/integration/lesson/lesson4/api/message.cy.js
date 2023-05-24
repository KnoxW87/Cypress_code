let id;

describe('message api', () => {
  it('GET /message', () => {
    const token = Cypress.env().managerToken;
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: 'http://cms.chtoma.com/api/message',
      headers: {
        authorization,
      },
    };
    cy.request(options).then((res) => {
      expect(res.status).to.eq(200);
    });
  })

  it('POST /message', () => {
    const token = Cypress.env().managerToken;
    const authorization = `bearer ${token}`;
    const options = {
      method: 'POST',
      url: 'http://cms.chtoma.com/api/message',
      headers: {
        authorization,
      },
      body: {
        from: 2,
        to: 1,
        content: "play",
        alertAt: "football"
      },
    }
    cy.request(options).then((res) => {
      const data = res.body.data;
      expect(res.status).to.eq(201);
      expect(data.id).exist;
      id = data.id;
    });
  });

  it('PUT /update message', () => {
    const token = Cypress.env().managerToken;
    const authorization = `bearer ${token}`;
    const options = {
      method: 'PUT',
      url: 'http://cms.chtoma.com/api/message',
      headers: {
        authorization,
      },
      body: {
        ids: [
          "baseball"
        ],
        status: 0
      }
    }
    cy.request(options).then((res) => {
      expect(res.status).to.eq(200);
    })
  })

  it('DELETE /message', () => {
    const token = Cypress.env().managerToken;
    const authorization = `bearer ${token}`;
    const options = {
      method: 'DELETE',
      url: 'http://cms.chtoma.com/api/message/1',
      headers: {
        authorization,
      },
    };
    cy.request(options).then((res) => {
      expect(res.status).to.eq(200);
    });
  });


})