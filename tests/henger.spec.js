import { test, expect } from '@playwright/test';

const url = "https://szit.hu/m/tehengfel/"

test ('title ellenőrzés', async ({page})=> {

    await page.goto(url)
    
    await expect(page).toHaveTitle(/Henger/)

})

test ('Sugár megadási lehetőség', async ({page})=> {

    await page.goto(url);

    await page.locator('#radius').fill('30')
    

})

test ('Magasság megadási lehetőség', async ({page})=> {

    await page.goto(url);

    await page.locator('#height').fill('35')
    

})

test ('Számít gomb müködése', async ({page})=> {

    await page.goto(url);

    await page.locator('text=Számít').click()
    

})

test.only ('Felszín számítás', async ({page})=> {

    await page.goto(url);
    await page.locator('#radius').fill('30')
    await page.locator('#height').fill('35')
    await page.locator('text=Számít').click()
    const resultInput = page.locator('#surface')
    await expect(resultInput).toHaveValue('12252.21')
    

})