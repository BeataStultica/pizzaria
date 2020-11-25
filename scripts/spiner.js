class Spiner{
    view_spiner(){
        document.getElementById("main").innerHTML=''
        document.getElementById("spiner-box").innerHTML=`<div id="spin"></div>`
        document.getElementById("spiner-box").style.width= '90vw'
        document.getElementById("spiner-box").style.height= '90vh'
    }
    close_spiner(){
        document.getElementById("spiner-box").innerHTML=''
        document.getElementById("spiner-box").style.width= '0'
        document.getElementById("spiner-box").style.height= '0'
    }
}

const spiner = new Spiner()
export default spiner;