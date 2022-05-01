export function runTest(testFunction) {
	console.log(cero_equals_negative_cero(testFunction));
	console.log(negative_cero_equals_cero(testFunction));
	console.log(number_equals_nan(testFunction));
	console.log(nan_equals_nan(testFunction));
	console.log(number_equals_same_number(testFunction));
	console.log(number_equals_other_number(testFunction));
	console.log(number_equals_string(testFunction));
	console.log(number_equals_boolean(testFunction));
	console.log(boolean_equals_same_boolean(testFunction));
	console.log(boolean_equals_other_boolean(testFunction));
	console.log(string_equals_same_string(testFunction));
	console.log(string_equals_other_string(testFunction));
	console.log(null_equals_null(testFunction));
	console.log(undefined_equals_undefined(testFunction));
	console.log(infinity_equals_infinity(testFunction));
}

const TEST_RESULTS = {
	PASS: 'PASS',
	FAIL: 'FAIL!!!',
};

function cero_equals_negative_cero(testFunction) {
	const value = testFunction(0, -0);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: 0 === -0 = ${value}`;
}

function negative_cero_equals_cero(testFunction) {
	const value = testFunction(-0, 0);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: -0 === 0 = ${value}`;
}

function number_equals_nan(testFunction) {
	const value = testFunction(0, NaN);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 0 === NaN = ${value}`;
}

function nan_equals_nan(testFunction) {
	const value = testFunction(NaN, NaN);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: NaN === NaN = ${value}`;
}

function number_equals_same_number(testFunction) {
	const value = testFunction(5, 5);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: 5 === 5 = ${value}`;
}

function number_equals_other_number(testFunction) {
	const value = testFunction(5, 10);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 5 === 10 = ${value}`;
}

function number_equals_string(testFunction) {
	const value = testFunction(5, '5');
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 5 === "5" = ${value}`;
}

function number_equals_boolean(testFunction) {
	const value = testFunction(1, true);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 1 === true = ${value}`;
}

function boolean_equals_same_boolean(testFunction) {
	const value = testFunction(true, true);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: true === true = ${value}`;
}

function boolean_equals_other_boolean(testFunction) {
	const value = testFunction(true, false);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: true === false = ${value}`;
}

function string_equals_same_string(testFunction) {
	const value = testFunction('text', 'text');
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: "text" === "text" = ${value}`;
}

function string_equals_other_string(testFunction) {
	const value = testFunction('text', 'other');
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: "text" === "other" = ${value}`;
}

function null_equals_null(testFunction) {
	const value = testFunction(null, null);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: null === null = ${value}`;
}

function undefined_equals_undefined(testFunction) {
	const value = testFunction(undefined, undefined);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: undefined === undefined = ${value}`;
}

function infinity_equals_infinity(testFunction) {
	const value = testFunction(Infinity, Infinity);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: Infinity === Infinity = ${value}`;
}
