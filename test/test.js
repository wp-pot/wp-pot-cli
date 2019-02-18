/* eslint-env node, mocha */
/* global describe, it */
'use strict';

const execa = require('execa');
const os = require('os');
const fs = require('fs');

const testHelper = require('./test-helper');
const fixturePath = 'test/fixtures/valid-functions.php';

describe('Test CLI output', function () {
  it('should output pot strings when write is false', function (done) {
    execa.shell(`./cli.js --no-write-file --src ${fixturePath}`).then(function (result) {
      const potContents = result.stdout.toString();
      try {
        testHelper.testValidFunctions(potContents, fixturePath);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should write pot file to dest-file path', function (done) {
    const tempPot = `${os.tmpdir()}/test.pot`;
    execa.shell(`./cli.js --dest-file ${tempPot} --src ${fixturePath}`).then(function () {
      try {
        const potContents = fs.readFileSync(tempPot).toString();
        testHelper.testValidFunctions(potContents, fixturePath);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
