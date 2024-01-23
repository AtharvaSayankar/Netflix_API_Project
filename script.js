const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6a36b2c97amshc1123d9ba662a61p132d15jsnf421095ae985',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
};

fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        var titles = response.titles; //simply extracting titles from api
        for (var i = 0; i < titles.length; i++) { //for displaying response array
            var title = (titles[i].jawSummary.episodeTitle); //to extract episode names
            var backgroundImage = (titles[i].jawSummary.backgroundImage.url) //to extract episode images
            var backgroundImage = (titles[i].jawSummary.backgroundImage.url) //to extract episode images
            var date = (titles[i].availability.availabilityDate)//to extract episode dates
            var synopsis = (titles[i].jawSummary.contextualSynopsis.text)//to extract episode dates
            var releaseYear = (titles[i].jawSummary.releaseYear)//to extract episode dates


            var episodeTitle = () => {   //function to filter out undefined episode names
                if (title != null) {
                    return title;
                }
                else {
                    return ``;
                }
            }
            var castArray = () => {   //function to display cast array
                var cast = (titles[i].jawSummary.cast)
                for (var j = 0; j < cast.length; j++) {
                    return cast[j].name;
                };
            }
            var genresArray = () => {   //function to display cast array
                var genres = (titles[i].jawSummary.genres)
                for (var k = 0; k < genres.length; k++) {
                    return genres[k].name;
                };
            }


            const movieCard = `
            <h2>${episodeTitle()}</h2>
            <img src=${backgroundImage} alt="">
            <div>
                <span class="sp">Date: ${date}</span>
                <span class="sp">Released: ${releaseYear}</span>
            </div>
            <div>Cast: ${castArray()}</div>
            <div>Genres: ${genresArray()}</div>
            <p class="synopsis">${synopsis}</p>
            `


            document.getElementById('box').innerHTML += movieCard;
        }
    })
    .catch(err => console.error(err));
    

    function Login(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if(email == "AtharvaBoy@gmail.com"){
            if(password == "a"){
                alert("Logging in!");
                window.open("file:///C:/Users/sayan/OneDrive/Desktop/Atharva/Web%20Dev/NetFlixAPI/index.html");
            }
            else{
                alert('Wrong password');
            }
        }
        else{
            alert("Wrong email!");
        }
    };