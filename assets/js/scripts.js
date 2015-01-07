// function GetURLParameter(sParam) {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++){
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam){
//             return sParameterName[1];
//         }
//     }
// }

// $( document ).ready(function() {
//     var username = GetURLParameter("username");

//     $.ajax({
//         // data: parametros,
//         url: 'http://private-dc9c1-hackpublicprofile.apiary-mock.com/skilltree',
//         type: 'get',
//         success:  function (response) {
//             // console.log(response[0].user_skilltree);
//             $(".talent_tree").attr("id",response[0].user_skilltree);
//         }
//     });

//     // console.log(username);


// });