// ✅ EmailJS init
(function () {
  emailjs.init("_XU2kSsVCxE4Tkq_m"); // 👈 YOUR PUBLIC KEY
})();

// ✅ Book Test Function
function bookTest() {
  const name = document.querySelector('input[placeholder="Patient Name"]').value;
  const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;

  const checkedTests = [];
  document.querySelectorAll('.test-item:checked').forEach((item) => {
    checkedTests.push(item.value);
  });

  if (!name || !mobile || checkedTests.length === 0) {
    alert("Please fill all required fields and select at least one test");
    return;
  }

  const bookingData = {
    name: name,
    mobile: mobile,
    email: email,
    tests: checkedTests,
    time: new Date().toLocaleString()
  };

  // 🔥 1. Save to Firestore
  db.collection("testBookings")
    .add(bookingData)
    .then(() => {
      // 🔥 2. Send Email via EmailJS
      emailjs.send(
        "service_obgfrn8",      // 👈 Service ID
        "template_1a4qtna",     // 👈 Template ID
        bookingData
      );

      alert("✅ Test booked successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("❌ Booking failed");
    });
}
