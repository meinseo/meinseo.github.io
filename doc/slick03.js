$(function(){
//------------------------------
const mainSlider=$('.main_slider').slick({
    arrows:false, 
    autoplay:true,
    pauseOnHover:false,
    vertical:true,   //아래위로 움직이는것
    //fade:true,       //흐려졌다 나온다 
});

let idx=1;
mainSlider.on('afterChange', function(e,s,c){
    console.log(c); 
    $('.num').css({backgroundPositionY:-500*idx});
    // $('.num').css({backgroundPositionY:-500*c-6000*idx});
    idx++;  //idx
})






//-----------------------------
})