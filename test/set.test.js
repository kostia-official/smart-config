process.env.CONFIG_DIR_PATH = __dirname + '/fixtures/config';
process.env.ENV_FILE_PATH = __dirname + '/fixtures/env.json';

const test = require('ava');
const config = require('../src');

test('should set, replace and get needed value', async (t) => {
  const value = 'string';
  const path = 'object.array[0]';
  config.set(path, String(new Date()));
  config.set(path, value);

  t.is(config.get(path), value);
});
