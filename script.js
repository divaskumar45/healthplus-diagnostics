function bookTest() {
  const name = document.querySelector('input[placeholder="Patient Name"]').value;
  const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;

  const tests = [];
  document.querySelectorAll('.test-item:checked').forEach((item) => {
    tests.push(item.value);
  });

  if (!name || !mobile || tests.length === 0) {
    alert("Please fill name, mobile and select at least one test");
    return;
  }

  db.collection("testBookings").add({
    name: name,
    mobile: mobile,
    email: email,
    tests: tests,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("✅ Test booked successfully!");
  })
  .catch((error) => {
    alert("❌ Error: " + error.message);
  });
}

