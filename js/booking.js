// BOOKING FORM SAVE CODE

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const test = document.getElementById("test").value;
    const date = document.getElementById("date").value;

    let bookings = localStorage.getItem("bookings");

    if (bookings) {
      bookings = JSON.parse(bookings);
    } else {
      bookings = [];
    }

    bookings.push({
      name: name,
      phone: phone,
      test: test,
      date: date
    });

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking successful");

    form.reset();
  });

});

