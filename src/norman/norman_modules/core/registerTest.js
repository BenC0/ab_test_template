/**
 * Registers a test in the window.norman object for logging and debugging purposes
 * @param {string} testID A string to identify the test, this is consistent with the CSS "test_loaded" body class and test tracking ID
 * @param {object} variant An object of various details specific to the variant that has loaded. A common use case is the variant name/id 
 * @param {object} [extraDetails={}] An object of additional details. Does not need to be variant specific. Defaults to an empty object. 
 * @returns {object} Returns the stored test from the window.norman object
 */
export default function registerTest(testID, variant, extraDetails = {}) {
	let testConfig = {
		variant,
		id: testID,
	}
	for (const property in extraDetails) {
		testConfig[property] = extraDetails[property]
	}
	window.norman = window.norman || []
	window.norman[testID] = {
		logs: [],
		testConfig,
	}

	return window.norman[testID]
}