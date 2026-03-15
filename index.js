var userinput = document.getElementById("movie-title");
var title = document.querySelector("h2");
var img = document.querySelector("img");
var text = document.querySelector("p")
var card = document.querySelector(".movie-card");
var error = document.querySelector(".error");
var movieCard= document.querySelector(".movie-card")
            
                 
async function FetchApi(){
    document.querySelector(".rotate").style.display="block"
    var uservalue = userinput.value;//Spiderman
     const url = `http://www.omdbapi.com/?i=tt3896198&apikey=224f83de&s=${encodeURIComponent(uservalue)}`;
    //  alert("Your request is waiting");
     try{
    var response = await fetch(url);
    var data = await response.json();
    console.log(data)
    var arr = data.Search;
    // title.innerHTML= data.Title;
    // img.src=data.Poster;
    // var limit = data.Plot.substring(0,60);
    // text.innerHTML=limit;
    // card.style.display="flex"
    document.querySelector(".rotate").style.display="none"
   var mapped =  arr.map((element)=>{
    return
       movieCard.innerHTML = `
                        <h2>${element.Title}</h2>
                        <p><strong>Year:</strong> ${element.Year}</p>
                        <p><strong>Director:</strong> ${element.Director}</p>
                        <p><strong>Plot:</strong> ${element.Plot}</p>
                        <img src="${data.Poster}" alt="Movie Poster" style="max-width: 200px;">
                    `
    })
  
     }
             catch (error) {
       document.querySelector(".rotate").style.display="none"
                error.innerHTML=`An error occurred: ${error.message}`;
            }
        
}


