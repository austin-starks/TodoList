// Strikethrough lis when we click on it
$("ul").on("click", "li", function () {
    $(this).toggleClass("strikethrough");
})

// Click on trashcan to delete todo
$("ul").on("click", ".deleteButton", function (event) {
    // Stop the item from becoming greyed out strikethroughed
    event.stopPropagation();
    // var result = confirm("Are you sure you want to delete this TODO?");
    // turning off the popup confirmation
    if (true) {
        $(this).parent().fadeOut(300, function () {
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
        $("ul").prepend("<li><span class = 'deleteButton'><i class='fas fa-trash-alt'></i></span>" + newTodo + "</li>")
    };
})

$("#pencil").click(function () {
    $("input[type='text']").fadeToggle(200);
})