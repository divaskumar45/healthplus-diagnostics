const table = document.getElementById("bookingTable");
const debug = document.createElement("div");
debug.style.padding = "10px";
document.body.prepend(debug);

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

function renderTable() {
  table.innerHTML = "";

  if (bookings.length === 0) {
    table.innerHTML = `<tr><td colspan="6">No bookings found</td></tr>`;
    return;
  }

  bookings.forEach((b, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${b.name || ""}</td>
      <td>${b.phone || ""}</td>
      <td>${b.test || ""}</td>
      <td>${b.date || ""}</td>
      <td>${b.status || "Pending"}</td>
      <td>
        <button onclick="markDone(${index})">✔ Done</button>
        <button onclick="deleteBooking(${index})">🗑 Delete</button>
      </td>
    `;

    table.appendChild(row);
  });
}

function markDone(index) {
  bookings[index].status = "Done";
  localStorage.setItem("bookings", JSON.stringify(bookings));
  renderTable();
}

function deleteBooking(index) {
  bookings.splice(index, 1);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  renderTable();
}

renderTable();
