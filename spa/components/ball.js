/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div1;
	let div0;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "bouncingball svelte-1yqcart");
			attr(div1, "class", "ball-wrapper svelte-1yqcart");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;