define([
    "sap-web-ide-jsbeautify-formatter/js/beautifier"
], function(beautifier) {
    return {
        execute: function() {
            return this.context.service.formatter.format();
        },

        isAvailable: function() {
            return true;
        },

        isEnabled: function() {
            return this.context.service.content.getCurrentDocument()
                .then(function(document) {
                    var extension = document.getName().split(".").pop().toLowerCase();

                    if (beautifier.isFileTypeHandled(extension)) {
                        return true;
                    } else {
                        return false;
                    }
                });
        }
    }
});