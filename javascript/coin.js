// --------- ----------- Constant ----------- ----------------- ---------- //

const IMG = document.querySelector('.img-bag_coin'); // Se for uma classe
const MONEY = document.querySelector('.bg-alert');

// --------- ----------- Events ----------- ----------------- ---------- //

IMG.addEventListener('mouseover', () => {
    MONEY.classList.add('sbow');
    MONEY.style.borderColor  = 'red'
});

IMG.addEventListener('mouseout', () => {
    MONEY.classList.remove('sbow');
    MONEY.style.borderColor  = 'black'
});
// --------- ----------- Functions ----------- ----------------- ---------- //  

