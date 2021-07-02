process.env.SELENIUM_BROWSER = 'chrome';

module.exports = {
    rootDir: '../src',
    setupFilesAfterEnv: [
        '../setup/isetup.js',
        'jest-allure/dist/setup',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '__data__',
    ],
    testMatch: ['**/__tests__/**/*.(ispec|itest).[jt]s?(x)'],
};
