import inquirer from 'inquirer';
import shelljs from 'shelljs';

const questions = [
	{
		type: 'list',
		name: 'step',
		message: 'Choose a step to jump to.',
		choices: [
			{
				name: 'step 1',
				value: 'f666178b01bbc1aee6acb31d2ac98065711c2b2c',
			},
			{
				name: 'step 2',
				value: 'ae5c5b486ec4952ff17a94b4f40753868b7aa280',
			},
			{
				name: 'step 3',
				value: '6b00fccb9b466f43036e0783d32ae8b2aefb8d9d',
			},
			{
				name: 'final step',
				value: 'master',
			},
		],
	},
];

const prompt = () => {
	inquirer.prompt(questions)
		.then(answers => {
			const msg = shelljs.exec(
				`git checkout ${answers.step}`,
				{ silent: true }
			).stdout;

			console.log(msg);
			prompt();
		});
};

prompt();
