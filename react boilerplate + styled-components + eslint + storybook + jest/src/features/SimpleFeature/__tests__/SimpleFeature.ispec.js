import {
    isElementExists
} from '../../../../selenium/helpers';

import {
    ClickButton
} from '../../../__tests__/Basics/Basics.steps';

describe('Интеграционные тесты приложения', () => {
    describe('SimpleFeature tests', () => {
        it('Появляется сообщение после нажатия кнопки', async () => {
            await window.driver.sleep(2000);

            await ClickButton({
                name: 'simple-feature-button',
                attr: 'datа-testid',
                timeout: 1000 
            })

            await window.driver.sleep(100);

            expect(await isElementExists(
                '[datа-testid="simple-feature-message"]',
            )).toEqual(true);
        })
    })
});