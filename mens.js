function login()
{
    document.getElementById("login").style.visibility="hidden";
    document.getElementById("logout").style.visibility="visible";
    location.href="loginpage.html";
}
function logout()
{
    alert("logout successfully");
    document.getElementById("logout").style.visibility="hidden";
    document.getElementById("login").style.visibility="visible";
}
function addTo()
{
    c+=1;
    if(c%2!=0)
        document.getElementById("c1").style.visibility="visible";
    else
    document.getElementById("c1").style.visibility="hidden";
}