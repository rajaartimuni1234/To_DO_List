const inputTask=document.querySelector("#inputTask")
const Showtask=document.querySelector("#Showtask");
const Menubar=document.querySelector("#Menubar");
const crossBar=document.querySelector("#crossBar");
const sideSlide=document.querySelector("#sideSlide")
const addNewTask=document.querySelector("#addNewTask")
const myDate=document.querySelector("#date")

const index_Color=["#ffdcdb",'#bea9de','#a0b9ff','#fff68f','#e9f263','#b7fff1','#ffc125','#a05a4b','#0e9cef','#f4915f','#999999' ]

let meDay=new Date()
let dayname=['Sun', 'Mon', 'Tues', 'Wed', 'Thur','Fri', 'Sat']
let monthName=['Jan','Feb', 'Mar','Apr', 'May','Jun','Jul','Aug','Sep', 'Oct','Nov','Dec']
console.log(meDay)

console.log(meDay.getDate())

//test only

//set Favoriate list

//

//Select theme Color
const MenuBar=document.querySelector("#MenuBar")
const bottomBar=document.querySelector("#bottomBar")
const themeColorSel=document.querySelectorAll("#themeColorSel div")

console.log(themeColorSel)
themeColorSel.forEach((e, index)=>{
e.addEventListener('click',()=>{
    pickcolorbg( index)
    pickcolIcon(index)
} )

})
//theme background color

let themebg= localStorage.getItem('thmeColor')
document.body.style.backgroundColor=themebg
MenuBar.style.backgroundColor=themebg
bottomBar.style.backgroundColor=themebg


function setthemeColorlocalstorage(color){
    localStorage.setItem('thmeColor', color)
    
}


function pickcolorbg( index){   
console.log(index)
for(let i=0; i<index_Color.length; i++)
 {
    if(index===i)
    {
        document.body.style.backgroundColor=index_Color[i]
        MenuBar.style.backgroundColor=index_Color[i]
        bottomBar.style.backgroundColor=index_Color[i]
       // localStorage.clear('input')
       setthemeColorlocalstorage(index_Color[i])
       // localStorage.setItem('thmeColor', index_Color[i])
    }
 }


}


//theme icon background color

    function pickcolIcon (index){
    function themIconBg(complete){
        for(let i=0; i<index_Color.length; i++){
            if (index===i){
                complete.style.backgroundColor=index_Color[i]
            }
        }
      }
    }


//Show task
function addValueToList (val){

if (val==="")
{
    return ;
}
else {
    console.log(val)
    const listItem=document.createElement("li")
    listItem.innerHTML=`
    
    <div class="bg-gray-100 px-[40px] py-[10px] rounded-md flex relative items-center space-x-3">
    <span class=" border-gray-600 border-[2px] w-[20px] h-[20px] p-[10px]  rounded-full   absolute left-4   text-center " ></span>
    <span class=" border-gray-600 border-[2px] w-[20px] h-[20px] p-[10px]  rounded-full   bg-gray-300 absolute left-1  text-center hidden" >
    <span class="text-[16px] absolute top-0 left-0 right-0"> <i class="fa-solid fa-check "></i> </span>
   </span>
   <span id="Showtask">${val}</span>
   <span class="absolute right-2">
     <i class="fa-solid fa-trash"></i>
  </span>
   <span class="absolute right-8" id="nonImportantList"><i class="fa-regular fa-star" id ="nonFavlist"></i></span>
   <span class="absolute right-8 hidden" id="ImportantList"><i class="fa-solid fa-star" id="favlist"></i></span>
    </div>

    `;
    //set Comlete list
const nonComplete=listItem.querySelector("div").firstElementChild
const complete=nonComplete.nextElementSibling
const important=listItem.querySelector("div").lastElementChild
const nonImportant=important.previousElementSibling
const listDel=nonImportant.previousElementSibling
console.log(listDel)

//delete list 
listDel.addEventListener('click', ()=>{
    listItem.remove()
})

nonImportant.addEventListener('click', ()=>{
    nonImportant.style.display="none"
  important.style.display="block" 
})

important.addEventListener('click', ()=>{
    important.style.display="none"
    nonImportant.style.display="block"
   
})

nonComplete.addEventListener('click',(e)=>{
 
    if (e.isTrusted){
       nonComplete.style.display="none"
    complete.style.display="block"

    }
   
})
complete.addEventListener('click', ()=>{
   
    complete.style.display="none"
    nonComplete.style.display="block"
})




 addNewTask.appendChild(listItem)
 
}
}
inputTask.addEventListener("keyup",(e)=>{
 if (e.key=="Enter"){
    
    addValueToList(e.target.value)
   
    e.target.value=" "
   
   // addValueToList()
 }
 
})


//theme button
const themeButton=document.querySelector("#themeButton")
const Showtheme=document.querySelector("#Showtheme")
let isClick=true;

themeButton.addEventListener("click", ()=>{
    if (isClick){
        Showtheme.style.display='block'
        console.log("show")
        isClick=false
    }

    
    else{

        Showtheme.style.display='none'
        isClick=true
        console.log("of")
    }
    
   
})

//toggle menu bar
function openMenu (){
    
    console.log("call menu bar")
    sideSlide.classList.remove('hidden')
 
}
function closeMenu (){
    console.log("call close menu")
    sideSlide.classList.add("hidden");
}
Menubar.addEventListener('click', openMenu)
crossBar.addEventListener('click',closeMenu)

