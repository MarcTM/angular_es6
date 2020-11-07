angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n\n        <a href=\"http://localhost:3000/api/auth/github\" style=\"font-size: 25px; color:black\">Github</a><br>\n        <a href=\"http://localhost:3000/api/auth/googleplus\" style=\"font-size: 25px; color:black\">Google</a>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form name=\"formData\" ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <!-- Form -->\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'register\'\" ng-disabled=\"$ctrl.authType != \'register\'\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" name=\"Username\" ng-minlength=\"3\" ng-maxlength=\"16\" required/>\n              <div ng-messages=\"formData.Username.$error\" style=\"color: red;\">\n                <p ng-message=\"required\" ng-show = \"formData.Username.$dirty\">Username is required</p>\n                <p ng-message=\"minlength\">Enter more than 3 characters</p>\n                <p ng-message=\"maxlength\">Enter less than 16 characters</p>\n              </div>\n            </fieldset>\n            \n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" name=\"Email\" required/>\n              <div ng-messages=\"formData.Email.$error\" style=\"color: red;\">\n                <p ng-message=\"required\" ng-show=\"formData.Email.$dirty\">Email is required</p>\n              </div>\n            </fieldset>\n\n\n            <fieldset class=\"form-group\">\n              <input required class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                 ng-model=\"$ctrl.formData.password\" name=\"Password\" ng-minlength=\"6\" ng-maxlength=\"20\"/>\n              <div ng-messages=\"formData.Password.$error\" style=\"color: red;\">\n                <p ng-message=\"required\" ng-show=\"formData.Password.$dirty\">Password is required</p>\n                <p ng-message=\"minlength\">Enter more than 6 charecters</p>\n                <p ng-message=\"maxlength\">Enter less than 20 characters</p>\n              </div>\n            </fieldset>\n\n\n            <!-- Buttons -->\n            <fieldset ng-show=\"$ctrl.authType === \'register\'\">\n              <button class=\"btn btn-lg btn-primary pull-xs-right\"\n                type=\"submit\" ng-bind=\"::$ctrl.title\"\n                ng-show=\"formData.Username.$valid && formData.Email.$valid && formData.Password.$valid\">\n              </button>\n            </fieldset>\n\n            <fieldset ng-show=\"$ctrl.authType === \'login\'\">\n              <button class=\"btn btn-lg btn-primary pull-xs-right\"\n                type=\"submit\" ng-bind=\"::$ctrl.title\"\n                ng-show=\"formData.Email.$valid && formData.Password.$valid\">\n              </button>\n            </fieldset> \n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n       ");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("foods/comment-food.html","<hr>\n\n<div class=\"card\">\n    <div class=\"card-block\">\n      <p class=\"card-text\" ng-bind=\"$ctrl.data.body\"></p>\n    </div>\n    <div class=\"card-footer\">\n      <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\">\n        <img ng-src=\"{{$ctrl.data.author.image}}\" class=\"comment-author-img\" />\n      </a>\n      &nbsp;\n      <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\" ng-bind=\"$ctrl.data.author.username\">\n      </a>\n      <span class=\"date-posted\"\n        ng-bind=\"$ctrl.data.createdAt | date: \'longDate\'\">\n      </span>\n      &nbsp;\n      <span class=\"mod-options\" ng-show=\"$ctrl.canModify\">\n        <i class=\"ion-trash-a\" ng-click=\"$ctrl.deleteCb()\"></i>\n      </span>\n    </div>\n  </div>");
$templateCache.put("foods/filterfoods.html","<hr>\n<blockquote>\n  <button class=\"button-deletefilters\" ui-sref=\"app.foods\">DELETE FILTERS</button>\n  <br><br>\n\n  <div ng-repeat=\"food in $ctrl.filteredFoods\">\n      <hr>\n      <label>Author:</label> <a class=\"author\"\n        ui-sref=\"app.profile.main({ username:food.author.username })\"\n        ng-bind=\"food.author.username\">\n      </a>\n\n      <a ui-sref=\"app.detailsFood({ slug:food.slug })\" class=\"preview-link\">\n        <h1 ng-bind=\"food.title\"></h1>\n        <p style=\"font-size: 12px;\">Difficulty: {{food.difficulty}}</p>\n        <p ng-bind=\"food.description\"></p>\n        <button class=\"button-details\">Read recipe...</span>\n      </a>\n  </div>\n  <hr>\n</blockquote>");
$templateCache.put("foods/food.html","<hr>\n<blockquote>\n  <div>\n    <label>Author:</label> <a class=\"author\"\n      ui-sref=\"app.profile.main({ username:$ctrl.food.author.username })\"\n      ng-bind=\"$ctrl.food.author.username\">\n    </a>\n    <food-actions food=\"$ctrl.food\"></food-actions>\n  \n    <h1>{{$ctrl.food.title}}</h1>\n    <p style=\"font-size: 12px;\">Difficulty: {{$ctrl.food.difficulty}}</p>\n    <p>{{$ctrl.food.description}}</p>\n    <p>{{$ctrl.food.body}}</p>\n\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.food.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </div><br>\n\n  <!-- Comments section -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n      <div show-authed=\"true\">\n        <list-errors from=\"$crl.commentForm.errors\"></list-errors>\n        <form class=\"card comment-form\" ng-submit=\"$ctrl.addComment()\">\n          <fieldset ng-disabled=\"$ctrl.commentForm.isSubmitting\">\n            <div class=\"card-block\">\n              <textarea class=\"form-control\"\n                placeholder=\"Write a comment...\"\n                rows=\"3\"\n                ng-model=\"$ctrl.commentForm.body\"></textarea>\n            </div>\n            <div class=\"card-footer\">\n              <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"comment-author-img\" />\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n               Post Comment\n              </button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n\n      <div show-authed=\"false\">\n        <a ui-sref=\"app.login\">Sign in</a> or <a ui-sref=\"app.register\">sign up</a> to add comments on this article.\n      </div>\n\n      <comment-food ng-repeat=\"cmt in $ctrl.comments\"\n        data=\"cmt\" food-author=\"$ctrl.food.author\"\n        delete-cb=\"$ctrl.deleteComment(cmt.id, $index)\">\n      </comment-food>\n\n    </div>\n  </div>\n</blockquote>");
$templateCache.put("foods/foods.html","<div class=\"col-md-9\">\n    <!-- Tabs for toggling between feed, article lists -->\n    <div class=\"feed-toggle\">\n      <ul class=\"nav nav-pills outline-active\">\n\n        <li class=\"nav-item\">\n          <a href=\"\" class=\"nav-link\"\n            ng-class=\"{ active: $ctrl.listConfig.type === \'all\' && !$ctrl.listConfig.filters }\"\n            ng-click=\"$ctrl.changeList({ type: \'all\' })\">\n            Global Feed\n          </a>\n        </li>\n\n        <li class=\"nav-item\" show-authed=\"true\">\n            <a href=\"\" class=\"nav-link\"\n              ng-class=\"{ active: $ctrl.listConfig.type === \'feed\' }\"\n              ng-click=\"$ctrl.changeList({ type: \'feed\' })\">\n              Your Feed\n            </a>\n        </li>\n\n        <li class=\"nav-item\" ng-show=\"$ctrl.listConfig.filters.tag\">\n          <a href=\"\" class=\"nav-link active\">\n            <i class=\"ion-pound\"></i> {{$ctrl.listConfig.filters.tag}}\n          </a>\n        </li>\n\n      </ul>\n    </div>\n\n    <!-- List the current foods -->\n    <foods-list limit=\"5\" list-config=\"$ctrl.listConfig\"></foods-list>\n    \n  </div>\n\n\n  <!-- Tags -->\n  <div class=\"col-md-3\">\n    <div class=\"sidebar\">\n\n      <p>Popular Tags</p>\n      <div class=\"tag-list\" ng-show=\"$ctrl.tags\">\n        <a href=\"\" class=\"tag-default tag-pill\"\n          ng-click=\"$ctrl.changeList({ type: \'all\', filters: { tag: tagName } })\"\n          ng-repeat=\"tagName in $ctrl.tags\"\n          ng-bind=\"tagName\">\n        </a>\n      </div>\n\n      <div ng-show=\"!$ctrl.tagsLoaded\">\n        Loading tags...\n      </div>\n\n      <div class=\"post-preview\"\n        ng-show=\"$ctrl.tagsLoaded && !$ctrl.tags.length\">\n        No tags are here... yet.\n      </div>\n\n    </div>\n  </div>\n\n\n\n");
$templateCache.put("home/home-slider.html","<div style=\"height: 400px\">\n    <div uib-carousel active=\"active\" interval=\"$ctrl.myInterval\" no-wrap=\"$ctrl.noWrapSlides\">\n        <div uib-slide ng-repeat=\"slide in $ctrl.slides track by slide.id\" index=\"slide.id\" style=\"height: 400px\">\n            <img ng-src=\"{{slide.image}}\" class=\"img-fluid\" style=\"filter: blur(2px);\">\n            <div class = \"carousel-caption\" style = \"padding-bottom: 100px;\">\n                <h2>{{slide.text}}</h2>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("home/home.html"," <div class=\"home-page\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container\">\n      <h1 class=\"logo-font\" ng-bind=\"::$ctrl.appName | lowercase\"></h1>\n      <p>A place to share your knowledge.</p>\n    </div>\n  </div>\n\n  <home-slider></home-slider>\n\n\n\n  <h1 class=\"findbycat\">Find by Categories</h1>\n\n  <div class=\"cats\">\n    <div class=\"cats__cat\" ng-repeat=\"d in $ctrl.difficulty\">\n      <button class=\"button-categories\" ui-sref=\"app.filterFoods({filter:d})\">{{ d }}</button>\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n\n    <a class=\"navbar-brand\"\n      ui-sref=\"app.home\"\n      ng-bind=\"::$ctrl.appName\">\n    </a>\n\n<!--  -->\n    <!-- Show this for logged out users -->\n    <ul show-authed=\"false\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.login\">\n          Sign in\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.register\">\n          Sign up\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.foods\">\n          Foods\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.products\">\n          Products\n        </a>\n      </li>\n\n    </ul>\n\n<!--  -->\n    <!-- Show this for logged in users -->\n    <ul show-authed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.editor\">\n          <i class=\"ion-compose\"></i>&nbsp;New Recipe\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.newproduct\">\n          <i class=\"ion-compose\"></i>&nbsp;New Product\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.settings\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n          <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n          {{ $ctrl.currentUser.username }}\n        </a>\n      </li>\n\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.foods\">\n          Foods\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.products\">\n          Products\n        </a>\n      </li>\n\n    </ul>\n\n\n  </div>\n</nav>\n");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n    <div class=\"container page\">\n      <div class=\"row\">\n        <div class=\"col-md-10 offset-md-1 col-xs-12\">\n          \n          <h1>New Recipe</h1>\n          <list-errors errors=\"$ctrl.errors\"></list-errors>\n  \n          <form>\n            <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n  \n              <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                  ng-model=\"$ctrl.food.title\"\n                  type=\"text\"\n                  placeholder=\"Recipe Name\"/>\n              </fieldset>\n  \n              <fieldset class=\"form-group\">\n                <input class=\"form-control\"\n                  ng-model=\"$ctrl.food.description\"\n                  type=\"text\"\n                  placeholder=\"What\'s this recipe about?\" />\n              </fieldset>\n  \n              <fieldset class=\"form-group\">\n                <textarea class=\"form-control\"\n                  rows=\"8\"\n                  ng-model=\"$ctrl.food.body\"\n                  placeholder=\"Write your recipe\">\n                </textarea>\n              </fieldset>\n\n              <fieldset class=\"form-group\">\n                <textarea class=\"form-control\"\n                  ng-model=\"$ctrl.food.difficulty\"\n                  placeholder=\"Describe the difficulty in one or two words: Easy, Medium, Hard, etc\">\n                </textarea>\n              </fieldset>\n\n              <fieldset class=\"form-group\">\n                <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"Enter tags\"\n                  ng-model=\"$ctrl.tagField\"\n                  ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n                <div class=\"tag-list\">\n                  <span ng-repeat=\"tag in $ctrl.food.tagList\"\n                    class=\"tag-default tag-pill\">\n                    <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                    {{ tag }}\n                  </span>\n                </div>\n              </fieldset>\n  \n              <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-hide=\"$ctrl.toUpdate\" ng-click=\"$ctrl.submit()\">\n                Publish Recipe\n              </button>\n\n              <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-show=\"$ctrl.toUpdate\" ng-click=\"$ctrl.submit()\">\n                Update Recipe\n              </button>\n  \n            </fieldset>\n          </form>\n  \n        </div>\n      </div>\n    </div>\n  </div>\n  ");
$templateCache.put("products/editor.html","<div class=\"editor-page\">\n    <div class=\"container page\">\n      <div class=\"row\">\n        <div class=\"col-md-10 offset-md-1 col-xs-12\">\n          \n          <h1>New Product</h1>\n          <list-errors errors=\"$ctrl.errors\"></list-errors>\n  \n          <form>\n            <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n  \n              <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\"\n                  ng-model=\"$ctrl.product.name\"\n                  type=\"text\"\n                  placeholder=\"Product Name\"/>\n              </fieldset>\n  \n              <fieldset class=\"form-group\">\n                <input class=\"form-control\"\n                  ng-model=\"$ctrl.product.description\"\n                  type=\"text\"\n                  placeholder=\"Add a description\" />\n              </fieldset>\n  \n              <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\n                Publish Product\n              </button>\n  \n            </fieldset>\n          </form>\n  \n        </div>\n      </div>\n    </div>\n  </div>\n  ");
$templateCache.put("products/products.html","<products-list></products-list>");
$templateCache.put("profile/profile-foods.html","<foods-list limit=\"5\" list-config=\"$ctrl.listConfig\"></foods-list>");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <h5 style=\"color: darkolivegreen;\">Karma points: {{$ctrl.profile.karma}}</h5>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author recipes & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Recipes\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Recipes\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of recipes -->\n        <div ui-view></div>\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                ng-model=\"$ctrl.formData.bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          ng-click=\"$ctrl.logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/buttons/favorite-btn.html","<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.article.favorited,\n              \'btn-primary\': $ctrl.article.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n");
$templateCache.put("components/buttons/favorite-food-btn.html","<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.food.favorited,\n              \'btn-primary\': $ctrl.food.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n");
$templateCache.put("components/buttons/follow-btn.html","<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>\n");
$templateCache.put("components/foods-helpers/food-actions.html","<!-- Your food -->\n<span ng-show=\"$ctrl.canModify\">\n    <a class=\"btn btn-sm btn-outline-secondary\"\n    ui-sref=\"app.editor({ slug: $ctrl.food.slug })\">\n    <i class=\"ion-edit\"></i> Edit Recipe\n    </a>\n\n    <button class=\"btn btn-sm btn-outline-danger\"\n    ng-class=\"{disabled: $ctrl.isDeleting}\"\n    ng-click=\"$ctrl.deleteRecipe()\">\n    <i class=\"ion-trash-a\"></i> Delete Recipe\n    </button>\n</span>\n\n<!-- Not your food -->\n<span ng-hide=\"$ctrl.canModify\">\n    <follow-btn user=\"$ctrl.food.author\"></follow-btn>\n    <favorite-food-btn food=\"$ctrl.food\">\n    {{ $ctrl.food.favorited ? \'Unfavorite\' : \'Favorite\' }} Recipe <span class=\"counter\">({{$ctrl.food.favoritesCount}})</span>\n    </favorite-food-btn>\n</span>");
$templateCache.put("components/foods-helpers/foods-list.html","<hr>\n<blockquote>\n\n  <foods-preview food=\"food\" ng-repeat=\"food in $ctrl.list\"></foods-preview>\n  \n  <div ng-hide=\"!$ctrl.loading\">\n    Loading recipes...\n  </div>\n\n  <div ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n    No recipes are here... yet.\n  </div>\n\n  <list-pagination-foods\n    total-pages=\"$ctrl.listConfig.totalPages\"\n    current-page=\"$ctrl.listConfig.currentPage\"\n    ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n  </list-pagination-foods>\n\n</blockquote>");
$templateCache.put("components/foods-helpers/foods-preview.html","<div class=\"article-preview\">\n  <label>Author:</label> <a class=\"author\"\n    ui-sref=\"app.profile.main({ username:$ctrl.food.author.username })\"\n    ng-bind=\"$ctrl.food.author.username\">\n  </a>\n  <favorite-food-btn\n      food=\"$ctrl.food\"\n      class=\"pull-xs-right\">\n      {{$ctrl.food.favoritesCount}}\n  </favorite-food-btn>\n\n  <a ui-sref=\"app.detailsFood({ slug: $ctrl.food.slug })\" class=\"preview-link\">\n    <h1 ng-bind=\"$ctrl.food.title\"></h1>\n    <p class=\"difficulty-food\">Difficulty: {{$ctrl.food.difficulty}}</p>\n    <p ng-bind=\"$ctrl.food.description\"></p>\n    <button class=\"button-details\">Read more...</button>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.food.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </a>\n\n</div>  ");
$templateCache.put("components/foods-helpers/list-pagination-foods.html","<nav>\n    <ul class=\"pagination\">\n  \n      <li class=\"page-item\"\n        ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n        ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\"\n        ng-click=\"$ctrl.changePage(pageNumber)\">\n  \n        <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n  \n      </li>\n  \n    </ul>\n  </nav>\n  ");
$templateCache.put("components/products-helpers/products-list.html","");}]);