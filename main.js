// Thay URL bằng link menu online của bạn
const MENU_URL = "https://miximinh907-ai.github.io/CPM-2/menuCpkVip.html?v=1";

// Tự động tải và chèn giao diện HTML vào H5GG
fetch(MENU_URL)
  .then(res => res.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch(err => {
    console.log("Lỗi tải menu: " + err);
  });
