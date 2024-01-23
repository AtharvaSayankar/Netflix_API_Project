const {Builder, By, Key, until} = require('selenium-webdriver');

async function example(){
    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        // navigate to our application
        await driver.get("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/login.html");

        //work on functionality testing
        //Test Case: Login Functionality
        console.log('Test case: login page is displayed');

        console.log('Test case: Invalid email input ');
        await driver.findElement(By.id("email")).sendKeys("Hello@gmail.com");

        console.log('Test case: Invalid password input ');
        await driver.findElement(By.id("password")).sendKeys("b",Key.RETURN);

        console.log('Test case: Invalid Login message alert is displayed');
        await driver.switchTo().alert().accept();

        console.log('Test case: email input ');
        await driver.findElement(By.id("email")).sendKeys("AtharvaBoy@gmail.com");

        console.log('Test case: password input ');
        await driver.findElement(By.id("password")).sendKeys("a",Key.RETURN);

        console.log('Test case: Logged In message alert is displayed');
        await driver.switchTo().alert().accept();

        //Test Case: Navigating to new page
        console.log('Test case: Home page is navigated');
        await driver.navigate().to("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/index.html");
       
        console.log('Home page rendered successfully');

        console.log('API is fetched');
        
        console.log('Test case: profile button is clicked');
        await driver.findElement(By.id("profile")).sendKeys(Key.RETURN);

        await driver.navigate().to("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/profile.html");
        console.log('Test case: Profile page is navigated');
        
        console.log('Test case: userinfo button is clicked');
        await driver.findElement(By.id("userinfo")).sendKeys(Key.RETURN);
       
        await driver.navigate().to("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/userInfo.html");
        console.log('Test case: userInfo page is navigated');

        console.log('UserINFO is displayed');

        console.log('Image update button is clicked');
        await driver.findElement(By.id("inputfile")).sendKeys("C:/Users/sayan/OneDrive/Desktop/Atharva/Web Dev/NetFlixAPI/images/user2.png");
        console.log('Image is updated');

        await driver.findElement(By.id("back")).sendKeys(Key.RETURN);
        
        await driver.navigate().to("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/index.html");
        console.log('Test case: Home page is navigated');
        
        await driver.findElement(By.id("purchase")).sendKeys(Key.RETURN);
        
        console.log('Test case: Subscription page is navigated');
        await driver.navigate().to("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/billings.html");
        
        await driver.navigate().to("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/index.html");
        console.log('Test case: Home page is navigated');

        //Test Case: Logout Functionality
        console.log('Test case: logout button is clicked');
        await driver.findElement(By.id("logout")).sendKeys(Key.RETURN);
        
        console.log('Test case: Successfully logged out message alert is displayed');
        await driver.switchTo().alert().accept();

    }
    finally{
        //close the browser
        await driver.quit();
        console.log('Test case: Browser is closed');
    }

}

example()