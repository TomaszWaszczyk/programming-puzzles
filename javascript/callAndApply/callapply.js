// https://scotch.io/tutorials/learning-javascript-native-functions-and-how-to-use-them

this.lightSaberColor = 'none';

var darthVader = {
    team: 'Empire',
    lightSaberColor: 'Red'
};

var printLightSaberColor = function(){
    console.log(this.lightSaberColor);

};

printLightSaberColor(); // none
printLightSaberColor.call(darthVader); // Red
printLightSaberColor.apply(darthVader); // Red