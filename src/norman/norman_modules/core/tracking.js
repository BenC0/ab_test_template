import * as test_config from "../../config.js"
import log from "../core/log"
/**
 * Function to push events to dataLayer
 * @param {string} variant Variation ID/Name
 * @param {string} eventAction Event action to be tracked
 * @param {boolean} impressionEvent Flags where to track event as impression and use custom dimension.
 */
export function pushToDataLayer(variant = "", eventAction = "", impressionEvent = false) {
	if (variant !== "" && eventAction !== "") {
		window.dataLayer = window.dataLayer || []
		let eventObject = {
			'event': 'CRO_Test_Event',
			'eventAction': `${eventAction}`,
			'eventLabel': `${test_config.id}-${variant}`,
		}

		if (impressionEvent !== false && test_config.customDimension !== "") {
			eventObject = {
				'event': 'CRO_Test_Impression',
				'testID': test_config.id,
				'dimension': test_config.customDimension,
				'variation': variant,
			}
		}
        log(test_config.id, {
            "type": "Event pushed to dataLayer",
            eventObject
        })
		window.dataLayer.push(eventObject)
	}
}

/**
 * Shorthand/alias function for tracking events 
 * @param {string} variant Variation ID/Name
 * @param {string} action Event action to be tracked
 * @param {boolean} [impression=false] Flags where to track event as impression or not.
 */
export default function track(variant, action, impression = false) {
    pushToDataLayer(variant, action, impression)
}