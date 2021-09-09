const set=new Set();

var buttonc = document.getElementById("buttons");

function clickFun()
{
    set.add(document.forms.myForm.name.value);
    console.log(document.forms.myForm.name.value);

    
    var newli= document.createElement('li');
    newli.textContent=document.forms.myForm.name.value;
    newli.draggable=true;
    var ulapp=document.getElementById('temp');
    ulapp.appendChild(newli);

}

function isDuplicate()
{
    //return false;
    var newtext=document.forms.myForm.name.value;
    if(newtext=="") return true;
    console.log(newtext);
    if(set.has(newtext)==true)
    {return true;}
    else {return false;}
}

buttonc.onclick = function (){
    if(isDuplicate()==false)
    {
        clickFun();
    }
    //console.log(todoArray);
};

function logSubmit(event) {
    if(isDuplicate()==false)
    {
        clickFun();
    }
    event.preventDefault();
  }
  
  var form = document.getElementById('myForm');

  form.addEventListener('submit', logSubmit);


  /*until here correct code*/

document.getElementById('temp').addEventListener('click',(event) => 
{   //console.log('hello');
    var tempi=event.target;
    //console.log(tempi);
    event.target.remove(); 
    //console.log(tempi);
    document.getElementById('temp2').appendChild(tempi);
});

document.getElementById('temp2').addEventListener('click',(event) => 
{   //console.log('hello');
    var tempi=event.target;
    //console.log(tempi);
    event.target.remove(); 
    //console.log(tempi);
    document.getElementById('temp').appendChild(tempi);
});

document.getElementById('temp2').addEventListener('dragstart',(event) => 
{   
    set.delete(event.target.textContent);
    event.target.remove(); 
    
});