// Authors: Mostafa Mohamed/Irshaad Sardiwalla
// Grp1 Team 2
// Date: 28 Mar 2021

//Description: changes expired dates to red

function checkDate(){
    // alert("This is from the linked JS file");
    // a hidden span with class='dateclass' is used to contain the package start date. This is then read using document.getElementsByClassName('dateclass')
    //which is an array of span elements. Use .innerText to access the text contained in span. Convert text to date
    //using new Date(). Compare to current date. If less than current date, change style color of previousElementSibling (h4 element 
    //preceeds the span element) to red
    for (let element of document.getElementsByClassName('dateclass')) {
        let startdate=new Date(element.innerText);
        if (startdate < new Date()){
          element.previousElementSibling.style="color:red";}
      }
        }
