/* eslint-env node, mocha */
'use strict';

import execa from 'execa';
import os from 'os';
import fs from 'fs';
import assert from 'assert';

import { verifyLanguageBlock, testValidFunctions } from './test-helper.js';
const fixturePath = 'test/fixtures/valid-functions.php';

describe('Test CLI output', function () {
  it('should output pot strings when write is false', function (done) {
    execa('./cli.js', ['--no-write-file', '--src', fixturePath]).then(function (result) {
      const potContents = result.stdout.toString();
      try {
        testValidFunctions(potContents, fixturePath);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should write pot file to dest-file path', function (done) {
    const tempPot = `${os.tmpdir()}/test.pot`;
    execa('./cli.js', ['--dest-file', tempPot, '--src', fixturePath]).then(function () {
      try {
        const potContents = fs.readFileSync(tempPot).toString();
        testValidFunctions(potContents, fixturePath);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should write pot file to dest-file path with multiple src flags', function (done) {
    const test = assert;
    const tempPot = `${os.tmpdir()}/test.pot`;
    const multiFixturePath = 'test/fixtures/multi-functions.php';
    execa('./cli.js', ['--dest-file', tempPot, '--src', fixturePath, '--src', multiFixturePath]).then(function () {
      try {
        const potContents = fs.readFileSync(tempPot).toString();
        testValidFunctions(potContents, fixturePath);
        test(verifyLanguageBlock(potContents, false, multiFixturePath + ':2', 'Multi function return string', false, false));
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
