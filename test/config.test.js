process.env.CONFIG_DIR_PATH = __dirname + '/fixtures/config';
process.env.ENV_FILE_PATH = __dirname + '/fixtures/env.json';
process.env.NODE_ENV = 'production';
process.env.PORT = 80;
process.env.KEY = 'some';

const testValue = 'value';
process.env.JSON = JSON.stringify({field: testValue});

const defaultConfig = require('./fixtures/config/default.json');
const prodConfig = require('./fixtures/config/production.json');
const envFile = require('./fixtures/env.json');

const test = require('ava');
const config = require('../src');

test('safe getting config with using "get"', async(t) => {
  const host = config.get('host');
  t.is(host, defaultConfig.host);
});

test('inherit host', async(t) => {
  const host = config.host;
  t.is(host, defaultConfig.host);
});

test('port from env var', async(t) => {
  const port = config.port;
  t.is(port, process.env.PORT);
});

test('replace uri', async(t) => {
  const uri = config.uri;
  t.is(uri, prodConfig.uri);
});

test('key from env var for local', async(t) => {
  process.env.NODE_ENV = 'development';
  const key = config.key;
  t.is(key, process.env.KEY);
});

test('id from env file', async(t) => {
  t.is(config.id, envFile.ID);
  t.is(config.id, process.env.ID);
});

test('parse json from env', async(t) => {
  t.is(config.json.field, testValue);
});