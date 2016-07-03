import inquirer from 'inquirer';
import shelljs from 'shelljs';

const gitlog = shelljs.exec('git log', { silent: true }).stdout;

console.log(gitlog);

inquirer.prompt([
	{
		type: 'list',
		name: 'Steps',
		message: 'Choose a step to jump to.',
		choices: [
			'step 1',
			'step 2',
			'step 3',
			'step 4',
			'step 5',
		],
	},
]).then(answers => {
	console.log(JSON.stringify(answers, null, '  '));
});
