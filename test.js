export function RunTest(testFunction) {
	console.log(cero_equals_negative_cero(testFunction));
	console.log(negative_cero_equals_cero(testFunction));
	console.log(nan_equals_nan(testFunction));
}

const TEST_RESULTS = {
	PASS: '👍 PASS',
	FAIL: '😢 FAIL',
};

function cero_equals_negative_cero(testFunction) {
	const value = testFunction(0, -0);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: 0 strict equal -0 = ${value}`;
}

function negative_cero_equals_cero(testFunction) {
	const value = testFunction(-0, 0);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: -0 strict equal 0 = ${value}`;
}

function nan_equals_nan(testFunction) {
	const value = testFunction(NaN, NaN);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: NaN strict equal NaN = ${value}`;
}
