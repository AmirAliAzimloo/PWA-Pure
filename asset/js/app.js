//! Register ServiceWorker
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("../../sw.js")
    .then((register)=>{
        console.log("Registered Successfully =>",register)
    })
    .catch(err=>console.log(err))
}else{
    console.log("Not Supported")
}