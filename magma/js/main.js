/* 🤍text ani🤍 */
let pTag1 = document.querySelector('.mg-featured-reel-wrap .items');
let count1 = 0;

//새로운 요소를 생성하고 내용복사 !
let newItems=pTag1.cloneNode(true)
//cloneNode-> 객체를 복사하겠다(true)라는 뜻

//복사한 내용을 다음 태그로 삽입
let nextElement=document.querySelector('.mg-featured-reel-wrap')
nextElement.appendChild(newItems)
//appendChild(newItems): (newItems)를 자식으로 추가하라 -> items가 복사되어있을거임8
nextElement.style.width=pTag1.offsetWidth * 2+'px';


function marqueeeText(count,element,direction){
    //scrollWidth-> 어떤이유로 숨어있는 공간이 있더라도 원래의 넓이를 찾아서 가져와라
    if(count>element.scrollWidth/2){
        element.style.transform='translate3d(0,0,0)'
        //부드러운 애니메이션에 도움을 주는 것 -> translate3d(0,0,0)
        count=0;
    }
    element.style.transform=`translate3d(${count * direction}px,0,0)`
    return count;
}

function animate(){
    count1++
    count1=marqueeeText(count1,nextElement,1)
    requestAnimationFrame(animate)
    //계속 호출되게함
}

animate();