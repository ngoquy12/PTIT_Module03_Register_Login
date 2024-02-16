// Elements của trang
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const alertError = document.getElementById("alertError");

// Lắng nghe sự kiện submit form đăng nhập tài khoản
formLogin.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  // Validate dữ liệu đầu vào

  // Lấy dữ liệu từ local về
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm kiếm email và mật khẩu người dùng nhập vào có tồn tại trên local ?
  const findUser = userLocal.find(
    (user) =>
      user.email === emailElement.value &&
      user.password === passwordElement.value
  );

  if (!findUser) {
    // Nếu không thì thông báo cho người dùng nhập lại dữ liệu
    alertError.style.display = "block";
  } else {
    // Nếu có thì đăng nhập thành công và chuyển hướng về trang chủ
    window.location.href = "index.html";

    // Lưu thông tin của user đăng nhập lên local
    localStorage.setItem("userLogin", JSON.stringify(findUser));
  }
});
