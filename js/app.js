let MyApp = async () => {
     let FetchApi = await fetch("https://dummyjson.com/products");
     let Myjson = await FetchApi.json()
     console.log(Myjson)
     let Getdata = ""
     Myjson.products.map((values) => {
          console.log(values.images[0])
          Getdata += `
    <div class="col-md-3 col-sm-6 mb-3">
    <div class="main">
     <div class="images">
       <img src="${values.images[0]}"/>
     </div>
     <div class="contents">
     <h5>Title :  ${values.title} </h5>
     <p>Description : ${values.description}  </p>    
     </div>
     </div>
     </div>
     `
     })
     document.getElementById("data_recieved").innerHTML = Getdata
}
MyApp();

let clickbtn=document.querySelector("#btn");
clickbtn.addEventListener(()=>{
     alert("thisis")
})


let Navmenu=document.getElementById("navbars")
