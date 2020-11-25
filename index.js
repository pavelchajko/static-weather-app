
var x = document.getElementById("demo");
var output='';
var sum_upldate='';
$( document ).ready(function(){
// if (window.location.protocol != "https:") {
//    window.location.protocol = "https:";
//    window.location.reload();
// }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
     
var xx='';
var xxx='48.8458974';
var yyy='2.2617191';
       function showPosition(position) {
					xxx=position.coords.latitude;
          yyy=position.coords.longitude;
          xx=position.coords.latitude+','+position.coords.longitude;
        //get exact city from long and lat  
        var myurl1 = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+xx+'&key=AIzaSyCGOeGdtWRlahV9Mabxn0H0Zb7ZGiFia08';
            $.ajax({
            dataType: "json",
            url: myurl1 ,
            }).done(function ( info ) {
        // do my stuff

        //get the temperature
          
          var outp=info.results[0].address_components[2].long_name; 
          var update = document.getElementById('city');
          update.innerHTML = outp;
          });
          
          
       //get the temperature and summary
         
                    var myurl = 'https://api.darksky.net/forecast/77de2b5288f69e61fb2f922a7dc0b075/'+position.coords.latitude+','+position.coords.longitude+'';
                    $.ajax({
                      dataType: "jsonp",
                      url: myurl ,
                      }).done(function ( info ) {
                            // do my stuff
                             output=info.currently.temperature;
                             var sum_output=info.currently.icon;
                             var test=sum_output;
                          var update = document.getElementById('meteo');
                          update.innerHTML = Math.round((output-32)*5/9);
                          sum_update= document.getElementById('summary');
                          sum_update.innerHTML=sum_output;
                          
                          
                          var hourlyUpdate=document.getElementById('hourly');
                          hourlyUpdate.innerHTML="Forecast: "+info.hourly.summary;
                          
                        
                           addIcon(test);
                           
                          
                      
                           function changeIconClass(test){
                            $('.hide').addClass('wi-'+test).removeClass('hide');
                          }
                          
                          function addIcon(test){
                            switch(test){
                                case('cloudy'):
                                changeIconClass(test);
                                break;
                                
                                case('cloudy-windy'):
                                changeIconClass(test);
                                break;
                                
                                 case('fog'):
                                changeIconClass(test);
                                break;
                                
                                 case('rain'):
                                changeIconClass(test);
                                break;
                                
                                 case('rain-mix'):
                                changeIconClass(test);
                                break;
                                
                                 case('snow'):
                                changeIconClass(test);
                                break;
                                
                                 case('thunderstorm'):
                                changeIconClass(test);
                                break;
                                
                                case('snow-wind'):
                                changeIconClass(test);
                                break;
                                
                                case('raindrops'):
                                changeIconClass(test);
                                break;
                                
                                case('night-clear'):
                                changeIconClass(test);
                                break;
                                
                                case('day-sunny'):
                                changeIconClass(test);
                                break;
                                
                                case('day-cloudy'):
                                changeIconClass(test);
                                break;
                                
                                case('day-ligh-wind'):
                                changeIconClass(test);
                                break;
                                
                                case('day-rain'):
                                changeIconClass(test);
                                break;
                                
                                case('day-cloudy'):
                                changeIconClass(test);
                                break;
                                
                               
                                default:
                                changeIconClass('cloudy')
                             }
                          }
                         
                         
                        
                             
                       $('#pushme').click(function() {
                                  if ($(this).hasClass("wi-celsius")) {
                                      $('.wi-celsius').addClass('wi-fahrenheit').removeClass('wi-celsius');
                                     
                                       update.innerHTML = Math.round(output);
                                  }
                                  else {
                                     
                                      $('.wi-fahrenheit').addClass('wi-celsius').removeClass('wi-fahrenheit');
                                      update.innerHTML=Math.round((output-32)*5/9);
                                    
                                  }
                              }); //push me function
                      
                      
                      
                        }); //function (info)
       
        } //function show position

   

    




});//document ready










 
 









