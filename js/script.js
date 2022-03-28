//select panel
const panels = document.querySelectorAll(".panel");

panels.forEach(function(panel){
    panel.addEventListener("click" , function (){
        removeClassActive();
        panel.classList.add("active");
    });
});

function removeClassActive(){
    panels.forEach(function(panel){
        panel.classList.remove("active");
    })
}
