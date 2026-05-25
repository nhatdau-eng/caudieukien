function Kiem_tra_BMI() {
let weight =
    Number(document.getElementById("can_nang").value);

let height =
    Number(document.getElementById("chieu_cao").value);
let bmi = weight/(height * height);
 let result = "";

            if (bmi < 18.5) {

                result = "Gầy";

            } else if (bmi < 25) {

                result = "Bình thường";

            } else if (bmi < 30) {

                result = "Thừa cân";

            } else {

                result = "Béo phì";
}
   document.getElementById("result").innerText =
                "BMI = " + bmi.toFixed(2) +
                " => " + result;
}