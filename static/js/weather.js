// 
// const api_url =
//     "https://api.openweathermap.org/data/2.5/weather?q=London&appid=bfff8f0e6fb75a3c6bb2c0c40c56e76b&units=imperial";
// console.log(api_url)
// Defining async function
async function getapi( formCity ) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ formCity }&appid=bfff8f0e6fb75a3c6bb2c0c40c56e76b&units=imperial`);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    show(data);
}

let weatherForm = document.querySelector('#weatherForm');
weatherForm.addEventListener('submit', function(e) {
    // turn off page refresh
    e.preventDefault();

    // pull data from form
    let city = document.getElementById("city").value;
    // let state = document.getElementById("state").value;

    getapi(city );
})

// function handleTodo(event) {
//     event.preventDefault()
//     
//     getapi(`api.openweathermap.org/data/2.5/weather?q=${"addCity"},${"addCode"}&appid=bfff8f0e6fb75a3c6bb2c0c40c56e76b&units=imperial`
// `)

    // set both input values to variables. Set a variable to api string = to the tempate string of the api 
    // `https://ergast.com/api/f1/${season}/${round}/driverStandings.json` 
    // call get api function line 7. pass in string (line 23) with season and round replaced
// }
// // Calling that async function
// getapi();

// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
            <th>Name</th>
            <th>High</th>
            <th>Low</th>
            <th>Country</th>
            <th>Forecast</th>
            <th>Humidity</th>
            
         </tr>`;
    // console.log(data.)
    // Loop to access all rows 

    /* for (let i = 0; i < 7; i++) {
        let r = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
        tab += `<tr> 
            <td>${r.position} </td>
            <td>${r.Driver.givenName} ${r.Driver.familyName}</td>
            <td>${r.Driver.nationality}</td>          
            <td>${r.Constructors[0].name}</td>
            <td>${r.points}</td>
        </tr>`;
    } */

    /*  let count = 0 */
  
        console.log(data)
        /* if (count >= 7) {
            break
        } */
        tab += `<tr> 
    <td>${data.name} </td>
    <td>${data.main.temp_max}</td>          
    <td>${data.main.temp_min}</td>
    <td>${data.sys.country}</td>
    <td>${data.weather[0].main}</td>
    <td>${data.main.humidity}</td>
</tr>`;
    
    // Setting innerHTML as tab variable
    document.getElementById("weather").innerHTML = tab;
}
