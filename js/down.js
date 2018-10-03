var download = document.getElementById('download');
console.log(download);
download.onclick = () => {
    var id = document.getElementById('drive-id');

    console.log(id.value);
    console.log(download);
    download.href = `https://docs.google.com/uc?export=download&id=${id.value}`;
}
// download = function () {
//
//
//
// }
