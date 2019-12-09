<?php


function plus_admin_bar () {
    show_admin_bar(false);
}
add_action('after_setup_theme', 'plus_admin_bar');


function reve_julia_scripts() {
    wp_enqueue_style( 'menu', get_stylesheet_directory_uri() . '/css/menu.css' );
    wp_enqueue_style( 'normalize', get_stylesheet_directory_uri() . '/css/normalize.css' );
    wp_enqueue_style( 'style', get_stylesheet_directory_uri() . '/css/style.css' );
}
add_action( 'wp_enqueue_scripts', 'reve_julia_scripts' );


add_action('init', 'gkp_insert_js_in_footer');
function gkp_insert_js_in_footer() {

// On verifie si on est pas dans l'admin
if( !is_admin() ) :

    // On annule jQuery installer par WordPress (version 1.4.4
    wp_deregister_script( 'jquery' );

    // On declare un nouveau jQuery dernière version grace au CDN de Google
    wp_register_script( 'jquery', 'https://code.jquery.com/jquery-2.2.4.min.js','',false,true);
    wp_enqueue_script( 'jquery' );

    // On insere le fichier de ses propres fonctions javascript
    wp_register_script('accordeon', get_bloginfo( 'template_directory' ).'/js/accordeon.js','',false,true);
    wp_enqueue_script( 'accordeon' );
        wp_register_script('accueil', get_bloginfo( 'template_directory' ).'/js/accueil.js','',false,true);
    wp_enqueue_script( 'accueil' );
            wp_register_script('apparition', get_bloginfo( 'template_directory' ).'/js/apparition.js','',false,true);
    wp_enqueue_script( 'apparition' );
               wp_register_script('index', get_bloginfo( 'template_directory' ).'/js/index.js','',false,true);
    wp_enqueue_script( 'index' );

endif;
}




/**
 * Pour aider à trouver les templates à utiliser
 */
function debug_template() {
    global $template;
    $affiche_template = print_r( $template , true );
    $affiche_body_class = print_r(get_body_class(), true);
    $affiche_debug = <<<EOD
Fichier de template :
$affiche_template
Body class
$affiche_body_class
EOD;
    // en commentaire dans le code HTML
    echo("<!--\n$affiche_debug\n-->");
    // Par JS dans la console
    $json_debug = json_encode($affiche_debug);
    echo("<script>console.log($json_debug)</script>");
}
// Laisser ce code dans le rendu final. Le mettre en commentaire APRES que j'ai noté.
add_action('wp_footer','debug_template');


add_theme_support('html5');



/**
 *  Les Post type, les taxonomies ainsi que les custom-field ont été ajouté via des plugins wordpress
 *  Si vous souhaitez v&rifier,voici les logs de la partie admin de wordpress
 *  apierso2
 *  kxo$R@Q&unldEkV$Q9
 */

