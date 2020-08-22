const puppeteer = require("puppeteer");

// get keyword from the argument of the command
let keyword = process.argv[2];
if (!keyword) {
    console.error("引数にキーワードを指定してください。");
    process.exit();
}

const getURL = async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // read page searched on
    await page.goto("https://www.rakuten.co.jp/", {waitUntil: "domcontentloaded"});

    // input searched words
    await page.type("#sitem", keyword);

    // click a surch-button
    await page.click("#searchBtn");
    await page.waitForNavigation();

    // get result of surching
    const sites = async () => {
        return page.$$eval(".searchresultitem", anchors => {
            return anchors.map(item => {
                return {
                    title: item.querySelector(".title a").textContent.trim(),
                    url: item.querySelector(".title a").href,
                    price: item.querySelector(".important").textContent.trim(),
                };
            });
        });
    }
    console.log(await sites())

    for (i = 1; i <= 10; i++) {
        await Promise.all([
            page.click(".dui-pagination .nextPage"),
            page.waitForNavigation()
        ]);
        console.log(await sites());
    }

    await browser.close();
}

getURL();