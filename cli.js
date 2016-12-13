#!/usr/bin/env node

const meow = require('meow');
const wpPot = require('wp-pot');
const cli = meow(`
    Usage
      $ wp-pot <input>

    Options
      --bug-report, -b Header with URL for reporting translation bugs
      --comment-keyword, -c Comment keyword
      --dest-file, -o Destination file
      --domain, -d Domain to retrieve the translated text
      --last-translator, -l Name and email address of the last translator (ex: John Doe <me@example.com>)
      --src, -s  Source file
      --team, -t Name and email address of the translation team (ex: Team <team@example.com>)
      --package, -p Package name
      --write-file, -w Write file

    Examples
      $ wp-pot --src 'src/*.php'
`, {
  alias: {
    b: 'bug-report',
    c: 'comment-keyword',
    d: 'domain',
    l: 'last-translator',
    o: 'dest-file',
    t: 'team',
    s: 'src',
    p: 'package',
    w: 'write-file'
  }
});

// Destination file cannot be empty if write file is true.
if (!cli.flags.destFile && cli.flags.writeFile) {
  console.log('Destination file flag is empty');
  process.exit(1);
}

let content = wpPot({
  bugReport: cli.flags.blugReport,
  destFile: cli.flags.destFile,
  domain: cli.flags.domain,
  commentKeyword: cli.flags.commentKeyword,
  lastTranslator: cli.flags.lastTranslator,
  package: cli.flags.package,
  src: cli.flags.src,
  team: cli.flags.team,
  writeFile: cli.flags.writeFile
});

// Output content if we shouldn't write a file.
if (!cli.flags.writeFile) {
  console.log(content);
}
