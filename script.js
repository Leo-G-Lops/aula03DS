// TOGGLE SIDEBAR

    const sidebarToggle = document.getElementById('sidebarToggle');
    const dashboard = document.querySelector('.dashboard');

    sidebarToggle.addEventListener('click', () => {
        dashboard.classList.toggle('sidebar-collapsed');
    });



    
    // DARK MODE
    

    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {

        body.classList.toggle('dark-mode');

        const icon = darkModeToggle.querySelector('i');

        if(body.classList.contains('dark-mode')){
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else{
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

    });

// const darkModeToggle = document.getElementById('darkModeToggle');


// sidebarToggle.addEventListener('click', () => {
//     dashboard.classList.toggle('sidebar-collapsed');
// })

// const darkmodeToggle = document.getElementById('darkMode');



// darkModeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');

//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('dark-mode', 'enabled');
//         darkModeToggle.innerHTML = '<i class = "fas fa-sun"></i>';
//     } else {
//         localStorage.setItem('dark-mode', 'enabled');
//         darkModeToggle.innerHTML = '<i class = "fas fa-moon"></i>';
//     }
// });