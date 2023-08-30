function addNewwEField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute('placeholder','Enter here');
    

    let weAddButtonOb=document.getElementById('weAddButton');
    let weOb=document.getElementById('we');

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAqField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute('placeholder','Enter here');
    let aqAddButtonOb=document.getElementById('aqAddButton');
    let aqOb=document.getElementById('aq');
    aqOb.insertBefore(newNode,aqAddButtonOb);
}
function generateResume()
{
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

   document.getElementById("nameT2").innerHTML =nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addField").value;
    let linkedinField = document.getElementById('linkedinField').value;
    let githubField = document.getElementById('Git-hubField').value;
    let fbField = document.getElementById('fbField').value;

   
    // Update links as clickable
    document.getElementById("lT").innerHTML = `<a href="${linkedinField}">${linkedinField}</a>`;
    document.getElementById("gitT").innerHTML = `<a href="${githubField}">${githubField}</a>`;
    document.getElementById("fbT").innerHTML = `<a href="${fbField}">${fbField}</a>`;

document.getElementById('ObjectiveT').innerHTML=document.getElementById('objectiveField').value;

let wes=document.getElementsByClassName("weField");
let str='';
for(let e of wes)
{
    str=str+ `<li> ${e.value} </li>`;
}
document.getElementById('weT').innerHTML=str;

let aqs=document.getElementsByClassName("aqField");
let str1='';
for(let e of aqs)
{
    str1+= `<li> ${e.value} </li>`;
}
document.getElementById('aqT').innerHTML=str1;

document.getElementById('resume-form').style.display='none'
document.getElementById('resume-template').style.display='block'
}
function printresume()
{
    window.print()
}