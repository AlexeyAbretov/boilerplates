/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const { By, until } = require('selenium-webdriver');
const path = require('path');
const os = require('os');

const waitUntilTime = 20000;

/** Возвращает элементы по селектору
 *
 * @param {string} selector css-селектор
 * @param {WebDriver} driver Selenium Webdriver
 * @param {number} timeout время ожидания элемента
 * @param {bool} isWaitVisible признак ожидания показа элемента на странице
 *
 * @returns {(IThenable<T>|WebElementPromise)} promise
 *
 */
export const querySelector = async (
    selector,
    driver = window.driver,
    timeout,
    isWaitVisible = true,
) => {
    const el = await driver.wait(
        until.elementLocated(By.css(selector)),
        timeout || waitUntilTime
    );

    if (isWaitVisible) {
        return driver.wait(until.elementIsVisible(el), timeout || waitUntilTime);
    }

    return el;
};

/** Ожидание удаления элемента
 *
 * @param {string} selector css-селектор
 * @param {WebDriver} driver Selenium Webdriver
 * @param {number} timeout время ожидания элемента
 *
 */
export const waitRemoveElement = async ({
    selector,
    driver = window.driver,
    timeout,
} = {}) => {
    const result = await driver.findElements(By.css(selector));

    if (!result.length) {
        return;
    }

    await driver.wait(until.stalenessOf(result[0]), timeout || waitUntilTime);
};

/** Возвращает признак наличия элемнта
 *
 * @param {string} selector css-селектор
 * @param {WebDriver} driver Selenium Webdriver
 *
 * @returns {boolean} true если найден иначе false
 *
 */
export const isElementExists = async (selector, driver = window.driver) => {
    const result = await driver.findElements(By.css(selector));

    return !!result.length;
};

/** Возвращает признак запуска браузера в режиме headless
 *
 * @param {WebDriver} driver Selenium Webdriver
 *
 * @returns {boolean} true если headless иначе false
 *
*/
export const isHeadless = async ({
    driver,
}) => driver.executeScript(
    'return /HeadlessChrome/.test(window.navigator.userAgent);'
);

/** Возвращает директорию для сохранения скачиваемых файлов
 *
 * @returns {string} строка с полным путем директории
 *
 */
export const getDownloadFolder = () => path.join(
    os.tmpdir(),
    'dbo-automation-tests-download'
);

/** Добавляет скриншот в отчет
 *
 * @param {WebDriver} driver Selenium Webdriver
 * @param {Allure} reporter генератор отчетов
 * @param {string} name название скриншота
 *
 */
export const addScreenshotToReport = async ({
    driver = window.driver,
    reporter = window.reporter,
    name = '',
}) => {
    const screenshot = await driver.takeScreenshot();

    const buf = Buffer.from(screenshot, 'base64');

    reporter && reporter.addAttachment(name || 'Screenshot', buf, 'image/png');
};

/** Добавляет скриншот в конце теста
 *
 * @param {WebDriver} driver Selenium Webdriver
 * @param {Allure} reporter генератор отчетов
 *
 */
export const addResultScreenshotToReport = async ({
    driver,
    reporter = window.reporter,
}) => {
    await addScreenshotToReport({
        driver,
        reporter,
        name: 'Результат теста',
    });
};
