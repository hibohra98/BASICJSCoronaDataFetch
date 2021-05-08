var cachedata = null
// function fetchData(){

//     fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
//     .then(response => {
//          if(!response.ok){
//              throw Error('Error');
//          }
//          return response.json();
//     })
//     .then(data => {
//          console.log(data.data);
//          const html =
//          `<ul> <p>Country Name:  ${ data.data.name}</p>` + 
//          `<p>population:  ${ data.data.recovery_cases}</p>` + 
//          `<p>Lastest Data:  ${ data.data.last_update}</p>` + 
//          `<p>Currently infected:  ${ data.data.currently_infected}</p>` + 
//          `<p>Cases with outcome:  ${ data.data.cases_with_outcome}</p>` +
//          `<p>Mild condition active cases:  ${ data.data.mild_condition_active_cases}</p>` + 
//          `<p>Critical condition active cases:  ${ data.data.critical_condition_active_cases}</p>` +
//          `<p>Recovered closed cases:  ${ data.data.recovered_closed_cases}</p>` +
//          `<p>Recovered closed cases:  ${ data.data.death_closed_cases}</p>` + 
//          `<p>Closed cases recovered percentage:  ${ data.data.closed_cases_recovered_percentage}</p>` + 
//          `<p>Closed cases death percentage:  ${ data.data.closed_cases_death_percentage}</p>` +
//          `<p>Active cases mild percentage:  ${ data.data.active_cases_mild_percentage}</p>` + 
//          `<p>General Death Rate:  ${ data.data.general_death_rate}</p> </ul>`
//         cachedata=html;
        
//     })
//     .catch( error => {
//         console.log(error);
//     });
// }

// function fetchData1(){

// fetch("https://corona-api.com/countries")
//     .then(response => {
//         if(!response.ok){
//             throw Error('Error');
//         }
//         return response.json();
//    })
//    .then(data => {
        
//         cachedata = data.data;
//         var html = `<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Country List
//         <span class="caret"></span></button><ul class="dropdown-menu">`
//         var temp = data.data.map(record => {
//             return `${record.name}`
//         });
       
//         for (const property in temp) {
//             html += ` <li id="selectedcountry">${temp[property]}</li> `
//         }
          
//          html +=  ` </ul>`
//          console.log(html);
//          document
//          .querySelector("#GetCountry")
//          .insertAdjacentHTML('afterbegin', html)

//    })
//    .catch( error => {
//        console.log(error);
//    });
// }
 






// data[0]
// {
//     "coordinates": {
//         "latitude": 33,
//         "longitude": 65
//     },
//     "name": "Afghanistan",
//     "code": "AF",
//     "population": 29121286,
//     "updated_at": "2021-05-08T08:27:25.396Z",
//     "today": {
//         "deaths": 0,
//         "confirmed": 0
//     },
//     "latest_data": {
//         "deaths": 2673,
//         "confirmed": 61455,
//         "recovered": 53961,
//         "critical": 4821,
//         "calculated": {
//             "death_rate": 4.349524041981938,
//             "recovery_rate": 87.80571149621674,
//             "recovered_vs_death_ratio": null,
//             "cases_per_million_population": 1124
//         }
//     }
// },



function fetchData2(){

    fetch("https://corona-api.com/countries")
        .then(response => {
            if(!response.ok){
                throw Error('Error');
            }
            return response.json();
       })
       .then(data => {
            
            cachedata = data.data;
          
            var html = `  <select class="form-select    " style="width:100%" id="selectedcountry" aria-label="Default select example">`
            var temp = data.data.map(record => {
                return `${record.name}`
            });
           
        
        for (const property in temp) {
                    html += ` <option value="${temp[property]}">${temp[property]}</option> `
            }

              
             html +=  ` </select>`
             console.log(html);
             document
             .querySelector("#GetCountry")
             .insertAdjacentHTML('afterbegin', html)
    
       })
       .catch( error => {
           console.log(error);
       });
    }
 

$(document).ready(function(){
        $('#APICALL').click(function(){
            var CountryName=$('#selectedcountry').val();
            var objkey = -1;
            for (const property in cachedata) {
                    if(cachedata[property].name == CountryName)
                    {
                        objkey = cachedata[property];
                    }
            }
            console.log(objkey);
            
            var html = ` <ul> 
            <p>Country Name:  ${objkey.name}</p>
            <p>Total Confirmed: ${objkey.latest_data.confirmed} </p>
            <p>Recovered:  ${objkey.latest_data.recovered}</p>
            <p>Total Death:  ${objkey.latest_data.deaths}</p>
            <p>Death Rate:  ${objkey.latest_data.calculated.death_rate}</p>
            <p>Recovery Rate:  ${objkey.latest_data.calculated.recovery_rate}</p>
            <p>Confirmed Cases in last 24hrs:  ${objkey.today.confirmed}</p>
            <p>Deaths in last 24hrs:  ${objkey.today.deaths}</p>
            <p>Population Name:  ${objkey.population}</p>
            `
            console.log(html);
            document
            .querySelector("#app1")
            .insertAdjacentHTML('afterbegin', html) 
        });
})

// fetchData();
//fetchData1();
fetchData2();
