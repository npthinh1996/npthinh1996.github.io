window.onscroll = function() {scrollFunc()};

function scrollFunc(){
    if(document.documentElement.scrollTop > 20){
        document.getElementById("butBTT").style.display = "block";
    } else{
        document.getElementById("butBTT").style.display = "none";
    }
}

function topFunc(){
    var start = document.documentElement.scrollTop,
        change = 0 - start,
        currentTime = 0,
        increment = 20,
        duration = 1000;

    var animateScroll = function(){
        currentTime += increment;
        var val = function(t, b, c, d){
            t /= d/2;
            if(t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        }
        document.documentElement.scrollTop = val(currentTime, start, change, duration);
        if(currentTime < duration){
            setTimeout(animateScroll, increment);
        }
        console.log(document.documentElement.scrollTop);

    }
    animateScroll();
}
