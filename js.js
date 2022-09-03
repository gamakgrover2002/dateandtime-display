setInterval(()=>{
    a = new Date();
    let time = a.getHours() +':'+ a.getMinutes() +':'+ a.getSeconds();
    let date = a.toLocaleDateString();
    document.getElementById('time').innerHTML= time +" "+ date;},1000);