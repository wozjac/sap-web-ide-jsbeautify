define([], function() {
    return function CurrentProject(contextService) {
        this.contextService = contextService;

        CurrentProject.prototype.getCurrentDocumentData = function() {
            return contextService.content.getCurrentDocument()
                .then(function(document) {
                    var filename = document.getName(),
                        extension = filename.split(".").pop().toLowerCase();

                    return {
                        document: document,
                        filename: filename,
                        extension: extension
                    }
                });
        }

        CurrentProject.prototype.getJsBeautifyConfig = function() {
            return this.contextService.content.getCurrentDocument()
                .then(function(document) {
                    return document.getProject()
                })
                .then(function(project) {
                    return project.getFolderContent();
                })
                .then(function(folderRootContent) {
                    var jsbeautifyrc = folderRootContent.find(function(element) {
                        return element.getTitle() === ".jsbeautifyrc";
                    });

                    if (jsbeautifyrc) {
                        return jsbeautifyrc.getContent();
                    } else {
                        return null;
                    }
                })
        }
    }
});