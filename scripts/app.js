// ELEMENTS
const elements = document.querySelectorAll('.btn')


//EVENT
elements.forEach(element => {
    element.addEventListener('click', () =>{
        let command = element.dataset['element'];

        if(command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the Link Here:', 'http://')
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null); 
        }   
    })
})