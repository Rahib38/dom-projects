const cards = document.querySelectorAll(".card");
let titleCount =1;
let totalPrice = 0;

for (let index = 0; index < cards.length; index++){
    const card = cards[index];
    card.addEventListener("click", function(){
        const title = card.querySelector("h4").innerText;
        const price = parseFloat(card.querySelector("span").innerText);
        
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText =titleCount+ '.' + title;
        titleContainer.appendChild(p)
        titleCount++;

        totalPrice += price;
        document.getElementById('total-Price').innerText = totalPrice.toFixed(2);
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const couponElement = document.getElementById('input-tag').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    if (totalPrice>= 200){
        if(couponCode === 'SELL200') {
            const discountElement =document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed (2);


            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discountAmount;
            document.getElementById('input-tag').value ='';
        }
        else{
            alert('invalid Coupon');
            document.getElementById('input-tag').value ='';
        }
    }
    else{
        alert('please at least 200 khoroc kor!');
        document.getElementById('input-tag').value ='';
    }
})