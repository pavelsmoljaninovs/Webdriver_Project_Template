export default {
  bugsUrl: 'bugs/',
  userUrl: 'users/',
  bug: {
    bug: {
      summary: 'Test BUG | Wrong Font size on the design First line in the global footer.',
      str: '1. Open the app.\n2. Scroll down the page to global footer.\n3. Open the developer tools.\n4. look at the console on the font size.',
      actual: 'font-size: 1rem',
      expected: 'font size: 16px',
      attachment: 'https://www.google.com',
      priority: 'Low',
      severity: 'Minor',
      reproducible: 'Always',
      version: '0.3.47',
      assignee: 'Test Testing',
      status: 'Open',
      comments: [
        {
          id: 'n03aju1kna',
          commentator: 'Business Analyst',
          comment: 'The size is correct. 1rem = 16px.',
          dateTime: '3/19/2019 11:57:28 PM'
        },
        {
          id: 'n03aju1kna',
          commentator: 'Business Analyst',
          comment: 'The size is correct. 1rem = 16px.',
          dateTime: '3/19/2019 11:57:28 PM'
        }
      ],
      reporter: {
        fname: 'Test',
        lname: 'Testing',
        email: 'testreacttest@gmail.com'
      }
    }
  }
}