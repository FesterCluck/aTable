$(document).ready(function () {
    var table = new ATable({
        fetchData : "fetchData",
        columns : [
            {name : "Column 1"},
            {name : "Column 2"},
            {name : "Column 3"},
            {name : "Column 4"}
        ],
        el : "#content",
        height : 600,
        rowsToRender : 40
    });
    table.render();
});