
function darkmode(){ 

let bodyColor = document.querySelector('.dark');
let titleStyle = document.querySelector('.title');
let itemStyle = document.querySelectorAll('.item');

bodyColor.style.backgroundColor = 'rgb(39, 39, 39)';
titleStyle.style.backgroundColor = 'rgb(19, 19, 19)';
titleStyle.style.borderColor = 'black'; 
bodyColor.style.color = 'rgb(230, 230, 230)';

for (let item of itemStyle ) { 
    item.style.backgroundColor =  'rgb(19, 19, 19)';
    item.style.borderColor = 'black'; 
}

}
function lightmode() {

    location.reload();
}


