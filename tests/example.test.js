const puppeteer = require('puppeteer')

describe('Desafio 2', () => {
    it('Acceder y dar click en Ofertas usando el texto del boton', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://mercadolibre.com.mx')
        await page.locator('a ::-p-text(Ofertas)').click();
        //await browser.close()
    })
    it('Acceder y dar click en elemento usando el selector css del elemento', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://mercadolibre.com.mx')
        const selector = 'body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(2) > a'
        await page.click(selector);
        //await browser.close()
    })
    it('Acceder y dar click en Ofertas usando el xpath del elemento', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://mercadolibre.com.mx')
        const element = await page.waitForSelector('::-p-xpath(/html/body/header/div/div[5]/div/ul/li[2]/a)');
        await element.click();
        //await browser.close()
    })
})

/*describe('Mi primer prueba abriendo un navegador', () => {
    it('Debería abrir el navegador', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://example.com')
        await page.waitForSelector('h1')
        await browser.close()
    })
    it('Debería abrir el navegador x2', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://google.com')
        await page.waitForSelector('h1')
        await browser.close()
    })
    it('Debería abrir el navegador x3', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://amazon.com')
        await page.waitForSelector('h1')
        await browser.close()
    })
})*/