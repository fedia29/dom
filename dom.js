var btnplus = document.getElementsByClassName('fa-plus-circle')
var btnminus =document.getElementsByClassName('fa-minus-circle')
var total=document.getElementsByClassName('total')
var price = document.getElementsByClassName('unit-price')
var qte= document.getElementsByClassName('quantity')
var hearts=document.getElementsByClassName('fa-heart')
var card = document.getElementsByClassName('card')
var deleteicon= document.getElementsByClassName('fa-trash-alt')
var sumpanier=0

for (let i = 0; i < btnplus.length; i++) {

  btnplus[i].addEventListener("click",function add() {
    qte[i].innerHTML = parseInt(qte[i].textContent)+1
    sumpanier += parseInt(price[i].textContent)
    total[0].innerHTML = sumpanier
    return sumpanier

  })
btnminus[i].addEventListener("click",function desc() {
  
  if (parseInt(qte[i].textContent)>0) {
    qte[i].innerHTML = parseInt(qte[i].textContent)-1
    sumpanier -= parseInt(price[i].textContent)
     total[0].innerHTML = sumpanier
  }
 return sumpanier

})
hearts[i].addEventListener('click',function like(){
  if (   hearts[i].style.color=="red") {
    hearts[i].style.color="black"
    
}
else {hearts[i].style.color="red" }
  
})
deleteicon[i].addEventListener('click',function remove() {
  
  sumpanier -= parseInt(price[i].textContent)*parseInt(qte[i].textContent)
  console.log(sumpanier);
  total[0].innerHTML=sumpanier
 card[i].parentNode.removeChild(card[i])
console.log(sumpanier);

})


}












