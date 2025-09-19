async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  // Temporary password setup based on role
  const password = role === "owner" ? "owner123" : "rep123";

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    localStorage.setItem("role", role);
    window.location.href = "dashboard.html";
  }
}
