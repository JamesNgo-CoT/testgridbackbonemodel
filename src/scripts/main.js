$(function() {
  console.log('this is a test');
  const model = new CotModel({});

  const formDef = {
    id: 'testgridbackbonemodel_cot_form',
    title: 'Test Grid Backbone Model',
    rootPath: '/*@echo SRC_PATH*//', //only required for forms using validationtype=Phone fields
    success: (e) => {
      e.preventDefault()
      console.log('MODEL', model);
      console.log('MODEL JSON', model.toJSON());
      return false;
    },
    useBinding: true,
    sections: [{
      id: "sample_section",
      title: "Sample Section",
      rows: [{
        fields: [{
          id: 'btn',
          title: 'button',
          type: 'button',
          onclick: () => {
            $('#sample_section').trigger('submit');
          }
        }]
      }, {
        fields: [{
          id: 'text1_field',
          title: 'text',
          bindTo: 'text1'
        }]
      }, {
        grid: {
          id: 'gridId',
          title: 'GRID',
          bindTo: 'gridA',

          headers: [{
            title: 'checkbox'
          }, {
            title: 'radio'
          }],
          fields: [{
            id: 'checkbox',
            type: 'checkbox',
            choices: [{
              text: 'a'
            }, {
              text: 'b'
            }],
            orientation: 'horizontal',
            bindTo: 'checkbox'
          }, {
            id: 'radio',
            type: 'radio',
            choices: [{
              text: 'a'
            }, {
              text: 'b'
            }],
            orientation: 'horizontal',
            bindTo: 'radio'
          }]
        }
      }, {
        grid: {
          id: 'gridId2',
          title: 'GRID',
          bindTo: 'gridB',

          headers: [{
            title: 'checkbox'
          }, {
            title: 'radio'
          }],
          fields: [{
            id: 'checkboxs',
            type: 'checkbox',
            choices: [{
              text: 'a'
            }, {
              text: 'b'
            }],
            orientation: 'horizontal',
            bindTo: 'checkbox'
          }, {
            id: 'radios',
            type: 'radio',
            choices: [{
              text: 'a'
            }, {
              text: 'b'
            }],
            orientation: 'horizontal',
            bindTo: 'radio'
          }]
        }
      }]
    }]
  };

  const form = new CotForm(formDef);
  form.render({
    target: $('#testgridbackbonemodel_container')
  });
  form.setModel(model);
});
