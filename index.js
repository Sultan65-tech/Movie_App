var user = document.getElementById("movie-title")
async function Fetch(){
    var mod = user.value;
     const url = `http://www.omdbapi.com/?i=tt3896198&apikey=224f83de&t=${encodeURIComponent(mod)}`;
       const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Fetching data...";
     try{
    var request = await fetch(url);
    var data = await response.json();
    console.log(data);
     
//                 if (data.Response === "True") {
//                     // Display the movie information
//                     resultDiv.innerHTML = `
//                         <h2>${data.Title}</h2>
//                         <p><strong>Year:</strong> ${data.Year}</p>
//                         <p><strong>Director:</strong> ${data.Director}</p>
//                         <p><strong>Plot:</strong> ${data.Plot}</p>
//                         <img src="${data.Poster}" alt="Movie Poster" style="max-width: 200px;">
//                     `;
//                 }
//  else {
//                     resultDiv.innerHTML = `<p>Error: ${data.Error}</p>`;
//                 }
//             }
     }
             catch (error) {
                // Handle network errors
                resultDiv.innerHTML = `<p>An error occurred: ${error.message}</p>`;
            }
        
}
// document.querySelector("button").addEventListener("click",()=>{
//     Fetch();
// })