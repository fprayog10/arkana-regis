const pt = require('puppeteer');
const moment = require('moment');
const delay = require('delay');
var readlineSync = require('readline-sync');

async function startBrowser(){
    console.log(`[ ${moment().format("HH:mm:ss")} ] ` + 'Auto Regis + Reff Arkana (+1000 Point)')
    await delay(1000)
    const browser = await pt.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://arkana.gg/?refcode=KSZKXI');

    const button = await page.$('.self-end')
    await button.click()

    var username = readlineSync.question('Email : ');
    const emailField = await page.$('.input-base')
    await emailField.type(username)
    await emailField.dispose()

    const button2 = await page.$('#__next > div.fixed.inset-0.z-50.flex.items-center.p-4.backdrop-blur-sm.bg-blue-0.bg-opacity-50 > div > div > form > button')
    await button2.click()
    await delay(1000)

    var otp = readlineSync.question('OTP Nya BROK : ');
    const otpField = await page.$('.vi')
    await otpField.type(otp)
    await otpField.dispose()

    const button3 = await page.$('#__next > div.fixed.inset-0.z-50.flex.items-center.p-4.backdrop-blur-sm.bg-blue-0.bg-opacity-50 > div > div > form > button')
    await button3.click()
    await button3.dispose()

    await delay(2000)
    console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses Ngereff Nya BROK`)

    await new Promise(r => setTimeout(r, 5000));
    await browser.close()
}

startBrowser()