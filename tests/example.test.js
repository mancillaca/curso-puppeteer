const puppeteer = require('puppeteer')

describe('Desafio 3', () => {
    let browser, page
    before(async () => {
        browser = await puppeteer.launch({ headless: false })
        page = await browser.newPage()
    })
    after(async () => {
        //await browser.close()
    })
    it('Debería agregar un producto al carrito y validar el precio', async () => {
        const { expect } = await import('chai')
        try {
            await page.goto('https://rexorecordstore.com/')
            // Seleccionar el primer producto de la página principal
            const selector = '#shopify-section-1d882988-f1ff-49a7-9e34-dc517064a219 > div > div.grid-uniform > div:nth-child(1)'
            await page.click(selector)

            //Extraer el precio del producto
            const priceSelector = '#ProductPrice'
            await page.waitForSelector(priceSelector)
            const productPrice = await page.$eval(priceSelector, (el) => el.textContent.trim())
            console.log('Precio del producto:', productPrice)

            // Agregar el producto al carrito
            const addToCartButtonSelector = '#AddToCart'
            await page.waitForSelector(addToCartButtonSelector)
            await page.click(addToCartButtonSelector)

            // Validar el precio en el carrito
            const cartPriceSelector = '#CartSection > form > div:nth-child(3) > div > div:nth-child(2) > div > div.grid__item.one-half.one-half.medium-down--one-third.post-large--text-right > span.h5'
            await page.waitForSelector(cartPriceSelector)
            const cartPrice = await page.$eval(cartPriceSelector, (el) => el.textContent.trim())

            console.log('Precio en el carrito:', cartPrice)

            // Assertion con Chai
            expect(cartPrice).to.equal(productPrice)
            console.log('Assertion exitosa: El precio coincide.')
        } catch (error) {
            console.error('Error durante la prueba:', error)
            throw error;
        }
    })
})

//describe('Mi primer prueba abriendo un navegador', () => {
/* let browser, page
before(async () => {
    browser = await puppeteer.launch({ headless: false })
    page = await browser.newPage()
})
after(async () => {
    await browser.close()
})
beforeEach(async () => {
    await page.goto('https://example.com')
})
afterEach(async () => {
})
it('Debería abrir el navegador', async () => {
    await page.waitForSelector('h1')
}) */
/*it('Debería abrir el navegador', async () => {
    await page.goto('https://example.com')
    await page.waitForSelector('h1')
})
it('Debería abrir el navegador x2', async () => {
    await page.goto('https://google.com')
    await page.waitForSelector('h1')
})
it('Debería abrir el navegador x3', async () => {
    await page.goto('https://amazon.com')
    await page.waitForSelector('h1')
})*/

/* it('Debería abrir el navegador A', async () => {
    await page.goto('https://example.com')
    await page.waitForSelector('h1')
    await page.goto('https://dev.to')
    await page.waitForSelector('#search-input')
    await page.goBack()
    await page.waitForSelector('h1')
    await page.goForward()
    await page.waitForSelector('#search-input')
}) */

/* it('Debería abrir el navegador B', async () => {
    await page.goto('https://devexpress.github.io/testcafe/example/')
    await page.type('#developer-name', 'John Doe', { delay: 0 })
    await page.click('#submit-button', { clickCount: 2 })
    const title = await page.title()
    const url = await page.url()
    console.log('Title:', title)
    console.log('URL:', url)
}) */

/* it('Debería abrir el navegador C', async () => {
    await page.goto('https://example.com')
    const title = await page.title()
    const url = await page.url()
    const text = await page.$eval('body > div', (element) => element.textContent)
    //if(text === 'Example Domain') {
    //    console.log('Title:', title)
    //    console.log('URL:', url)
    //} else {
    //    console.log('Text:', text)
    //}
    //expect(title).to.be.a('string', 'Example Domain')
    expect(title).to.be.equals('Example Domain')
    expect(url).to.include('example')
    expect(title.length).to.equal(14)
}) */

/* it('Debería abrir el navegador D', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.waitForSelector('#searchTerm')
    await page.type('#searchTerm', 'Hola Mundo')
    await page.keyboard.press('Enter', { delay: 10 })
}) */

/* it('Dimensiones de navegador desktop', async () => {
    await page.setViewport({ width: 1650, height: 1050 })
    const title = await page.title()
    const url = await page.url()
    console.log('Title:', title)
    console.log('URL:', url)
}) */

/* it('Dimensiones de navegador tablet', async () => {
    const tablet = puppeteer.devices['iPad landscape']
    await page.emulate(tablet)
    const title = await page.title()
    const url = await page.url()
    console.log('Title:', title)
    console.log('URL:', url)
}) */
/* it('Dimensiones de navegador iPhone', async () => {
    const mobile = puppeteer.devices['iPhone X']
    await page.emulate(mobile)
    const title = await page.title()
    const url = await page.url()
    console.log('Title:', title)
    console.log('URL:', url)
}) */
//})

/*describe('Desafio 2', () => {
    it('Acceder y dar click en Ofertas usando el texto del boton', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://mercadolibre.com.mx')
        await page.locator('a ::-p-text(Ofertas)').click()
        //await browser.close()
    })
    it('Acceder y dar click en elemento usando el selector css del elemento', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://mercadolibre.com.mx')
        const selector = 'body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(2) > a'
        await page.click(selector)
        //await browser.close()
    })
    it('Acceder y dar click en Ofertas usando el xpath del elemento', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://mercadolibre.com.mx')
        const element = await page.waitForSelector('::-p-xpath(/html/body/header/div/div[5]/div/ul/li[2]/a)')
        await element.click()
        //await browser.close()
    })
})*/