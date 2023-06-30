<div class="contact section-container py-8">
    <div class="section-heading">
        <span class="heading-decoration"></span><span>Contact</span>
    </div>
    <div class="contact-content ">

        <?php
        $slug = 'contact';
        $post = get_page_by_path($slug, OBJECT, 'post');
        $content = $post->post_content;
        ?>
        <div class="contact-text text-center leading-10">
            <!-- render content and shortcode -->
            <?php echo apply_filters('the_content', $content); ?>
        </div>
        <?php echo do_shortcode('[wpforms id="24"]'); ?>
    </div>

</div>