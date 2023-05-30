describe('course form test', () => {
  beforeEach(() => {
    cy.managerLogin()
    cy.intercept('GET', '/api/teachers?query=Lisa')
    cy.intercept('GET', '/api/courses/type')
    cy.intercept('POST', '/api/courses', { fixture: 'addCourse.json' }).as('addCourseRes');
    cy.intercept('PUT', '/api/courses/schedule', { code: 200, data: true, msg: 'success' })
  })

  it('add course test', () => {
    cy.visit('https://cms-lyart.vercel.app/dashboard/manager/courses/add-course')

    //Course name
    cy.get('#name').type('football')

    //Teacher ???
    cy.get('#teacherId').type('Lisa')
    cy.wait(1000)
    cy.get('.ant-select-item-option-content').first().click()

    //Type ???
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
    cy.get('.ant-select-item-option-content').contains('Python').click()

    //start date
    cy.get('#startTime').click()
    cy.get('.ant-picker-today-btn').click()

    //price
    cy.get('#price').type(100);

    //student limit
    cy.get('#maxStudents').type(10);

    //duration
    cy.get(
      '.ant-input-group > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input'
    ).type(10);

    //describe
    cy.get('#detail').type(
      ' Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python is simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. '
    );

    cy.get('button[type=submit]').contains('Create Course').click();

    cy.wait('@addCourseRes').then((res) => {
      const data = res.response.body.data;
      expect(data).haveOwnProperty('id');
      expect(data).haveOwnProperty('scheduleId');
    });
  })

  it('update course test', () => {
    cy.visit('https://cms-lyart.vercel.app/dashboard/manager/courses/edit-course')
    cy.get(':nth-child(1) > .ant-select-selector > .ant-select-selection-item').click()
    cy.get('.ant-select-item-option-content').contains('Name').click()
    cy.get('#rc_select_1').type(11)
    cy.wait(1000)
    cy.get('ant-select-item-option-content').first().click()
    cy.get('.ant-btn > span').click()
    cy.get('.ant-message-custom-content').should('contain', 'success')
  
  
    cy.get('#rc-tabs-0-tab-chapter').click()
    cy.get('button').contains('Add Chapter').click().click()

    cy.get('input[placeholder="Chapter Name"]').first().type('Aa');
    cy.get('input[placeholder="Chapter Name"]').eq(1).type('Bb');
    cy.get('input[placeholder="Chapter Name"]').last().type('Cc');
    cy.get('input[placeholder="Chapter content"]').first().type('AAA');
    cy.get('input[placeholder="Chapter content"]').eq(1).type('BBB');
    cy.get('input[placeholder="Chapter content"]').last().type('CCC');

    cy.get('.ant-select-item').contains('Tuesday').first().click();
    cy.get('input[placeholder="Select time"]').first().click();
    cy.get('.ant-picker-time-panel-column').first().contains('07').click();
    cy.get('.ant-picker-time-panel-column').eq(1).contains('07').click();
    cy.get('.ant-picker-time-panel-column').eq(2).contains('07').click();
    cy.get('button').contains('Ok').click();

    cy.get('.ant-message-custom-content').should('contain', 'success')
  })
})