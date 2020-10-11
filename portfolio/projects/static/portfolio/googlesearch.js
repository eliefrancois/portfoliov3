$(document).ready(function(){

    $("#myform").submit(function(){

        var search = $("#books").val();

        if(search == "")  //Checks if search bar has text written in it
        {
            alert("Please enter your search"); // if empty it will alert user of this

        }

        else // else it will search something
        {
            //making variable of data wanted form api
            var url = "";
            var img = "";
            var title = "";
            var author = "";

            //sending get request to api to retrive data
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){

                for(i=0;i<response.items.length;i++)
                {
                    //get title of the book
                    title=$('<h5 class="center-align" style ="color: white;">' + response.items[i].volumeInfo.title + '</h5>'); 
                    //get author of book
                    author=$('<h5 class="center-align" style ="color: white;"> By:' + response.items[i].volumeInfo.authors + '</h5>');
                    //get image of book
                    img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning" style ="color: white;">Read More</button></a>');
                    url= response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr('src', url);
                    title.appendTo('#result');
                    author.appendTo('#result');
                    img.appendTo('#result');


                    
                }
            });
        }
        
        return false;
    });

   
});