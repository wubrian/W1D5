var array = [];

function sortArr(){
  var sortarray = array.sort(function(a,b){return b-a});
  return sortarray;
}



module.exports = {
  storeArray: function(num) {
    array.push(num);
  },
  ascendArray: function() {
    var sort = sortArr();
    // return sort;
    console.log(sort);
  }
}

