$(document).ready(function(){

   
        var search = ("php&hl=&source=gbs_api");

        
        
            //making variable of data wanted form api
            var url = "";
            var img = "";
            var title = "";
            var author = "";
            var desc = "";
            var publisher = "";
            var published = "";
           

            //sending get request to api to retrive data
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){
                console.log(response)

                for(i=0;i<1;i++)
                {
                    //get title of the book
                    title=$('<h1 class="center-align" style ="color: white;">' + response.items[i].volumeInfo.title + '</h5>'); 
                    //get author of book
                    author=$('<h2 class="center-align" style ="color: white;"> By:' + response.items[i].volumeInfo.authors + '</h5>');
                    //get image of book
                    img = $('<img ><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning " >Read More</button></a>');
                    desc = $('<h5 class= "left-align" style = "color: white;">' + response.items[i].volumeInfo.description + '</p>')
                    publisher = $('<p class= "left-align" style = "color: white;"> Publisher: ' + response.items[i].volumeInfo.publisher + '</p>')
                    published = $('<p class= "left-align" style = "color: white;"> Publish Date: ' + response.items[i].volumeInfo.publishedDate + '</p>')
                   
                    url= response.items[i].volumeInfo.imageLinks.smallThumbnail;
                    img.attr('src', url);
                    title.appendTo('#result');
                    author.appendTo('#result');
                    img.appendTo('#result');
                    desc.appendTo('#result');
                    publisher.appendTo('#result');
                    published.apppendTo('#result');
                    count.appendTo('#result');
                    isbn.appendTo('#result');
                }
            });


        
        
        
  

 
});