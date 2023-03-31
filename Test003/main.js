/*
 Backgrid datepicker-filter extension
 http://github.com/clementmouchet/backgrid-datepicker-filter
 Copyright (c) 2017 clementmouchet.com
 Written by Clement Mouchet
 Licensed under the MIT @license
 */
 (function () {
    var DatePickerFilter = Backgrid.Extension.DatepickerFilter = Backbone.View.extend({
      _TYPE_FROM: 'FROM',
      _TYPE_TO: 'TO',
      tagName: 'span',
      className: '',
      template: _.template(
        '<input class="form-control" data-provide="datepicker" ' +
        '<% if (placeholder) { %>' +
        '       placeholder="<%= placeholder %>" ' +
        '<% } %>' +
        '       name="<%= name %>" ' +
        '/>'
      ),
      events: {
        "change": "onChange"
      },
      defaults: {
        field: undefined,
        placeholder: undefined,
        momentJsFormat: 'x',
        filterType: this._TYPE_FROM,
        makeMatcher: function (value) {
          return function (model) {
            var modelDate = moment(model.get(this.field)).toDate();
            if (DatePickerFilter.filterType === DatePickerFilter._TYPE_FROM) {
              return modelDate >= value;
            } else {
              return modelDate <= value;
            }
          };
        }
      },
      initialize: function (options) {
        DatePickerFilter.__super__.initialize.apply(this, arguments);
  
        _.defaults(this, options || {}, this.defaults);
        if (_.isEmpty(this.field) || !this.field.length) throw 'Invalid or missing field.';
  
        var collection = this.collection = this.collection.fullCollection || this.collection;
        var shadowCollection = this.shadowCollection = collection.clone();
  
        this.listenTo(collection, 'add', function (model, collection, options) {
          shadowCollection.add(model, options);
        });
        this.listenTo(collection, 'remove', function (model, collection, options) {
          shadowCollection.remove(model, options);
        });
        this.listenTo(collection, 'sort', function (col) {
          if (this.currentValue() == this.clearValue) shadowCollection.reset(col.models);
        });
        this.listenTo(collection, 'reset', function (col, options) {
          options = _.extend({reindex: true}, options || {});
          if (options.reindex && options.from == null && options.to == null) {
            shadowCollection.reset(col.models);
          }
        });
      },
      render: function () {
        this.$el.empty().append(this.template({
          placeholder: this.placeholder,
          name: this.field
        }));
        this.onChange();
        return this;
      },
      currentValue: function () {
        return this.$el.find('input').datepicker('getDate');
      },
      onChange: function (e) {
        var col = this.collection,
          field = this.field,
          value = this.currentValue(),
          matcher = _.bind(this.makeMatcher(value), this);
  
        if (col.pageableCollection)
          col.pageableCollection.getFirstPage({silent: true});
  
        if (value !== this.clearValue)
          col.reset(this.shadowCollection.filter(matcher), {reindex: false});
        else
          col.reset(this.shadowCollection.models, {reindex: false});
      }
    });
  }).call(this);