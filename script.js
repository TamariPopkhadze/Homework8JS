   
    let main = document.getElementById('main');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'GET'
        
    })
    .then(function(x){
        if(x.status != 200){
            throw x.status;
        }
    let info = x.json();
    return info;

    })
    .then(function(info){
        
         for(item of info){ 
            createPost(item);
        }
    
    })
    .catch(function(error){
        let statusError = document.createElement('h1');
        
        if( error == 404){
            statusError.textContent = 'Page Not Found';
            main.appendChild(statusError);

        }
        else if (error == 500){
            statusError.textContent = 'Server Error'
            main.appendChild(statusError);
        }
        
    })
        let h2Tag = document.createElement('h2');
        h2Tag.innerText ='Posts';
        main.appendChild(h2Tag);
        let containerDiv = document.createElement('div');
        containerDiv.style.display = 'flex';
        containerDiv.style.flexDirection = 'column'
        containerDiv.classList.add('.container');
        main.appendChild(containerDiv); 

        function createPost(element){
            let divWraper = document.createElement('div');
            divWraper.style.display = 'flex';
            divWraper.style.gap = '10px';
            
            containerDiv.appendChild(divWraper);
            let id = document.createElement('h2');
            id.innerText = element.id;
            id.style.fontSize = '10px'
            let title = document.createElement('h3');
            title.innerText = element.title;
            title.style.fontSize = '10px'
            divWraper.appendChild(id);
            divWraper.appendChild(title);
        }

    

   


    let section = document.getElementById('section');
    section.style.display = 'flex';
    section.style.gap = '30px';
    let emailsContainer = document.createElement('div');
    let email = document.createElement('h2');
    email.innerText = 'Email';
    emailsContainer.style.display = 'flex';
    emailsContainer.style.flexDirection = 'column';
    emailsContainer.style.gap = '20px';
    section.appendChild(emailsContainer);
    emailsContainer.appendChild(email)

    let surnamesContainer = document.createElement('div');
    let surname = document.createElement('h2');
    surname.innerText = 'Surnames';
    surnamesContainer.style.display = 'flex';
    surnamesContainer.style.flexDirection = 'column';
    surnamesContainer.style.gap = '20px';
    section.appendChild(surnamesContainer);
    surnamesContainer.appendChild(surname)


    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET'

    })
        .then(function (x) {
            if (x.status != 200) {
                throw x.status;
            }
            let info = x.json();
            return info;

        })
        .then(function (info) {
            let dataArray = info.data;
            for (x of dataArray) {
                console.log(x)
                let MemberofEmails = document.createElement('p');
                MemberofEmails.innerText = x.email;
                emailsContainer.appendChild(MemberofEmails);

                let memberofsurnames = document.createElement('p');
                memberofsurnames.innerText = x.last_name;
                surnamesContainer.appendChild(memberofsurnames);
                
            }
       

        })