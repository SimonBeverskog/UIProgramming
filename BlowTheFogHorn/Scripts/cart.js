$(document).ready((function (){

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var count = 0;
    var myTable = document.getElementById('tableid');
    var toAppendName = [];
    var toAppendPrice = [];
    var n = 0;

    /* Adds the total sum from the previously stored variable in sessionstorage*/
    var totalsumvar = sessionStorage.getItem("totalsum");
    $("#totalamount").text("Totalsumma: " + totalsumvar + " kr.");
        for (var i = 0; i < cart.length; i++){
            var beer = findBeer(cart[i]);
            var beerprice = findBeerprice(cart[i]);
           //var row = myTable.insertRow(myTable.rows.length);
           //var cell1 = row.insertCell(0);
           //cell1.innerHTML = beer;
           //myTable.rows[i+1].cells[0].innerHTML = beer;
          // myTable.rows[i+1].cells[1].innerHTML = beerprice;
            toAppendName[i] = beer;
            toAppendPrice[i] = beerprice;

        }
    for (var j = 0; j < toAppendName.length; j++){
        var newRow = myTable.insertRow(myTable.rows.length);
// Insert a cell in the row at index 0
        var nameCell = newRow.insertCell(0);
        var name = document.createTextNode(toAppendName[j]);
        nameCell.appendChild(name);

// Insert a cell in the row at index 2
        var priceCell = newRow.insertCell(1);
        var price = document.createTextNode(toAppendPrice[j]);
        priceCell.appendChild(price);

    }



}));


function findBeer(beerName) {
    var info = [];
    for (var i = 0; i < DB2.spirits.length; i++){
        if(DB2.spirits[i].namn === beerName){
            info.push(DB2.spirits[i].namn);
            break;
        }

    }
    return info;

}

/* Does the same as findBeer except it pushes to price of a beer to a list, can be done better than this*/
function findBeerprice(beerName) {
    var beerprices = []
    for (var i = 0; i < DB2.spirits.length; i++){
        if(DB2.spirits[i].namn === beerName){
            beerprices.push(DB2.spirits[i].prisinklmoms);
            break;

          }
        }
    return beerprices;
}


/*
Translations
 */




