/**
 * Created by 1 on 20.01.2016.
 */
//You	should	wrap	all	your	jQuery	code
$(function () {

    //new items will be added to mainForm
    var LIST = $(".mainForm");
    var LIST2 = $(".secondForm");

    //classes templates contain good's template
    var TEMPLATE_ONE = $(".template").html();
    var TEMPLATE_TWO = $(".templxnwnxn").html();


    $('#buttontoadd').click(function () {
        //var that remembers name of a good read from the input form
        var title = $("#toinputnameofproduct").val();
        $("#toinputnameofproduct").val("");
        if (title == "")
            return;
        create(title);
    });

    function create(title) {

        var node = $(TEMPLATE_ONE);
        var node2 = $(TEMPLATE_TWO);

        node.find(".name46").val(title); //Set product title


        node.find(".name46").keyup(function () {
            var x = node.find(".name46").val();
            node2.find(".name").text(x);
        });

        //Delete Action
        node.find(".hrestyk").click(function () {
            node.remove();
            node2.remove();
        });

        var number = 1;

        //change the quantity of the specific good in a list
        node.find(".plus").click(function () {
            var num = $(this).parent().find(".quantity").text();
            num = parseInt(num);
            $(this).parent().find(".quantity").text(++num);
            if (num > 1) {
                $(this).parent().find(".minus").css("background-color", "#db2828");
            }
            node2.find(".buttonofquantity").text(num);
        });

        node.find(".minus").click(function () {
            var num = $(this).parent().find(".quantity").text();
            num = parseInt(num);
            if (num > 1) {
                $(this).parent().find(".quantity").text(--num);
            }
            if (num == 1) {
                $(this).css("background-color", "#ff9e82");
            }
            node2.find(".buttonofquantity").text(num);
        });

        node.find('.notBaught').hide();

        node.find(".baught").click(function () {
            $(this).parent().find(".quantity").css("margin-right", "275px");
            $(this).parent().find(".name46").css("text-decoration", "line-through");
            $(this).parent().find(".hrestyk").hide();
            $(this).parent().find(".plus").hide();
            $(this).parent().find(".minus").hide();
            $(this).hide();
            $(this).parent().find(".notBaught").show();
            node2.remove();
            node2.find(".name").css("text-decoration", "line-through");
            node2.find(".buttonofquantity").css("text-decoration", "line-through");
            LIST2.find("#Form345").append(node2);
            $(this).parent().find(".name46").prop("disabled", true);
        });

        node.find('.notBaught').click(function () {
            $(this).parent().find(".quantity").css("margin-right", "5px");
            $(this).parent().find(".name46").css("text-decoration", "none");
            $(this).parent().find(".hrestyk").show();
            $(this).parent().find(".plus").show();
            $(this).parent().find(".minus").show();
            $(this).hide();
            $(this).parent().find(".baught").show();
            node2.remove();
            node2.find(".name").css("text-decoration", "none");
            node2.find(".buttonofquantity").css("text-decoration", "none");
            LIST2.find("#Form123").append(node2);
            $(this).parent().find(".name46").prop("disabled", false);
        });

        $('#toinputnameofproduct').focus();

        LIST.append(node);

        node2.find(".name").text(title);
        node2.find(".buttonofquantity").text(number);
        LIST2.find("#Form123").append(node2);

    }

    create("Булочка");
    create("Шоколадка");
    create("Сік");

});
