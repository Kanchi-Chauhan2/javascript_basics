/*val=document;
val=document.all[2];
val=document.all.length;
val=document.body;
val=document.domain;
val=document.contentType;

val=document.forms[0];

val=document.getElementsByClassName('task-title');*/


/*console.log(document.getElementsById('task-title').id);
console.log(document.getElementsById('task-title').className);*/

//let x=document.getElementById('task-title');/*val=document;
val=document.all[2];
val=document.all.length;
val=document.body;
val=document.domain;
val=document.contentType;

val=document.forms[0];

val=document.getElementsByClassName('task-title');*/


/*console.log(document.getElementsById('task-title').id);
console.log(document.getElementsById('task-title').className);*/

//let x=document.getElementById('task-title');
//x.style.color='grey';
//x.textContent="hello";
//document.getElementById('task-title').innerHTML='<span style="color:red">Intelligence</span>';

//document.querySelector('li').style.color="red";
//document.querySelector('ul li:last-child').style.color="blue";
//document.querySelector('ul li:nth-child(4)').style.color="green";

//document.querySelector('li:nth-child(odd)').style.backgroundColor="red";
//document.querySelector('li:nth-child(even)').style.backgroundColor="blue";

//let value=document.querySelector('ul').getElementsByClassName('collection-items');
//value.style.color="red"; 
/*
let val=document.querySelectorAll('li:nth-child(odd)');

Array.from(val).forEach((element,index)=>{
    element.textContent=`${index} : Hello`;
});

let vall=document.querySelectorAll('li:nth-child(even)');

Array.from(vall).forEach(element=>{
    element.style.color="blue";
});

let vall=document.querySelectorAll('li');

vall.forEach(element=>{
    element.style.color="blue";
});*/


/*------------------TRAVERSING THE DOM--------------------*/
/*let val;

let list=document.querySelector('ul.collection');
let listItem=document.querySelector('li.collection-items:first-child');

val=list.childNodes;

val=list.children[0];
val=list.children[1].textContent="HELLO";
val=list.children[3].innerHTML="<span style=color:red;>fugga</span>";

val=list.children[3].children[0];

val=list.firstChild;
val=list.firstElementChild;

val=list.lastChild;
val=list.lastElementChild;
val=list.childElementCount;

val=listItem.parentNode;
val=listItem.parentElement;
val=listItem.parentElement.parentElement;

val=listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//val=listItem.previousSibling;
//val=listItem.previousElementSibling;
console.log(val);*/

