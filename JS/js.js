const content = document.querySelector('#content');
const inputTxt = document.querySelector('#inputTxt');
const btn = document.querySelector('#saveBtn');
const tElement = document.querySelector('#t');
const imgURL = document.querySelector('#imgURL');
const addImg = document.querySelector('#addImg')
const slideshow = document.querySelector('#slideshow')
const json_content1 = document.querySelector('#json_content1')
const json_content2 = document.querySelector('#json_content2')
const json_content3 = document.querySelector('#json_content3')


//______________________________________________________________________


function runSlideShow() {
    let intervalId = setInterval(function () {
        let slideshowImg = document.querySelectorAll('#slideshow img')
        let lastImg = slideshowImg[slideshowImg.length - 1];
        
        fadeOut(lastImg);

    }, 5000)
    return intervalId
}
runSlideShow();

function fadeOut(image) {
    let opacity = 1;
    let fadeOutId = setInterval(function () {
        image.style.opacity = opacity;
        if (opacity > 0) {
            opacity -= 0.01
        } else {
            clearInterval(fadeOutId);
            opacity = 1;
            image.style.opacity = 1;
            moveImg(image)
        }
    }, 1000 / 60);
}
function moveImg(image) {
    image.remove();
    slideshow.prepend(image);
}
//_______________________________________________________________________

//del 2

let items = document.createElement('h2');
let text = document.createTextNode('');
items.append(text);
content.appendChild(items);

//_____________________________________________________________

btn.addEventListener('click', function () {
    text = inputTxt.value;
    let tag = tElement.value;
    content.appendChild(creatEle(tag, text))

})
//______________________________________________________________


function creatEle(typeOfElement, discreptionOfElement) {
    let ele = document.createElement(typeOfElement);
    let textNode = document.createTextNode(discreptionOfElement)
    ele.append(textNode);
    return ele;
}

content.addEventListener('dblclick', function deleteEle(event) {
    console.log(event);
    event.target.remove();
})


//______________________________________________________________________

 
let newUrl = "http://172.104.246.137:8083/";

fetch(newUrl).then(res => res.json())
.then(object => {
    for ( i = 0 ; i < object.length; i++ ) {
      
            // 1
            let figure1 = document.createElement('figure');
            let figImg = document.createElement('img');
            figImg.src = object[i].url;
            let figcaption = document.createElement('figcaption');
            figcaption = object[i].filename;
            figure1.append(figImg);
            figure1.append(figcaption);

             document.getElementById(`json_content${i+1}`).appendChild(figure1)
           
          
        
             
        
    }
});


/* fetch(newUrl).then(res => res.json())
.then(data => {
    data.forEach(obj => {
      //  console.log(data[0].filename);
            let ig = document.createElement('img')
            
           // console.log(ig.src = obj.url);
            json_content4.append(ig)



    });
})


fetch(newUrl).then(res => res.json())
.then(object => {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            // 1
            let figure1 = document.createElement('figure');
            let figImg = document.createElement('img');
            figImg.src = object[0].url;
            let figcaption = document.createElement('figcaption');
            figcaption = object[0].filename;
            figure1.append(figImg);
            figure1.append(figcaption);

            // 2
            let figure2 = document.createElement('figure');
            let figImg2 = document.createElement('img');
            figImg2.src = object[1].url;
            let figcaption2 = document.createElement('figcaption');
            figcaption2 = object[1].filename;
            figure2.append(figImg2);
            figure2.append(figcaption2);

            // 3
            let figure3 = document.createElement('figure');
            let figImg3 = document.createElement('img');

            figImg3.src = object[2].url;
          
            console.log(figImg3.src = object[2].url);
            let figcaption3 = document.createElement('figcaption');
            figcaption3 = object[2].filename;
            figure3.append(figImg3);
            figure3.append(figcaption3);


           
            json_content1.appendChild(figure1); 
            json_content2.appendChild(figure2); 
            json_content3.appendChild(figure3); 
            
        }
    }
});









/* 
let roleDice = new Promise((resolve)=>{
    let randomNumber = Math.floor(Math.random() *6+1)

    let tärning = setInterval(() => {

     randomNumber = Math.floor(Math.random() * 6 + 1)
     rol.innerHTML = 'tärning visar : ' + randomNumber
        resolve(randomNumber)
    }, 200);

    setTimeout(() => {
        clearInterval(tärning)
    }, 3000);
});
roleDice.then((data)=>console.log('tärning visar :' + data));
 */