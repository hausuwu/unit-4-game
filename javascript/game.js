$(document).ready(function() {

    
// assign random value to minerals required
var compTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(compTarget);
$("#compguess").text(compTarget);



// varaiables
// wins
var wins = 0;
// loses
var loses = 0;
// players score
var yeild = 0;
// values for the crystal
var green;
var red;
var blue;
var pink;

// functions
// generates random number for crystal images and it attributes the number to a custom data id 
function displayCrystal (){
    green = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    red = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    blue = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    pink = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    $("#green").attr("data-crystalvalue", green);
    $("#red").attr("data-crystalvalue", red);
    $("#blue").attr("data-crystalvalue", blue);
    $("#pink").attr("data-crystalvalue", pink);
    
};

// resets the random minerals required
function resetComp () {
    compTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#compguess").text(compTarget);
}

// generate random crystal values by calling the function
displayCrystal();



// on click add mineral value to players score
$("img").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    yeild += crystalValue;
    // console.log(yeild);
    $("#playerscore").html(yeild);

    if(yeild === compTarget) {
     
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#playerscore").empty();
        yeild = 0;        
        resetComp();
        displayCrystal();
        console.log("wins= " + wins);

    }
    
    else if(yeild >= compTarget) {
        
        loses++;
        $("#loses").text("Loses: " + loses);
        $("#playerscore").empty();
        yeild = 0;        
        resetComp();
        displayCrystal();
        console.log("losses= " + loses);

    }

});


});
// if score meets minerals required reset all values and increment wins

// else reset all values and increment loses


