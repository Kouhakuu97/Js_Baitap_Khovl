/** BÀI 1 
 * INPUT
 *  - Có được value ngày tháng năm của người dùng nhập
 * HANDLE
 * - Tạo biến ipNgay, ipThang, ipNam và checkDay để kiểm tra tháng đó có tối đa bao nhiêu ngày
 * - Dùng swich(ipThang) đối với tháng 1,3,5,7,8,10 có 31 ngày, đối vói tháng 4,6,9,11 có 30 ngày
 * - Tháng 2 thì xét trường hợp: Nếu nam %4 == 0 && nam % 100 != 0 thì tháng đó có 29 ngày còn ngược lại thì có 28 ngày
 * OUTPUT:
    -Xuất ra ngày / tháng / năm tiếp theo và trước đó
 */
var pBefore = document.getElementById("pBefore");

var btnAfter = (document.getElementById("btnAfter").onclick = function () {
  var ipNgay = Number(document.getElementById("ipNgay").value);
  var ipThang = Number(document.getElementById("ipThang").value);
  var ipNam = Number(document.getElementById("ipNam").value);

  var checkDay;

  if (isNaN(ipNgay) || isNaN(ipThang) || isNaN(ipNam)) {
    alert("Yêu cầu nhập số !!");
    return;
  }
  if (ipNgay < 1 || ipNgay > 31) {
    alert("Bạn nhập sai ngày!!");
    return;
  }
  if (ipThang < 1 || ipThang > 12) {
    alert("Bạn nhập sai tháng!!");
    return;
  }

  if (ipThang == 4 || ipThang == 6 || ipThang == 9 || ipThang == 11) {
    if (ipNgay > 30) {
      alert("Bạn nhập sai ngày!!");
      return;
    }
  }
  if (ipThang == 2) {
    if (ipNgay > 29) {
      alert("Bạn nhập sai ngày!!");
      return;
    }
  }
  if (ipNam < 1) {
    alert("Bạn nhập sai năm!!");
    return;
  }
  switch (ipThang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      checkDay = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      checkDay = 30;
      break;
    case 2:
      if ((ipNam % 4 == 0 && ipNam % 100 != 0) || ipNam % 400 == 0) {
        checkDay = 29;
      } else {
        checkDay = 28;
      }
      break;
    default:
      checkDay = 0;
  }
  if (ipNgay == checkDay) {
    if (ipThang == 12) {
      ipNgay = 1;
      ipThang = 1;
      ipNam++;
    } else {
      ipNgay = 1;
      ipThang++;
    }
  } else {
    ipNgay++;
  }
  pAfter.style.display = "block";
  pAfter.innerHTML =
    "Ngày / tháng / năm tiếp theo là: " +
    ipNgay +
    " / " +
    ipThang +
    " / " +
    ipNam;
});
var btnBefore = (document.getElementById("btnBefore").onclick = function () {
  var ipNgay = Number(document.getElementById("ipNgay").value);
  var ipThang = Number(document.getElementById("ipThang").value);
  var ipNam = Number(document.getElementById("ipNam").value);
  var checkDay;
  if (isNaN(ipNgay) || isNaN(ipThang) || isNaN(ipNam)) {
    alert("Yêu cầu nhập số !!");
    return;
  }
  if (ipNgay < 1 || ipNgay > 31) {
    alert("Bạn nhập sai ngày!!");
    return;
  }
  if (ipThang < 1 || ipThang > 12) {
    alert("Bạn nhập sai tháng!!");
    return;
  }

  if (ipThang == 4 || ipThang == 6 || ipThang == 9 || ipThang == 11) {
    if (ipNgay > 30) {
      alert("Bạn nhập sai ngày!!");
      return;
    }
  }
  if (ipThang == 2) {
    if (ipNgay > 29) {
      alert("Bạn nhập sai ngày!!");
      return;
    }
  }
  if (ipNam < 1) {
    alert("Bạn nhập sai năm!!");
    return;
  }
  if (ipNgay == 1 && ipThang == 1) {
    ipNgay = 31;
    ipThang = 12;
    ipNam--;
    pBefore.style.display = "block";
    pBefore.innerHTML =
      "Ngày / tháng / năm trước đó là: " +
      ipNgay +
      " / " +
      ipThang +
      " / " +
      ipNam;
    return;
  }
  if (ipNgay == 1) {
    ipThang--;
    switch (ipThang) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        checkDay = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        checkDay = 30;
        break;
      case 2:
        if ((ipNam % 4 == 0 && ipNam % 100 != 0) || ipNam % 400 == 0) {
          checkDay = 29;
        } else {
          checkDay = 28;
        }
        break;
      default:
        checkDay = 0;
    }
    ipNgay = checkDay;
  } else {
    ipNgay--;
  }
  pBefore.style.display = "block";
  pBefore.innerHTML =
    "Ngày / tháng / năm trước đó là: " +
    ipNgay +
    " / " +
    ipThang +
    " / " +
    ipNam;
});

