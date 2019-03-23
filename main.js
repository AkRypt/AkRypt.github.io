function chibi() {
    document.getElementById('kaneki').src='https://pngriver.com/wp-content/uploads/2018/04/Download-Ghoul-PNG-Image.png';
}
function kaneki() {
    document.getElementById('kaneki').src='https://i.dlpng.com/static/png/176953_preview.png';
}

function post() {
    if (document.getElementById('txta1').value=='') {

    }
    else {
    var txt = document.getElementById('txta1').value;
    var para = document.createElement("p");
    var node = document.createTextNode(txt);
    para.appendChild(node);

    var feed = document.getElementById('feed');
    feed.appendChild(para);
    var hr = document.createElement('hr');
    feed.appendChild(hr);
    document.getElementById('txta1').value='';
    }
    
}