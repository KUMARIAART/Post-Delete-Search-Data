const id1=document.querySelector("#id");
const title1=document.querySelector("#title");
const price1=document.querySelector("#price");
const description1=document.querySelector("#description");
const category1=document.querySelector("#category");
const image1=document.querySelector("#image");
const button1=document.querySelector("#btn");
const deleteIteam1=document.querySelector("#deleteIteam")
const button2=document.querySelector("#BTN")
const Category=document.querySelector("#Category")
const serchbtn=document.querySelector("#serchbtn")
box=document.querySelector('#box')

let displayData=(result)=>{
    box.innerHTML=''
    result.map((item)=>{
        box.innerHTML+=`<div id='box2'>
        <h1>${item.id}</h1>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button>$${item.price}</button>
        </div>`
    })

}
box.style.display='grid'
box.style.gridTemplateColumns='repeat(4,1fr)'

let data=async()=>{
    let response=await fetch(`http://localhost:3000/data`)
    let result= await response.json()
    displayData(result)
}
data()


const PostData=async ()=>{
    const data={id:id1.value,title:title1.value,price:price1.value,description:description1.value,category:category1.value,image:image1.value}
    const response = await fetch(`http://localhost:3000/data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    data()
    return response.json()
}
const Deletedata=async ()=>{
    const response = await fetch(`http://localhost:3000/data/${deleteIteam1.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    data()
    return response.json() 
}
const SerchData=async()=>{
    const response=await fetch(`http://localhost:3000/data`)
    result=await response.json()
    var arr=[]
    for (var key of result){
        if(Category.value==key.category){
            // console.log(key)
            arr.push(key)
        }
    }
    displayData(arr)
}

button1.addEventListener("click",PostData)
button2.addEventListener("click",Deletedata)
serchbtn.addEventListener("click",SerchData)

