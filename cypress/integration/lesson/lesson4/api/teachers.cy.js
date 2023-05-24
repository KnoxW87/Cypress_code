
let id;

describe('teachers api', () => {
    it('GET /teachers', () => {
      const token = Cypress.env().managerToken;
      const authorization = `bearer ${token}`;
      const options = {
        method: 'GET',
        url: 'http://cms.chtoma.com/api/teachers?query=eee&page=1&limit=1',
        headers: {
          authorization,
        },
      };
      cy.request(options).then((res) => {
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
          id : 1,
          name : "admin",
          country: "Canada",
          courseAmount: 9,
          ctime: "2020-11-11",
          email: "xxx@a.com",
          phone: 13877889900,
          skills: [{ 
            name: "JavaScript", 
            level: 3 },{ 
            name: "Java", 
            level: 4 }],
          profiledId: 1,
          updateAt: "2020-10-11"       
        },
      }
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
          id : 1,
          name : "admin",
          country: "Canada",
          courseAmount: 9,
          ctime: "2020-11-11",
          email: "xxx@a.com",
          phone: 13877889900,
          skills: [{ 
            name: "JavaScript", 
            level: 3 },{ 
            name: "Java", 
            level: 4 }],
          profiledId: 1,
          updateAt: "2020-10-11" 
        },
      };
      cy.request(options).then((res) => {
        expect(res.status).to.eq(200);
      });
    });



    it('DELETE /teachers', () => {
      const token = Cypress.env().managerToken;
      const authorization = `bearer ${token}`;
      const options = {
        method: 'DELETE',
        url: 'http://cms.chtoma.com/api/teachers/11',
        headers: {
          authorization,
        },
      };
      cy.request(options).then((res) => {
        expect(res.status).to.eq(200);
      });
    });
});