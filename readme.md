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
```

## Related

- [wp-pot](https://github.com/rasmusbe/wp-pot) - API for this module

## License

MIT © [Rasmus Bengtsson](https://github.com/rasmusbe)
