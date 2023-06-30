<div class="about section-container">
    <div class="section-heading">
        <span class="heading-decoration"></span><span>About</span>
    </div>
    <div class="about-content">
        <?php
        $slug = 'about-1';
        $post = get_page_by_path($slug, OBJECT, 'post');
        $content = $post->post_content;
        echo $content;
        ?>
    </div>

</div>