var config = {};
 
process.env.NODE_ENV = 'qa';
 
config.timeout = 60000;
 
config.url = {
    dev:   'https://url/dev',
    qa: 'https://url/qa'
};
 
config.apiKey = {
    dev:   'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    qa: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};
 
module.exports = config;