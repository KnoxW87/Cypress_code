
let id;

describe('teachers api', () => {
    it('GET /teachers', () => {
      //const token = Cypress.env().managerToken;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFnZXJAYWRtaW4uY29tIiwicm9sZSI6Im1hbmFnZXIiLCJpZCI6MywiaWF0IjoxNjg0Nzk2MjM3LCJleHAiOjE2OTI1NzIyMzd9.9gCU4zjYE0xa2Ar_567B37Nxg5zQ7vbQt4bqIc_Fwzo';
      const authorization = `bearer ${token}`;
      const options = {
        method: 'GET',
        url: 'http://cms.chtoma.com/api/teachers',
        headers: {
          authorization,
        },
      };

      cy.request(options).then((res) => {
        const data = res.body.data;
        expect(res.status).to.eq(200);
      });
    });



    it('POST /teachers', () => {
      const token = Cypress.env().managerToken;
      const authorization = `bearer ${token}`;
      const options = {
        method: 'POST',
        url: 'http://cms.chtoma.com/api/teachers',
        headers: {
          authorization,
        },
        body: {
          name: "Knox",
          country: "NZ",
          phone: "021021021",
          skills: [
            "Javascript: Expert"
          ],
          email: "knox@gmail.com"
        },
      };

      cy.request(options).then((res) => {
        const data = res.body.data;
        expect(res.status).to.eq(201);
        expect(data.id).exist;
        id = data.id;
      });
    });


    it('PUT /update teachers', () => {
      const token = Cypress.env().managerToken;
      const authorization = `bearer ${token}`;
      const options = {
        method: 'PUT',
        url: 'http://cms.chtoma.com/api/teachers',
        headers: {
          authorization,
        },
        body: {
          id,
          name: "Knox",
          country: "NZ",
          phone: "021021021",
          skills: [
            "Javascript: Expert"
          ],
          email: "knox@gmail.com"
        },
      };
      cy.request(options).then((res) => {
        const data = res.body.data;
        expect(data.id).to.eq(id);
      });
    });



    it('DELETE /teachers', () => {
      const token = Cypress.env().managerToken;
      const authorization = `bearer ${token}`;
      const options = {
        method: 'DELETE',
        url: `http://cms.chtoma.com/api/teachers/${id}`,
        headers: {
          authorization,
        },
      };
      cy.request(options).then((res) => {
        const data = res.body.data;
        expect(res.status).to.eq(200);
      });
    });


});