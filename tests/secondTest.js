const {Builder, By, Key, until} = require('selenium-webdriver');

async function example(){
    //launch the browser 
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        // navigate to our application
        await driver.get("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/register.html");
        
        //work on functionality testing
        console.log('Test case: Username input ');
        await driver.findElement(By.id('Username')).sendKeys('AtharvaBoy');

        console.log('Test case: email input ');
        await driver.findElement(By.id('email')).sendKeys('AtharvaBoy@gmail.com');

        console.log('Test case: password input ');
        await driver.findElement(By.id('Password')).sendKeys('a');

        console.log('Test case: password input ');
        await driver.findElement(By.id('AgainPassword')).sendKeys('a');

        console.log('Test case: DOB input ');
        await driver.findElement(By.id('DOB')).sendKeys('11/11/2023');

        console.log('Test case: password input ');
        await driver.findElement(By.id('sub')).sendKeys('a',Key.RETURN);

        console.log('Test case: User Registered ');
        await driver.switchTo().alert().accept();
        
                
    }
    finally{
        //close the browser
        await driver.quit();
        console.log('Test Case: Browser is closed');
    }

}

example()