/**
 * Bài 1: 
 * Đầu vào:
 * - 3 số nguyên
 * 
 * Xử lý:
 * - Tạo biến a, b, c và gán lần lượt từng số nguyên 
 * - Tạo biến kq
 * - So sánh từng giá trị a,b,c theo cách if..else lồng nhau
 *      + if(a < b) tiếp tục so sánh a,b với c 
 *          . if(c < a) => kq = c < a < b
 *          . else if(b < c) => kq = a < b < c
 *          . else kq = a < c < b
 *      + if (b < a) tiếp tục so sánh a,b với c
 *          . if(c < b) => kq = c < b < a
 *          . else if(a < c) => kq = b < a < c
 *          . else kq = b < c < a
 *      + else kq = a < b < c
 * Đầu ra:
 * 
 * + kq với 3 số được sắp xếp theo thứ tự tăng dần
 */
document.getElementById('kq_Bai1').onclick = function () {
    var a = Number(document.getElementById('so1').value);
    var b = Number(document.getElementById('so2').value);
    var c = Number(document.getElementById('so3').value);
    var kq;

    if(a < b){
        if(c < a){
            kq = c + " < " + a + " < " + b;
        }
        else if(b < c){
            kq = a + " < " + b + " < " + c;
        }
        else{
            kq = a + " < " + c + " < " + b;
        }
    }
    else if(b < a){
        if(c < b){
            kq = c + " < " + b + " < " + a;
        }
        else if(a < c){
            kq = b + " < " + a + " < " + c;
        }
        else{
            kq = b + " < " + c + " < " + a;
        }
    }else{
        kq = a + " < " + b + " < " + c;
    }

    document.getElementById('KQ1').innerHTML = kq;
}
/**
 * Bài 2: 
 * Đầu vào:
 * - Thành viên: Bố, Mẹ, Anh trai, Em gái
 * 
 * Xử lý:
 * - Tạo biến tv và gán Thành viên vào biến
 * - Tạo biến loiChao
 * - Kiểm tra tv là Thành viên nào : 
 *      + Nếu B thì loiChao là Xin chào Bố
 *      + Nếu M thì loiChao là Xin chào Mẹ
 *      + Nếu A thì loiChao là Xin chào Anh trai
 *      + Nếu E thì loiChao là Xin chào Em gái
 *      + Nếu rỗng thì loiChao là Xin chào Người lạ ơi !!
 * 
 * Đầu ra:
 * - Lời chào ứng với Thành viên đã chọn
 */

document.getElementById('kq_Bai2').onclick = function () {
    var tv = document.getElementById('thanhVien').value;
    var loiChao = "Xin chào ";

    switch(tv){ 
        case "B":
            loiChao = loiChao + "Bố";
            break;
        case "M":
            loiChao = loiChao + "Mẹ";
            break;
        case "A":
            loiChao = loiChao + "Anh trai";
            break;
        case "E":
            loiChao = loiChao + "Em gái";
            break;
        default:
            loiChao = loiChao + "Người lạ ơi !";
            break;
    }

    document.getElementById('KQ2').innerHTML = loiChao;
}

/**
 * Bài 3:
 * 
 * Đầu vào:
 * - 3 Số nguyên
 * 
 * Xủ lý:
 * - Tạo biến a,b,c và gán lần lượt 3 số nguyên vào biến
 * - Tạo biến countC = 0 và countL = 0 
 * - Lấy từng số nguyên kiểm tra xem có chia hết cho 2 không (a % 2 == 0), nếu chia hết cho 2 thì countC tăng lên 1
 * - CountL = 3 - CountC
 * 
 * Đầu ra:
 * - Số lượng số chẵn
 * - Số lượng số lẻ
 */
document.getElementById('kq_Bai3').onclick = function () {
    var a = Number(document.getElementById('soNguyen1').value);
    var b = Number(document.getElementById('soNguyen2').value);
    var c = Number(document.getElementById('soNguyen3').value);
    var countC = 0;
    var countL = 0;

    if(a % 2 == 0){
        countC++;
    }
    if(b % 2 == 0){
        countC++;
    }
    if(c % 2 == 0){
        countC++;
    }
    countL = 3 - countC;

    document.getElementById('KQ3').innerHTML = "Có "+ countC + " số chẳn và " + countL + " số lẻ";
}

/**
 * Bài 4:
 * 
 * Đầu vào:
 * - 3 cạnh của tam giác
 * 
 * Xử lý:
 * - Tạo biến a,b,c và gán từng  cạnh của tam giác vào biến
 * - Tạo biến kq
 * - Kiểm tra 3 cạnh của tam giác:
 *      + Nếu a = b = c thì kq = Tam giác đều
 *      + Nếu a = b hoặc b = c hoặc a = c thì kq = Tam giác cân 
 *      + Nếu a = sqrt(b*b + c*c) hoặc b = sqrt(a*a + c*c) hoặc c = sqrt(a*a + b*b) thì kq = Tam giác vuông
 *      + Nếu không thõa các điều kiện trên thì kq = Loại tam giác nào đó
 * 
 * Đầu ra:
 * - Xác định được loại tam giác
 */
document.getElementById('kq_Bai4').onclick = function () {
    console.log("bài 4");
    var a = Number(document.getElementById('canh1').value);
    var b = Number(document.getElementById('canh2').value);
    var c = Number(document.getElementById('canh3').value);
    var kq;

    if(a === b && a=== c && b === c){
        kq = "Tam giác đều";
    }
    else if(a === b || a=== c || b === c){
        kq = "Tam giác cân";
    }
    else if(a == Math.sqrt(b*b + c*c) || c == Math.sqrt(b*b + a*a) || b == Math.sqrt(a*a + c*c) ){
        kq = "Tam giác vuông";
    }
    else{
        kq = "Tam giác nào đó";
    }

    document.getElementById('KQ4').innerHTML = kq;
}
