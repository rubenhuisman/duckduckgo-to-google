function myfunc(){
    var searchText = $("input[name=q]").val();
    $(".zcm").append('<li class="zcm__item"><a id="customAddedItem" class="zcm__link  js-zci-link  js-zci-link--images  "  target="_blank" href="#">Do a Google Search</a></li>');
    $("#customAddedItem").attr("href", "https://www.google.nl/?gfe_rd=cr&ei=0xfzVf3vO4am8wemx7qICg#q=" + searchText);
}

$(document).ready(myfunc);