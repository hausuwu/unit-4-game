$(document).ready(function() {

    // assign random value to minerals required
    var compTarget = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log(compTarget);
    $("#compguess").text(compTarget);



// varaiables
// wins
var wins = 0;
// loses
var loses = 0;
// players score
var yeild = 0;

// functions
// generates random number for crystal images
function crystalValue (){
    var green = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    var red = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    var blue = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    var pink = Math.floor(Math.random() * (12 -1 + 1)) + 1;
    $("#green").attr("data-crystalvalue", green);
    $("#red").attr("data-crystalvalue", red);
    $("#blue").attr("data-crystalvalue", blue);
    $("#pink").attr("data-crystalvalue", pink);
    
    // console.log($("#green"));
};

// resets the minerals required
function resetComp () {
    var compTarget = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    $("#compguess").text(compTarget);
}

crystalValue();



// on click add mineral value to players score
$("img").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    yeild += crystalValue;
    console.log(yeild);







});


});
// if score meets minerals required reset all values and increment wins

// else reset all values and increment loses


