const inquirer = require('inquirer');

function write(text) {
  process.stdout.write(text);
}

inquirer
  .prompt([
    { type: 'input', name: 'name', message: 'What is your name?' },
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?',
      validate: (input) => {
        const age = parseInt(input);
        if (isNaN(age) || age < 0) {
          return 'Please enter a valid age.';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'favoriteColor',
      message: 'What is your favorite color?',
      choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Other'],
    },
    {
      type: 'list',
      name: 'games',
      message: 'What type of video games do you like the most?',
      choices: ['Platformer', 'Shooter', 'Survival', 'Rhythm', 'Other'],
    },
    {
      type: 'checkbox',
      name: 'hobbies',
      message: 'What are your hobbies?:',
      choices: ['Reading', 'Gaming', 'Cooking', 'Drawing', 'Sports', 'Other'],
    },
  ])

  .then((answers) => {
    console.log('Answers:', answers);
  })

  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  })

  .then(() => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'secret',
        message: 'What is the magic word?:',
        when: (answers) => answers.password === 'please',
      },
      {
        type: 'input',
        name: 'favoriteMovie',
        message: 'What is your favorite movie?',
        transformer: (input, answers) => {
       


          if (input.toLowerCase() === 'fnaf') {
            return 'Har har har har';
          }
          return input;
        },
      },
    ]);
  })

  .then((secondAnswers) => {
    console.log('Additional Answers:', secondAnswers);
  })

  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }


  });