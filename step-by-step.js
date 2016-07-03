import inquirer from 'inquirer';
import shelljs from 'shelljs';

const question = {
	type: 'list',
	name: 'step',
	message: 'Choose a step to jump to.',
	choices: [
		{
			name: 'Step 0',
			value: {
				index: 0,
				step: '0',
				hash: 'step0',
			},
		},
		{
			name: 'Step 1',
			value: {
				index: 1,
				step: '1',
				hash: 'step1',
			},
		},
		{
			name: 'Step 2',
			value: {
				index: 2,
				step: '2',
				hash: 'step2',
			},
		},
		{
			name: 'Step 3',
			value: {
				index: 3,
				step: '3',
				hash: 'step3',
			},
		},
		{
			name: 'Final step and exit',
			value: {
				index: 4,
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
