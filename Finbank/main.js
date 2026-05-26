function calculateTransactionFee(transactionType, amount) {

    if (amount < 0) {
        return "Lỗi: Số tiền không hợp lệ!";
    }

    let fee = 0;
    switch (transactionType) {

        case "DEPOSIT":
            fee = 0;
            break;

        case "WITHDRAW":

            if (amount <= 1000000) {
                fee = 1100;

            } else if (amount <= 5000000) {
                fee = 2200;

            } else {
                fee = 3300;
            }

            break;

        case "TRANSFER":

            if (amount <= 1000000) {
                fee = 2000;

            } else if (amount <= 5000000) {
                fee = 5000;

            } else {
                fee = 7000;
            }

            break;

        default:
            return "Lỗi: Loại giao dịch không được hỗ trợ!";
    }

    return fee;
}
