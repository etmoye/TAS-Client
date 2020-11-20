var span = document.getElementsByClassName("close")[0];

showModal = function(){
    var modal = document.getElementById("loginModal");
    //document.getElementById("updateText").value = text;
    document.getElementById("enterUser").value = ' ';
    // document.getElementById("updateSubmit").setAttribute('onclick','putPost('+id+')');
    document.getElementById("updateSubmit").setAttribute('onclick','closeModal()');
    //document.getElementById("updateText").value = ' ';
    modal.style.display = "block";
    document.getElementById("updateSubmit").setAttribute('onclick','closeModal()');
    var span = document.getElementsByClassName("close")[0];
}

closeModal = function(){
    var modal = document.getElementById("loginModal");
        modal.style.display = "none";
        

}


window.onclick = function(event){
    var modal = document.getElementById("loginModal");
    if(event.target == modal){
        modal.style.display = "none";
    }
}