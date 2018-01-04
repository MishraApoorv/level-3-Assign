 // main document ready function to check if dom is loaded fully or not
 $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAFLRKpsG1gDCMPyyJ6SZAtUVw4aoD2mlO5cZCQaqTpdFYgQIFp5asU7kZA6AifkaUDHZAZBYyqKAG3WBZBR8Q9lTJ1v6mgaqSEfDeHsZCXdBStdsXEN1jSxxD5lZB8xwiOBs53M93aRKyi66p9omxzkr8NOi7P8jqRgx6uvb6PsgMm16DwWrNZAzLZC13szya58wZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=email,name,birthday,picture,hometown,feed&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                   $("#Name").text(response.name);
                   $("#myId").text(response.id);
                   $("#myEmail").text(response.email);
                   $("#myLocation").text(response.hometown.name);
                   $("#born").text(response.birthday);
                   $("#myFeed").text(response.feed);
                   
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)

  });