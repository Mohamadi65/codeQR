var qr_texte= document.querySelector('.qr_texte');
qr_texte.addEventListener('change',()=>{
    var qr_code= document.querySelector(".qr_code");
    qr_code.style.display="flex";
    // new QRCode(qr_code,qr_texte.value);
    //  ici j'initialise le contenu 
    qr_code.innerHTML='';
    var qrcode = new QRCode(qr_code, {
        text: qr_texte.value,
        width: 120,
        height: 120,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // je supprime le contenu de l'input
    qr_texte.value="";

})