function initNodes(){
    var uls = document.getElementsByTagName("ul");
    var i;
    for(i = 0; i < uls.length; i++)
        if(uls[i].id != "root")
            uls[i].style.display = "none";
}

function clickNode(el){
    var uls = el.childNodes[1];
    alert(uls);
    //var uls = uls.first();
    //var node = document.getElementById(id);
    if(uls.style.display == "none")
        uls.style.display = "block";
    else
        uls.style.display = "none";
    return false;
}

function test(){
    alert("3333333");
}


