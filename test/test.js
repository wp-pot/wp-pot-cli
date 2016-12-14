/* eslint-env node, mocha */
/* global before, after, describe, it */
'use strict';

const execa = require('execa');
const assert = require('assert');

describe('Test CLI output', function () {
  it('should output pot strings', function (done) {
    execa.shell('./cli.js --src test/fixtures/comments.php').then(function (result) {
      assert(true, result.stdout.indexOf('"X-Poedit-SourceCharset: UTF-8\n"') !== -1);
      assert(true, result.stdout.indexOf('Comment with other keyword') !== -1);
      done();
    });
  });
  it('should output error when destination file is empty and write file is true', function (done) {
    execa.shell('./cli.js --write-file true').catch(function (result) {
      assert('Destination file flag is empty', result);
      done();
    });
  });
});
