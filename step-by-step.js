import inquirer from 'inquirer';
import shelljs from 'shelljs';

const question = {
	type: 'list',
	name: 'step',
	message: 'Choose a step to jump to.',
	choices: [
		{
			name: 'Step 1',
			value: {
				index: 0,
				step: '1',
				hash: 'f666178b01bbc1aee6acb31d2ac98065711c2b2c',
			},
		},
		{
			name: 'Step 2',
			value: {
				index: 1,
				step: '2',
				hash: 'ae5c5b486ec4952ff17a94b4f40753868b7aa280',
			},
		},
		{
			name: 'Step 3',
			value: {
				index: 2,
				step: '3',
				hash: '6b00fccb9b466f43036e0783d32ae8b2aefb8d9d',
			},
		},
		{
			name: 'Final step and exit',
			value: {
				index: 3,
				step: 'final',
				hash: 'master',
			},
		},
	],
};

const prompt = defaultStep => {
	inquirer.prompt([{
		...question,
		default: defaultStep,
	}]).then(answers => {
		const answer = answers.step;

		shelljs.exec(
			`git checkout -f ${answer.hash}`,
			{ silent: true }
		);

		console.log(`You are now in step ${answer.step}`);
		if (answer.step !== 'final') {
			prompt(answer.index);
		}
	});
};

prompt(0);
