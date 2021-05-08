function fetchData(){

    fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
    .then(response => {
         if(!response.ok){
             throw Error('Error');
         }
         return response.json();
    })
    .then(data => {
         console.log(data.data);
         const html =
         `<ul> <p>Total_cases:  ${ data.data.total_cases}</p>` + 
         `<p>Recovery_cases:  ${ data.data.recovery_cases}</p>` + 
         `<p>Last_update:  ${ data.data.last_update}</p>` + 
         `<p>Currently infected:  ${ data.data.currently_infected}</p>` + 
         `<p>Cases with outcome:  ${ data.data.cases_with_outcome}</p>` +
         `<p>Mild condition active cases:  ${ data.data.mild_condition_active_cases}</p>` + 
         `<p>Critical condition active cases:  ${ data.data.critical_condition_active_cases}</p>` +
         `<p>Recovered closed cases:  ${ data.data.recovered_closed_cases}</p>` +
         `<p>Recovered closed cases:  ${ data.data.death_closed_cases}</p>` + 
         `<p>Closed cases recovered percentage:  ${ data.data.closed_cases_recovered_percentage}</p>` + 
         `<p>Closed cases death percentage:  ${ data.data.closed_cases_death_percentage}</p>` +
         `<p>Active cases mild percentage:  ${ data.data.active_cases_mild_percentage}</p>` + 
         `<p>General Death Rate:  ${ data.data.general_death_rate}</p> </ul>`

         console.log(html);
         document
         .querySelector("#app")
         .insertAdjacentHTML('afterbegin', html)
    })
    .catch( error => {
        console.log(error);
    });
}

fetchData();
