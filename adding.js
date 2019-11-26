document.querySelector('.btn').addEventListener('click', function(){
    
    const newList = document.createElement('li')
    newList.innerText = document.querySelector('.todo-input').value
    document.querySelector('.todo-list').appendChild(newList)
    
    // clearList()
    
    
    
    
    
    
})