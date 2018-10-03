var download = document.getElementById('download');
download.onclick = () => {
    var id = document.getElementById('drive-id');
    download.href = `https://docs.google.com/uc?export=download&id=${id.value}`;
}
