var additemid = 0;
function addtocart(item) 
{
    additemid += 1;
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cartImg');
    selecteditem.setAttribute('id', additemid);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var delbtn = document.createElement('button');
    delbtn.innerText = 'Remove';
    delbtn.onclick = function(){
    selecteditem.remove();
    };
    selecteditem.append(img);
    selecteditem.append(delbtn);
    cartItems.append(selecteditem);
}