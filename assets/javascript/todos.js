// Strikethrough lis when we click on it
$("li").on("click", function () {
    $(this).toggleClass("strikethrough");
})

// CLick on X to delete todo
$(".deleteButton").on("click", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });
})