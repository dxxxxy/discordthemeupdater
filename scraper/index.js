import fs from "fs"
import path from "path"
import puppeteer from "puppeteer"

//get browser and page instances
const browser = await puppeteer.launch()
const page = await browser.newPage()

//disable caching for fresh asset fetches
await page.setCacheEnabled(false)

//listen for network responses
page.on("response", async response => {
    if (response.request().resourceType() === "stylesheet" && response.url().startsWith("https://discord.com/assets/")) {
        //get file name and content
        const name = response.url().split("/").pop()
        const content = await response.text()

        //write to file
        fs.writeFileSync(path.join(path.resolve(), `../css/${name}`), content)
    }
})

//go to login page which loads all css
await page.goto("https://discord.com/login")

//close browser
await browser.close()
