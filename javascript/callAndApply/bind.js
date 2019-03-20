var lukeSkywalker = {
    mother: 'Padme Amidala',
    father: 'Anakin Skywalker'
};

var getFather = function(){
    console.log(this.father);
};

getFather(); // undefined
getFather.bind(lukeSkywalker)(); // Anakin Skywalker
getFather(lukeSkywalker); // undefined