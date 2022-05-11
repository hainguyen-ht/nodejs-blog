module.exports = {
    arrayObjectConvert: function(arr) {
        return arr.map(e => e.toObject());
    },
    singleArrayConvert: function(arr){
        return arr.toObject();
    }
}