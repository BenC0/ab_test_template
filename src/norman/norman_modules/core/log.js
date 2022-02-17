/**
 * Logs a message to the specified test in the window.norman object
 * @param {string} testID The ID of the test (Usually pulled dynamically from the ab_test_config file) 
 * @param {*} msg The message to be logged, can be any type but strings and objects are most common.
 */
export default function log(testID, msg) {
	let date = new Date
	window.norman[testID].logs.push({
		"msg": msg,
		"id": `${testID}:${window.norman[testID].logs.length}`,
		"time": date.toTimeString(),
		"date": date.toDateString()
	})
}