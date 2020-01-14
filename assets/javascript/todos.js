// Strikethrough lis when we click on it
$("ul").on("click", "li", function () {
    $(this).toggleClass("strikethrough");
})

// Click on X to delete todo
$("ul").on("click", ".deleteButton", function (event) {
    // Stop the item from becoming greyed out strikethroughed
    event.stopPropagation();
    var result = confirm("Are you sure you want to delete this TODO?");
    if (result) {
        $(this).parent().fadeOut(200, function () {
            $(this).remove();
        });
    }
})

// Rearrange lis when you click and drag it
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

// Add additional todos to the list
$("input[type = 'text']").on("keypress", function (event) {
    if (event.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class = 'deleteButton'>X </span>" + newTodo + "</li>")
    };
})