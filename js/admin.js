<script>
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let table = document.getElementById("bookingTable");

function renderTable() {
  table.innerHTML = "";

  bookings.forEach((b, index) => {
    let row = `
      <tr>
        <td>${b.name}</td>
        <td>${b.phone}</td>
        <td>${b.test}</td>
        <td>${b.date}</td>
        <td>${b.status}</td>
        <td>
          <button onclick="markDone(${index})">✔ Done</button>
          <button onclick="deleteBooking(${index})">🗑 Delete</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function markDone(index) {
  bookings[index].status = "Done";
  localStorage.setItem("bookings", JSON.stringify(bookings));
  renderTable();
}

function deleteBooking(index) {
  if(confirm("Delete this booking?")){
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    renderTable();
  }
}

renderTable();
</script>

