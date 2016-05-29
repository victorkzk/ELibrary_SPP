(function () {
  'use strict';

  angular
    .module('YetiLibrary')
    .controller('AddBookController', AddBookController);

  /** @ngInject */
  function AddBookController($state, BookService, errorHandler) {
    var vm = this;
    vm.isImageLoaded = false;
    angular.element('#image').addClass('ng-hide');

    vm.book = {
      title: '',
      author: '',
      rating: 0,
      type: '',
      description: '',
      date: new Date(),
      imageSrc: ''
    };

    vm.ospry = new Ospry('pk-test-ev3ytz8v2qiwst8r9x6xam9j');

    vm.add = function () {

      vm.ospry.up({
        form: angular.element('#up-form')[0],
        imageReady: function (err, metadata) {
          if (err) return;
          vm.book.imageSrc = metadata.url;
          BookService.add(vm.book).then(function () {
            $state.go('home');
          }).catch(function (response) {
            errorHandler.handle(response);
          });
        }
      });

    };

    angular.element('#image-input').change(function () {
      var input = this;
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          angular.element('#image').attr('src', e.target.result).removeClass('ng-hide');

        };

        reader.readAsDataURL(input.files[0]);
      }
    });
  }

})();
