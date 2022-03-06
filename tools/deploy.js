const {exec: execCallback} = require('child_process');
const {promisify} = require("util");
const {config} = require("dotenv");

config({path: '.env'});

const exec = promisify(execCallback);
exec(`docker stack deploy --compose-file docker-compose.yml osp`).then(({stdout}) => {
    console.log(stdout)
})
