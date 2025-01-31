// Copyright 2013-2021, University of Colorado Boulder

/**
 * MagnetsControlPanel is a panel that contains controls for magnets.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Text } from '../../../../scenery/js/imports.js';
import { VBox } from '../../../../scenery/js/imports.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../exampleSim.js';
import exampleSimStrings from '../../exampleSimStrings.js';

class MagnetsControlPanel extends Panel {

  /**
   * @param {MagnetsModel} model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( model, options ) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {

      // Panel options
      xMargin: 10,
      yMargin: 10,
      stroke: 'purple',
      lineWidth: 3
    }, options );

    // 'Magnet Controls' title
    const magnetControlsTitleNode = new Text( exampleSimStrings.magnetControls, {
      font: new PhetFont( {
        size: 18,
        weight: 'bold'
      } )
    } );

    debugger;

    // 'Flip Polarity' button
    const flipPolarityButton = new RectangularPushButton( {
      content: new Text( exampleSimStrings.flipPolarity, {
        font: new PhetFont( 16 )
      } ),
      baseColor: 'black',
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
      }
    } );

    // The contents of the control panel
    const content = new VBox( {
      align: 'center',
      spacing: 10,
      children: [
        magnetControlsTitleNode,
        flipPolarityButton,
        new Text( 'Im Here' )
      ]
    } );

    super( content, options );
  }
}

exampleSim.register( 'MagnetsControlPanel', MagnetsControlPanel );
export default MagnetsControlPanel;