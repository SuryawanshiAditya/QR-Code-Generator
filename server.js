const express = require('express')
const QRcode = require('qrcode')

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/generate",async (req,res) => {
    try{
        const { text , qrColor, bgColor } = req.body;
        const qr = await QRcode.toDataURL(text , { 
            color: {
                dark: qrColor,
                light:bgColor
            }
        });

        res.json({
            success: true,
            qr
        });

    }catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        });
    }
});

app.listen(3000,() => {
    console.log("server Running on http://localhost:3000");
});