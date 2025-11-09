 //Menu Data
        const menuData = {
            appetizers:[
                {
                   name: "Le nkoki",
                    price: "$120",
                    description: "Le nkoki bien chaud fais maison",
                    image: "https://i0.wp.com/actucameroun.com/wp-content/uploads/2023/02/koki.jpg?resize=800%2C480&ssl=1"
                },
                {
                    name: "Le nkok",
                    price: "$180",
                    description: "Le nkok bien chaud fais maison,avec la viande de boeuf",
                    image: "https://teepservice.com/wp-content/uploads/2021/09/EPC2KetWkAEJ2Q8-min.jpg"
                },
                {
                    name: "Calamari Fritti",
                    price: "$16",
                    description: "Crispy fried squid served with lemon aioli",
                    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
            ],
            mains: [
                {
                    name: "Poisson Braise",
                    price: "$32",
                    description: "Fried fish, with pepper and sspices",
                    image: "https://kelianfood.com/wp-content/uploads/2023/11/IMG_6351-1536x1473.jpg"
                },
                {
                    name: "Mbongo des bassa'a fait by le Chef Eto'o",
                    price: "$1200",
                    description: "Le mbongo Tchobi fais par le meilleure cuisinier du pays.",
                    image: "https://recettesdafrique.com/wp-content/uploads/2022/12/Recette-du-bongoo-ou-mbongo.jpg"
                },
                {
                    name: "Banane Malaxé",
                    price: "$42",
                    description: "Topsi banana with smoke fish",
                    image: "https://www.tasteatlas.com/images/dishes/fabb16d3336f498ba713c2adcf2923b7.jpg?mw=1300"
                }
            ],
            desserts: [
                {
                    name: "Tiramisu",
                    price: "$10",
                    description: "Classic Italian dessert with coffee-soaked ladyfingers",
                    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                    name: "Panna Cotta",
                    price: "$9",
                    description: "Silky vanilla custard with berry compote",
                    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                    name: "Cannoli Siciliani",
                    price: "$8",
                    description: "Crispy pastry tubes filled with sweet ricotta",
                    image: "https://i0.wp.com/memoriediangelina.com/wp-content/uploads/2023/01/Cannoli-2.jpg?w=800&ssl=1"
                }
            ],
            drinks: [
                {
                    name: "House Red Wine",
                    price: "$8/glass",
                    description: "Our signature blend of Sangiovese and Merlot",
                    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                    name: "Aperol Spritz",
                    price: "$12",
                    description: "Aperol, prosecco, and soda water with orange slice",
                    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                    name: "Limoncello",
                    price: "$7",
                    description: "Traditional Italian lemon liqueur",
                    image: "https://www.sorrentoinfo.com/wp-content/uploads/2013/07/limoncello.jpg"
                },
                {
                    name: "Matango",
                    price: "$100",
                    description: "We also call it palm wine. made in Cameroon",
                    image: "https://imgs.search.brave.com/H2DKgleltKVJchryNQLSCp3dF7OPk3VnN9kLs6sgdJg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/MTk2Zmxhdm9ycy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvcGFsbS13/aW5lLTMuanBlZw"
                },

            ]
        };
          
                //DOM Elements
        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const loginModal = document.getElementById('login-modal');
        const closeModal = document.getElementById('close-modal');
        const reserveNowBtn = document.getElementById('reserve-now');
        const reservationForm = document.getElementById('reservation-form');
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuItemsContainer = document.getElementById('menu-items-container');
        const formTabs = document.querySelectorAll('.form-tab');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const authButtons = document.querySelector('.auth-buttons');
        const userInfo = document.querySelector('.user-info');
        const usernameDisplay = document.getElementById('username-display');

               //check if user is logged in
               function checkLoginStatus() {
            const user = localStorage.getItem('currentUser');
            if (user) {
                authButtons.style.display = 'none';
                userInfo.style.display = 'flex';
                usernameDisplay.textContent = JSON.parse(user).name;
            } else {
                authButtons.style.display = 'block';
                userInfo.style.display = 'none';
            }
        }

        // Load menu items
        function loadMenuItems(category) {
            menuItemsContainer.innerHTML = '';
            const items = menuData[category];
            
            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-content">
                        <div class="menu-item-title">
                            <h3>${item.name}</h3>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItem);
            });
        }

               //events listeners
              loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        reserveNowBtn.addEventListener('click', () => {
            document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
        });

        // Menu tab switching
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                // Load menu items for selected category
                loadMenuItems(tab.dataset.category);
            });
        });

        // Form tab switching
        formTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                formTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding form
                const formId = tab.dataset.form;
                document.querySelectorAll('.form-container').forEach(form => {
                    form.classList.remove('active');
                });
                document.getElementById(`${formId}-form`).classList.add('active');
            });
        });

        // Login form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Simple validation (in a real app, this would be more secure)
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                checkLoginStatus();
                loginModal.style.display = 'none';
                alert('Login successful!');
            } else {
                alert('Invalid email or password');
            }
        });

        // Register form submission
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;
            
            if (password !== confirm) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.find(u => u.email === email)) {
                alert('User with this email already exists');
                return;
            }
            
            // Create new user
            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            checkLoginStatus();
            loginModal.style.display = 'none';
            alert('Registration successful!');
        });

        // Logout functionality
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            checkLoginStatus();
        });

        // Reservation form submission
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check if user is logged in
            const user = localStorage.getItem('currentUser');
            if (!user) {
                alert('Please login to make a reservation');
                loginModal.style.display = 'flex';
                return;
            }
            
            // Get form data
            const formData = new FormData(reservationForm);
            const reservation = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                date: formData.get('date'),
                time: formData.get('time'),
                guests: formData.get('guests'),
                specialRequests: formData.get('special-requests')
            };
               // Save reservation (in a real app, this would be sent to a server)
            const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
            reservations.push(reservation);
            localStorage.setItem('reservations', JSON.stringify(reservations));
            
            // Reset form
            reservationForm.reset();
            
            alert('Reservation made successfully! We look forward to serving you.');
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
            loadMenuItems('appetizers');
            
            // Set minimum date for reservation to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('date').min = today;
        });
            // Admin Panel JavaScript
    const adminUsername = "admin";
    const adminPassword = "restaurant123";

    // DOM Elements
    const adminLoginModal = document.getElementById('admin-login-modal');
    const adminPanel = document.getElementById('admin-panel');
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminLogoutBtn = document.getElementById('admin-logout');
    const dbTabs = document.querySelectorAll('.db-tab');
    const dbTables = document.querySelectorAll('.db-table');

    // Sample database structure
    const sampleDatabase = {
        users: [
            { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0101', joined: '2024-01-10' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0102', joined: '2024-01-11' },
            { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '555-0103', joined: '2024-01-12' }
        ],
        reservations: [
            { id: 1, guest_name: 'John Doe', email: 'john@example.com', date: '2024-01-15', time: '19:00', guests: 2, status: 'confirmed' },
            { id: 2, guest_name: 'Jane Smith', email: 'jane@example.com', date: '2024-01-15', time: '20:30', guests: 4, status: 'pending' },
            { id: 3, guest_name: 'Mike Johnson', email: 'mike@example.com', date: '2024-01-16', time: '18:00', guests: 6, status: 'confirmed' }
        ],
        menuItems: [
            { id: 1, name: 'Bruschetta Classica', category: 'Appetizers', price: 12.00, available: true },
            { id: 2, name: 'Osso Buco', category: 'Main Courses', price: 32.00, available: true },
            { id: 3, name: 'Tiramisu', category: 'Desserts', price: 10.00, available: true }
        ],
        tables: [
            { number: 1, capacity: 2, location: 'Window side', status: 'available' },
            { number: 2, capacity: 4, location: 'Center', status: 'available' },
            { number: 3, capacity: 6, location: 'Private corner', status: 'occupied' }
        ]
    };

    // Load database from localStorage or use sample data
    function loadDatabase() {
        const savedDB = localStorage.getItem('restaurant_database');
        if (savedDB) {
            return JSON.parse(savedDB);
        } else {
            // Initialize with sample data
            localStorage.setItem('restaurant_database', JSON.stringify(sampleDatabase));
            return sampleDatabase;
        }
    }

    // Save database to localStorage
    function saveDatabase(database) {
        localStorage.setItem('restaurant_database', JSON.stringify(database));
    }

    // Update statistics
    function updateStats() {
        const db = loadDatabase();
        document.getElementById('total-users').textContent = db.users.length;
        document.getElementById('total-reservations').textContent = db.reservations.length;
        document.getElementById('pending-reservations').textContent = db.reservations.filter(r => r.status === 'pending').length;
        document.getElementById('menu-items').textContent = db.menuItems.length;
    }

    // Load table data
    function loadTableData(tableName) {
        const db = loadDatabase();
        const tbody = document.getElementById(`${tableName}`-tbody);
        
        if (!tbody) return;

        switch(tableName) {
            case 'users':
                tbody.innerHTML = db.users.map(user => `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone || 'N/A'}</td>
                        <td>${user.joined}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="editUser(${user.id})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    </tr>
                `).join('');
                break;

            case 'reservations':
                tbody.innerHTML = db.reservations.map(res => `
                    <tr>
                        <td>${res.id}</td>
                        <td>${res.guest_name}</td>
                        <td>${res.email}</td>
                        <td>${res.date}</td>
                        <td>${res.time}</td>
                        <td>${res.guests}</td>
                        <td><span class="status-badge status-${res.status}">${res.status}</span></td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="editReservation(${res.id})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteReservation(${res.id})">Delete</button>
                        </td>
                    </tr>
                `).join('');
                break;

            case 'menu':
                tbody.innerHTML = db.menuItems.map(item => `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.category}</td>
                        <td>$${item.price}</td>
                        <td>${item.available ? 'Yes' : 'No'}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="editMenuItem(${item.id})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteMenuItem(${item.id})">Delete</button>
                        </td>
                    </tr>
                `).join('');
                break;

            case 'tables':
                tbody.innerHTML = db.tables.map(table => `
                    <tr>
                        <td>${table.number}</td>
                        <td>${table.capacity}</td>
                        <td>${table.location}</td>
                        <td><span class="status-badge status-${table.status}">${table.status}</span></td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="editTable(${table.number})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteTable(${table.number})">Delete</button>
                        </td>
                    </tr>
                `).join('');
                break;
        }
    }

    // Tab switching
    dbTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            dbTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tables
            dbTables.forEach(table => table.classList.remove('active'));
            // Show selected table
            const tableName = tab.dataset.table;
            document.getElementById(`${tableName}`-table).classList.add('active');
            
            // Load table data
            loadTableData(tableName);
        });
    });

    // Admin login
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        
        if (username === adminUsername && password === adminPassword) {
            // Hide main content and show admin panel
            document.querySelector('header').style.display = 'none';
            document.querySelectorAll('section').forEach(section => {
                if (section.id !== 'admin-panel') section.style.display = 'none';
            });
            document.querySelector('footer').style.display = 'none';
            
            adminPanel.style.display = 'block';
            adminLoginModal.style.display = 'none';
            
            // Load initial data
            updateStats();
            loadTableData('users');
        } else {
            alert('Invalid admin credentials!');
        }
    });

    // Admin logout
    adminLogoutBtn.addEventListener('click', () => {
        // Show main content and hide admin panel
        document.querySelector('header').style.display = 'block';
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'block';
        });
        document.querySelector('footer').style.display = 'block';
        
        adminPanel.style.display = 'none';
        adminLoginForm.reset();
    });

    // Export table to CSV
    function exportTable(tableName) {
        const db = loadDatabase();
        const data = db[tableName];
        if (!data.length) {
            alert('No data to export!');
            return;
        }
        
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${tableName}-export-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        
        alert(`Exported ${data.length} ${tableName} to CSV!`);
    }

    // Database operations
    function deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            const db = loadDatabase();
            db.users = db.users.filter(user => user.id !== userId);
            saveDatabase(db);
            loadTableData('users');
            updateStats();
        }
    }

    function deleteReservation(reservationId) {
        if (confirm('Are you sure you want to delete this reservation?')) {
            const db = loadDatabase();
            db.reservations = db.reservations.filter(res => res.id !== reservationId);
            saveDatabase(db);
            loadTableData('reservations');
            updateStats();
        }
    }

    function deleteMenuItem(itemId) {
        if (confirm('Are you sure you want to delete this menu item?')) {
            const db = loadDatabase();
            db.menuItems = db.menuItems.filter(item => item.id !== itemId);
            saveDatabase(db);
            loadTableData('menu');
            updateStats();
        }
    }

    function deleteTable(tableNumber) {
        if (confirm('Are you sure you want to delete this table?')) {
            const db = loadDatabase();
            db.tables = db.tables.filter(table => table.number !== tableNumber);
            saveDatabase(db);
            loadTableData('tables');
        }
    }

    // Utility functions
    function backupDatabase() {
        const db = loadDatabase();
        const backup = {
            timestamp: new Date().toISOString(),
            data: db
        };
        
        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `restaurant-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        window.URL.revokeObjectURL(url);
        
        alert('Database backup created!');
    }

    function clearOldReservations() {
        if (confirm('Clear reservations older than today?')) {
            const db = loadDatabase();
            const today = new Date().toISOString().split('T')[0];
            db.reservations = db.reservations.filter(res => res.date >= today);
            saveDatabase(db);
            loadTableData('reservations');
            updateStats();
            alert('Old reservations cleared!');
        }
    }

    function generateReport() {
        const db = loadDatabase();
        const report = {
            generated: new Date().toISOString(),
            summary: {
                totalUsers: db.users.length,
                totalReservations: db.reservations.length,
                pendingReservations: db.reservations.filter(r => r.status === 'pending').length,
                totalMenuItems: db.menuItems.length,
                availableTables: db.tables.filter(t => t.status === 'available').length
            },
            recentReservations: db.reservations.slice(0, 5)
        };
        
        alert(`Report Generated!\n\nTotal Users: ${report.summary.totalUsers}\nTotal Reservations: ${report.summary.totalReservations}\nPending: ${report.summary.pendingReservations}\nMenu Items: ${report.summary.totalMenuItems}\nAvailable Tables: ${report.summary.availableTables}`);
    }

    // Add this to your existing navigation to access admin panel
    document.addEventListener('DOMContentLoaded', function() {
        // Add admin link to navigation
        const nav = document.querySelector('nav ul');
        const adminLi = document.createElement('li');
        adminLi.innerHTML = '<a href="#" id="admin-nav-link">Admin</a>';
        nav.appendChild(adminLi);
        
        // Add admin link event listener
        document.getElementById('admin-nav-link').addEventListener('click', function(e) {
            e.preventDefault();
            adminLoginModal.style.display = 'flex';
        });
        
        // Close admin modal
        document.getElementById('close-admin-modal').addEventListener('click', function() {
            adminLoginModal.style.display = 'none';
        });
        
        // Initialize database
        loadDatabase();
    });
