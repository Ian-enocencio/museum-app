function doesNotPassAllValidations (name, msg) {
    if (!name || !msg) {
        alert('You forgot to fill in your name or message')
        return true;
    }

    if(msg.length > 280) {
        alert('Your comment is too long')
        return true
    }

    return false
}

function submitComment() {
// ---- gather data
   const inputField = document.getElementById('name')
   const name = inputField.value
   const textArea = document.getElementById('msg')
   const msg = textArea.value
  
   if(doesNotPassAllValidations(name, msg)){
    return null
  }

  
   //---- creating elements
   const comment = document.createElement('section') // creating section with .createElement
   const h3 = document.createElement('h3')
   const p = document.createElement('p')

   // --- adjusting the elements
   h3.innerHTML = `${name} said:`
   p.innerHTML = msg
   comment.classList.add('comment')
   comment.appendChild(h3)
   comment.appendChild(p)
   
   // --- display the elements

   const commentSection = document.getElementById ('comments')
   commentSection.appendChild(comment)

   //-- reset value
   inputField.value = null
   textArea.value = null
   console.log(name)
}