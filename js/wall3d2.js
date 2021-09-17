(function (){

    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const stageElem = document.querySelector('.stage');
    const mousePos = { x: 0, y: 0 };
    let maxScollvalue;

    function resizeHandler() {
        maxScollvalue = document.body.offsetHeight - window.innerHeight;
    };

    window.addEventListener('scroll', function(){
        const scrollPer = pageYOffset / maxScollvalue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform ='translateZ(' + zMove + 'vw)';

        // progress bar
        barElem.style.width = scrollPer * 100 + '%';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    window.addEventListener('mousemove', function(e){
        mousePos.x = (e.clientX / window.innerWidth) *2 -1
        mousePos.y = -(e.clientY / window.innerHeight) *2 +1
        stageElem.style.transform = 'rotateX('+ mousePos.y * 30 +'deg) rotateY('+ mousePos.x * 30+'deg)';
    }); 

})();