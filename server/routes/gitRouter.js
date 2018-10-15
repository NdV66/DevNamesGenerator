const gitRouter = require('express').Router();
const SECTION_NAMES = require('../../sectionNames.json');

function _prepareUrl(name) {
    return `/${name}`;
}

function _generateBranchName() {
    return 'TEST';
}

gitRouter.get(_prepareUrl(SECTION_NAMES.GIT_BRANCH), (req, res) => res.json({generatedName: _generateBranchName()}));
gitRouter.get(_prepareUrl(SECTION_NAMES.GIT_COMMIT), (req, res) => res.json({generatedName: _generateBranchName()}));

module.exports = gitRouter;
