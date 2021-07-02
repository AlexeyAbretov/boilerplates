/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import {
    addResultScreenshotToReport,
} from '../selenium/helpers';

const {
    Builder,
} = require('selenium-webdriver');

const fs = require('fs');

const { Options } = require('selenium-webdriver/chrome');
const { getDownloadFolder } = require('../selenium/helpers');

require('selenium-webdriver/firefox');
require('selenium-webdriver/safari');
require('chromedriver');
require('geckodriver');

require('dotenv').config();

jest.setTimeout(300000);

// process.env.SELENIUM_REMOTE_URL = 'http://localhost:4444/wd/hub';

window.driver = null;

const chromePrefs = {
    'download.default_directory': getDownloadFolder(),
};

// let nextPort = 9222;

let server = null;

beforeEach((done) => {
    try {
        fs.rmdirSync(getDownloadFolder(), { recursive: true });
    } catch (e) {
        console.log(e);
    }

    // nextPort += 1;

    window.driver = new Builder()
        .setChromeOptions(
            new Options()
                .addArguments('--no-sandbox')
                //.addArguments('--headless')
                .addArguments('--window-size=1920,1080')
                .addArguments('--start-maximized')
                .addArguments('--start-fullscreen')
                .addArguments('--ignore-certificate-errors')
                .addArguments('--disable-dev-shm-usage')
                .addArguments('--auto-open-devtools-for-tabs')
                // .addArguments('--remote-debugging-port=' + nextPort)
                .setUserPreferences(chromePrefs)
                // .addArguments('--disable-gpu')
                // .addArguments('--disable-extensions')
                // .addArguments("--proxy-server='direct://'")
                // .addArguments('--proxy-bypass-list=*')
        )
        .build();

    window.driver.manage().setTimeouts({
        pageLoad: 30000,
    });

    reporter.addEnvironment('REACT_APP_INTEGRATION_BASE_URL', process.env.REACT_APP_INTEGRATION_BASE_URL);
    reporter.addEnvironment('SELENIUM_BROWSER', process.env.SELENIUM_BROWSER);

    window.driver.get(process.env.REACT_APP_INTEGRATION_BASE_URL).then(done);
    // TODO: понять как вывести system-property
    // reporter.addParameter('system-property', 'window-size', '1920,1080');
    // reporter.addParameter('system-property', 'start-maximized', 'true');
    // reporter.addParameter('system-property', 'start-fullscreen', 'true');
});

afterEach((done) => {
    addResultScreenshotToReport({
        driver: window.driver,
        reporter,
    });

    server && server.close();

    window.driver.quit().then(done);
});
