module.exports = function (plop) {
  plop.setGenerator('web component', {
    description: 'Create a new web component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Web Component name?'
    }],
    actions: [
      {
        type: 'add',
        path: 'src/js/components/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/web-component-definition.hbs'
      },
      {
        type: 'add',
        path: 'src/js/components/{{dashCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/web-component-class.hbs'
      }
    ]
  })
}
