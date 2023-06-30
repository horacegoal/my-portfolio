<div class="about section-container">
    <div class="section-heading">
        <span class="heading-decoration"></span><span>Works</span>
    </div>
    <div class="works-content grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- get post type work -->
        <?php
        $work_query = new WP_Query(array(
            'post_type' => 'work',
            'posts_per_page' => -1,
            'order' => 'ASC'
        ));

        // loop through the posts
        while ($work_query->have_posts()) {
            $work_query->the_post();

            // get the post title
            $title = get_the_title();
            // get the post featured image
            $featured_image = get_the_post_thumbnail_url();
            // display title and image
        ?>
            <div class="work-container p-8">
                <div class="bg-main p-4 h-full flex flex-col justify-between">
                    <div>
                        <div class="text-center font-semibold mb-2"><?php echo $title ?></div>

                        <div class="w-full work-image overflow-hidden">
                            <img src=<?php echo $featured_image ?> alt="app cover" class="h-full">

                        </div>
                    </div>

                    <div class="mt-4">
                        <!-- display tags -->
                        <?php
                        $tags = get_the_tags();
                        if ($tags) {
                            foreach ($tags as $tag) {
                                // display tag inside div
                        ?>
                                <div class="tag-container border px-2 py-1 inline-block text-xs"><?php echo $tag->name ?></div>
                        <?php
                            }
                        }
                        ?>
                    </div>
                </div>

            </div>
        <?php
        }



        ?>
    </div>

</div>