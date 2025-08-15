import chalk from "chalk";

const logger = {
    info: (msg) => {
        console.log(`${chalk.blue('[INFO]')} ${msg}`);
    },
    success: (msg) => {
        console.log(`${chalk.green('[SUCCESS]')} ${msg}`);
    },
    warn: (msg) => {
        console.warn(`${chalk.yellow('[WARN]')} ${msg}`);
    },
    error: (msg) => {
        console.error(`${chalk.red('[ERROR]')} ${msg}`);
    },
    debug: (msg) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`${chalk.magenta('[DEBUG]')} ${msg}`);
        }
    }
};

export {logger};
