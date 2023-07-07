var state = "";
function tst(){
for (let i=0;i<Number(document.getElementById("text").value);i++) {
state += "❤";
};
document.getElementById("a").textContent=state;
}
