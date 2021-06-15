setInterval(() => {
    var isConnected = window.navigator.onLine;
    if (isConnected) {
        document.querySelector('.wifi').style.background = '#39ff14';
        document.getElementById('content').innerText = 'Your device is Connected !';
        document.querySelector('.smile i.fa-smile').style.display ='block';
        document.querySelector('.smile i.fa-tired').style.display ='none';
    } else {
        document.querySelector('.wifi').style.background = 'red';
        document.getElementById('content').innerText = 'Your device is not Connected !';
        document.querySelector('.smile i.fa-smile').style.display ='none';
        document.querySelector('.smile i.fa-tired').style.display ='block';
    }
}, 1000);
