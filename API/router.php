<?php

// $app->get('/artist/', )
// $app->get('/artist/:id', 'Main@index');


$app->get('/genre', 'GenreController@index');
$app->get('/genre/:id', 'GenreController@filter');


/**
 * Route for artist
*/
$app->get('/artist/:id/albums', 'ArtistsController@albums');
$app->get('/artist/:id', 'ArtistsController@info');
$app->get('/artists', 'ArtistsController@all');

/**
 *  Route for albums
 **/
$app->get('/album/:id/detail', 'AlbumController@detail');
$app->get('/album/:id', 'AlbumController@detail');
$app->get('/albums', 'AlbumController@all');
$app->get('/home', "AlbumController@randomAlbum");


/**
 * Route for track
*/

$app->get('/tracks', 'TrackController@all');
$app->get('/track/:id', 'TrackController@info');


$app->get('/search', 'SearchController@all');