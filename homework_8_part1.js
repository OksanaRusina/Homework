
var bouquet = {
    flower1: 'red rose',
    flower2: 'white rose',
    flower3: 'sunflower',
    getInfo: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ' - ' + this[key]);
            }
        }
    }
};

bouquet.getInfo();
bouquet.flower4 = 'green grass';
bouquet.getInfo();
