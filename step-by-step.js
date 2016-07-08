import inquirer from 'inquirer';
import shelljs from 'shelljs';
import chalk from 'chalk';

const question = {
	type: 'list',
	name: 'step',
	message: 'Choose a step to jump to.',
	choices: [
		{
			name: 'STEP 0',
			value: {
				index: 0,
				step: '0',
				hash: 'step0',
				description: 'enviroment setup',
			},
		},
		{
			name: 'STEP 1',
			value: {
				index: 1,
				step: '1',
				hash: 'step1',
				description: 'routing, hello world react component',
			},
		},
		{
			name: 'STEP 2',
			value: {
				index: 2,
				step: '2',
				hash: 'step2',
				description: 'copy paste the layout, fix JSX (class to className)',
			},
		},
		{
			name: 'STEP 3',
			value: {
				index: 3,
				step: '3',
				hash: 'step3',
				description: 'put duplicate todos into state and map through them',
			},
		},
		{
			name: 'STEP 4',
			value: {
				index: 4,
				step: '4',
				hash: 'step4',
				description: 'add todo event handler, check and remove',
			},
		},
		{
			name: 'STEP 5',
			value: {
				index: 5,
				step: '5',
				hash: 'step5',
				description: 'add form input and submit event',
			},
		},
		{
			name: 'STEP 6',
			value: {
				index: 6,
				step: '6',
				hash: 'step6',
				description: 'filter tab event and map to todos',
			},
		},
		{
			name: 'STEP 7',
			value: {
				index: 7,
				step: '7',
				hash: 'step7',
				description: 'split into components, manage their own state',
			},
		},
		{
			name: 'STEP 8',
			value: {
				index: 8,
				step: '8',
				hash: 'step8',
				description: 'load todos asynchronously',
			},
		},
		{
			name: 'Exit',
			value: {
				index: 9,
				step: 'exit',
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

		if (answer.step !== 'exit') {
			console.log(chalk.dim('===================================================================='));
			console.log(chalk.gray(`You are now in ${chalk.bold(`STEP ${answer.step}`)}`));
			console.log(chalk.underline('In this step:'));
			console.log(chalk.green(`\t${answer.description}`));
			console.log(chalk.dim('===================================================================='));
			prompt(answer.index);
		}
	});
};

prompt(0);