/**
 * BÀI 2
 * INPUT
 * -  Có được giá trị tháng và năm của user
 * HANDLE
 * - Tạo biến ipMonths, ipNam và soNgayTrongThang
 * - Dùng switch(ipMonths) để kiểm tra nếu soThang = 1,3,5,7,8,10,12 thì soNgayTrongThang sẽ là 31 ngày
 * - Nếu ipMonths = 4,6,9,11 thì soNgayTrongThang sẽ là 30 ngày
 * - Nếu ipMonths = 2 thì xét ipYears % 4 == 0 && ipNam % 100 != 0 || ipNam % 400 == 0 thì tháng 2 có 29 ngày ngược lại có 28 ngày
 * ÔUTPUT
 * - Xuất thông tin có bao nhiêu ngày
 */
var daysOfMonth = document.getElementById("daysOfMonth");

var btnFindDay = (document.getElementById("btnFindDay").onclick = function () {
  var ipMonths = Number(document.getElementById("ipMonths").value);
  var ipYears = Number(document.getElementById("ipYears").value);
  var soNgayTrongThang;

  if (isNaN(ipMonths) || isNaN(ipYears)) {
    alert("Nhập vào ngày và năm!!");
    return;
  }
  if (ipMonths < 1 || ipMonths > 12) {
    alert("Nhập sai tháng");
    return;
  }
  switch (ipMonths) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      soNgayTrongThang = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      soNgayTrongThang = 30;
      break;
    case 2:
      if ((ipYears % 4 == 0 && ipYears % 100 != 0) || ipYears % 400 == 0) {
        soNgayTrongThang = 29;
      } else {
        soNgayTrongThang = 28;
      }
      break;
    default:
      soNgayTrongThang = 0;
  }
  daysOfMonth.style.display = "block";
  daysOfMonth.innerHTML =
    "Tháng " + ipMonths + " có " + soNgayTrongThang + " ngày";
});

/**
 * BÀI 3
 * INPUT
 * - Có số từ user
 * Handle
 * - Tạo biến soCoBaSo, soHangTram, soHangChuc,        soHangDonVi, read
 * - Tách số soHangTram, soHangChuc, soHangDonVi
 * - Sử dụng switch(){case} để xuất ra cách đọc soHangTram, soHangChuc, soHangDonVi
 * Output
 * - Xuất cách đọc ba số
 */

var pRead = document.getElementById("pRead");

var btnRead = (document.getElementById("btnRead").onclick = function () {
  var ipNumber = document.getElementById("ipNumber").value;
  var soHangTram = Math.floor(ipNumber / 100);
  var soHangChuc = Math.floor((ipNumber % 100) / 10);
  var soHangDonVi = Math.floor(ipNumber % 10);
  if (isNaN(ipNumber)) {
    alert("Chỉ được nhập số");
    return;
  }
  switch (soHangTram) {
    case 1:
      soHangTram = "Một Trăm";
      break;
    case 2:
      soHangTram = "Hai Trăm";
      break;
    case 3:
      soHangTram = "Ba Trăm";
      break;
    case 4:
      soHangTram = "Bốn Trăm";
      break;
    case 5:
      soHangTram = "Năm Trăm";
      break;
    case 6:
      soHangTram = "Sáu Trăm";
      break;
    case 7:
      soHangTram = "Bảy Trăm";
      break;
    case 8:
      soHangTram = "Tám Trăm";
      break;
    case 9:
      soHangTram = "Chín Trăm";
      break;
    default:
      soHangTram = "Không hợp lệ!!";
  }
  console.log(soHangTram);
  switch (soHangChuc) {
    case 1:
      soHangChuc = " Mười";
      break;
    case 2:
      soHangChuc = " Hai Mươi";
      break;
    case 3:
      soHangChuc = " Ba Mươi";
      break;
    case 4:
      soHangChuc = " Bốn Mươi";
      break;
    case 5:
      soHangChuc = " Năm Mươi";
      break;
    case 6:
      soHangChuc = " Sáu Mươi";
      break;
    case 7:
      soHangChuc = " Bảy Mươi";
      break;
    case 8:
      soHangChuc = " Tám Mươi";
      break;
    case 9:
      soHangChuc = " Chín Mươi";
      break;
    default:
      soHangChuc = "Không hợp lệ!!!";
  }
  switch (soHangDonVi) {
    case 1:
      soHangDonVi = " Một";
      break;
    case 2:
      soHangDonVi = " Hai ";
      break;
    case 3:
      soHangDonVi = " Ba ";
      break;
    case 4:
      soHangDonVi = " Bốn ";
      break;
    case 5:
      soHangDonVi = " Năm ";
      break;
    case 6:
      soHangDonVi = " Sáu ";
      break;
    case 7:
      soHangDonVi = " Bảy ";
      break;
    case 8:
      soHangDonVi = " Tám ";
      break;
    case 9:
      soHangDonVi = " Chín ";
      break;
    default:
      soHangDonVi = "Không hợp lệ!!";
  }

  pRead.style.display = "block";
  pRead.innerHTML = soHangTram + soHangChuc + soHangDonVi;
});



