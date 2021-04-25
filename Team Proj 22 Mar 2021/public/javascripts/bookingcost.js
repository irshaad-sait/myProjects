// Authors: Irshaad Sardiwalla
// Grp1 Team 2
// Date: 26 Mar 2021

//Description: updates cost based on user selection on radio button for number of travellers

function totalCost(caller,pkgcost){
    // alert("This is from the linked JS file");
    let travellers=parseInt(caller.value)
    document.getElementById('cost').innerText = 'Cost $' + (pkgcost*travellers);
        }
