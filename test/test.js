var html2idom = require("../index");

html2idom.patchHTML(document.querySelector("#test"), "<h1 class='hi'>Hello, Incremental DOM</h1>");