#!/bin/bash

uglifyjs page/js/script.js > page/js/script.min.js
uglifycss page/css/style.css > page/css/style.min.css
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true -o page/index.html page/index-full.html
