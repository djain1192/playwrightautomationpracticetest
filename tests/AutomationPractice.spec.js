const { test, expect } = require('@playwright/test')
const { AutomationPractice } = require('../pageobjects/AutomationPractice');
const dataset = JSON.parse(JSON.stringify(require("../testData/placeorderTestData.json")));



test.describe('Automation Practice tests', () => {
test('Verify title & URL of the launch URL', async ({ page }) => {
    const automationpractice = new AutomationPractice(page);
    await page.goto("http://automationpractice.com/index.php");
    await expect(page).toHaveTitle('My Store');
    await expect(page).toHaveURL('http://automationpractice.com/index.php');

});


test('Verify Links in header', async ({ page }) => {
    const automationpractice = new AutomationPractice(page);
    await automationpractice.goto();
    await automationpractice.verifyLinkText();
    await automationpractice.verifyContactLink();
    await automationpractice.verifySignInButton()
});


test('Verify placeholderText', async ({ page }) => {
    const automationpractice = new AutomationPractice(page);
    await automationpractice.goto();
    await page.waitForSelector('#search_query_top', {
        state: "visible",
    });
    await page.fill('#search_query_top', 'Search');

}
);

test('Verify on different tabs and verify title', async ({ page }) => {

    const automationpractice = new AutomationPractice(page);
    await automationpractice.goto();
    await automationpractice.getTshirt();
    await expect(page).toHaveTitle('Faded Short Sleeve T-shirts - My Store');
    page.goBack();
    await automationpractice.getDress();
    await expect(page).toHaveTitle('Printed Summer Dress - My Store');
}
);

for (const data of dataset) {
    test('Verify Login', async ({ page }) => {
        const automationpractice = new AutomationPractice(page);
        await automationpractice.goto();
        await automationpractice.verifySignInButton();
        await expect(page).toHaveTitle('Login - My Store');
        await automationpractice.validLogin(data.username, data.password);
        await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=my-account');

    }
    );
}

    test('Verify Footer of the page', async ({ page }) => {
        const automationpractice = new AutomationPractice(page);
        await automationpractice.goto();
        await page.evaluate(() => window.scrollBy(0, 1000));
        await automationpractice.verifyCategories();
        await automationpractice.getInformation();
        await automationpractice.verifyMyAccount();
        await automationpractice.verifyWomen();
        await automationpractice.verifySpecials();
        await automationpractice.verifyNewProducts();
        await automationpractice.verifyBestSellers();
        await automationpractice.verifyOurStores();
        await automationpractice.verifyContactus();
        await automationpractice.verifyTerms();
        await automationpractice.verifyAboutUs();
        await automationpractice.verifySitemap();
        await automationpractice.verifyMyOrders();
        await automationpractice.verifyMyCreditSLips()
        await automationpractice.verifyMyAddresses();
        await automationpractice.verifyMyPersonalInfo();
    }
    );

    test('Verify Product details', async ({ page }) => {
        const automationpractice = new AutomationPractice(page);
        await automationpractice.goto();
        await automationpractice.getProduct();

        // cy.get('img', { includeShadowDom: true })
        //     .filter('[src]')
        //     .filter(':visible')
        //     .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));

        await automationpractice.verifyTshirtTitle();
        await automationpractice.verifyProductDescription()

        //Value present anywhere in table
        await automationpractice.verifyDataSheet();
        //await automationpractice.verifyDataSheet().toContainText('td', 'Girly').toBeVisible()
        //await automationpractice.verifyDataSheet().toContainText('td', 'Colorful Dress').toBeVisible()

        //Value Present in specific raw & coulmn
        await automationpractice.verifyCompisitions();
        await automationpractice.verifyStyles();
        //await automationpractice.getProperties().toContainText('Colorful Dress').toBeVisible()

        // //Verify Composition is Cotton
        // await page.locator('table[class=table-data-sheet]>tbody>tr td:nth-child(2)').each(($e, index, $elist) => {
        //     const text = $e.text()
        //     if (text.includes("Cotton")) {
        //         page.locator('table[class=table-data-sheet]>tbody>tr td:nth-child(1)').eq(index).then(function (cname) {
        //             const compositionsname = cname.text()
        //             expect(compositionsname).to.equal("Compositions")
        //         })
        //     }

        // })

        // //Verify Styles is Girly
        // await page.locator('table[class=table-data-sheet]>tbody>tr td:nth-child(2)').each(($e, index, $elist) => {
        //     const text = $e.text()
        //     if (text.includes("Girly")) {
        //         page.locator('table[class=table-data-sheet]>tbody>tr td:nth-child(1)').eq(index).then(function (sname) {
        //             const stylesname = sname.text()
        //             expect(stylesname).to.equal("Styles")
        //         })
        //     }

        // })

        // //Verify Properties is Colorful Dress
        // await page.locator('table[class=table-data-sheet]>tbody>tr td:nth-child(2)').each(($e, index, $elist) => {
        //     const text = $e.text()
        //     if (text.includes("Colorful Dress")) {
        //         cy.get('table[class=table-data-sheet]>tbody>tr td:nth-child(1)').eq(index).then(function (pname) {
        //             const propertiesname = pname.text()
        //             expect(propertiesname).to.equal("Properties")
        //         })
        //     }

        // })


        await automationpractice.getTwitterLink();
        await automationpractice.getFacebookLink();
        await automationpractice.getGooglePlusLink();
        await automationpractice.getPintRestLink()

    }

    );

}
)
