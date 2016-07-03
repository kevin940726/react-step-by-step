import inquirer from 'inquirer';
import shelljs from 'shelljs';

const questions = [
	{
		type: 'list',
		name: 'step',
		message: 'Choose a step to jump to.',
		choices: [
			{
				name: 'Step 1',
				value: {
					step: '1',
					hash: 'f666178b01bbc1aee6acb31d2ac98065711c2b2c',
				},
			},
			{
				name: 'Step 2',
				value: {
					step: '2',
					hash: 'ae5c5b486ec4952ff17a94b4f40753868b7aa280',
				},
			},
			{
				name: 'Step 3',
				value: {
					step: '3',
					hash: '6b00fccb9b466f43036e0783d32ae8b2aefb8d9d',
				},
			},
			{
				name: 'Final step and exit',
				value: {
					step: 'final',
					hash: 'master',
				},
			},
		],
	},
];

const prompt = () => {
	inquirer.prompt(questions)
		.then(answers => {
			shelljs.exec(
				`git checkout -f ${answers.step.hash}`,
				{ silent: true }
			);

			console.log(`You are now in step ${answers.step.step}`);
			if (answers.step.step !== 'final') {
				prompt();
			}
		});
};

prompt();
