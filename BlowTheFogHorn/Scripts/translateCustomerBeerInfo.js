
/*
Scripts for translations
*/

function translateCustomerBeerInfoTo(language) {
    var translation = Translation(language);

    $("#origin").text(translation[0]);
    $("#provider").text(translation[1]);
    $("#nr").text(translation[2]);
    $("#classOfGoods").text(translation[3]);
    $("#alcoholPercentage").text(translation[4]);
    $("#packaging").text(translation[5]);
    $(".payButton").text(translation[6]);
    console.log(translation[7]);
    $("#vipBtn").text(translation[7]);
    $("#cartBtn").text(translation[8]);

}

/*
Fetches translations from translations.js
 */
function Translation(language){
    var translations = [];

    for(i=0;i<language.customerBeerInfo.length;i++){
        translations.push(language.customerBeerInfo[i].origin);
        translations.push(language.customerBeerInfo[i].provider);
        translations.push(language.customerBeerInfo[i].nr);
        translations.push(language.customerBeerInfo[i].classOfGoods);
        translations.push(language.customerBeerInfo[i].alcoholPercentage);
        translations.push(language.customerBeerInfo[i].packaging);
        translations.push(language.customerBeerInfo[i].payButton);

    }

    /* Master Page */
    for(j=0;j<language.masterPage.length;j++){
        translations.push(language.masterPage[j].vipBtn);

        translations.push(language.masterPage[j].cartBtn);

    }
    return translations;
}



