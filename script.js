document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Validasi sederhana (sesuaikan dengan kebutuhan Anda)
  if (username === "admin" && password === "password123") {
    // Redirect ke halaman utama
    window.location.href = "https://kedai-coffe.vercel.app/#contac";
  } else {
    // Tampilkan pesan error
    errorMsg.textContent = "Username atau password salah";
  }
});
