const db = require('./config/database');

db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
        console.error('Lỗi truy vấn: ', err);
        return;
    }
    console.log('Kết quả truy vấn: ', results[0].result);
});
