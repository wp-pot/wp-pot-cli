# wp-pot-cli

## Information

[![Build Status](https://travis-ci.org/rasmusbe/wp-pot-cli.svg?branch=master)](https://travis-ci.org/rasmusbe/wp-pot-cli)

## Install

```
$ npm install --global wp-pot-cli
```

## Usage

```
$ wp-pot --help

  Generate pot-files for WordPress localization

  Usage
    $ wp-pot <options>

  Options
    --bug-report, -b Header with URL for reporting translation bugs
    --comment-keyword, -c Comment keyword
    --dest-file, -o Destination file
    --domain, -d Domain to retrieve the translated text
    --last-translator, -l Name and email address of the last translator (ex: John Doe <me@example.com>)
    --relative-to, -r Path to folder that file comments should be relative to
    --src, -s  Source file
    --team, -t Name and email address of the translation team (ex: Team <team@example.com>)
    --package, -p Package name
    --write-file, -w Write file

  Examples
    $ wp-pot --src 'src/*.php'
```

## Related

- [gulp-wp-pot](https://github.com/rasmusbe/gulp-wp-pot) - Run wp-pot with gulp
- [wp-pot](https://github.com/rasmusbe/wp-pot) - API for this module

## License

MIT © [Rasmus Bengtsson](https://github.com/rasmusbe)
