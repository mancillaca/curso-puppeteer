const puppeteer = require('puppeteer')

async function pruebaDeNavegador() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
    const page = await browser.newPage()
    await page.goto('https://example.com')
    await page.waitForSelector('asdsad')
    await browser.close()
}

pruebaDeNavegador()