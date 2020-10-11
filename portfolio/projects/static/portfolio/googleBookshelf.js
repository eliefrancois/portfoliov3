$(document).ready(function(){
    
    var url = "";
    var img = "";
    var title = "";
    var author = "";
    var desc = "";
    var publisher = "";
    var published = "";
    var count = "";
    var isbn = "";
    var rating = "";
    var country = "";
           

    $.get("https://www.googleapis.com/books/v1/users/114404930672159889410/bookshelves/1001/volumes" ,function(response){
        console.log(response);

        for(i=0;i<response.items.length;i++)
                {
                    //get title of the book
                    title=$('<h1 class="center-align" style ="color: white;">' + response.items[i].volumeInfo.title + '</h5>'); 
                    //get author of book
                    author=$('<h2 class="center-align" style ="color: white;"> By:' + response.items[i].volumeInfo.authors + '</h5>');
                    //get image of book
                    img = $('<img ><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning " style = "color: white;" >Read More</button></a>');
                    desc = $('<h5 class= "left-align" style = "color: white;">' + response.items[i].volumeInfo.description + '</p>')
                    publisher = $('<p class= "left-align" style = "color: white;"> Publisher: ' + response.items[i].volumeInfo.publisher + '</p>')
                    published = $('<p class= "left-align" style = "color: white;"> Publish Date: ' + response.items[i].volumeInfo.publishedDate + '</p>')
                    count = $('<p class "left-align" style = "color: white;"> Page Count: ' + response.items[i].volumeInfo.pageCount + '</p>')
                    isbn = $('<p class "left-align" style = "color: white;"> ISBN: ' + response.items[i].volumeInfo.industryIdentifiers[0].identifier + ',' + response.items[i].volumeInfo.industryIdentifiers[1].identifier + '</p>')
                    rating = $('<p class "left-align" style = "color: white;"> Rating: ' + response.items[i].volumeInfo.averageRating + '</p>')
                    country = $('<p class "left-align" style = "color: white;"> Country: ' + response.items[i].accessInfo.country + '</p>')

                    url= response.items[i].volumeInfo.imageLinks.smallThumbnail;
                    img.attr('src', url);
                    title.appendTo('#result');
                    author.appendTo('#result');
                    img.appendTo('#result');
                    desc.appendTo('#result');
                    publisher.appendTo('#result');
                    published.appendTo('#result');
                    count.appendTo('#result');
                    isbn.appendTo('#result');
                    rating.appendTo('#result');
                    country.appendTo('#result');
                }
    });


});