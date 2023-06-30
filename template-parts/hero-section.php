<div class="hero-section-container">
    <?php
    the_post_thumbnail('', ['class' => 'hero-section-image']);
    $hero_text_query = new WP_Query(array(
        'post_type' => 'hero_text',
        'posts_per_page' => -1,
        'order' => 'ASC'
    ));
    ?>
    <div class="hero-text-container">
        <?php
        while ($hero_text_query->have_posts()) {
            $hero_text_query->the_post();
        ?>
            <div class=<?php echo "hero-section-text-" . $hero_text_query->current_post + 1; ?>> <?php the_field('hero_text'); ?> <!-- <span style="white-space: pre-line;"></span> --> </div>
        <?php
        }
        wp_reset_postdata();
        //show page title

        $image = get_field('display_image');

        if (!empty($image)) : ?>
            <img class="hero-section-image-2" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
        <?php endif;
        ?>


    </div>
    <div class="scrolldown2">
        <span class="font-light">scroll</span>
    </div>
</div>