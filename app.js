const form = document.querySelector('form'),
      name =document.querySelector('#name'),
      surname = document.querySelector('#surname'),
      age = document.querySelector('#age'),
      button = document.querySelector('.button'),
      newul = document.querySelector('#newul')

      button.addEventListener('click',(event) =>{
          event.preventDefault()

          if(name.value == '' || surname.value =='' || age.value ==''){
              alert('Iltimoz royhatdan otish mejbury: ')
              name.value = ''
              surname.value = ''
              age.value = ''

          }else{
               
           const newull = document.createElement('ul')

            const newName = document.createElement('li')
            newName.innerHTML = name.value
            newull.appendChild(newName)

            const newSurname = document.createElement('li')
            newSurname.innerHTML = surname.value
            newull.appendChild(newSurname)

            const newAge = document.createElement('li')
            newAge.innerHTML = age.value
            newull.appendChild(newAge)

            newul.appendChild(newull)

            name.value = ''
            surname.value = ''
            age.value = ''
          }
      })