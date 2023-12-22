const prompt = require("prompt-sync")();

function debut(){
    console.log(" ")
    console.log("   @@@===@@@===@@@===@@@===@@@")
    console.log("   ||                       ||")
    console.log("   ||     JEU DE CARTES     ||")
    console.log("   ||                       ||")
    console.log("   ===@@@===@@@===@@@===@@@===")
    console.log(" ")

// Demande de pseudo et choix de la carte // 
    function user(cartes){
        console.log("Bonjour, bienvenue  dans le jeu de cartes.")
        const pseudo = prompt("Veuillez choisir un pseudo : ")
        cartes = ["Eau", "Feu", "Plante"]
        let pointPourP = 0;
        let pointPourR = 0;

// Pour le déroulement du jeu avec les 3 manches//
// Boucle do while, pour reproduire le jeu selon le choix de l'utilisateur//
// Boucle for, pour reproduire la manche 3 fois//       
        do {
            for (var i=1; i<=3; i++){
                console.log(" ")
                console.log("  ========*Manche "+i+"*========");
                console.log(pseudo+", veuillez choisir une carte entre "+cartes)
                var choice = prompt(pseudo+" : ")

                function robot(){
                cartesOfRobot = ["Eau", "Feu", "Plante"]
                    let choiceOfRobot = Math.floor(Math.random() * 3)
                    let randomCarte = cartesOfRobot[choiceOfRobot]
                    console.log("Robot : "+randomCarte)
                    console.log("  ========*Résultat*========")

//Conditions pour gagner des points//
                function manche(user1, user2){
                    if ((user1 === "Eau" && user2 === "Feu") ||
                        (user1 === "Feu" && user2 === "Plante") ||
                        (user1 === "Plante" && user2 === "Eau")){
                            pointPourP++
                            console.log(" => "+pseudo+" a gagné "+pointPourP+" point")
                    }
                    else if (user1 === user2)
                        console.log(" => Egalité")
                    else {
                        pointPourR++;
                        console.log(" => Robot a gagné "+pointPourR+" point.")
                    }
                    }
                    manche(choice, randomCarte);
                }
                robot(cartes);
            }
//Condition pour gagner le jeu// 
            console.log(" ")
            console.log("*=*=*=* Résultat Final *=*=*=*")
            if (pointPourP > pointPourR){
                console.log("Victoire pour "+pseudo)
            }
            else if (pointPourP < pointPourR)
                console.log("Victoire pour Robot")
            else if (pointPourP == pointPourR){
                console.log("Egalité")
                var restart = prompt("Souhaitez vous rejouer ? ")
            }
            console.log(" ")
        } while(restart == "oui")
    }
    user()
}
debut();
