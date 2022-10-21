const distance = (a, b) => {
	// `distance` aruncă `InvalidType` dacă unul dintre parametri nu este de tip string sau String (20%)
	if (typeof a !== 'string' && !(a instanceof String) || typeof b !== 'string' && !(b instanceof String)) {
		throw new Error('InvalidType');
	}

	// `distance` returnează 0 la compararea a 2 stringuri vide (20%)
	if (a.length == 0 && b.length == 0) {
		return 0;
	}

	const m = a.length;
	const n = b.length;
	const d = new Array(m + 1);
	for (let i = 0; i <= m; i++) {
		d[i] = new Array(n + 1);
		d[i][0] = i;
	}
	for (let j = 0; j <= n; j++) {
		d[0][j] = j;
	}
	for (let j = 1; j <= n; j++) {
		for (let i = 1; i <= m; i++) {
			if (a[i - 1] === b[j - 1]) {
				d[i][j] = d[i - 1][j - 1];
			} else {
				d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + 1);
			}
		}
	}
	
	// `distance` returnează rezultatul corect la pentru 2 stringuri (20%)
	return d[m][n];
}

module.exports.distance = distance