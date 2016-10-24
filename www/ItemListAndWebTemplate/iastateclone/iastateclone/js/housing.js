
var wd = {
	listeners: $({}),

	sub: function(route, callback)
	{
		this.listeners.on.apply(this.listeners, arguments);
	},

	pub: function(route, param)
	{
		var params = [].slice.call(arguments);
		route = params.shift();
		this.listeners.trigger.apply(this.listeners, [route, params]);
	}
};

wd.sub('wd/form/input/autocomplete', function(e, input)
{
	input.autocomplete({
		'source': input.data('autocomplete-api')
	}).data('ui-autocomplete')._renderItem = function(ul, item)
	{
		var term = this.term;
		return $('<li>')
			.append('<a>' +
				item.label.replace(new RegExp('^('+ $.ui.autocomplete.escapeRegex(term) +')', 'i'), '<strong>$1</strong>') +
				' <span class="muted">' + item.type + '</span>' +
				'</a>')
			.appendTo(ul);
	};
});

(function()
{
	var index = 0;

	/**
	 * Initialize a collection and hydrate all existing rows
	 */
	wd.sub('wd/form/collection/init', function(e, collection)
	{
		var wrappers = collection.children('fieldset').each(function()
		{
			wd.pub('wd/form/collection/row/hydrate', $(this));
		});

		$('<div class="wd-form-row btn-group pull-right"></div>')
			.insertBefore(collection)
			.append($('<a class="btn add" href="#">Add</a>').click(function()
			{
				wd.pub('wd/form/collection/row/create', collection);
				return false;
			}));

		index = wrappers.length;
	});

	/**
	 * Hydrate a row and insert buttons to remove rows
	 */
	wd.sub('wd/form/collection/row/hydrate', function(e, wrapper)
	{
		var buttons = $('<div class="wd-form-row">' +
			'<div class="wd-form-label">&nbsp;</div>' +
			'<div class="wd-form-input"><div class="btn-group clearfix"></div></div>' +
			'</div>')
			.appendTo(wrapper.children('div'))
			.find('.btn-group');

		buttons.append($('<a class="btn remove" href="#">Remove</a>').click(function()
		{
			wd.pub('wd/form/collection/row/delete', wrapper);
			return false;
		}));

		wrapper.parent().children('fieldset').each(function()
		{
			wd.pub('wd/form/collection/row/button', $(this));
		});

		wrapper.find('input[autofocus]:eq(0)').focus();

		wrapper.find('input[data-autocomplete-api]').each(function()
		{
			wd.pub('wd/form/input/autocomplete', $(this));
		});
	});

	/**
	 * Create a new row and insert after an existing one
	 */
	wd.sub('wd/form/collection/row/create', function(e, collection)
	{
		var template = collection.children('span').data('template');
		collection.append(template.replace(/__index__/g, index++));
		wd.pub('wd/form/collection/row/hydrate', collection.children('fieldset').last());
	});

	/**
	 * Remove a row
	 */
	wd.sub('wd/form/collection/row/delete', function(e, wrapper)
	{
		var collection = wrapper.parent();
		wrapper.remove();
		collection.children('fieldset').each(function()
		{
			wd.pub('wd/form/collection/row/button', $(this));
		});
	});
}());

$(document).ready(function()
{
	$('input[data-autocomplete-api]').each(function()
	{
		wd.pub('wd/form/input/autocomplete', $(this));
	});

	$('fieldset.wd-form-row > .wd-form-input').each(function()
	{
		var collection = $(this);
		if (collection.children('span[data-template]').length)
		{
			wd.pub('wd/form/collection/init', collection);
		}
	});

	$('form[data-prevent-duplicate]').each(function()
	{
		var submitted = false;
		$(this).submit(function()
		{
			if (!submitted)
			{
				submitted = true;
				return true;
			}
			else
			{
				return false;
			}
		});
	});

	var elem = document.createElement('input');
	elem.setAttribute('type', 'date');
	var supportsHtml5Date = elem.type !== 'text';
	if (!supportsHtml5Date)
	{
		$('input[data-datepicker-api]').datepicker({
			dateFormat: 'yy-mm-dd'
		});
	}
});
