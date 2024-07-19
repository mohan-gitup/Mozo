var productcontainer = document.getElementById("products")
var search = document.getElementById("search")
var productlists = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function()
{
    var enteredvalue = event.target.value.toUpperCase()

    for(var i=0; i<productlists.length; i++)
        {
            var productname = productlists[i].querySelector("h5").textContent
            if(productname.toUpperCase().indexOf(enteredvalue) < 0)
                {
                    productlists[i].style.display = "none"
                }
            else
                {
                    productlists[i].style.display = "block"
                }    
        }
})