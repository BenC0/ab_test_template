export function get(selector, all = true)  {
	// Get element
	let els = []
	if (all && typeof selector === "string" && selector.replace(/ /g, '') !== "") {
		els = [...document.querySelectorAll(selector)]
	} else {
		els = [document.querySelector(selector)]
	}
	return els.length !== 0 ? els : false
}

export function getAll(selector) {
	// Alias for get(selector, true)
	return get(selector, true)
}

export function exists(input) {
	// Check element exists
	if (typeof input === "string") {
		return !!document.querySelector(input)
	}
	return !!input
}

export function createVirtualElement(html) {
	// Creates a virtual element for use in other functions
    let template = document.createElement('template');
    html = html.trim()
    template.innerHTML = html;
    let virtEl = template.content.firstChild;
	return virtEl
}

export function replace(target, html) {
	// Replace pre-existing element
	let tempEl = createVirtualElement(html)
	let target = document.querySelector(input)
	target.parentNode.replaceChild(tempEl, target)
	return tempEl
}

export function add(html, method, target) {
	// add element to page
	let tempEl = createVirtualElement(html)
	let targetEl = document.querySelector(target)
	return targetEl.insertAdjacentElement(method, tempEl)
}

export function remove(input) {
	// Remove element
	if (typeof input === "string") {
		input = document.querySelector(input)
	}
	input.remove()
}

export const elementManagement = {
	get,
	getAll,
	exists,
	add,
	remove,
}

export default elementManagement