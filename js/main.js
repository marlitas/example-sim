// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */
require( [
             'easel',
             'phetcommon/view/CanvasQuirks',
             'model/ExampleSimsModel',
             'view/ExampleSimsStage',
             'i18n!../nls/example-sim-strings'
         ],
         function ( Easel, ExampleSimsModel, ExampleSimsStage, Strings ) {

             // Title --------------------------------------------------------------------

             $( 'title' ).html( Strings.title );

             // Canvas --------------------------------------------------------------------

             var canvas = document.getElementById( 'example-sim-canvas' );
             CanvasQuirks.fixTextCursor( canvas );

             // MVC --------------------------------------------------------------------

             var model = new ExampleSimModel();
             var stage = new ExampleSimStage( canvas, model );

             // Animation loop ----------------------------------------------------------

             Easel.Ticker.addListener( model );
             Easel.Ticker.addListener( stage );
             Easel.Ticker.setFPS( 60 );
             Easel.Touch.enable( stage, false, false );
         } );
