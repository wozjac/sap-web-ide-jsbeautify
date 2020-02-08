define([
    "sap-web-ide-jsbeautify-formatter/js/lib/beautify",
    "sap-web-ide-jsbeautify-formatter/js/lib/beautify-css",
    "sap-web-ide-jsbeautify-formatter/js/lib/beautify-html"
], function(beautify, beautifyCss, beautifyHtml) {

    return {
        handledFiles: ["js", "html", "css", "xml", "json"],

        isFileTypeHandled: function(fileType) {
            if (this.handledFiles.indexOf(fileType) !== -1) {
                return true;
            }

            return false;
        },

        beautify: function(content, fileType, jsConfigRc) {
            var formattedContent

            switch (fileType) {
                case "json":
                case "js":
                    formattedContent = beautify.js_beautify(content, jsConfigRc);
                    break;
                case "html":
                case "xml":
                    formattedContent = beautifyHtml.html_beautify(content, jsConfigRc);
                    break;
                case "css":
                    formattedContent = beautifyCss.css_beautify(content, jsConfigRc);
                    break;
            }

            return formattedContent;
        }
    }
})