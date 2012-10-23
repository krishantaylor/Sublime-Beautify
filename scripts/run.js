/*
 * Copyright (c) 2011 Victor Porof
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

/*global console, process, require, __dirname */

(function () {
    "use strict";

    // cache the process arguments
    var argv = process.argv,

        // require path and file system utilities to load the beautify files
        path = require("path"),
        fs = require("fs"),

        // the source file to be linted and options
        source = argv[2] || "",
        options = JSON.parse(argv[3]) || {};

    // the style_html and js_beautify functions work when global by dependance
    global.style_html = require(path.join(__dirname, "beautify-html.js")).style_html;

    global.js_beautify = require(path.join(__dirname, "beautify.js")).js_beautify;

    global.cssbeautify = require(path.join(__dirname, "cssbeautify.js")).cssbeautify;

    // continue only if the source file is specified
    if (source !== "") {
        // read the source file and, when complete, beautify the code
        fs.readFile(source, "utf8", function (err, data) {
            if (err) {
                return;
            }

            // format the code
            if (source.match(".html?" + "$")) {
                console.log(style_html(data, options.html));
            } else if (source.match(".css" + "$") == ".css") {
                console.log(cssbeautify(data, options.css));
            } else if (source.match(".js" + "$") == ".js") {
                console.log(js_beautify(data, options.js));
            }
        });
    }
}());
