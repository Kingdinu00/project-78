var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","daddy.jpg", "ummachi.jpg", "papa.jpg","umma.jpg","fichu.jpg","dinu.jpg"];
var names = ["Fmaily Book","Daddy", "Ummachi", "Papa", "Umma", "Fichu", "Dinu"];
var i = 1;
function update()
{
  var updated_names = names[i];
  var updatedImage = images[i];
   i++; 
   if (i==7){
     i=0;
   }
   
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updated_names;
}
