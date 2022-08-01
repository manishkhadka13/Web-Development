let gender=document.querySelectorAll('input[name="gender"]');
let count=document.getElementById('country')
    function formValidation(){
        let name=document.getElementById('name').value
        let email=document.getElementById('email').value
        let phone=document.getElementById('phone').value
        let desc=document.getElementById('descrip').value
        let emailcheck = /^[a-zA-Z]+[a-zA-Z,0-9,]*[.]{0,1}[a-zA-Z,0-9,_]+@[a-zA-Z]+[.]com/
        let namecheck=/^[a-zA-z]+[a-zA-Z,\s]+$/
        if(name==""){
            alert("Name can't be empty")
            return false;
        }
        else if(name.length<=2 || name.length>=50){
            alert("Name must be between 2 and 50 characters")
            return false;
        }
        else if(namecheck.test(name)==false){
    
            alert("Invalid name format")
        }
        if(emailcheck.test(email)==false){
            alert("Invalid email")
            return false;
        }
        if(phone.length!=10){
            alert("Phone number must be 10 digits")
            return false;
        }
        if(!(gender[0].checked || gender[1].checked)){
            alert("Gender must be selected")
            return false;
        }
        if(count.value=="")
        {
            alert("Country must be selected")
            return false;
        }
        
    }