/*let li=document.createElement('li');

li.className='collection-items';
li.id='new-item';
li.setAttribute('title','New Item');
li.appendChild(document.createTextNode('Hello World'));


document.querySelector('ul.collection').appendChild(li);


console.log(li);
document.querySelector('.btn_click').addEventListener('click',(e)=>{
    console.log('hello world');
    e.preventDefault();
});

document.querySelector('.btn_click').addEventListener('click',onclick);

function onclick(e){
    let val;
    val=e.target.id;
    val=e.target.classList;
   // e.target.innerText='helllo';
   val=e.timeStamp;
    e.type;
    val=e.clientY;
    val=e.clientX;
    val=e.offsetX;
    val=e.offsetY;
    console.log(val);
}
*/
/*
card=document.querySelector('.main');
card.addEventListener('onwheel',(e)=>{
   let x=(window.innerWidth-e.pageX*3)/100;
    let y=(window.innerHeight-e.pageY*4)/100;
    let z=e.deltaX;

   // card.style.transform=`translateX(${x}px) translateY(${y}px)`; 
    console.log(z);

  //  document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
});


let form=document.querySelector('form');
let taskInput=document.getElementById('#input-task');

taskInput.value='';

form.addEventListener('keydown',(e)=>{
    console.log(`event type: ${e.type}`);
   // console.log(taskInput.value);
   // e.preventDefault();
});

let x=document.querySelectorAll(".container").addEventListener('click',()=>{
     if(x.classList.contains('container')){
        x.target.backgroundColor="blue";
        }
});*/
/*
let form=document.querySelector('#task-form');
let taskList=document.querySelector('.collection');
let clearBtn=document.querySelector('.clear-tasks');
let filter=document.querySelector('#filter');
let taskInput=document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
}

function addTask(e){
    if(taskInput.value===''){
        alert('Add a task');
    }else{
        let li=document.createElement('li');
    li.className='collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    let link=document.createElement('a');

    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);


    taskInput.value=' ';
    e.preventDefault();
}


    }

    taskList.addEventListener('click',(e)=>{
        if(e.target.parentElement.classList.contains('delete-item')){
            if(confirm('Are you sure?')){
                e.target.parentElement.parentElement.remove();
            }
        }
    });

    clearBtn.addEventListener('click',()=>{
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        } 
    });

filter.addEventListener('keyup',(e)=>{
    let text=e.target.value;

    document.querySelectorAll('.collection-item').forEach(function(task){
        let item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
})

----------------------Project loan calculator----------------

document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){
    console.log('Calculating');

    //UI lets

    let amt=document.getElementById('amount');
    let interest=document.getElementById('interest');
    let years=document.getElementById('years');
    let monthlyPayment=document.getElementById('monthly-payment');
    let totalPayment=document.getElementById('total-payment');
    let totalInterest=document.getElementById('total-interest');

    let principal=parseFloat(amount.value);
    let calculatedInterest=parseFloat(interest.value)/100/12;
    let calculatedPayments=parseFloat(years.value)*12;

    //compute monthly payment

    let x=Math.pow(1+calculatedInterest,calculatedPayments);
    let monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly * calculatedPayments)-principal).toFixed(2);

    }else{
        showError('please check your numbers');
    }

    e.preventDefault();
}

function showError(error){
    let errordiv=document.createElement('div');

    let card=document.querySelector('.card');
    let heading=document.querySelector('.heading');

    errordiv.className='alert alert-danger';

    errordiv.appendChild(document.createTextNode(error));
    card.insertBefore(errordiv,heading);

    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}

let min=1,
max=10,
winning=getWinning(min,max),
guessesLeft=3;

let game=document.querySelector('#game');
let minNum=document.querySelector('.min-num');
let maxNum=document.querySelector('.max-num');
let guessBtn=document.querySelector('#guess-btn');
let guessInput=document.querySelector('#guess-input');
let message=document.querySelector('.message'); 

    minNum.textContent=min;
    maxNum.textContent=max;

    game.addEventListener('mousedown',(e)=>{
        if(e.target.className==='play-again'){
            window.location.reload();
        }
    });

    guessBtn.addEventListener('click',()=>{
        let guess=parseInt(guessInput.value);
        console.log(guess);

        if(isNaN(guess) || guess<min || guess>max){
            setMessage(`Please enter a number between ${min} and ${max}`,'red');
        }

        if(guess===winning){
            gameOver(true,`${guess} is correct.`);
        }
        else{
            guessesLeft-=1;
            if(guessesLeft===0){   
                gameOver(false,`${guess} is incorrect. Game over`);
        }else{
            guessInput.value='';
            gameOver(false,`${guess} is incorrect,${guessesLeft} guesses left`);

        }
    }
});

    function setMessage(msg,color){
        message.style.color=color;
        message.textContent=msg;
    }

    function gameOver(won,msg){
        let color;
        won===true?color='green':color='red';

        guessInput.style.borderColor=color;
        setMessage(msg);

        guessBtn.value='play again';
        guessBtn.className='play-again';
    }

    function getWinning(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }


//Person constuctor

function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}

const brad=new Person('brad',12);
const kanchi=new Person('kanchi',22);

console.log(brad);
console.log(kanchi);

function add(x,y){
    this.x=x;
    this.y=y;
    this.addnum=function(){
        const addition=x+y;
        return addition;
    }
}

const add1=new add(2,5);
console.log(add1.addnum);

function Person(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;

    
}

Person.prototype.nationality="indian"

Person.prototype.display=function(){
    return `${this.fname} ${this.lname}`;
}

Person.prototype.getnewname=function(newname){
    this.lname=newname;
    return "My name is "+this.fname+" "+this.lname+" "+this.nationality;
}

const p=new Person('kanchi','chauhan','22');
console.log(p.getnewname('agarwal'));

const personPrototypes={
    greeting:function(){
        return `hello ${this.fname} ${this.lname}`;
    },
    getsMarried:function(newName){
        this.lname=newName;
    }
}

const mary=Object.create(personPrototypes);
mary.fname='kanchi';
mary.lname='chauhan';
mary.getsMarried('Agarwal');
console.log(mary.greeting());

const brad=Object.create(personPrototypes,{
    fname:{value:'Brad'},
    lname:{value:'agarwal'}

});
console.log(brad.greeting());

class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    greeting(){
        return `Hello there ${this.fname} ${this.lname}`;
    }
}

class Customer extends Person{
    constructor(fname,lname,phone,membership){
        super(fname,lname);

        this.phone=phone;
        this.membership=membership;
    }
    greeting(){
        return `Hello there ${this.fname} ${this.lname} ${this.phone} ${this.membership}`;
    }
}
const kanchi=new Customer('Kanchi','Agarwal','6396230237','2months');
console.log(kanchi.greeting());-----------*/

