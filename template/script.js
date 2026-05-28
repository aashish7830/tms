   
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menuBtn');
            const dropdownMenu = document.getElementById('dropdownMenu');
            const notiToggle = document.getElementById('notiToggle');
            const notificationDropdown = document.getElementById('notificationDropdown');
            const profileToggle = document.getElementById('profileToggle');
            const profileDropdown = document.getElementById('profileDropdown');

            function closeAll() {
                dropdownMenu.classList.remove('show');
                notificationDropdown.classList.remove('show');
                profileDropdown.classList.remove('show');
                profileToggle.classList.remove('active');
            }

            menuBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const isOpen = dropdownMenu.classList.contains('show');
                closeAll();
                if (!isOpen) dropdownMenu.classList.add('show');
            });

            notiToggle.addEventListener('click', (event) => {
                event.stopPropagation();
                const isOpen = notificationDropdown.classList.contains('show');
                closeAll();
                if (!isOpen) notificationDropdown.classList.add('show');
            });

            profileToggle.addEventListener('click', (event) => {
                event.stopPropagation();
                const isOpen = profileDropdown.classList.contains('show');
                closeAll();
                if (!isOpen) {
                    profileDropdown.classList.add('show');
                    profileToggle.classList.add('active');
                }
            });

            window.addEventListener('click', closeAll);
        });








    // Handling dynamic interaction clicks on Floating plus button
    document.addEventListener('DOMContentLoaded', () => {
        const dashboardFab = document.getElementById('dashboardFab');
        const fabMenu = document.getElementById('fabMenu');

        dashboardFab.addEventListener('click', (event) => {
            event.stopPropagation();
            fabMenu.classList.toggle('show');
        });

        // Close menu if user clicks anywhere else outside the context window
        window.addEventListener('click', () => {
            fabMenu.classList.remove('show');
        });
        }); 