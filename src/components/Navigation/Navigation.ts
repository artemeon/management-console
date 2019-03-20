import { Component, Vue } from 'vue-property-decorator'

@Component
class Navigation extends Vue {
  public open = ['public']
  public files = {
    html: 'mdi-language-html5',
    js: 'mdi-nodejs',
    json: 'mdi-json',
    md: 'mdi-markdown',
    pdf: 'mdi-file-pdf',
    png: 'mdi-file-image',
    txt: 'mdi-file-document-outline',
    xls: 'mdi-file-excel'
  }
  public tree = []
  public items = [
    {
      name: '.git'
    },
    {
      name: 'node_modules'
    },
    {
      name: 'public',
      children: [
        {
          name: 'static',
          children: [
            {
              name: 'logo.png',
              file: 'png'
            }
          ]
        },
        {
          name: 'favicon.ico',
          file: 'png'
        },
        {
          name: 'index.html',
          file: 'html'
        }
      ]
    },
    {
      name: '.gitignore',
      file: 'txt'
    },
    {
      name: 'babel.config.js',
      file: 'js'
    },
    {
      name: 'package.json',
      file: 'json'
    },
    {
      name: 'README.md',
      file: 'md'
    },
    {
      name: 'vue.config.js',
      file: 'js'
    },
    {
      name: 'yarn.lock',
      file: 'txt'
    }
  ]
}

export default Navigation
