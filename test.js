import { strictEquals } from './strictEquals.js';

export function runTestStrictEquals() {
	console.log(strictEqual_ceroEqualNegativeCero_true(strictEquals, true));
	console.log(strictEqual_negativeCeroEqualCero_true(strictEquals, true));
	console.log(strictEqual_ceroEqualNan_false(strictEquals, false));
	console.log(strictEqual_nanEqualNan_false(strictEquals, false));
	console.log(strictEqual_fiveEqualFive_true(strictEquals, true));
	console.log(strictEqual_fiveEqualTen_false(strictEquals, false));
	console.log(strictEqual_fiveEqualFiveString_false(strictEquals, false));
	console.log(strictEqual_oneEqualTrue_false(strictEquals, false));
	console.log(strictEqual_trueEqualTrue_true(strictEquals, true));
	console.log(strictEqual_trueEqualFalse_false(strictEquals, false));
	console.log(strictEqual_textStringEqualTextString_true(strictEquals, true));
	console.log(
		strictEqual_textStringEqualOtherString_false(strictEquals, false)
	);
	console.log(strictEqual_nullEqualNull_true(strictEquals, true));
	console.log(strictEqual_undefinedEqualUndefined_true(strictEquals, true));
	console.log(strictEqual_infinityEqualInfinity_true(strictEquals, true));
}

const TEST_RESULTS = {
	PASS: 'PASS',
	FAIL: 'FAIL!!!',
};

function getTestResult(value, expectedValue) {
	return value === expectedValue ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
}

function strictEqual_ceroEqualNegativeCero_true(testFunction, expectedValue) {
	const value = testFunction(0, -0);
	const result = getTestResult(value, expectedValue);
	return `${result}: 0 === -0 = ${value}`;
}

function strictEqual_negativeCeroEqualCero_true(testFunction, expectedValue) {
	const value = testFunction(-0, 0);
	const result = getTestResult(value, expectedValue);
	return `${result}: -0 === 0 = ${value}`;
}

function strictEqual_nanEqualNan_false(testFunction, expectedValue) {
	const value = testFunction(NaN, NaN);
	const result = getTestResult(value, expectedValue);
	return `${result}: NaN === NaN = ${value}`;
}

function strictEqual_ceroEqualNan_false(testFunction, expectedValue) {
	const value = testFunction(0, NaN);
	const result = getTestResult(value, expectedValue);
	return `${result}: 0 === NaN = ${value}`;
}

function strictEqual_fiveEqualFive_true(testFunction, expectedValue) {
	const value = testFunction(5, 5);
	const result = getTestResult(value, expectedValue);
	return `${result}: 5 === 5 = ${value}`;
}

function strictEqual_fiveEqualTen_false(testFunction, expectedValue) {
	const value = testFunction(5, 10);
	const result = getTestResult(value, expectedValue);
	return `${result}: 5 === 10 = ${value}`;
}

function strictEqual_fiveEqualFiveString_false(testFunction, expectedValue) {
	const value = testFunction(5, '5');
	const result = getTestResult(value, expectedValue);
	return `${result}: 5 === "5" = ${value}`;
}

function strictEqual_oneEqualTrue_false(testFunction, expectedValue) {
	const value = testFunction(1, true);
	const result = getTestResult(value, expectedValue);
	return `${result}: 1 === true = ${value}`;
}

function strictEqual_trueEqualTrue_true(testFunction, expectedValue) {
	const value = testFunction(true, true);
	const result = getTestResult(value, expectedValue);
	return `${result}: true === true = ${value}`;
}

function strictEqual_trueEqualFalse_false(testFunction, expectedValue) {
	const value = testFunction(true, false);
	const result = getTestResult(value, expectedValue);
	return `${result}: true === false = ${value}`;
}

function strictEqual_textStringEqualTextString_true(
	testFunction,
	expectedValue
) {
	const value = testFunction('text', 'text');
	const result = getTestResult(value, expectedValue);
	return `${result}: "text" === "text" = ${value}`;
}

function strictEqual_textStringEqualOtherString_false(
	testFunction,
	expectedValue
) {
	const value = testFunction('text', 'other');
	const result = getTestResult(value, expectedValue);
	return `${result}: "text" === "other" = ${value}`;
}

function strictEqual_nullEqualNull_true(testFunction, expectedValue) {
	const value = testFunction(null, null);
	const result = getTestResult(value, expectedValue);
	return `${result}: null === null = ${value}`;
}

function strictEqual_undefinedEqualUndefined_true(testFunction, expectedValue) {
	const value = testFunction(undefined, undefined);
	const result = getTestResult(value, expectedValue);
	return `${result}: undefined === undefined = ${value}`;
}

function strictEqual_infinityEqualInfinity_true(testFunction, expectedValue) {
	const value = testFunction(Infinity, Infinity);
	const result = getTestResult(value, expectedValue);
	return `${result}: Infinity === Infinity = ${value}`;
}
