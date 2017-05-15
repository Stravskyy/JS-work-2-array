var arrQuestion = [];

do {
    var prop = {
        propName: prompt("Enter proprety name"),
        propValue: prompt("Enter proprety value")
    };
    arrQuestion.push(prop);
    var question = confirm("Continue?");

} while (question!= false);

var index, len;

for (index = 0, len = arrQuestion.length; index < len; index++) {
        console.log(arrQuestion[index]["propName"]+ "=" + arrQuestion[index]["propValue"]);
}