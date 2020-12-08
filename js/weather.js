function gettingJSON(){
    //Display the forecast
    // Your code here.

    document.querySelector("#forecast").style.display="block";

    //Set default location if one isn't provided
    let location; 
    if (!document.querySelector("#location").value){
    location = "Ann Arbor"
    }   
    else{    
    location = (document.querySelector("#location").value);
    }
    
    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format; 
    if (!document.querySelector('input[name = temp]:checked'))
    format = "imperial"
    else 
    format = (document.querySelector('input[name = temp]:checked').value);

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = encodeURI (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${format}&appid=4476d59e5929fdf99ef3b068e81cbdd2`);

    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    // let loc = document.querySelector("#loc");
    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.
 
    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        //console.log(json.sringify(json));
        loc.innerHTML = (json.name);
        temp.innerHTML = (json.main.temp + " with " + json.weather[0].description);   
        console.log("icon is" + json.weather[0].icon); 
        tempImg.src = "http://openweathermap.org/img/wn/" + json.weather[0].icon + ".png";
        tempImg.alt = (json.weather[0].description);

    });
}
