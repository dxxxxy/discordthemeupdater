# discordthemeupdater
A npm package that uses dumped css classes from discord to update theme files with a single command.

## Features
- Automatic updates for most classes.
- Lightweight and fast with 0 dependencies.

## TODO
- [ ] Automatic dumping.

## Automatic Updates (Usage)
```sh
npx discordthemeupdater@latest <in: theme file> <out: updated theme file>
```

## Manual Updates
Some class changes are breaking and cannot be updated automatically.

> In this case, manual changes are required.

Search for the base class name (before `-`, `_` or `__`) in [dump.txt](dump/dump.txt) and change it manually.

Ex: `.typeWindows-2-g3UY` > `.typeWindows__5fa63`

## Disclaimer
This is for educational purposes only. I am not responsible for any damage caused by this tool.

## License
GPLv3 © dxxxxy