function testMember100k() {

    const result =
        calculateRewardPoints("MEMBER", 100000);

    assertEquals(10, result, "MEMBER 100k");
}
function testVIP499999() {

    const result =
        calculateRewardPoints("VIP", 499999);

    assertEquals(49, result, "VIP 499999");
}
function testVIPExact500k() {

    const result =
        calculateRewardPoints("VIP", 500000);

    assertEquals(100, result, "VIP exact 500k");
}
function testVIP500001() {

    const result =
        calculateRewardPoints("VIP", 500001);

    assertEquals(100, result, "VIP 500001");
}
function testVIP200k() {

    const result =
        calculateRewardPoints("VIP", 200000);

    assertEquals(20, result, "VIP 200k");
}
function testMemberZero() {

    const result =
        calculateRewardPoints("MEMBER", 0);

    assertEquals(0, result, "MEMBER 0");
}

function testInvalidTier() {

    const result =
        calculateRewardPoints("GOLD", 100000);

    assertEquals(-1, result, "Invalid tier");
}
function testStringInput() {

    const result =
        calculateRewardPoints("VIP", "500000");

    assertEquals(-1, result, "String input");
}
function testNaNInput() {

    const result =
        calculateRewardPoints("VIP", NaN);

    assertEquals(-1, result, "NaN input");
}
function testInfinityInput() {

    const result =
        calculateRewardPoints("VIP", Infinity);

    assertEquals(-1, result, "Infinity input");
}
function testNegativeInput() {

    const result =
        calculateRewardPoints("VIP", -50000);

    assertEquals(-5, result, "Negative input");
}
function runAllTests() {

    console.log("====================================");
    console.log("RUNNING UNIT TESTS...");
    console.log("====================================");

    testMember100k();
    testVIP499999();
    testVIPExact500k();
    testVIP500001();
    testVIP200k();
    testMemberZero();
    testInvalidTier();
    testStringInput();
    testNaNInput();
    testInfinityInput();
    testNegativeInput();

    console.log("====================================");
    console.log("ALL TESTS FINISHED");
    console.log("====================================");
}

runAllTests();