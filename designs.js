// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$("input:submit").on("click",
    function(evt){
        evt.preventDefault();
        makeGrid();
    });


function makeGrid() {
    //console.log(jQuery.type($("#input_height").val()));
    const rowSize = parseInt($("#input_height").val());
    const columnSize = parseInt($("#input_width").val())
    $("#pixel_canvas").empty();
    let row, column;
    for (row = 0; row < rowSize; row++){
        $("#pixel_canvas").append("<tr id=row"+row+"></tr>");
        for (column = 0; column< columnSize; column++){
            var cellNum = row*columnSize + column;
            $("#row"+row).append("<td id= cell"+ cellNum+"></td>");
        }
    }
    console.log($("#colorPicker").val());
    $("td").click(function (evt){
        console.log(evt.target.id);
        $(evt.target).css("background-color", $("#colorPicker").val());
    })
};
