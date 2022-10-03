/*!
 * CSVTable <http://kazuprog.site/javascript/lib/csv-table/>
 * Version 20221001
 *
 * Copyright 2022, KazuProg.
 * Licensed under the MIT License.
 */  
(document => {
	const main = () => {
		document.querySelectorAll('csv').forEach(elem => {
			const csv = elem.innerHTML.trim().split('\n');
			let header = elem.hasAttribute('header');
			elem.removeAttribute('header');
			const table = document.createElement('table');
			if (elem.hasAttributes()) {
				const attrs = elem.attributes;
				for (let i = 0; i < attrs.length; i++) {
					table.setAttribute(attrs[i].name, attrs[i].value)
				}
			}
			const tbody = document.createElement('tbody');
			table.appendChild(tbody);
			for (let i = 0; i < csv.length; i++) {
				const tr = document.createElement("tr");
				tbody.appendChild(tr);
				const csv_r = csv[i].split(',');
				for (let j = 0; j < csv_r.length; j++) {
					let td = document.createElement(header ? 'th' : 'td');
					td.innerHTML = csv_r[j];
					tr.appendChild(td);
				}
				header = false;
			}
			elem.replaceWith(table);
		});
	};
	window.addEventListener('load', () => {
		new MutationObserver(main).observe(document, {
			childList: true,
			subtree: true
		});
		main();
	});
})(document);