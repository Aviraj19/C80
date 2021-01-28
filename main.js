var studentarray=[];
function submit() {
for(var i=1;i<=4;i++) {
    var Name=document.getElementById("Name"+i).value;
    studentarray.push(Name);
}
console.log(studentarray);
var displayarray=[];
for(var x=0;x<studentarray.length;x++) {
displayarray.push("<h2>name-"+studentarray[x]+"</h2>");
}
console.log(displayarray);
document.getElementById("displayname").innerHTML=displayarray;
var newarray=displayarray.join(" ");
document.getElementById("DisplayJoin").innerHTML=newarray;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    studentarray.sort();
    console.log(studentarray);
    var sortarray=[];
    for(var j=0;j<studentarray.length;j++) {
        sortarray.push("<h2>Sortname-"+studentarray[j]+"</h2>");
    }
    console.log(sortarray);
document.getElementById("displayname").innerHTML=sortarray;
}