<?php
get_header();
//display post using wordpress loop
?>
<main id="primary" class="site-main">
    <?php
    get_template_part("template-parts/hero", "section");
    ?>
    <div class="homepage-content-container">
        <section id="about">
            <?php
            get_template_part("template-parts/about", "section");

            ?>
        </section>

        <section id="works">
            <?php
            get_template_part("template-parts/works", "section");
            ?>
        </section>
        <section id="contact">
            <?php
            get_template_part("template-parts/contact", "section");
            ?>
        </section>
    </div>



</main><!-- #main -->


<?php
get_footer();
?>