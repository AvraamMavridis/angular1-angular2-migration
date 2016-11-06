'use strict'
window.myapp = {
  App: angular.module('myApp', [])
}

upgradeAdapter = require('./app/index.ts')

angular.element(document).ready(()->
  upgradeAdapter.default.bootstrap( document, ['myApp'])
)
