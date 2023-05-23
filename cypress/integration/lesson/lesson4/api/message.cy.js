let id;

describe('message api', () => {
  it('GET /message', () => {
    const token = Cypress.env().managerToken;
    /*
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0Nzk2MjM3LCJleHAiOjE2OTI1NzIyMzd9.9gCU4zjYE0xa2Ar_567B37Nxg5zQ7vbQt4bqIc_Fwzo';
    */
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: 'http://cms.chtoma.com/api/message',
      headers: {
        authorization,
      },
    };

    cy.request(options).then((res) => {
      const data = res.body.data;
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
        message: {
          createdAt: "2023-05-24 06:03:12",
          id: 1883,
          content: "football",
          status: 1,
          type: "notification",
          from: {
            id: 3,
            role: "manager",
            nickname: "Carli Jast"
        }
      }
    }
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
        id,
         message: {
          createdAt: "2023-05-24 06:03:12",
          id: 1883,
          content: "football",
          status: 1,
          type: "notification",
          from: {
            id: 3,
            role: "manager",
            nickname: "Carli Jast"
          },
        }
      }
    }

    cy.request(options).then((res) => {
      const data = res.body.data;
      expect(data.id).to.eq(id);
    })
  })




  it('DELETE /message', () => {
    const token = Cypress.env().managerToken;
    const authorization = `bearer ${token}`;
    const options = {
      method: 'DELETE',
      url: `http://cms.chtoma.com/api/message/${id}`,
      headers: {
        authorization,
      },
    };
    cy.request(options).then((res) => {
      const data = res.body.data;
      expect(res.status).to.eq(200);
    });
  });


})