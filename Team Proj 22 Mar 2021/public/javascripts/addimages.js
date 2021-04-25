// Authors: Irshaad Sardiwalla
// Grp1 Team 2
// Date: 19 Mar 2021

//Description: uses array method forEach to create 3 additional rows in the learnmore.html page

var picArr, imgHeader, text, caption, webpageLink;
picArr = ["images/algarve_portugal.jpg", "images/stone-arch.jpg", "images/grand_canyon.jpg"];
imgHeader = ["Algarve - Portugal","Stone-Arch - Utah","Glen Canyon - Arizona"]
caption=["The Algarve is the beautiful southern coastline of Portugal. It is a region blessed with stunning beaches"
          +" picturesque fishing towns and a glorious climate, all of which combines to make the perfect holiday destination.",
        "Arches National Park is a national park in eastern Utah, United States. The park is adjacent to the Colorado River," 
        +"4 miles (6 km) north of Moab, Utah. More than 2,000 natural sandstone arches are located in the park,"+ 
        " including the well-known Delicate Arch, as well as a variety of unique geological resources and formations."
        , "At this viewpoint, you can see the waters of the Colorado River in all their sparkling,"+
        " blue-green glory as they drift along toward the Grand Canyon."
    ];
webpageLink=["https://www.tripadvisor.ca/Tourism-g189111-Algarve-Vacations.html",
"https://www.nps.gov/arch/index.htm",
"https://www.nps.gov/glca/planyourvisit/horseshoe-bend.htm"]


text = "<div class='row'>";
picArr.forEach(myFunction);
text += "</div>";
document.getElementById("addContent").innerHTML = text;


function myFunction(value,index) {
  text += `<div class='col-md-6'><h2>${imgHeader[index]}</h2><p><img src=${value} onclick=myTimedWindow("${webpageLink[index]}") style='width:100%' alt=${value}></div>`;
    text+=`<div class='col-md-6'><h2><br></h2><p>${caption[index]}<br><br><a href=${webpageLink[index]}>${webpageLink[index]}</a></p></div>`;
} 

//opens window of clicked image then closes after 3.5 seconds
function myTimedWindow(caller){
  let x=window.open(caller);
  setTimeout( ()=> { x.close();}, 5000);
}
