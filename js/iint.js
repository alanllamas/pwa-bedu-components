fold = (e) => {
    var option = document.getElementsByClassName('option')
    for (var i = 0; i < option.length; i++) {
        if (i === e) {
            if (option[i].nextSibling.nextSibling.style.display == 'none') {
                option[i].nextSibling.nextSibling.style.display = 'block'
                option[i].children[1].className = 'fa fa-chevron-up'
                option[i].scrollIntoView();
            }else {
                option[i].nextSibling.nextSibling.style.display = 'none'
                option[i].children[1].className = 'fa fa-chevron-down'
            }
        }else{
            option[i].nextSibling.nextSibling.style.display = 'none'
            option[i].children[1].className = 'fa fa-chevron-down'
        }
    }
}
var container = document.getElementById('iint-container');

for (var i = 0; i < 5; i++) {
    container.innerHTML += `
        <div class="container">
            <div onclick="fold(${i})" class="option">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat animi saepe quod!</p>
                <i class="fa fa-chevron-down"></i>
            </div>
            <div class="content" style="display:none">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum facilis veritatis autem amet, quaerat tenetur dicta mollitia hic obcaecati, asperiores, officiis maxime. Voluptas commodi ex neque debitis tempora sapiente.</p>
            </div>
        </div>`
}
