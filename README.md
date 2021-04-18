# [Brastlewarkbook](https://mikebrsv.github.io/brastlewarkbook/)

New to Brastlewark? [Brastlewarkbook](https://mikebrsv.github.io/brastlewarkbook/) will help you to get around and to know more about its inhabitants.

## Dependencies

* [Axios](https://github.com/axios/axios): http client
* [Bootstrap](https://github.com/twbs/bootstrap): interface toolkit 
* [CoreJS](https://github.com/zloirock/core-js): JS modular standard library
* [Fontawesome](https://github.com/FortAwesome/Font-Awesome): icon set
* [Vue](https://github.com/vuejs/vue): frontend library
* [Vue Fontawesome](https://github.com/fortawesome/vue-fontawesome): official Vue component for the Fontawesome library
* [Vue Multiselect](https://github.com/shentao/vue-multiselect): 3rd party multiselect component for Vue
* [Vue Router](https://github.com/vuejs/vue-router): routing tool
* [Vuex](https://github.com/vuejs/vuex): state manager

## Summary

Vue-powered single page application which allows to easily browse through the Brastlewark census data using searching, filtering and sorting tools. Fully responsive and adapted to mobile devices.

## Description

On app load: the `App.vue` root component sends an initial http request by calling the `setInitialData()` Vuex action in the `created()` lifecycle method.

`setInitialData()` populates the initial app state: `gnomeData` (not mutated during the app lifecycle), `professions` (not mutated during the app lifecycle, used for filtering by professions), `ageSpectrum` (not mutated during the app lifecycle, used for filtering by age range) and `currentProfile` (mutated during the app lifecycle, used for outputting the profile's details) if the url `https://mikebrsv.github.io/brastlewarkbook/profile/${id}` was accessed.

## Interface

### Homepage: Navbar

"Brastlewarkbook" is the only native `<a href=""></a>` element in the application. Click on it will refresh the page.

### Homepage: Search & Filter block

* **Search by name**: case-insensitive live search by name.
* **Profession**: multiple select to filter the data by profession.
* **Age**: range and inputs to filter the data by age.
* **Sort**: sort the data alphabetically (A-Z and Z-A) or by age (Youngest-Oldest and Oldest-Youngest).
* **Found**: indicates the number of the entries found by filter and sort parameters as well as the total number of the entries in the database.

### Homepage: Main block

Outputs a list of the gnome profile teasers. Click on a profile teaser will expand its full information.

### Homepage: Load More

By default on the first load the application outputs 16 entries from the database. Press "Load More" to load 16 more.

### Profile Page

Can be accessed by clicking on a profile teaser (in the Main Block of the Homepage or in the Profile Page Friendlist) or directly by a url `https://mikebrsv.github.io/brastlewarkbook/profile/${id}`

Profile Page consists of 3 columns:
* left: search by name input and list of the gnome profile teasers;
* center: full profile info;
* right: filter/sort options.

### Profile Page: Navbar

The "Close" button will close the profile info and return to the Homepage.

### Profile Page: Profile Info

Contains full info of the chosen gnome profile as well as their friendlist. Profile teasers in the friendlist are clickable and will expand the profile's full information.

## Project setup

Clone the repository and run:

```
npm i
```

Compiles and hot-reloads for development:
```
npm run serve
```

Compiles and minifies for production:
```
npm run build
```

Run your end-to-end tests:
```
npm run test:e2e
```
