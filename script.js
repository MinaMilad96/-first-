/* navbar */
/*bargar-icon */
let bargarIcon = document.getElementById("fa");
let links = document.querySelector(".links");
bargarIcon.onclick = function(){
    this.classList.toggle("fa-align-right");
    links.style.right = 0 + 'px';
}

/* en-bargar-icon */

/* x-logo */
let xLogo = document.querySelector(".xlogo");
xLogo.onclick = function(){
    this.parentElement.style.right = -1280 + 'px';
    bargarIcon.classList.remove("fa-align-right");
}
/* end-x-logo */

/* end-navbar */

/* start-colorOption */

let colorList = document.querySelectorAll(".color-list li");
colorList.forEach( li => {
    li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    document.documentElement.style.setProperty('--maincolor', e.target.dataset.color);
    //li.classList.toggle("active");
    
        e.target.classList.add("active");
    })
} )
/* fa-gear */

let faGear = document.querySelector('.fa-gear');
let colorSlide = document.querySelector('.color-option');
// console.log(faGear);
faGear.onclick = function() {
    
    colorSlide.classList.toggle("left");
    this.classList.toggle("fa-spin");
    
}

/* end fa-gear */
/* end-colorOption */


/*clock*/
function showTime(){
    var now = new Date(),
        Hours = now.getHours(),
        Minutes = now.getMinutes(),
        Seconds = now.getSeconds();
        if ( Hours < 10 ){
            Hours = '0' + Hours;
        }
        if ( Minutes < 10 ){
            Minutes = '0' + Minutes;
        }
        if ( Seconds < 10 ){
            Seconds = '0' + Seconds;
        }

    document.getElementById('clock').textContent = Hours + ':' + Minutes + ':' + Seconds; 
}
window.onload = function() {
    
    setInterval(showTime, 500);
}




/*clock*/


/*scroll-top*/

let btnScroll = document.getElementById("top");
window.onscroll = function() {
    let value = scrollY;
    if (value > 204){
        btnScroll.style.display = "block";
    }else{
        btnScroll.style.display = "none";
    }

}

/*scroll-top*/