/*---------------BOOK LIST--------------*/

//BOOK CONSTRUCTOR
/*
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;

const book=new Book(title,author,isbn);

const ui=new UI();

console.log(ui);

ui.addBookToList(book);

}

//UI CONSTRUCTOR

function UI(){

}

//EVENTT LISTENERS

document.getElementById('book-form').addEventListener('submit',
function(e){
    //get form values
    const title=document.getElementById('title').value,
    author=document.getElementById('author').value,
    isbn=document.getElementById('isbn').value;
    console.log(title,author,isbn);
    e.preventDefault();
});*/
document.querySelector('#button').addEventListener('click',(e)=>{
    list=document.createElement('li');
    list.append(e.value);
    console.log(list);
})

//x.style.color='grey';
//x.textContent="hello";
//document.getElementById('task-title').innerHTML='<span style="color:red">Intelligence</span>';

//document.querySelector('li').style.color="red";
//document.querySelector('ul li:last-child').style.color="blue";
//document.querySelector('ul li:nth-child(4)').style.color="green";

//document.querySelector('li:nth-child(odd)').style.backgroundColor="red";
//document.querySelector('li:nth-child(even)').style.backgroundColor="blue";

//let value=document.querySelector('ul').getElementsByClassName('collection-items');
//value.style.color="red"; 
/*
let val=document.querySelectorAll('li:nth-child(odd)');

Array.from(val).forEach((element,index)=>{
    element.textContent=`${index} : Hello`;
});

let vall=document.querySelectorAll('li:nth-child(even)');

Array.from(vall).forEach(element=>{
    element.style.color="blue";
});

let vall=document.querySelectorAll('li');

vall.forEach(element=>{
    element.style.color="blue";
});*/


/*------------------TRAVERSING THE DOM--------------------*/
/*let val;

let list=document.querySelector('ul.collection');
let listItem=document.querySelector('li.collection-items:first-child');

val=list.childNodes;

val=list.children[0];
val=list.children[1].textContent="HELLO";
val=list.children[3].innerHTML="<span style=color:red;>fugga</span>";

val=list.children[3].children[0];

val=list.firstChild;
val=list.firstElementChild;

val=list.lastChild;
val=list.lastElementChild;
val=list.childElementCount;

val=listItem.parentNode;
val=listItem.parentElement;
val=listItem.parentElement.parentElement;

val=listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//val=listItem.previousSibling;
//val=listItem.previousElementSibling;
console.log(val);*/

