const navBtns = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const btnSearch = document.getElementById("citySearchBtn");

const displayPage = (index) => {
    console.log("Index of button is", index);
    
pages.forEach(page => {
    page.style.display = 'none';
});

pages[index].style.display = 'block';
};

const attachClickListener = () => {
    for (let i = 0; i < navBtns.length; i++) {
        const button = navBtns[i];

        button.addEventListener("click", () => {
            displayPage(i);
        });
    }
}
attachClickListener();

btnSearch.addEventListener ("click", () => {
    const cityInput = document.getElementById("citySearchInput");
    console.log(cityInput.value);
});

