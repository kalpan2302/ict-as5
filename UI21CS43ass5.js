var today,uname,uad,ubirthdate,umnum,uemail,usem,strhb = [],strra,languages = [],upass,ucpass;
function tdate()
{
    //get cuurent date
    var a = new Date();

    //make ISD format
    today = a.getFullYear()+"-"+a.getMonth()+"-"+a.getDate();

    //set max date
    document.getElementById("birthdate").setAttribute("max", today);
}

function display()
{    
    //geting data from getdata function
    getdata();

    //Displaying On Confirm Box
    var ans = confirm("Username: "+uname+"\nAddress: "+uad+"\nBirthdate: "+ubirthdate+"\nMobile Number: "+umnum+"\nEmail-ID: "+uemail+"\nHobbies: "+strhb+"\nGender: "+strra+"\nSemester: "+usem+"\nLanguages Known: "+languages);
    return ans;
}

function getdata()
{
    //Get Username 
        uname = document.getElementById("uname").value;

    //Get User-Address
        uad = document.getElementById("address").value;

    //Get User's Birthdate
        ubirthdate = document.getElementById("birthdate").value;

    //Get User's Mobile Number
        umnum = document.getElementById("mnumber").value;

    //Get User's Email-ID
        uemail = document.getElementById("emailid").value;

    //Get User's Hobbies
        strhb = [];
        var checkboxes = document.getElementsByName("hobby");
        for (var i=0; i<checkboxes.length; i++) 
        {       
            if (checkboxes[i].checked == true)
            {
               strhb.push(checkboxes[i].value);
            }
        }
        
    //Get User's Gender
        var radiobuttons = document.getElementsByName("gender");
        for (var i=0; i<radiobuttons.length; i++) 
        {       
            if (radiobuttons[i].checked == true)
            {
               strra = radiobuttons[i].value;
               break;
            }
        }

    //Get User's Current Semester
        usem = document.getElementById("sem").value;

    //Get User's Languages Known
        languages = [];
        for (var option of document.getElementById('lang').options)
        {
            if (option.selected) {
                languages.push(option.value);
            }
        }

    //get user's password
        upass = document.getElementById("pass").value;

    //get user's confirm password
        ucpass = document.getElementById("cpass").value;
}

function validate()
{
    //retrive the data
    getdata();

    //checking username Field
    if(isNaN(uname))
    {
        if(uname.length <= 3)
        {
            alert("Please enter name of atleast 4 Length!");
            document.getElementById("uname").focus();
            return false;            
        }
    }
    else
    {
        alert("Please enter Alphabet Only!");
        document.getElementById("uname").focus();
        return false;
    }

    // checking address field
    if(uad.length <= 14)
        {
            alert("Please enter address of atleast 11 Length!");
            document.getElementById("address").focus();
            return false;            
        }

    //checking mobile number
    if(umnum.length != 10)
    {
        alert("Please enter 10 digit number!");
        document.getElementById("mnumber").focus();
        return false; 
    }
    
    //checking Email-format
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!uemail.match(mailformat))
    {
        alert("Please enter valid Email address!");
        document.getElementById("emailid").focus();
        return false; 
    }

    //checking Semester
    if(usem == "selectsemester")
    {
        alert("Please Select Your Semester and Year!");
        document.getElementById("sem").focus();
        return false;
    }
    
    //validating password
    if(upass.length < 6)
    {
        alert("Password should be atleast of 6 length!");
        document.getElementById("pass").focus();
        return false;
    }

    //validating confirm password
    if(upass != ucpass)
    {
        alert("Password and Confirm Password should must match!");
        document.getElementById("cpass").focus();
        return false;
    }

    var a = display();
    return a;
}
