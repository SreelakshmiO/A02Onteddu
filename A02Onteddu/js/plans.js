function getConnection()
{

    alert("Input no provided");
    if($("#con").val() == "" ) throw alert("No of connections should not be empty!!!!");
    
    var x = document.getElementById("clickehere").Value;
    var y = document.getElementById("connection").Value;
    values(x,y);
}
function values(x,y)
{
    var z;
    if(x == "Plan1")
        {
            alert("choose one plan");
        }
        if(x == "Plane2")
            {
                z = 10*y;
                alert("This is local plan:"+z);
            }
            if(x == "Plane3")
                {
                    z = 20*y;
                    alert("This is International plan:"+z);
                }
            
}