const expInput = document.querySelector("#info input.exp");
const submitButton = document.querySelector("button");
const progress= document.querySelector("progress");
const showlevel= document.querySelector("#level");
const img = document.querySelector("img");
var level;
let cnt=0;

function onSubmitBtnClick(){

    var chk_obj = document.getElementsByName("checkbox");
    var chk_leng = chk_obj.length;
    for (var i=0; i < chk_leng; i++) {
        if (chk_obj[i].checked == true) { 
            cnt+=Number(chk_obj[i].value);
        }
    }
    let exp = cnt;
    
    if (exp<=10) {
        level=1;
        progress.max=10;
    }
    else if (exp>10 && exp<=20) {
        level=2;
        exp-=10;
        progress.max=10;
    }
    else {
        level=3;
        exp-=20;
        progress.max=20;
    }

    if (level==1){
        img.src="img/one.jpg";
    }
    else if (level==2){
        img.src="img/two.jpg";
    }
    else{
        img.src="img/three.jpg";
    }
    progress.value=exp;
    showlevel.value=level;
    showlevel.innerText='Lv.'+level;
    
}


submitButton.addEventListener("click", onSubmitBtnClick);