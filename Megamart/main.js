
function calculateRewardPoints(customerTier, orderTotal) {
    if (
        typeof orderTotal !== "number" ||
        !Number.isFinite(orderTotal)
    ) {
        return -1;
    }

    let points = 0;
    if (customerTier === "MEMBER") {

        points = orderTotal / 10000;

    }
    else if (customerTier === "VIP") {

        if (orderTotal >= 500000) {

            points = (orderTotal / 10000) * 2;

        } else {

            points = orderTotal / 10000;

        }

    }

    else {

        return -1;

    }

    return Math.floor(points);
}

function assertEquals(expected, actual, testName) {

    if (expected === actual) {

        console.log(
            `%cPASSED: ${testName}`,
            "color: green; font-weight: bold;"
        );

    } else {

        console.log(
            `%cFAILED: ${testName}`,
            "color: red; font-weight: bold;"
        );

        console.log("   Expected:", expected);
        console.log("   Actual  :", actual);
    }
}
