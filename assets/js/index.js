const all_js = document.querySelectorAll('.js_topic');
const all_ng = document.querySelectorAll('.ng_topic');


for (let i = 0; i < all_js.length; i++) {
    all_js[i].addEventListener("click", function() {
       
        let data = this.innerText.toLowerCase();
       if(data === 'ajax'){
            getJsData(data);
       }
       if(data === 'arrow_fn'){
            getJsData(data);
       }
       if(data === 'destructure_arr'){
            getJsData(data);
       }
       if(data === 'destructure_obj'){
            getJsData(data);
       }
       if(data === 'var_let_const'){
            getJsData(data);
       }
       if(data === 'rest_opt'){
            getJsData(data);
       }
       if(data === 'spread_opt'){
            getJsData(data);
       }
    })
}


function getJsData(fileName){
    const xHttp = new XMLHttpRequest();
    xHttp.open('GET', `../assets/files/js_files/${fileName}.txt`,true);
        xHttp.onreadystatechange = () => {
            if(xHttp.readyState == 4 && xHttp.status == 200){
                console.log(xHttp.responseText);
                document.getElementById("js_container").innerHTML = xHttp.responseText;
            }
        }
    xHttp.send()
}

// -----------------------------------------------------
for(let i = 0; i<all_ng.length;i++){
    all_ng[i].addEventListener('click',function(){
        let data = this.innerText.toLowerCase();
        if(data === 'ng'){
            getNgData(data)
        }
    })
};







function getNgData(fileName){
    const xHttp = new XMLHttpRequest();
    xHttp.open('GET', `../assets/files/ng_files/${fileName}.txt`,true);
        xHttp.onreadystatechange = () => {
            if(xHttp.readyState == 4 && xHttp.status == 200){
                console.log(xHttp.responseText);
                document.getElementById("ng_container").innerHTML = xHttp.responseText;
            }
        }
    xHttp.send()
}