/**
 * BÀI 4
 * INPUT
 * - Nhập tên và tọa độ của ba sinh viên
 * - Tọa độ trường (0;0)
 * HANDLE
 * - Tạo biến ipName1, ipName2, ipName3
 * - Tương tự tạo các biến X và Y theo thứ tự
 * - Tính khoảng cách tọa độ của ba sinh viên đến tọa độ trường
 * - So sánh khoảng cách giữa ba sinh viên và đưa ra kết quả max
 * OUTPUT
 * - Xuất tên sinh viên và khoảng cách xa nhất
 */

var pName = document.getElementById("pName");
var pToaDo = document.getElementById("pToaDo");

var btnInfo = document.getElementById("btnInfo").onclick = function () {
  var ipName1 = document.getElementById("ipName1").value;
  var ipName2 = document.getElementById("ipName2").value;
  var ipName3 = document.getElementById("ipName3").value;
  var ipX1 = Number(document.getElementById("ipX1").value);
  var ipY1 = Number(document.getElementById("ipY1").value);
  var ipX2 = Number(document.getElementById("ipX2").value);
  var ipY2 = Number(document.getElementById("ipY2").value);
  var ipX3 = Number(document.getElementById("ipX3").value);
  var ipY3 = Number(document.getElementById("ipY3").value);
  // Tọa độ trường học
  var XZero = 0;
  var YZero = 0;
  // Tính khoảng cách
  var infoBanNu1 = Math.sqrt(
    Math.pow(ipX1 - XZero, 2) + Math.pow(ipY1 - YZero, 2)
  );
  var infoBanNu2 = Math.sqrt(
    Math.pow(ipX2 - XZero, 2) + Math.pow(ipY2 - YZero, 2)
  );
  var infoBanNu3 = Math.sqrt(
    Math.pow(ipX3 - XZero, 2) + Math.pow(ipY3 - YZero, 2)
  );
  // check
  if (ipName1 == "" || ipName2 == "" || ipName3 == "") {
    alert("Nhập tên sinh viên!!!");
    return;
  }
  if (
    isNaN(ipX1) ||
    isNaN(ipX2) ||
    isNaN(ipX3) ||
    isNaN(ipY1) ||
    isNaN(ipY2) ||
    isNaN(ipY3)
  ) {
    alert("Chỉ được nhập số");
    return;
  }
  // Kiểm tra
  var maxToaDo;
  var sinhVien;
  if (infoBanNu1 > infoBanNu2 && infoBanNu1 > infoBanNu3) {
    sinhVien = ipName1;
    maxToaDo = infoBanNu1;
  } else if (infoBanNu2 > infoBanNu3 && infoBanNu2 > infoBanNu1) {
    sinhVien = ipName2;
    maxToaDo = infoBanNu2;
  } else {
    sinhVien = ipName3;
    maxToaDo = infoBanNu3;
  }
  
  pName.style.display = "block";
  pName.innerHTML = "Sinh viên : " + sinhVien + " có khoảng cách xa nhất";

  pToaDo.style.display = "block"
  pToaDo.innerHTML = "Khoảng cách là: " + Math.floor(maxToaDo);
};  
