/**
 * @Script js for (Carrierlookup)
 *
 * @project     - Carrierlookup
 * @created_by  - Md Afzal Hossain patwary
 */



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */




    // init dropdown toggle js

    let btnToggler = document.querySelector(".dropdown .drop-btn-toggler");

    btnToggler.addEventListener("click", function () {
        this.classList.toggle("active");
    })



    let showToggler = document.querySelector(".nav-item.dropdown");
    
    showToggler.addEventListener("click", function () {
        this.classList.toggle("show");
    })



    // For active menu 
    let menus = document.querySelectorAll('.nav-item');

    menus.forEach((menu, index) => {
        menu.addEventListener('click', () => {

            menus.forEach((menu) => {
                menu.classList.remove('active');
            });
            menus[index].classList.add("active");
        });
    });



    // code for closing the dropdown when we click outside the dropdown
    window.addEventListener("click", function (event) {
        if (!event.target.matches("button") && !event.target.matches("button span") && !event.target.matches("button span .i") && !event.target.matches(".dropdown ul li a") && !event.target.matches(".dropdown ul li a span")) {
            var btns = document.querySelectorAll(".dropdown  button");

            btns.forEach(function (btn) {
                if (btn.classList.contains("active")) {
                    btn.classList.remove("active");
                }
            });
        }
    });


    // init tab js
    let tabs = document.querySelectorAll('.tabs__toggle');
    let contents = document.querySelectorAll('.tabs__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            contents.forEach((content) => {
                content.classList.remove('is-active');
            });
            tabs.forEach((tab) => {
                tab.classList.remove('is-active');
            });
            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');
        });
    });


    // navigation-sidebar
    const buttons = document.querySelectorAll(".btn-sidebar-toggle");

    buttons.forEach(button =>
        button.addEventListener("click", _ => {
            document.getElementById("navigation-sidebar").classList.toggle("sidebar-collapsed");
        })
    );
