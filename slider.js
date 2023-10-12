const images = [
  "img/woman-1274056_1280.jpg",
  "img/woman-2120196_1280.jpg",
  "img/woman-3219507_1280.jpg",
  "img/woman-5667299_1280.jpg",
];

const mySlider = document.querySelector('.slide-show');

const myImage = document.createElement('img');
myImage.setAttribute('src', `${images[0]}`)
myImage.setAttribute('id', 'sliding-image')



mySlider.appendChild(myImage); 


let index = 0;

// radio buttons for changing the image when clicked 

const radioBtn0 = document.getElementById("radio0");
radioBtn0.addEventListener("click", () => {
  myImage.setAttribute("src", `${images[0]}`);
  index = 0;
});

const radioBtn1 = document.getElementById("radio1");
radioBtn1.addEventListener("click", () => {
  myImage.setAttribute("src", `${images[1]}`);
  index = 1;
});

const radioBtn2 = document.getElementById("radio2");
radioBtn2.addEventListener("click", () => {
  myImage.setAttribute("src", `${images[2]}`);
  index = 2;
});

const radioBtn3 = document.getElementById("radio3");
radioBtn3.addEventListener("click", () => {
  myImage.setAttribute("src", `${images[3]}`);
  index = 3;
});

// left and right buttons for changing the image according to the images array index

const leftBtn = document.getElementById('left-button');

leftBtn.addEventListener('click', () => {

    if (index <= 0) {
        index = 4;
        myImage.setAttribute("src", `${images[index - 1]}`);
        const radioBtn = document.querySelector(`#radio${index - 1}`);
        radioBtn.checked = true;
        index--;
        
    } else {
        myImage.setAttribute("src", `${images[index - 1]}`);
        const radioBtn = document.querySelector(`#radio${index - 1}`);
        radioBtn.checked = true;
        index--;
    };

})

const rightBtn = document.getElementById('right-button');

rightBtn.addEventListener('click', () => { 
    if (index >= 3) {
        index = -1;
        myImage.setAttribute("src", `${images[index + 1]}`);
        const radioBtn = document.querySelector(`#radio${index + 1}`);
        radioBtn.checked = true;
        index++;
        
    } else {
        myImage.setAttribute("src", `${images[index + 1]}`);
        const radioBtn = document.querySelector(`#radio${index + 1}`);
        radioBtn.checked = true;
        index++;
        
    }

  
})

// timer for slide show

const myTimer = () => {
  if (index >= 3) {
    index = -1;
    myImage.setAttribute("src", `${images[index + 1]}`);
    const radioBtn = document.querySelector(`#radio${index + 1}`);
    radioBtn.checked = true;
    index++;
  } else {
    myImage.setAttribute("src", `${images[index + 1]}`);
    const radioBtn = document.querySelector(`#radio${index + 1}`);
    radioBtn.checked = true;
    index++;
  }
};

setInterval(myTimer, 5000);











