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


navIcons.forEach((icon) => {
    icon.onclick = function(e) {
        // console.log(this)
        e.preventDefault()
            // console.log(getFixedNav)
    }
})

const app = {

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

    }
}
app.start()