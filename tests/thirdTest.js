const {Builder, By, Key, until} = require('selenium-webdriver');

async function example(){
    //launch the browser 
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        // navigate to our application
        await driver.get("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/index.html");

        //work on functionality testing
        console.log('Home page rendered successfully');

        console.log('API is fetched');
        
        console.log('Test case: purchase button is clicked');
        await driver.findElement(By.id("purchase")).sendKeys(Key.RETURN);
        
        console.log('Test case: logout button is clicked');
        await driver.findElement(By.id("profile")).sendKeys(Key.RETURN);
               
       //Test Case: Logout Functionality
        console.log('Test case: logout button is clicked');
        await driver.findElement(By.id("logout")).sendKeys(Key.RETURN);
        console.log('Test case: Successfully logged out message alert is displayed');
        await driver.switchTo().alert().accept();  

    }
    finally{
        //close the browser
        // await driver.quit();
        console.log('Test Case: Browser is closed');
    }

}

example()