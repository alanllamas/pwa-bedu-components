// var columns = document.getElementById('columns');
// var create = document.getElementById('create');
var container = document.getElementById('column-container');

// create.onclick = () => {

    container.innerHTML  = "";
    for (var i = 0; i < 3; i++) {
        console.log(i);
        container.innerHTML += `<div id="column-${i + 1}" class="content-column">
        <h4 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>`;
    }
// }
