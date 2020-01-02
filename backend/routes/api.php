<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/usuario/login', 'Auth\LoginController@loginComSenha');
Route::post('/usuario/registrar', 'Auth\RegisterController@registrarUsuario');

Route::get('/categorias/listar', 'CategoriasController@index');
Route::post('/categorias/salvar', 'CategoriasController@store');

Route::get('/categorias/testarmiddleware', 'CategoriasController@testemiddleware');
