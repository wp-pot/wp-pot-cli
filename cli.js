#!/usr/bin/env node

const meow = require('meow');
const wpPot = require('wp-pot');
const cli = meow(`
    Usage
      $ wp-pot <input>

    Options
      --comment-keyword, -c Comment keyword
      --dest-file, -o Destination file
      --domain, -d Domain to retrieve the translated text
      --src, -s  Source file
      --package, -p Package name
      --write-file, -w Write file

    Examples
      $ wp-pot --src 'src/*.php'
`, {
  alias: {
    c: 'comment-keyword',
    d: 'domain',
    o: 'dest-file',
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
  destFile: cli.flags.destFile,
  domain: cli.flags.domain,
  commentKeyword: cli.flags.commentKeyword,
  package: cli.flags.package,
  src: cli.flags.src,
  writeFile: cli.flags.writeFile
});

// Output content if we shouldn't write a file.
if (!cli.flags.writeFile) {
  console.log(content);
}
