const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navIcons = $$('.nav-icons');
const navBars = $$('.nav-name');
const contents = $$('.content');
const getBody = $('.body')
const getNav = $('.nav')
const getFixedNav = $('.nav-fixed')
const getCt1 = $('.ct1')
const getCt2 = $('.ct2')
const getCt3 = $('.ct3')
const getCt4 = $('.ct4')



// const nhacElement = $(".nhac")
// console.log(nhacElement)

// const popUp = $(".pop-up")

const subTitles = $$(".sub-title")
subTitles.forEach((subTitle) => {
    subTitle.style.color = "blue"
    setInterval(function() {
        subTitle.style.color = "orange"
        setTimeout(function() {
            subTitle.style.color = "blue"
        }, 2000)
    }, 4000)
})

const loading = $('.slide-item_loading')
var loadingTime = 0;

var x = setInterval(function() {
    let time = 10 - loadingTime
    loadingTime += 1

    loading.innerHTML = "Loading... " + time
    if (time < 1) {
        clearInterval(x)
    }
}, 1000)
setTimeout(function() {
    loading.classList.add('none')
}, 12000)

navIcons.forEach((icon) => {
    icon.onclick = function(e) {
        e.preventDefault()
    }
})

const app = {
    htmlLoad: $(".html-loading"),

    autoSlide: function() {
        let slides = document.getElementsByClassName("slide-item");
        let time = 0;


        for (var i = 0; i < slides.length; i++) {
            setInterval(function() {
                setTimeout(function() {
                    slides[0].classList.remove("none")
                }, 0)

                setTimeout(function() {
                    slides[0].classList.add("none")
                }, 3000)

                setTimeout(function() {
                    slides[1].classList.remove("none")
                }, 3000)

                setTimeout(function() {
                    slides[1].classList.add("none")
                }, 6000)

                setTimeout(function() {
                    slides[2].classList.remove("none")
                }, 6000)

                setTimeout(function() {
                    slides[2].classList.add("none")
                }, 9000)

                setTimeout(function() {
                    slides[3].classList.remove("none")
                }, 9000)

                setTimeout(function() {
                    slides[3].classList.add("none")
                }, 12000)
            }, 12000)
        }

    },

    handleLoad: function() {
        let _this = this;
        let transition = 500;
        let ok = false;

        function hiddenOverlay() {
            _this.htmlLoad.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(_this.htmlLoad);
            }, transition)
        }

        setTimeout(() => {
            ok = !ok
        }, 1000)
        this.htmlLoad.style.transition = `opacity ${transition}ms linear`;
        window.onload = () => {
            if (ok) {
                hiddenOverlay()
            } else {
                setTimeout(hiddenOverlay, 1000)
            }
        }
    },

    // handlePopUp: function() {
    //     let _this = this;
    //     let isPlay = false;
    //     let setClose;

    //     // let audio = new Audio("../audio/audio1.mp3");

    //     //click show pop
    //     popUp.onclick = () => {
    //         this.nhacElement.style.animation = `pop-in .3s linear forwards`
    //     }
    // },

    handleClick: function() {

        navBars.forEach((nav, index) => {
            nav.onclick = function() {
                if (nav.classList.contains('active-nav')) return;

                const content = contents[index];
                $('.nav-name.active-nav').classList.remove('active-nav');
                this.classList.add('active-nav');


                $('.content.active').classList.remove('active');
                content.classList.add('active');

                // console.log(content)
                content.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }
        })
    },

    hadleScroll: function() {
        window.onscroll = () => {
            let bodyTop = getBody.offsetTop;
            let windowTop = window.scrollY;


            if (windowTop >= bodyTop) {
                getNav.classList.add('nav-fixed')
                getCt1.classList.add('ml')
                getCt2.classList.add('ml')
                getCt3.classList.add('ml')
                getCt4.classList.add('ml')
            } else if (windowTop < bodyTop) {
                $('.nav').classList.remove('nav-fixed')
                getCt1.classList.remove('ml')
                getCt2.classList.remove('ml')
                getCt3.classList.remove('ml')
                getCt4.classList.remove('ml')
            }


        }
    },

    start: function() {
        this.handleClick()

        this.hadleScroll()

        this.autoSlide()

        this.handleLoad()
            // this.handlePopUp()
    }
}
app.start()