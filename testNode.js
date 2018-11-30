var array = [];

function sortArr(){
  var sortarray = array.slice().sort(function(a,b){return a-b});
  return sortarray;
}

module.exports = {
  storeArray: function(num) {
    array.push(num);
  },

  ascendArray: function() {
    var sort = sortArr();
    return sort;
  }
}

