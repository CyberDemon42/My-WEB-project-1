let users = [
    { username: "Nursultan", firstName: "Nursultan", lastName: "Bukenbayev", email: "john@example.com", password: "password123" },
    { username: "Barrel", firstName: "Itaru", lastName: "Hashida", email: "titor@example.com", password: "password123" }
];
function renderUserTable() {
    const userTable = document.getElementById("user-table-body");
    userTable.innerHTML = "";

    users.forEach((user, index) => {
        const row = document.createElement("tr");

        Object.values(user).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        actionCell.classList.add("action-buttons");

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-warning", "btn-sm");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => openEditModal(index));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteUser(index));

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        userTable.appendChild(row);
    });
}

// Edit User
function openEditModal(index) {
    const user = users[index];
    document.getElementById("edit-username").value = user.username;
    document.getElementById("edit-firstname").value = user.firstName;
    document.getElementById("edit-lastname").value = user.lastName;
    document.getElementById("edit-email").value = user.email;
    document.getElementById("edit-password").value = user.password;
    document.getElementById("save-edit").onclick = function() {
        saveEdit(index);
    };
    new bootstrap.Modal(document.getElementById("editUserModal")).show();
}

// Save Edited User Data
function saveEdit(index) {
    users[index].firstName = document.getElementById("edit-firstname").value;
    users[index].lastName = document.getElementById("edit-lastname").value;
    users[index].email = document.getElementById("edit-email").value;
    users[index].password = document.getElementById("edit-password").value;
    renderUserTable();
    bootstrap.Modal.getInstance(document.getElementById("editUserModal")).hide();
    alert("User details updated successfully.");
}

// Delete  User
function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1);
        renderUserTable();
    }
}

// Search function
document.getElementById("search-bar").addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const filteredUsers = users.filter(user =>
        Object.values(user).some(value => value.toLowerCase().includes(searchQuery))
    );
    renderUserTable(filteredUsers);
});

// Sort Users by Username in alphabet
document.getElementById("sort-button").addEventListener("click", function() {
    users.sort((a, b) => a.username.localeCompare(b.username));
    renderUserTable();
});

// Render
document.addEventListener("DOMContentLoaded", renderUserTable);