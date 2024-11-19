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