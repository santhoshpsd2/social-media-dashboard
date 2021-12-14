const dashboard = document.querySelector('.dashboard');
const left_header = document.querySelector('.left_header');
const right_header = document.querySelector('.right_header');
const card_top = document.querySelectorAll('.card_top');
const overview = document.querySelector('.overview_delay');
const card_bottom = document.querySelectorAll('.card_bottom');
const body_ele = document.querySelector('body');
const line = document.querySelector('.mobile_line');

const input_check = document.querySelector('.input_check');
const input_label = document.querySelector('.switch');

input_label.addEventListener('click',()=>{
    if(input_check.checked){
        dashboard.classList.add('dark');
        left_header.classList.add('dark');
        right_header.classList.add('dark');
        overview.classList.add('dark');
        line.classList.add('dark');
        card_top.forEach(card => {
            card.classList.add('dark');
        })
        card_bottom.forEach(card =>{
            card.classList.add('dark');
        })
        body_ele.classList.add('dark')
    }else{
        dashboard.classList.remove('dark');
        left_header.classList.remove('dark');
        right_header.classList.remove('dark');
        
        overview.classList.remove('dark');
        card_top.forEach(card => {
            card.classList.remove('dark');
        })

        card_bottom.forEach(card => {
            card.classList.remove('dark');
        })
        body_ele.classList.remove('dark');
        line.classList.remove('dark');
    }
})