function calculateShippingFee(serviceType, weight) {
    if (weight < 0) {
        return "Lỗi: Khối lượng không hợp lệ"
    }
    let baseFee = 0;
    let surcharge = 0;
    
 switch(serviceType){
    case "STANDARD" :
        baseFee = 20000;
        break;
          case "EXPRESS":
            baseFee = 40000;
            break;

        case "SAME_DAY":
            baseFee = 80000;
            break;

        default:
            return "Lỗi: Loại dịch vụ không hợp lệ!";
    }
    if (weight < 5) {
        surcharge = 0;

    } else if (weight <= 20) {
        surcharge = 10000;

    } else {
        surcharge = 50000;
    }

    return baseFee + surcharge;
}