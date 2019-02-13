define([
    "sap-web-ide-jsbeautify-formatter/js/beautifier",
    "sap-web-ide-jsbeautify-formatter/js/CurrentProject"
], function(beautifier, CurrentProject) {

    var FILE_TYPE_NOT_HANDLED = 1;

    return {
        format: function() {
            var that = this,
                currentProject = new CurrentProject(this.context.service),
                jsBeautifyRcConfig,
                documentInfo;

            currentProject.getJsBeautifyConfig()
                .then(function(config) {
                    jsBeautifyRcConfig = JSON.parse(config);
                    return currentProject.getCurrentDocumentData();
                })
                .then(function(documentData) {
                    if (beautifier.isFileTypeHandled(documentData.extension)) {
                        documentInfo = documentData;
                        return documentData.document.getContent();
                    } else {
                        throw FILE_TYPE_NOT_HANDLED;
                    }
                })
                .then(function(content) {
                    var formattedContent = beautifier.beautify(content, documentInfo.extension,
                        jsBeautifyRcConfig);

                    if (formattedContent) {
                        documentInfo.document.setContent(formattedContent);
                    }

                    return;
                })
                .catch(function(error) {
                    switch (error) {
                        case FILE_TYPE_NOT_HANDLED:
                            that.context.service.log.warn("js-beautify",
                                "File type not handled (valid types: " + beautifier.handledFiles +
                                ")").done();
                            break;
                        default:
                            that.context.service.log.error("js-beautify", error).done();
                    }
                });
        }
    }
});