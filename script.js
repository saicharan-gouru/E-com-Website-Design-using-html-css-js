
var c=0;
function help()
{
    alert("Hey buddy.....want help...!\nIf you are facing any problem with the site or for any other queries just go to the contact us section and fill out the query form there.....Your problem will be resolved within 5 hours\nTo talk to our customer service dial : +91 9999999999");
}
function cli()
{
    alert("Item Added To Cart");
    
}
function cart()
{
    c=c+1;
    document.getElementById("num").innerHTML= c + " added to cart";
}
function validateForm() {
    var x = document.forms["myform"]["firstname"].value;
    var y = document.forms["myform"]["lastname"].value;
    var z = document.forms["myform"]["subject"].value;
    if (x == ""){
    alert("First Name must be filled out");
    return false;
    }
    else if(x.length<3){
    alert("First Name must be atleast 3 characters");
    return false;
    }
    else if (y == ""){
        alert("Last Name must be filled out");
        return false;
      }
    else if(y.length<3){
        alert("Last Name must be atleast 3 characters");
        return false;
      }
      else if (z == ""){
        alert("Query must be filled out");
        return false;
      }
    else if(z.length<50){
        alert("Query must be atleast 50 characters");
        return false;
      }  
    else{
        alert("query submitted succesfully");
        return true;
    }
  }
  
  function validatesignup() {
    var d = document.forms["myform2"]["uname"].value;
    var e = document.forms["myform2"]["pass"].value;
    var f = document.forms["myform2"]["CPass"].value;
    var g = document.forms["myform2"]["mail"].value;
    var h = document.forms["myform2"]["address"].value;
    var i = document.forms["myform2"]["number"].value;
    var j = document.getElementById("check").checked;
        if (d == ""){
        alert("Username must be filled out");
        return false;
        }
        else if(d.length<6){
        alert("Username should be atleast 6 characters");
        return false;
        }
        else if (e == ""){
        alert("Password must be filled out");
        return false;
        }
        else if(e.length<6){
        alert("Password should be atleast 6 characters");
        return false;
        }
        else if(e != f){
        alert("password and confirm password must be equal")
        }
        else if (g == ""){
        alert("mail must be filled out");
        return false;
        }
        else if (h == ""){
        alert("Address must be filled out");
        return false;
        }
        else if(h.length<20){
        alert("Address should be atleast 20 characters");
        return false;
        }
        else if (i == ""){
        alert("Contact number must be filled out");
        return false;
        }
        else if(i.length<10){
        alert("Contact number should be  10 characters");
        return false;
        }
        else if(i.length>10){
        alert("Contact number should not exceed 10 characters")
        }
        else if(j !=true){
        alert("You must accept the terms and conditions");
        return false;
        }
        else{
        alert("Signup succesful");
        return true;
        }
  }
  function validatelogin(){
    var a = document.forms["myform1"]["name"].value;
    var b = document.forms["myform1"]["ass"].value;
    if (a == ""){
    alert("Userame must be filled out");
    return false;
    }
    else if(a.length<6){
    alert("Username must be atleast 6 characters");
    return false;
    }
    else if (b == ""){
        alert("Password must be filled out");
        return false;
      }
    else if(b.length<6){
        alert("Password must be atleast 6 characters");
        return false;
    }  
    else{
        alert("Login succesful");
        return true;
    }
  }