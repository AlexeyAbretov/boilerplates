/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import {
    querySelector,
} from '../../../selenium/helpers';

const { until } = require('selenium-webdriver');

const { Key } = require('selenium-webdriver/lib/input');

/** Нажатие на кнопку
 *
 * @param {WebDriver} driver Selenium WebDriver
 * @param {string} name имя кнопки
 * @param {string} attr названеи атрибута для поиска
 * @param {bool} isLoadable признак того что кнопка с крутилкой ожидания
 *
 */
export const ClickButton = async ({
    driver = window.driver,
    name = '',
    attr = 'data-id',
    timeout = 60000,
} = {}) => {
    const button = await querySelector(
        `[${attr}="${name}"]`,
        driver,
        timeout,
    );

    await driver.executeScript(
        'arguments[0].scrollIntoView({ block: "center" });',
        button
    );

    await driver.executeScript(
        'arguments[0].click();',
        button
    );
};

/** Ожидание урла
 *
 * @param {WebDriver} driver Selenium WebDriver
 * @param {string} url ссылка
 *
 */
export const WaitUrl = async ({
    driver,
    reporter = window.reporter,
    url = '',
} = {}) => {
    const tabs = await driver.getAllWindowHandles();

    await driver.switchTo().window(tabs[1]);

    // TODO: does not work in headless mode
    await driver.wait(
        until.urlContains(
            url
        ),
        20000
    );

    await driver.sleep(2000);
};

/** Устанавливает значение поля
 *
 * @param {WebDriver} driver Selenium WebDriver
 * @param {string} value значение
 * @param {string} fieldName имя поля
 * @param {string} attr имя атрибута
 *
 */
export const SetFieldValue = async ({
    driver = window.driver,
    value = '',
    fieldName = '',
    attr = 'data-id',
} = {}) => {
    const field = await querySelector(
        `[${attr}="${fieldName}"]`,
        driver
    );

    await driver.executeScript(
        'arguments[0].scrollIntoView({ block: "center" });',
        field
    );

    await field.click();

    await field.sendKeys(Key.HOME, Key.chord(Key.SHIFT, Key.END), value);
};

/** Устанавливает фокус в поле
 *
 * @param {WebDriver} driver Selenium WebDriver
 * @param {string} fieldName имя поля
 * @param {string} attr имя атрибута
 *
 */
export const SetFieldFocus = async ({
    driver = window.driver,
    fieldName = '',
    attr = 'data-id',
} = {}) => {
    const field = await querySelector(
        `[${attr}="${fieldName}"]`,
        driver
    );

    await driver.executeScript(
        'arguments[0].scrollIntoView({ block: "center" });',
        field
    );

    await field.click();
};

/** Нажимает на радиобаттон
 *
 * @param {WebDriver} driver Selenium WebDriver
 * @param {string} fieldName имя поля
 *
 */
export const ClickToRadio = async ({
    driver,
    fieldName = '',
} = {}) => {
    const field = await querySelector(
        `[data-testid="${fieldName}"]`,
        driver
    );

    await driver.executeScript(
        'arguments[0].click();',
        field
    );
};

/** Открыввет новое окно браузера
 *
 * @param {WebDriver} driver Selenium WebDriver
 *
 */
export const OpenNewBrowserTab = async ({
    driver,
} = {}) => {
    await driver.executeScript("window.open('about:blank','_blank');");

    const tabs = await driver.getAllWindowHandles();

    await driver.switchTo().window(tabs[tabs.length - 1]);
};

/** Прокручивает страницу к селектору
 *
 * @param {WebDriver} driver Selenium WebDriver
 * @param {string} selector селектор
 *
 */
export const ScrollTo = async ({
    driver = window.driver,
    selector = '',
} = {}) => {
    const field = await querySelector(
        selector,
        driver,
    );

    await driver.executeScript(
        'arguments[0].scrollIntoView({ block: "center" });',
        field
    );
};
