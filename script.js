document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé');
});

var navigation = document.querySelector("#navigation");

document.querySelector("#menu").addEventListener('click', () => {
    console.log('coucou')
    if(navigation.style.display=="block"){
            navigation.style.display="none";
        }else{
            navigation.style.display="block";
        }
});
