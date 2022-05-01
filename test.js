export function runTest(testFunction) {
	console.log(strictEqual_ceroEqualNegativeCero_true(testFunction));
	console.log(strictEqual_negativeCeroEqualCero_true(testFunction));
	console.log(strictEqual_ceroEqualNan_false(testFunction));
	console.log(strictEqual_nanEqualNan_false(testFunction));
	console.log(strictEqual_fiveEqualFive_true(testFunction));
	console.log(strictEqual_fiveEqualTen_false(testFunction));
	console.log(strictEqual_fiveEqualFiveString_false(testFunction));
	console.log(strictEqual_oneEqualTrue_false(testFunction));
	console.log(strictEqual_trueEqualTrue_true(testFunction));
	console.log(strictEqual_trueEqualFalse_false(testFunction));
	console.log(strictEqual_textStringEqualTextString_true(testFunction));
	console.log(strictEqual_textStringEqualOtherString_false(testFunction));
	console.log(strictEqual_nullEqualNull_true(testFunction));
	console.log(strictEqual_undefinedEqualUndefined_true(testFunction));
	console.log(strictEqual_infinityEqualInfinity_true(testFunction));
}

const TEST_RESULTS = {
	PASS: 'PASS',
	FAIL: 'FAIL!!!',
};

function strictEqual_ceroEqualNegativeCero_true(testFunction) {
	const value = testFunction(0, -0);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: 0 === -0 = ${value}`;
}

function strictEqual_negativeCeroEqualCero_true(testFunction) {
	const value = testFunction(-0, 0);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: -0 === 0 = ${value}`;
}

function strictEqual_nanEqualNan_false(testFunction) {
	const value = testFunction(NaN, NaN);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: NaN === NaN = ${value}`;
}

function strictEqual_ceroEqualNan_false(testFunction) {
	const value = testFunction(0, NaN);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 0 === NaN = ${value}`;
}

function strictEqual_fiveEqualFive_true(testFunction) {
	const value = testFunction(5, 5);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: 5 === 5 = ${value}`;
}

function strictEqual_fiveEqualTen_false(testFunction) {
	const value = testFunction(5, 10);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 5 === 10 = ${value}`;
}

function strictEqual_fiveEqualFiveString_false(testFunction) {
	const value = testFunction(5, '5');
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 5 === "5" = ${value}`;
}

function strictEqual_oneEqualTrue_false(testFunction) {
	const value = testFunction(1, true);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: 1 === true = ${value}`;
}

function strictEqual_trueEqualTrue_true(testFunction) {
	const value = testFunction(true, true);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: true === true = ${value}`;
}

function strictEqual_trueEqualFalse_false(testFunction) {
	const value = testFunction(true, false);
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: true === false = ${value}`;
}

function strictEqual_textStringEqualTextString_true(testFunction) {
	const value = testFunction('text', 'text');
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: "text" === "text" = ${value}`;
}

function strictEqual_textStringEqualOtherString_false(testFunction) {
	const value = testFunction('text', 'other');
	const result = value ? TEST_RESULTS.FAIL : TEST_RESULTS.PASS;
	return `${result}: "text" === "other" = ${value}`;
}

function strictEqual_nullEqualNull_true(testFunction) {
	const value = testFunction(null, null);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: null === null = ${value}`;
}

function strictEqual_undefinedEqualUndefined_true(testFunction) {
	const value = testFunction(undefined, undefined);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: undefined === undefined = ${value}`;
}

function strictEqual_infinityEqualInfinity_true(testFunction) {
	const value = testFunction(Infinity, Infinity);
	const result = value ? TEST_RESULTS.PASS : TEST_RESULTS.FAIL;
	return `${result}: Infinity === Infinity = ${value}`;
}
