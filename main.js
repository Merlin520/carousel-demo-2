setTimeout(function(){
    $(`.image > img:nth-child(1)`).css({
        transform:`translateX(-100%)`
    })
    $(`.image > img:nth-child(2)`).css({
        transform:`translateX(-100%)`
    })
},3000)

setTimeout(function(){
    $(`.image > img:nth-child(2)`).css({
        transform:`translateX(-100%)`
    })
    $(`.image > img:nth-child(3)`).css({
        transform:`translateX(-100%)`
    })
},6000)