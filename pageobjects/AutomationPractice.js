const { expect,locator,page } = require("@playwright/test");


 class AutomationPractice
{

constructor(page)
    {
        this.page = page;
        this.callUs= page.locator('.shop-phone');
        this.contact = page.locator('#contact-link > a');
        this.signinButton = page.locator('.login');
        this.searchTextBox = page.locator('#search_query_top');
        this.gettshirt = page.locator('#homefeatured >> text=Faded Short Sleeve T-shirts');
        this.getdress = page.locator('text=Printed Summer Dress').nth(1);
        this.userName = page.locator('#email');
        this.password = page.locator('#passwd');
        this.loginButton = page.locator('button:has-text("Sign in")');
        this.account = page.locator('.account');
        this.categories = page.locator('h4:has-text("Categories")');
        this.information = page.locator('#block_various_links_footer > h4');
        this.myAccount = page.locator('h4 > a')
        this.women = page.locator('.tree > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]');
        this.specials = page.locator('.toggle-footer > :nth-child(1) > a');
        this.newProducts = page.locator('.toggle-footer > :nth-child(2) > a');
        this.bestSellers = page.locator('.toggle-footer > :nth-child(3) > a');
        this.ourStores = page.locator('.toggle-footer > :nth-child(4) > a');
        this.contactus = page.locator('.toggle-footer > :nth-child(5) > a');
        this.terms = page.locator('.toggle-footer > :nth-child(6) > a');
        this.aboutUs = page.locator('.toggle-footer > :nth-child(7) > a')
        this.sitemap = page.locator('.toggle-footer > :nth-child(8) > a')
        this.myOrders = page.locator('.bullet > :nth-child(1) > a')
        this.myCreditSLips = page.locator('.bullet > :nth-child(2) > a');
        this.myAddresses = page.locator('.bullet > :nth-child(3) > a')
        this.myPersonalInfo = page.locator('.bullet > :nth-child(4) > a');
        this.product = page.locator('a:has-text("Printed Dress")').first();
        this.tshirtTitle = page.locator('h1');
        this.productDescription = page.locator ('body.product.product-3.product-printed-dress.category-9.category-casual-dresses.hide-left-column.hide-right-column.lang_en:nth-child(2) div.columns-container div.container div.row:nth-child(3) div.center_column.col-xs-12.col-sm-12 div.primary_block.row:nth-child(1) div.pb-center-column.col-xs-12.col-sm-4 div:nth-child(4) div.rte.align_justify > p:nth-child(1)');
        this.dataSheet = page.locator('table[class=table-data-sheet]');
        this.compisitions = page.locator ('#center_column > div > section:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2)');
        this.styles = page.locator('#center_column > div > section:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)');
        this.gettwitterlink = page.locator('.btn-twitter');
        this.getfacebooklink = page.locator('.btn-facebook');
        this.getgooglepluslink = page.locator('.btn-google-plus');
        this.getpintrestlink = page.locator('.btn-pinterest')

    
    }

async goto()
{
    await this.page.goto("http://automationpractice.com/index.php");
}


async verifyLinkText(LinkText)
{
await expect(this.callUs).toContainText('0123-456-789') 
}

async verifyContactLink()
{
    //await this.contact();
    await expect(this.contact).toBeVisible();    
}

async verifySignInButton()
{
    await this.signinButton.click();
}

async getSearchTextBox()
{
    await this.searchTextBox();
}

async getTshirt()
{
    await this.gettshirt.click();
 
}

async getDress()
{
    await this.getdress.click();
}


async validLogin(username,password)
    {
        await  this.userName.type(username);
         await this.password.type(password);
         await this.loginButton.click();
         await this.page.waitForLoadState('networkidle');
    
    }
 async getAccount()
 {
    await this.account();
 }   

 async verifyCategories()
 {
    await expect(this.categories).toContainText('Categories');
 }

 async getInformation()
 {
    await expect(this.information).toContainText('Information');
 }

async verifyMyAccount()
 {
    await expect(this.myAccount).toContainText('My account');
 }

 async verifyWomen()
 {
    await expect(this.women).toContainText('Women');
 }

 async verifySpecials()
 {
    await expect(this.specials).toContainText('Specials');
 }

 async verifyNewProducts()
 {
    await expect(this.newProducts).toContainText('New products');
 }

 async verifyBestSellers()
 {
    await expect(this.bestSellers).toContainText('Best sellers');
 }

 async verifyOurStores()
 {
    await expect(this.ourStores).toContainText('Our stores');
 }

 async verifyContactus()
 {
    await expect(this.contactus).toContainText('Contact us');
 }

 async verifyTerms()
 {
    await expect(this.terms).toContainText('Terms and conditions of use');
 }

 async verifyAboutUs()
 {
    await expect(this.aboutUs).toContainText('About us');
 }

 async verifySitemap()
 {
    await expect(this.sitemap).toContainText('Sitemap');
 }

 async verifyMyOrders()
 {
    await expect(this.myOrders).toContainText('My orders');
 }

 async verifyMyCreditSLips()
 {
    await expect(this.myCreditSLips).toContainText('My credit slips');;
 }

 async verifyMyAddresses()
 {
    await expect(this.myAddresses).toContainText('My addresses');
 }

 async verifyMyPersonalInfo()
 {
    await expect(this.myPersonalInfo).toContainText('My personal info');
 }

 async getProduct()
 {
    await this.product.click();
    
 }

 async verifyTshirtTitle()
 {
    await expect(this.tshirtTitle).toContainText('Printed Dress');
 }

 async verifyProductDescription()
 {
    await expect(this.productDescription).toContainText('100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.');;

 }

 async verifyDataSheet() {
    await expect(this.dataSheet).toContainText('Cotton');
}

async verifyCompisitions() {
    //await this.compisitions();
    await expect(this.compisitions).toContainText('Cotton');
}

async verifyStyles() {
    await expect(this.styles).toContainText('Girly');    
}

async getTwitterLink()
{
   await expect(this.gettwitterlink).toBeVisible();
   
}

async getFacebookLink()
{
   await expect(this.getfacebooklink).toBeVisible();
}

async getGooglePlusLink()
{
   await expect(this.getgooglepluslink).toBeVisible();
}

async getPintRestLink()
{
   //await expect(this.getpintrestLlink).toBeVisible();
   await expect(this.getpintrestlink).toBeVisible(); 
}
}

module.exports = {AutomationPractice};
