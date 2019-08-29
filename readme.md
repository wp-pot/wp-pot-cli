# wp-pot-cli [![CircleCI](https://circleci.com/gh/rasmusbe/wp-pot-cli/tree/master.svg?style=svg)](https://circleci.com/gh/rasmusbe/wp-pot-cli/tree/master) [![Greenkeeper badge](https://badges.greenkeeper.io/rasmusbe/wp-pot-cli.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwp-pot%2Fwp-pot-cli.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwp-pot%2Fwp-pot-cli?ref=badge_shield)

> Generate pot file for WordPress plugins and themes

## Like my work and want to say thanks?
Do it here:  
<a href="https://www.buymeacoffee.com/rasmus" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

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
    --no-file-paths, Don't write file paths to pot file
    --relative-to, -r Path to folder that file comments should be relative to
    --src, -s  Source files
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


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwp-pot%2Fwp-pot-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwp-pot%2Fwp-pot-cli?ref=badge_large)