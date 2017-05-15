var arrCarsList = [];

do {
    var car = {
        firmName: prompt("Enter firm name"),
        modelName: prompt("Enter model name"),
        engineDisplacement: parseFloat(prompt("Enter engine displacement"))
    };

    arrCarsList.push(car);

} while (arrCarsList.length < 5);

var index, len;

for (index = 0, len = arrCarsList.length; index < len; index++) {

    if (arrCarsList[index]["engineDisplacement"] > 2.0) {
        console.log(arrCarsList[index]);
    }
}