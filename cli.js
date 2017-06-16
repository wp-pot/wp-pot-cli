#!/usr/bin/env node

const meow = require('meow');
const wpPot = require('wp-pot');

const helpText = `
    Usage
      $ wp-pot <options>

    Options
      --bug-report       -b        Header with URL for reporting translation bugs
      --comment-keyword  -c        Comment keyword
      --dest-file        -o        Destination file
      --domain           -d        Domain to retrieve the translated text
      --last-translator  -l        Name and email address of the last translator (ex: John Doe <me@example.com>)
      --relative-to      -r        Path to folder that file comments should be relative to
      --src              -s        Source files
      --team             -t        Name and email address of the translation team (ex: Team <team@example.com>)
      --package          -p        Package name
      --write-file       -w        Write file
      --no-write-file    -w=false  Don't write file

    Examples
      $ wp-pot --src 'src/*.php'
`;
const cli = meow(helpText, {
  alias: {
    b: 'bug-report',
    c: 'comment-keyword',
    d: 'domain',
    l: 'last-translator',
    o: 'dest-file',
    r: 'relative-to',
    s: 'src',
    t: 'team',
    p: 'package',
    w: 'write-file'
  },
  default: {
    writeFile: true
  },
  boolean: ['write-file']
});

const content = wpPot(cli.flags);
// Output content if we shouldn't write a file.
if (!cli.flags.writeFile) {
  process.stdout.write(content);
}
