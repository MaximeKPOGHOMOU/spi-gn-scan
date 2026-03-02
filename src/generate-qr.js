const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = "https://spi-gn-infos.netlify.app/";
const outputDir = path.join(__dirname, 'qr-codes');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

QRCode.toFile(path.join(outputDir, 'spi-gn.png'), url, {
  width: 300,
  errorCorrectionLevel: 'H'
}, (err) => {
  if (err) throw err;
  console.log("QR code généré et sauvegardé dans qr-codes/spi-gn.png");
});