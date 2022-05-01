export function strictEquals(a, b) {
	if (
		(Object.is(a, 0) && Object.is(b, -0)) ||
		(Object.is(b, 0) && Object.is(a, -0))
	) {
		return true;
	}
	if (Number.isNaN(a) && Number.isNaN(b)) {
		return false;
	}
	return Object.is(a, b);
}
