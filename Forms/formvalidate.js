function validate()
{
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('phone').value
    let interest=document.getElementById('interest').value
    let  gender=document.getElementsByClassName('gender')
    let emailcheck=/^[a-zA-Z]+([a-zA-Z0-9]*[\._]?[a-zA-Z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]+$/
    let namecheck=/^[a-zA-Z]+([\ ][a-zA-Z]+)+$/
    let phonecheck=/^[0-9]{10}$/
    if (name=="" || email=="" || phone=="" || interest=="" || !(gender[0].checked || gender[1].checked))
    {
        alert("All fields are mandatory")
    }
    else if(!name.match(namecheck))
    {
        alert("Invalid name format")
    }
    else if(!email.match(emailcheck))
    {
        alert("Invalid email format")
    }
    else if(!phone.match(phonecheck))
    {
        alert("Invalid phone number")
    }
    else
    {
        alert("Form submitted successfully")
    }
}
