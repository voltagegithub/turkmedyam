const filterBtnFirst = document.querySelector('.filterBtnFirst');
const filterItemFirst = document.querySelector('.filterItemFirst');
const filterDropDownDivFirst = document.querySelector('.filterDropDownDivFirst');
const DropdownLi = document.querySelector('.services-button-filter');

filterBtnFirst.addEventListener('click' , (e) => {
    e.stopPropagation();
    filterDropDownDivFirst.classList.toggle('hidden')
    filterBtnFirst.classList.toggle('active')
})
filterDropDownDivFirst.addEventListener('click' , (e) =>  {
    e.stopPropagation();
})

window.addEventListener("click",(e) => {
    if(!e.target.matches("filterBtnFirst") && !e.target.matches('.filterBtnFirst')){
        filterDropDownDivFirst.classList.add('hidden')
    filterBtnFirst.classList.remove('active')
        
    }
})

$( ".services-button-filter" ).click(function() {
    filterDropDownDivFirst.classList.add('hidden')
    filterBtnFirst.classList.remove('active')
});

