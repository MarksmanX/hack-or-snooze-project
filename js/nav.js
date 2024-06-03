"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $storiesContainer.hide();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").css('display', 'flex');
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show story submit form on clicking story "submit" */

$navSubmitStory.on("click", submitStoryClick);

function submitStoryClick(evt) {
  console.debug("navSubmitStoryClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $storiesContainer.show();
  $submitForm.show();
}

/* Show favorite stories on click on "favorites" */

$navFavorites.on("click", navFavoriteClick);

function navFavoriteClick(evt) {
  console.debug("navFavoriteClick", evt);
  hidePageComponents();
  $storiesContainer.show();
  putFavoritesListOnPage();
}

/* Show My Stories on clicking "my stories" */

$navMyStories.on("click", navMyStoriesClick);

function navMyStoriesClick(evt) {
  console.debug("navMyStoriesClick", evt);
  hidePageComponents();
  $storiesContainer.show();
  putUserStoriesOnPage();
  $ownStories.show();
}


/* Hide everything but profile on click on "profile" */

$navUserProfile.on("click", navProfileClick);

function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $storiesContainer.hide();
  $userProfile.show();
}

