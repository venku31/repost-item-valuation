// Copyright (c) 2022, Venkatesh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Repost Item Valuation Setting', {
	start_sle_gle_reporting: function (frm) {
        frappe.call({
            method: 'repost_item_valuation.item_reposting.enqueue_reposting_sle_gle',
            callback: function (data) {
                console.log(data);
            }
        })
    },
});
