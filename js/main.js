$(document).ready(function () {

  // display button description on hover
  $('ul.navbar-nav a.nav-link').on('mouseenter', function () {
    const thisHref = $(this).attr('href');
    const navDescription = thisHref.replace('#', '');
    const capitaliseFirstLetter = name => name.toLowerCase().replace(/^\w/, letter => letter.toUpperCase());

    $('#nav-description').show();
    $('#nav-description').attr('href', thisHref);
    $('#nav-description').text(capitaliseFirstLetter(navDescription));
  })

  $('ul.navbar-nav a.nav-link').on('mouseleave', function () {
    $('#nav-description').text('');
  })
});