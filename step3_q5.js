/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/

const arrowbutton = document.querySelectorAll("i");
const listbutton = document.querySelectorAll("li");
const image = document.querySelectorAll("img");
let num = 0;

//alert(listbutton.length);
/*
image[0].style.display ='none';   
image[0].style.display ='';   
image[0].style.display ='none';   
*/

/*
for(i=0; i<5; i++){
  listbutton[i].addEventListener("click", function () {
    for(j=0; j<5; j++){
      if(j === i){
      image[j].style.display = '';
    }
    else{
      image[j].style.display ='none';
    }
    }
  });
}
*/

listbutton[0].addEventListener("click", function () {
  num = 0;
  for (j = 0; j < 5; j++) {
    if (j === 0) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});

listbutton[1].addEventListener("click", function () {
  num = 1;
  for (j = 0; j < 5; j++) {
    if (j === 1) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});

listbutton[2].addEventListener("click", function () {
  num = 2;
  for (j = 0; j < 5; j++) {
    if (j === 2) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});

listbutton[3].addEventListener("click", function () {
  num = 3;
  for (j = 0; j < 5; j++) {
    if (j === 3) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});

listbutton[4].addEventListener("click", function () {
  num = 4;
  for (j = 0; j < 5; j++) {
    if (j === 4) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});

arrowbutton[0].addEventListener("click", function () {
  num--;
  if (num === -1) {
    num = 4;
  }
  for (j = 0; j < 5; j++) {
    if (j === num) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});

arrowbutton[1].addEventListener("click", function () {
  num++;
  if (num === 5) {
    num = 0;
  }
  for (j = 0; j < 5; j++) {
    if (j === num) {
      image[j].style.display = "";
    } else {
      image[j].style.display = "none";
    }
  }
});
