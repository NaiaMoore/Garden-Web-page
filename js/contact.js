// CONTACT
// CLEAN PLACEHOLDER
const inputs = document.querySelectorAll('.form__input')


inputs.forEach(input => {
  input.addEventListener('focus', function handleFocus() {
    this.placeholder = '';
    this.removeEventListener('focus', handleFocus);
  })
})

//FORM Validation 
function validation(form){
let result = true

const allInputs = form.querySelectorAll('.form__input')
for (const input of allInputs)
if(input.value ==''){
  console.log('Error');
  result = false
}


}
return result
} 

document.getElementById('add-form').addEventListener('submit',function(event){
  event.preventDefault()
  if(validation(this) == true){
    alert('форма проверена')

  }
})







