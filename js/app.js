(function () {
  var app = angular.module('store', [])

  app.controller('StoreController', function () {
    this.products = gems
  })

  app.controller('PanelController', function () {
    this.tab = 1

    this.selectTab = function (setTab) {
      this.tab = setTab
    }
    this.isSelected = function (checkTab) {
      return this.tab === checkTab
    }
  })

  var gems = [
    {
      name: 'Dodecahedron Gem',
      price: 2.95,
      image: 'images/decagem.gif',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      canPurchase: true,
      reviews: [
        {
          stars: 4,
          body: 'I love the look of this Gem!',
          author: 'wendelcraig@gmail.com'
        },
        {
          stars: 1,
          body: 'Not what I was expecting...and shipping took forever.',
          author: 'joethomas@yahoo.com'
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      image: 'images/pentgem.gif',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      canPurchase: false,
      reviews: [
        {
          stars: 5,
          body: 'I LOVE this gem! 5 Stars!',
          author: 'gemlover56@gmail.com'
        },
        {
          stars: 3,
          body: 'Good quality and price was reasonable.',
          author: 'oldmanriver@aol.com'
        }
      ]
    }
  ]
})()
