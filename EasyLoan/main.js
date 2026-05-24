
function verifyLoanEligibility(user) {
   if (!user.isActive) {
    return "Từ chối: Tài khoản đang bị khóa";
}
       if (user.age < 18) {
    return "Từ chối: Khách hàng chưa đủ tuổi";
}
           if (user.income < 10000000) {
    return "Từ chối: Thu nhập không đủ điều kiện";
}
              if (user.creditScore <= 600) {
    return "Từ chối: Điểm tín dụng quá thấp";
}
                    if (user.hasBadDebt === true) {
    return "Từ chối: Khách hàng đang có nợ xấu";
}
      return "Thành công: Đủ điều kiện vay vốn";
}
console.log("Kết quả test:", verifyLoanEligibility(testUser));