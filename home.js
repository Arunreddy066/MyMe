function login() 
{
    location.href = "loginpage.html";
}

function logout() 
{
    localStorage.removeItem("user");
    document.getElementById("username").textContent = "";
    alert('LOGGED OUT SUCCESSFULLY');

}

function navigateToPage(page) {
    window.location.href = page;
}

const cards = document.querySelectorAll('.card');
c=0;
function addTo() {
    c+=1;
    if(c%2!=0)
        document.getElementById("c1").style.visibility="visible";
    else
        document.getElementById("c1").style.visibility="hidden";
}