var form = document.getElementById('addform');
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value ;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.list.appendChild(li);
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains(delete)){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
        }
    }
}
// Filter Items
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.form(items).forEach(function(item)){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexof(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    }

}