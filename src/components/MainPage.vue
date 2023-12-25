<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Left section -->
        <div class="col-md-3">
          <div class="left-section">
            <!-- Your content for the left section -->
            <!-- For example: -->
            <h3>Sidebar</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <!-- ... -->
            </ul>
          </div>
        </div>
  
        <!-- Top section -->
        <div class="col-md-9">
          <div class="top-section">
            <!-- Your content for the top section -->
            <!-- For example: -->
            <h1>Welcome to My App</h1>
            <!-- ... -->
          </div>
        </div>
      </div>
  
      <!-- Center section -->
      <div class="row">
        <div class="col-md-12">
          <div class="center-section">
            <!-- Your content for the center section -->
            <!-- For example: -->
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  /* Styles for left section */
  .left-section {
    /* Add styling for the left section */
    /* For example: */
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  /* Styles for top section */
  .top-section {
    /* Add styling for the top section */
    /* For example: */
    background-color: #dcdcdc;
    padding: 20px;
  }
  
  /* Styles for center section */
  .center-section {
    /* Add styling for the center section */
    /* For example: */
    padding: 20px;
  }
  </style>
  