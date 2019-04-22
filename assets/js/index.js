window.onload = function(){
    var x = window.matchMedia("(max-width: 768px)");
    if (x.matches){
        document.getElementById("projects-table").className = "table table-sm table-dark";
    }
    else{
        document.getElementById("projects-table").className = "table table-dark";
    }
}