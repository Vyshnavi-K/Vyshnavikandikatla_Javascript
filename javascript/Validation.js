function validate()
{
  //First Name
  var fname = document.getElementById("fname");
  if(fname.value == "")
  {
    alert("Please Enter your First Name");
  }

  //Last Name
  var lname = document.getElementById("lname");
  if(lname.value == "")
  {
    alert("Please Enter your Last Name");
  }

  //Password
  var pwd = document.getElementById("pwd");
  if(pwd.value.length<6 || pwd.value.length>12)
  {
    alert("Password must be 6 to 12 Characters");
  }

  //Mobile Number length=10
  var mnum = document.getElementById("mnum");
  if(mnum.value.length!=10)
  {
    alert("Mobile Number should contains 10 digits");
  }

  //Mobile Number - Only digits
  var phoneno = /^\d{10}$/;
  if(!mnum.value.match(phoneno))
  {
    alert("Alphabets and special Characters are not allowed in Mobile Number");
  }

  // Email 
  // at least one character before and after the @.
  // at least two characters after . (dot).
  var email=getElementById("pwd").value; 
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
  {  
    alert("Please enter a valid e-mail address");
  }
}