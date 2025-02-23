<!DOCTYPE html>
<html>
<head>
    <title>Your OTP Code</title>
</head>
<body>
    <h2>Hello,</h2>
    <p>Your OTP Code is: <strong>{{ $otp }}</strong></p>
    <p>This OTP will expire in 5 minutes.</p>
    <p>If you did not request this, please ignore this email.</p>
    <br>
    <p>Best Regards,</p>
    <p>{{ config('app.name') }}</p>
</body>
</html>