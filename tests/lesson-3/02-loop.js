// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log(sum);
// 2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}
// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const list = [];
for (let i = 1; i <= 99; i += 2) {
    list.push(i)
}
console.log(list)
// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).
const name = 'phuongdt';
for (let i = 1; i <= 10; i++) {
    console.log(`${name}${i}@gmail.com`)
}
// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
const doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 8800 },
    { month: 9, total: 900 },
    { month: 10, total: 1000 },
    { month: 11, total: 1100 },
    { month: 12, total: 1200 },
]
let tong = 0
for(let i = 0;i <=11; i++){
    tong = tong + doanhThu[i].total
}
console.log(tong);
