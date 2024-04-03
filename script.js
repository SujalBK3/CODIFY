const button = document.querySelector('.btn');
button.addEventListener('click' , e=>
{
    var duplicate1 = document.querySelector('.duplicate1' , 'a');
    var user = document.querySelector('.user');
    var cloneContent = user.cloneNode(true);
     duplicate1.append(cloneContent);
     saveDiv();
    
    

    
});

const button1 = document.querySelector('.z');
button1.addEventListener('click' , e=>
{
    var duplicate2 = document.querySelector('.duplicate2' , 'a');
    var user1 = document.querySelector('.user1');
    var cloneContent1 = user1.cloneNode(true);
    duplicate2.appendChild(cloneContent1);
    // document.body.appendChild(copy1);
    saveDiv1();
});
document.addEventListener("DOMContentLoaded" , e=>
{
    setTimeout(e=>
        {
            document.querySelector('.splash-screen').style.display = 'none';
        } , 2500);
});

function saveUrl()
{
    var inputData = document.querySelector('.data').value;
    sessionStorage.setItem('inputData' , inputData);
}

function saveCheckBox()
{
    var checkBox = document.querySelector('.checkbox').checked;
    sessionStorage.setItem('checkBox' , checkBox);
}

function saveData()
{
    var formData = document.querySelector('.input').value;
    sessionStorage.setItem('formData' , formData);
}

function saveData1()
{
    var formData1 = document.querySelector('.input1').value;
    sessionStorage.setItem('formData1' , formData1);
}

function saveData2()
{
    var formData2 = document.querySelector('.input2').value;
    sessionStorage.setItem('formData2' , formData2);
}

function saveData3()
{
    var formData3 = document.querySelector('.input3').value;
    sessionStorage.setItem('formData3' , formData3);
}

function saveData4()
{
    var formData4 = document.querySelector('.input4').value;
    sessionStorage.setItem('formData4' , formData4);
}

document.querySelector('.input').addEventListener('input' , saveData);
document.querySelector('.input1').addEventListener('input' , saveData1);
document.querySelector('.input2').addEventListener('input' , saveData2);
document.querySelector('.input3').addEventListener('input' , saveData3);
document.querySelector('.input4').addEventListener('input' , saveData4);

function loadData()
{
    var formData = sessionStorage.getItem('formData');
    document.querySelector('.input').value = formData;
}

function loadData1()
{
    var formData1 = sessionStorage.getItem('formData1');
    document.querySelector('.input1').value = formData1;
}

function loadData2()
{
    var formData2 = sessionStorage.getItem('formData2');
    document.querySelector('.input2').value = formData2;
}

function loadData3()
{
   var formData3 = sessionStorage.getItem('formData3');
   document.querySelector('.input3').value = formData3;
}

function loadData4()
{
    var formData4 = sessionStorage.getItem('formData4');
    document.querySelector('.input4').value = formData4;
}

document.querySelector('.data').addEventListener('input' ,saveUrl);
document.querySelector('.checkbox').addEventListener('change' , saveCheckBox);

function loadUrl()
{
    var inputData = sessionStorage.getItem('inputData');
    {document.querySelector('.data').value = inputData;}
}

function loadCheckBox()
{
    var checkBox = sessionStorage.getItem('checkBox');
    if(checkBox === 'true')
   { document.querySelector('.checkbox').checked = true;}
}

window.addEventListener("DOMContentLoaded" , e=>
{
    loadUrl();
    loadCheckBox();
    loadData();
    loadData1();
    loadData2();
    loadData3();
    loadData4();
});
 

function saveDiv() {
    
    var clonedDiv = document.querySelectorAll('.duplicate1');

    // if (clonedDiv.length === 0) {
    //     sessionStorageStorage.removeItem('clonedData');
    //     return;
    // }

    var clonedData = [];

    
    clonedDiv.forEach(function(e) {
        
        clonedData.push(e.innerHTML);
    });

    
    sessionStorage.setItem('clonedData', JSON.stringify(clonedData));
}


function loadDiv() {
    
    var clonedData = JSON.parse(sessionStorage.getItem('clonedData'));

    var container = document.querySelector('.duplicate1');

    container.innerHTML = '';
    
    clonedData.forEach(function(ele) {
        
        var newElement = document.createElement('div');
        
        newElement.innerHTML = ele;

        
        container.appendChild(newElement);
    });
}

window.addEventListener('DOMContentLoaded', loadDiv);

function saveDiv1() {
    
    var clonedDiv1 = document.querySelectorAll('.duplicate2');

    
    var clonedData1 = [];



    
    clonedDiv1.forEach(function(e) {
        
        clonedData1.push(e.innerHTML);
    });

    
    sessionStorage.setItem('clonedData1', JSON.stringify(clonedData1));
}


function loadDiv1() {
    
    var clonedData1 = JSON.parse(sessionStorage.getItem('clonedData1'));

    var container1 = document.querySelector('.duplicate2');

    container1.innerHTML = '';

    
    clonedData1.forEach(function(ele) {
        
        var newElement = document.createElement('div');
        
        newElement.innerHTML = ele;

        
        container1.appendChild(newElement);
    });
}


window.addEventListener('DOMContentLoaded', loadDiv1);


const data = document.querySelector('.data');
const clear = document.querySelector('.clear');
clear.addEventListener('click' , e=>
{
    data.value = "";
    data.focus();
});

const inputBox = document.querySelector('.input');
const clear1 = document.querySelector('.clear1');
clear1.addEventListener('click' , e=>
{
    e.preventDefault();
    inputBox.value = "";
    inputBox.focus();
});

const inputBox1 = document.querySelector('.input1');
const clear2 = document.querySelector('.clear2');

clear2.addEventListener('click' , e=>
{
    e.preventDefault();
    inputBox1.value = "";
    inputBox1.focus();
});

const inputBox2 = document.querySelector('.input2');
const clear3 = document.querySelector('.clear3');

clear3.addEventListener('click' , e=>
{
    e.preventDefault();
    inputBox2.value = "";
    inputBox2.focus();
});
const inputBox3 = document.querySelector('.input3');
const clear4 = document.querySelector('.clear4');

clear4.addEventListener('click' , e=>
{
    e.preventDefault();
    inputBox3.value = "";
    inputBox3.focus();
});
const inputBox4 = document.querySelector('.input4');
const clear5 = document.querySelector('.clear5');

clear5.addEventListener('click' , e=>
{
    e.preventDefault();
    inputBox4.value = "";
    inputBox4.focus();
});
