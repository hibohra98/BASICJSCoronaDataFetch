var cache = null;

$(document).ready(function(){
    $('#submit').click(function(){
        var user=$('#selectedcountry').val();
        console.log(user);
        var settings = {
            "url": "https://corona-api.com/countries",
            "method": "GET",
            "timeout": 0
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          }).then(data => {
            console.log(data.data);
            const html = data.data.map(record => {
                return `<p> Country : ${record.name}</p>` + `<p> Latest Data : ${record.latest_data.deaths}</p>`
            });
            cache = html;
            // console.log(html);
            // document
            // .querySelector("#app1")
            // .insertAdjacentHTML('afterbegin', html)
       });
   });
});



// $(document).ready(function(){
//         $('#APICALL').click(function(){
//             console.log(cache);
//             document
//             .querySelector("#app1")
//             .insertAdjacentHTML('afterbegin', cache)
//         });
// })
