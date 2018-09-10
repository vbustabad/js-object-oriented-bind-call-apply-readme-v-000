// use this to copy code snippets or us your browser's console

class User {
    constructor(name, favoriteBand) {
        this.name = name;
        this.favoriteBand = favoriteBand;
    }
    favoriteBandMatches(bands) {
        console.log('in User scope: ', this.favoriteBand);
        return bands.filter(
            function(band) {
                console.log('in the anonymous function scope: ', this.favoriteBand);
                return band == this.favoriteBand;
            }.bind(this)
        )[0];
    }
}
 
let billy = new User('billy', 'paul simon');
billy.favoriteBandMatches(['paul simon', 'the kooks']);