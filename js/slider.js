var imgLength = 8;
var imgWidth = 270;
function CreateSlider(transitionTime){
    this.imgLength = 8;
    this.index = 0;
    this.transitionTime = transitionTime;

this.init = function(){
    this.animationButtonLeft();
    this.animationButtonRight();
    //this.clickedIndicator();
}

this.animationButtonLeft = function(){
    var buttonLeft = document.querySelector('.btn1');
    console.log(buttonLeft);
    buttonLeft.addEventListener("click", function(e){
            var wrapper = document.querySelector('.wrapper');
            var leftValue = wrapper.style.left;
            var snippet = document.querySelectorAll('.row-9 .container .wrapper .snippet');
            var style = window.getComputedStyle(snippet[0]);
             var marginValue = style.getPropertyValue('margin-right');
             console.log(marginValue);
             var imgTotalW = imgWidth + parseInt(marginValue);

            if(!leftValue){
                leftValue = "0px";
            }
         
            if(parseInt(leftValue) === 0){
             leftValue = imgLength * (-imgTotalW) +"px";
            }
            var i=0;
            var id = setInterval(frame.bind(this), this.transitionTime);
           function frame() {
            if (i == imgTotalW) {
                clearInterval(id);
              } else {
                i++;
                wrapper.style.left = parseInt(leftValue) + i + "px"; 
              }
           }

        }.bind(this));

    }


    
this.animationButtonRight = function(){
var buttonRight = document.querySelector('.btn2');
        buttonRight.addEventListener("click",function(e){
        var wrapper = document.querySelector('.wrapper');
        var leftValue = wrapper.style.left;

        var snippet = document.querySelectorAll('.row-9 .container .wrapper .snippet');
        var style = window.getComputedStyle(snippet[0]);
         var marginValue = style.getPropertyValue('margin-right');
         console.log(marginValue);
         var imgTotalW = imgWidth + parseInt(marginValue);
        
        if(!leftValue){
            leftValue = '0px';
        }
    
        if(parseInt(leftValue) === imgLength * -(imgTotalW) + imgTotalW){
         leftValue = parseInt('270px') + parseInt(marginValue) +'px';
        } 

        var i=0;
        var id = setInterval(frame.bind(this), this.transitionTime);
        function frame() {
         if (i == imgTotalW) {

           clearInterval(id);
         } else {
           i++;
           wrapper.style.left = parseInt(leftValue) - i + "px";
                }
       }
     }.bind(this));
}

}

var first = new CreateSlider(0.05).init();


