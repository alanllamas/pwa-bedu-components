// var columns = document.getElementById('columns');
// var create = document.getElementById('create');
// var resizing = false ;
var container = document.getElementById('column-container');

colNum = 5
colArrange = 3
container.innerHTML  = "";
for (var i = 0; i < colNum; i++) {
    console.log(i);

    console.log('container.outerWidth',container.outerWidth);
    container.innerHTML += `<div id="column-${i + 1}" class="content-column">
    <div class="title">
    <!--
     -->
     <img src="https://placehold.it/50x50?text=icon" alt="">
    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
    </div>
    <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>`;
    var column = document.getElementsByClassName('content-column')
    // var title = document.getElementsByClassName('title').querySelector('h4')
    meassureWidth = () => {
        if (window.innerWidth >= 768) {
            // container.outerWidth = ((100/colNum) + '%');
            // title[i].style.width = '75%';
            column[i].style.width = ((100/colArrange) + '%');
        }
        else if (window.innerWidth <= 768) {
            // container.outerWidth = '100%';
            column[i].style.width = '100%';
        }
        console.log(column[i]);
    }
    meassureWidth();
}
