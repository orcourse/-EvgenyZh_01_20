document.getElementById("burger").onclick = function(){
    addMenu();
}

function addMenu(){
    // document.getElementById("menu").classList.toggle("menu");    
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("right_content").classList.toggle("show");      
}