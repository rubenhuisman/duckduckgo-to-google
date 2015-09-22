function addGoogleSearchToDom(){
    var searchText = $("input[name=q]").val();
    $(".zcm").append('<li class="zcm__item"><a id="customAddedItem" class="zcm__link  js-zci-link  js-zci-link--images  "  target="_blank" href="#">Do a Google Search</a></li>');
    $("#customAddedItem").attr("href", "https://encrypted.google.com/#q=" + searchText);
}

$(document).ready(addGoogleSearchToDom);