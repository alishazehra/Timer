#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const countdown = (seconds) => {
    const startTime = seconds;
    const interval = setInterval(() => {
        if (seconds > 0) {
            console.clear();
            console.log(chalk.cyan(`Countdown: ${chalk.yellow(seconds)} seconds remaining`));
            const bar = '='.repeat((startTime - seconds) + 1) + ' '.repeat(seconds - 1);
            console.log(chalk.green(`[${bar}]`));
            seconds--;
        }
        else {
            clearInterval(interval);
            console.clear();
            console.log(chalk.green('Time\'s up!'));
        }
    }, 1000);
};
const startCountdown = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'seconds',
            message: 'Enter the number of seconds to countdown:',
            validate: (input) => {
                const num = parseInt(input);
                if (isNaN(num) || num <= 0) {
                    return 'Please enter a positive number';
                }
                return true;
            }
        }
    ]);
    const seconds = parseInt(answers.seconds);
    countdown(seconds);
};
startCountdown();
