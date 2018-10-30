var choixutilisateur=0;
var win=0+1;


document.getElementById("paper").addEventListener("click", function() {
    choixutilisateur = 1;
    var choixordi = (Math.random() * 3) + 1;

    choixordi = Math.floor(choixordi);
    if (choixordi == 1) {
        alert("égalité l'ordi fait paper");
    }
    if (choixordi == 2) {
        alert("gg il a fait pierre");
    }
    if (choixordi == 3) {
        alert("perdu il fait cissors");

    }
});
document.getElementById("rock").addEventListener("click", function() {
    choixutilisateur = 1;
    var choixordi = (Math.random() * 3) + 1;

    choixordi = Math.floor(choixordi);
    if (choixordi == 1) {

        alert("égalité il fait rock");
    }
    if (choixordi == 2) {
        alert("gg il fait cissors");
        function win() {

        }
    }
    if (choixordi == 3) {
        alert("perdu il fait paper");

    }
});
document.getElementById("cissors").addEventListener("click", function() {
    choixutilisateur = 1;
    var choixordi = (Math.random() * 3) + 1;

    choixordi = Math.floor(choixordi);
    if (choixordi == 1) {

        alert("gg il fait paper");
        function win(){}
    }
    if (choixordi == 2) {
        alert("égalité il fait cissors");
    }
    if (choixordi == 3) {
        alert("perdu il fait rock");

    }
});
function win() {
    gagne++;
    document.getElementById(win).innerHTML="nombre de victoire"+win++

}




