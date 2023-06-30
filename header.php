<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header>
    <!-- create a link call Works that should move the page to Works section -->

    <nav class="links h-full flex justify-end items-center">
      <?php wp_nav_menu(array('theme_location' => 'header-menu')); ?>
    </nav>


  </header>