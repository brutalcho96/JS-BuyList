

LIST1.append(item);

var item2 = $('<span class="ord"'+'<span class="nameP">'+'<span class="na">'+title+'</span>'+
    '<span class="num">1</span>'+'</span>'+'</span>');
LIST2.append(item2);

$(function(){
    var count = item.find(".count");
    var kil = count.text();
    var name = item.find(".prod");

        var name2 = item.find(".na");
       console.log($(name2).text());

    $(minus).prop("disabled", true);
    $(nobuy).hide();
 $(function(){
        nobuy.hide();
    });

            $(name).focus(function(){
                    $(name).keyup(function (event) {
                               title = name.val();
                          console.log(title);
                             $(name2).text(title);
                         console.log($(name2).text());
                     });

                   });

}

$(".text1").keyup(function (event) {

    if (event.keyCode == 13) {
        $(".button").click();
    }
});

$('.button').click(function () {
    title = $('.text1').val();
    createItem(title);
    $('.text1').val("");
    $('.text1').focus();

});

createItem("PineApple");
createItem("Coconut");
createItem("Melon");