let bars = document.querySelector("#bars");
let closes = document.querySelector("#close");
let side = document.querySelector(".side");
let menu = document.querySelector(".menu");
let line = document.querySelectorAll(".line");

for (let i = 0; i < line.length; i++) {
    line[i].addEventListener("click", ()=> {
        for (let j = 0; j < line.length; j++) {
            line[j].classList.remove("active");
            
        }
        line[i].classList.add("active");
    })
    
}

line[2].addEventListener("click", () => {
    line[2].classList.add("active");
    line[0].classList.remove("active");
})

bars.addEventListener("click", () => {
    side.style.display = "block";
    
});

closes.addEventListener("click", () => {
    side.style.display = "none"
})

addEventListener("resize", () => {
    if(innerWidth > 1023) {
        side.style.display = "none";
    }
})

addEventListener("scroll", function () {
    if (this.scrollY <= 200) {
        for (let j = 0; j < line.length; j++) {
            line[j].classList.remove("active");
        }
        line[0].classList.add("active");
    }
    if (this.scrollY > 400) {
        for (let j = 0; j < line.length; j++) {
            line[j].classList.remove("active");
        }
        line[1].classList.add("active");
    }

    if (this.scrollY > 800) {
        for (let j = 0; j < line.length; j++) {
            line[j].classList.remove("active");
        }
        line[2].classList.add("active");
    }

    if (this.scrollY > 1600) {
        for (let j = 0; j < line.length; j++) {
            line[j].classList.remove("active");
        }
        line[3].classList.add("active");
    }
});

addEventListener("load", () => {
    scrollTo(0,0)
})