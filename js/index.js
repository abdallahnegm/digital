let bar =document.getElementById("bar")
let mobileMenu =document.getElementById("mobile-menu")
// bar.addEventListener("click",function(){
//     mobileMenu.classList.toggle("open")
// })
bar.onclick=function (){
    mobileMenu.classList.toggle("open")
}
$(' .projects .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('#team').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('#slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:50,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
let switcherLis = document.querySelectorAll(".switch li");
let boxes = Array.from(document.querySelectorAll('.box'))

switcherLis.forEach((li => {
    li.addEventListener('click', removeActive)
    li.addEventListener('click', manageboxes)
}))

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageboxes() {
    boxes.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.type).forEach((el) => {
        el.style.display = "block";
    });
}