/*let li=document.createElement('li');

li.className='collection-items';
li.id='new-item';
li.setAttribute('title','New Item');
li.appendChild(document.createTextNode('Hello World'));


document.querySelector('ul.collection').appendChild(li);


console.log(li);
document.querySelector('.btn_click').addEventListener('click',(e)=>{
    console.log('hello world');
    e.preventDefault();
});

document.querySelector('.btn_click').addEventListener('click',onclick);

function onclick(e){
    let val;
    val=e.target.id;
    val=e.target.classList;
   // e.target.innerText='helllo';
   val=e.timeStamp;
    e.type;
    val=e.clientY;
    val=e.clientX;
    val=e.offsetX;
    val=e.offsetY;
    console.log(val);
}
*/
/*
card=document.querySelector('.main');
card.addEventListener('onwheel',(e)=>{
   let x=(window.innerWidth-e.pageX*3)/100;
    let y=(window.innerHeight-e.pageY*4)/100;
    let z=e.deltaX;

   // card.style.transform=`translateX(${x}px) translateY(${y}px)`; 
    console.log(z);

  //  document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
});


let form=document.querySelector('form');
let taskInput=document.getElementById('#input-task');

taskInput.value='';

form.addEventListener('keydown',(e)=>{
    console.log(`event type: ${e.type}`);
   // console.log(taskInput.value);
   // e.preventDefault();
});

let x=document.querySelectorAll(".container").addEventListener('click',()=>{
     if(x.classList.contains('container')){
        x.target.backgroundColor="blue";
        }
});*/
/*
let form=document.querySelector('#task-form');
let taskList=document.querySelector('.collection');
let clearBtn=document.querySelector('.clear-tasks');
let filter=document.querySelector('#filter');
let taskInput=document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
}

function addTask(e){
    if(taskInput.value===''){
        alert('Add a task');
    }else{
        let li=document.createElement('li');
    li.className='collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    let link=document.createElement('a');

    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);


    taskInput.value=' ';
    e.preventDefault();
}


    }

    taskList.addEventListener('click',(e)=>{
        if(e.target.parentElement.classList.contains('delete-item')){
            if(confirm('Are you sure?')){
                e.target.parentElement.parentElement.remove();
            }
        }
    });

    clearBtn.addEventListener('click',()=>{
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        } 
    });

filter.addEventListener('keyup',(e)=>{
    let text=e.target.value;

    document.querySelectorAll('.collection-item').forEach(function(task){
        let item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
})

----------------------Project loan calculator----------------

document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){
    console.log('Calculating');

    //UI lets

    let amt=document.getElementById('amount');
    let interest=document.getElementById('interest');
    let years=document.getElementById('years');
    let monthlyPayment=document.getElementById('monthly-payment');
    let totalPayment=document.getElementById('total-payment');
    let totalInterest=document.getElementById('total-interest');

    let principal=parseFloat(amount.value);
    let calculatedInterest=parseFloat(interest.value)/100/12;
    let calculatedPayments=parseFloat(years.value)*12;

    //compute monthly payment

    let x=Math.pow(1+calculatedInterest,calculatedPayments);
    let monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly * calculatedPayments)-principal).toFixed(2);

    }else{
        showError('please check your numbers');
    }

    e.preventDefault();
}

function showError(error){
    let errordiv=document.createElement('div');

    let card=document.querySelector('.card');
    let heading=document.querySelector('.heading');

    errordiv.className='alert alert-danger';

    errordiv.appendChild(document.createTextNode(error));
    card.insertBefore(errordiv,heading);

    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}

let min=1,
max=10,
winning=getWinning(min,max),
guessesLeft=3;

let game=document.querySelector('#game');
let minNum=document.querySelector('.min-num');
let maxNum=document.querySelector('.max-num');
let guessBtn=document.querySelector('#guess-btn');
let guessInput=document.querySelector('#guess-input');
let message=document.querySelector('.message'); 

    minNum.textContent=min;
    maxNum.textContent=max;

    game.addEventListener('mousedown',(e)=>{
        if(e.target.className==='play-again'){
            window.location.reload();
        }
    });

    guessBtn.addEventListener('click',()=>{
        let guess=parseInt(guessInput.value);
        console.log(guess);

        if(isNaN(guess) || guess<min || guess>max){
            setMessage(`Please enter a number between ${min} and ${max}`,'red');
        }

        if(guess===winning){
            gameOver(true,`${guess} is correct.`);
        }
        else{
            guessesLeft-=1;
            if(guessesLeft===0){   
                gameOver(false,`${guess} is incorrect. Game over`);
        }else{
            guessInput.value='';
            gameOver(false,`${guess} is incorrect,${guessesLeft} guesses left`);

        }
    }
});

    function setMessage(msg,color){
        message.style.color=color;
        message.textContent=msg;
    }

    function gameOver(won,msg){
        let color;
        won===true?color='green':color='red';

        guessInput.style.borderColor=color;
        setMessage(msg);

        guessBtn.value='play again';
        guessBtn.className='play-again';
    }

    function getWinning(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }


//Person constuctor

function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}

const brad=new Person('brad',12);
const kanchi=new Person('kanchi',22);

console.log(brad);
console.log(kanchi);-----------*/

function add(x,y){
    this.x=x;
    this.y=y;
    this.addnum=function(){
        const addition=x+y;
        return addition;
    }
}

const add1=new add(2,5);
console.log(add1.addnum);
