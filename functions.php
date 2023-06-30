<?php

function boilerplate_load_assets()
{
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));


  // https://unpkg.com/split-type
  //enqueue above cdn
  // wp_enqueue_script('split-type', 'https://unpkg.com/split-type', array(), false, true);

  // // The core GSAP library
  // wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', array(), false, true);
  // // ScrollTrigger - with gsap.js passed as a dependency
  // wp_enqueue_script('gsap-st', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js', array('gsap-js'), false, true);
  // // Your animation code file - with gsap.js passed as a dependency
  // wp_enqueue_script('gsap-js2', get_template_directory_uri() . 'src/index.js', array('gsap-js'), false, true);
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('menus');
}

add_action('after_setup_theme', 'boilerplate_add_support');

function register_my_menus()
{
  register_nav_menus(
    array(
      'header-menu' => __('Header Menu')
    )
  );
}
add_action('init', 'register_my_menus');


function add_acf_columns_to_hero_text_table($columns)
{
  $columns['hero_text'] = 'Hero Text';
  return $columns;
}
add_filter('manage_hero_text_posts_columns', 'add_acf_columns_to_hero_text_table');

function hero_text_custom_column($column, $post_id)
{
  switch ($column) {
    case 'hero_text':
      echo get_field('hero_text', $post_id);
      break;
  }
}
add_action('manage_hero_text_posts_custom_column', 'hero_text_custom_column', 10, 2);
