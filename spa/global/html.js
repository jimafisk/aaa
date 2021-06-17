/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Head from './head.js';
import Nav from './nav.js';
import Footer from './footer.js';
import { makeTitle } from '../scripts/make_title.js';

function create_fragment(ctx) {
	let html;
	let head;
	let t0;
	let body;
	let nav;
	let t1;
	let main;
	let div;
	let switch_instance;
	let t2;
	let br;
	let t3;
	let footer;
	let current;

	head = new Head({
			props: {
				title: makeTitle(/*content*/ ctx[0].filename),
				env: /*env*/ ctx[4]
			}
		});

	nav = new Nav({});

	const switch_instance_spread_levels = [
		/*content*/ ctx[0].fields,
		{ content: /*content*/ ctx[0] },
		{ allContent: /*allContent*/ ctx[2] },
		{ allLayouts: /*allLayouts*/ ctx[3] }
	];

	var switch_value = /*layout*/ ctx[1];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	footer = new Footer({
			props: { allContent: /*allContent*/ ctx[2] }
		});

	return {
		c() {
			html = element("html");
			create_component(head.$$.fragment);
			t0 = space();
			body = element("body");
			create_component(nav.$$.fragment);
			t1 = space();
			main = element("main");
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			br = element("br");
			t3 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			html = claim_element(nodes, "HTML", { lang: true, class: true });
			var html_nodes = children(html);
			claim_component(head.$$.fragment, html_nodes);
			t0 = claim_space(html_nodes);
			body = claim_element(html_nodes, "BODY", { class: true });
			var body_nodes = children(body);
			claim_component(nav.$$.fragment, body_nodes);
			t1 = claim_space(body_nodes);
			main = claim_element(body_nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div = claim_element(main_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (switch_instance) claim_component(switch_instance.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			br = claim_element(div_nodes, "BR", {});
			div_nodes.forEach(detach);
			main_nodes.forEach(detach);
			t3 = claim_space(body_nodes);
			claim_component(footer.$$.fragment, body_nodes);
			body_nodes.forEach(detach);
			html_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "container");
			attr(main, "class", "svelte-196y134");
			attr(body, "class", "svelte-196y134");
			attr(html, "lang", "en");
			attr(html, "class", "svelte-196y134");
		},
		m(target, anchor) {
			insert(target, html, anchor);
			mount_component(head, html, null);
			append(html, t0);
			append(html, body);
			mount_component(nav, body, null);
			append(body, t1);
			append(body, main);
			append(main, div);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			append(div, t2);
			append(div, br);
			append(body, t3);
			mount_component(footer, body, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*content*/ 1) head_changes.title = makeTitle(/*content*/ ctx[0].filename);
			if (dirty & /*env*/ 16) head_changes.env = /*env*/ ctx[4];
			head.$set(head_changes);

			const switch_instance_changes = (dirty & /*content, allContent, allLayouts*/ 13)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*content*/ 1 && get_spread_object(/*content*/ ctx[0].fields),
					dirty & /*content*/ 1 && { content: /*content*/ ctx[0] },
					dirty & /*allContent*/ 4 && { allContent: /*allContent*/ ctx[2] },
					dirty & /*allLayouts*/ 8 && { allLayouts: /*allLayouts*/ ctx[3] }
				])
			: {};

			if (switch_value !== (switch_value = /*layout*/ ctx[1])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, t2);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}

			const footer_changes = {};
			if (dirty & /*allContent*/ 4) footer_changes.allContent = /*allContent*/ ctx[2];
			footer.$set(footer_changes);
		},
		i(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(nav.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(head.$$.fragment, local);
			transition_out(nav.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(html);
			destroy_component(head);
			destroy_component(nav);
			if (switch_instance) destroy_component(switch_instance);
			destroy_component(footer);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { content } = $$props,
		{ layout } = $$props,
		{ allContent } = $$props,
		{ allLayouts } = $$props,
		{ env } = $$props;

	$$self.$$set = $$props => {
		if ("content" in $$props) $$invalidate(0, content = $$props.content);
		if ("layout" in $$props) $$invalidate(1, layout = $$props.layout);
		if ("allContent" in $$props) $$invalidate(2, allContent = $$props.allContent);
		if ("allLayouts" in $$props) $$invalidate(3, allLayouts = $$props.allLayouts);
		if ("env" in $$props) $$invalidate(4, env = $$props.env);
	};

	return [content, layout, allContent, allLayouts, env];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			content: 0,
			layout: 1,
			allContent: 2,
			allLayouts: 3,
			env: 4
		});
	}
}

export default Component;