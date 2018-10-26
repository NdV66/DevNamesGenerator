const router = require('express').Router();
const SECTION_NAMES = require('../../sectionNames.json');
const namesGenerator = require('../generator/generator');

function _prepareUrl(name) {
    return `/${name}`;
}

function _generateBranchName() {
    return namesGenerator.generateCommonSentence();
}

function sendResponse(res, generatedName) {
    return res.json({generatedName});
}

function prepareAllNames() {
    const names = {};
    names[SECTION_NAMES.GIT_BRANCH] = SECTION_NAMES.GIT_BRANCH;
    names[SECTION_NAMES.GIT_COMMIT] = SECTION_NAMES.GIT_COMMIT,
    names[SECTION_NAMES.GIT_COMMIT_M] = SECTION_NAMES.GIT_COMMIT_M;
    return names;
}

router.get(_prepareUrl('/'), (req, res) => res.json({generatedNames: prepareAllNames()}));
router.get(_prepareUrl(SECTION_NAMES.GIT_BRANCH), (req, res) => sendResponse(res, _generateBranchName()));
router.get(_prepareUrl(SECTION_NAMES.GIT_COMMIT), (req, res) => sendResponse(res, _generateBranchName()));
router.get(_prepareUrl(SECTION_NAMES.GIT_COMMIT_M), (req, res) => sendResponse(res, _generateBranchName()));

module.exports = router;
