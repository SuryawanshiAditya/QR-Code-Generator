async function generateQR() {
    const text = document.getElementById("text").value.trim();
    const qrColor = document.getElementById("qrColor").value;
    const bgColor = document.getElementById("bgColor").value;

    if (text === ""){
        message.innerText = "please enter some text."
        return;
    }
    message.innerText = "";

    const response = await fetch("/generate", { 
        method:"post",
        headers: {
            "content-Type": "application/json"
        },
        
        body: JSON.stringify({ text, qrColor,bgColor })
    });

    const data = await response.json();
    
    const img = document.getElementById("qrImage");
    
    img.src = data.qr;
    img.style.display = "block";
}

function clearQr(){
    document.getElementById("text").value = "";

    const img = document.getElementById("qrImage");

    img.src = "";
    img.style.display = "none";

    document.getElementById("message").innerText = "";

    document.getElementById("text").focus();

}