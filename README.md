# HTML, CSS and JavaScript code formatter for Sublime Text editor via node.js
#### [Sublime Text 2](http://www.sublimetext.com/2)
#### [JSBeautifier](http://jsbeautifier.org/)
#### [Node.js download](http://nodejs.org/#download)

## About
This is a Sublime Text 2 plugin and build system allowing you to format your HTML, CSS and JavaScript code. It uses a set of nice beautifier libs made by Einar Lielmanis and Noah Kantrowitz. The formatters are written in JavaScript, so you'll need something (node.js) to interpret JavaScript code outside the browser.

This will work with both HTML, CSS and JavaScript files.

## Installation
First of all, be sure you have [node.js](http://nodejs.org/#download) installed in order to run the beautifier. After you've installed node.js, you will need to setup this plugin.
Each OS has a different `Packages` folder required by Sublime Text. Open it via Preferences -> Browse Packages, and copy this repository contents to the `Sublime-Beautify` folder there.

The shorter way of doing this is:
#### Linux
`git clone git://github.com/victorporof/Sublime-Beautify.git ~/.config/sublime-text-2/Packages/Sublime-Beautify`

#### Mac
`git clone git://github.com/victorporof/Sublime-Beautify.git ~/Library/Application\ Support/Sublime\ Text\ 2/Packages/Sublime-Beautify`

#### Windows
`git clone git://github.com/victorporof/Sublime-Beautify.git %APPDATA%/Sublime\ Text\ 2/Packages/Sublime-Beautify`


## Usage
Tools -> Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and type `beautify`.

-- or --

Open a HTML or JavaScript file, pop out the console in Sublime Text from View -> Show Console, and type `view.run_command("beautify")`.

Writing commands in the console is ugly. Set up your own key combo for this, by going to Preferences -> Key Bindings - Default, and adding a command in that huge array: `{ "keys": ["super+shift+h"], "command": "beautify" },`. You can use any other command you want, thought most of them are already taken.

### Oh noez, command not found!
If you get an error `sh: node: command not found` or similar, you don't have `node` in the right path. Try setting the absolute path to node in `Beautify.py`.
This means from:
`cmd=["node",...]`
change to
`cmd=["absolute/path/to/node",...]`

## Customize
The `Beautify.py` script has some predefined settings regarding the indentation size, indentation character, maximum chars per line and brace styling. Customize these settings by modifying the script with your desired values (see the [JSBeautifier options](https://github.com/einars/js-beautify/blob/master/beautify-html.js)).

Have fun!
