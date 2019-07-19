function link ()
{
    alert("link");
}
//random
Math.floor(Math.random() * 1000);

// hash
function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }
  
  // Test
  console.log("hashCode(\"Hello!\"): ", hashCode('Hello!'));

//skarte

















// var square = document.getElementById("square"),
//     clickMe = document.getElementById('clickMe');







//     document.getElementById('attachment').addEventListener('change', eventHandler, false)


//     function eventHandler(evt){
//         var file = evt.target.files[0];
//             fileHash( file, md5, function(x){
//                 console.log( x );
//             });
//         }



        
//     /**
//     *Description: The actual function to calculate the hash
//     *Arguments:
//     *file:	a file from a file input load event
//     *hasher:	hashing algorithm
//     *callback:	function that does something with the hash
//     **/
//         function fileHash( file, hasher, callback ){
//             //Instantiate a reader		  
//             var reader = new FileReader();
                  
//             //What to do when we gets data?
//             reader.onload = function( e ){
//                 var hash = hasher(e.target.result);
//                 callback( hash );
//             }
                
//             reader.readAsBinaryString( file );
    
//         }


//     // class Blockhash {
//     //     constructor() {
//     //       this.canvas = document.createElement( 'canvas' );
//     //       this.canvas.style.visibility = 'hidden';
//     //       this.canvas.style.position = 'absolute';
//     //       document.body.appendChild( this.canvas );
      
//     //       this.image = document.createElement( 'img' );
//     //       this.image.style.visibility = 'hidden';
//     //       this.image.style.position = 'absolute';
//     //       this.image.addEventListener( 'load', evt => this.doLoad( evt ) );
//     //       document.body.appendChild( this.image );    
      
//     //       this.reader = new FileReader();
//     //       this.reader.addEventListener( 'load', evt => this.doRead( evt ) );
      
//     //       this.bits = null;
//     //       this.method = null;
//     //       this.callback = null;
//     //     }
      
//     //     blockhash( file, bits, method, callback ) {
//     //       this.bits = bits;
//     //       this.method = method;
//     //       this.callback = callback;
      
//     //       this.reader.readAsDataURL( file );
//     //     }
      
//     //     doLoad( evt ) {
//     //       this.canvas.width = this.image.width;
//     //       this.canvas.height = this.image.height;
      
//     //       let context = this.canvas.getContext( '2d' );
//     //       context.drawImage( this.image, 0, 0, this.image.width, this.image.height );
      
//     //       let data = context.getImageData( 0, 0, this.image.width, this.image.height );
//     //       let hash = this.blockhashData( data, this.bits, this.method );
//     //       this.callback( hash );
//     //     }
      
//     //     doRead( evt ) {
//     //       this.image.src = evt.target.result;
//     //     }
      
//     //     /*
//     //      * From original
//     //      */
      
//     //     hammingDistance( hash1, hash2 ) {
//     //       let d = 0;
//     //       let i;
      
//     //       for( i = 0; i < hash1.length; i++ ) {
//     //         let n1 = parseInt( hash1[i], 16 );
//     //         let n2 = parseInt( hash2[i], 16 );
//     //         d += one_bits[n1 ^ n2];
//     //       }
          
//     //       return d;
//     //     }
      
//     //     median( data ) {
//     //       let mdarr = data.slice( 0 );
//     //       mdarr.sort( function( a, b ) { 
//     //         return a - b; 
//     //       } );
      
//     //       if( mdarr.length % 2 === 0 ) {
//     //         return ( mdarr[mdarr.length / 2] + mdarr[mdarr.length / 2 + 1] ) / 2.0;
//     //       }
      
//     //       return mdarr[Math.floor( mdarr.length / 2 )];
//     //     }
      
//     //     translate_blocks_to_bits( blocks, pixels_per_block ) {
//     //       let half_block_value = pixels_per_block * 256 * 3 / 2;
//     //       let bandsize = blocks.length / 4;
      
//     //       // Compare medians across four horizontal bands
//     //       for( let i = 0; i < 4; i++ ) {
//     //         let m = this.median( blocks.slice( i * bandsize, ( i + 1 ) * bandsize ) );
              
//     //         for( let j = i * bandsize; j < ( i + 1 ) * bandsize; j++ ) {
//     //           let v = blocks[j];
      
//     //           // Output a 1 if the block is brighter than the median.
//     //           // With images dominated by black or white, the median may
//     //           // end up being 0 or the max value, and thus having a lot
//     //           // of blocks of value equal to the median.  To avoid
//     //           // generating hashes of all zeros or ones, in that case output
//     //           // 0 if the median is in the lower value space, 1 otherwise
//     //           blocks[j] = Number( v > m || ( Math.abs( v - m ) < 1 && m > half_block_value ) );
//     //         }
//     //       }
//     //     }
      
//     //     bits_to_hexhash( bits ) {
//     //       let hex = [];
//     //       for( let i = 0; i < bits.length; i += 4 ) {
//     //         let nibble = bits.slice( i, i + 4 );
//     //         hex.push( parseInt( nibble.join( '' ), 2 ).toString( 16 ) );
//     //       }
      
//     //       return hex.join( '' );
//     //     }
      
//     //     bmvbhash_even( data, bits ) {
//     //       let blocksize_x = Math.floor( data.width / bits );
//     //       let blocksize_y = Math.floor( data.height / bits );
      
//     //       let result = [];
      
//     //       for( let y = 0; y < bits; y++ ) {
//     //         for( let x = 0; x < bits; x++ ) {
//     //           let total = 0;
      
//     //           for( let iy = 0; iy < blocksize_y; iy++ ) {
//     //             for( let ix = 0; ix < blocksize_x; ix++ ) {
//     //               let cx = x * blocksize_x + ix;
//     //               let cy = y * blocksize_y + iy;
//     //               let ii = ( cy * data.width + cx ) * 4;
      
//     //               let alpha = data.data[ii+3];
//     //               if( alpha === 0 ) {
//     //                 total += 765;
//     //               } else {
//     //                 total += data.data[ii] + data.data[ii+1] + data.data[ii+2];
//     //               }
//     //             }
//     //           }
      
//     //           result.push( total );
//     //         }
//     //       }
      
//     //       this.translate_blocks_to_bits( result, blocksize_x * blocksize_y );
          
//     //       return this.bits_to_hexhash( result );
//     //     }
      
//     //     bmvbhash( data, bits ) {
//     //       let result = [];
      
//     //       let i, j, x, y;
//     //       let block_width, block_height;
//     //       let weight_top, weight_bottom, weight_left, weight_right;
//     //       let block_top, block_bottom, block_left, block_right;
//     //       let y_mod, y_frac, y_int;
//     //       let x_mod, x_frac, x_int;
//     //       let blocks = [];
      
//     //       let even_x = data.width % bits === 0;
//     //       let even_y = data.height % bits === 0;
      
//     //       if( even_x && even_y ) {
//     //         return this.bmvbhash_even( data, bits );
//     //       }
      
//     //       // Initialize blocks array with 0s
//     //       for( i = 0; i < bits; i++ ) {
//     //         blocks.push( [] );
//     //         for( j = 0; j < bits; j++ ) {
//     //           blocks[i].push( 0 );
//     //         }
//     //       }
      
//     //       block_width = data.width / bits;
//     //       block_height = data.height / bits;
      
//     //       for( y = 0; y < data.height; y++ ) {
//     //         if( even_y ) {
//     //           // don't bother dividing y, if the size evenly divides by bits
//     //           block_top = block_bottom = Math.floor( y / block_height );
//     //           weight_top = 1;
//     //           weight_bottom = 0;
//     //         } else {
//     //           y_mod = ( y + 1 ) % block_height;
//     //           y_frac = y_mod - Math.floor( y_mod );
//     //           y_int = y_mod - y_frac;
      
//     //           weight_top = ( 1 - y_frac );
//     //           weight_bottom = ( y_frac );
      
//     //           // y_int will be 0 on bottom/right borders and on block boundaries
//     //           if( y_int > 0 || ( y + 1 ) === data.height ) {
//     //             block_top = block_bottom = Math.floor( y / block_height );
//     //           } else {
//     //             block_top = Math.floor( y / block_height );
//     //             block_bottom = Math.ceil( y / block_height );
//     //           }
//     //         }
      
//     //         for( x = 0; x < data.width; x++ ) {
//     //           let ii = ( y * data.width + x ) * 4;
      
//     //           let avgvalue, alpha = data.data[ii+3];
//     //           if( alpha === 0 ) {
//     //             avgvalue = 765;
//     //           } else {
//     //             avgvalue = data.data[ii] + data.data[ii+1] + data.data[ii+2];
//     //           }
      
//     //           if( even_x ) {
//     //             block_left = block_right = Math.floor( x / block_width );
//     //             weight_left = 1;
//     //             weight_right = 0;
//     //           } else {
//     //             x_mod = ( x + 1 ) % block_width;
//     //             x_frac = x_mod - Math.floor(x_mod);
//     //             x_int = x_mod - x_frac;
      
//     //             weight_left = ( 1 - x_frac );
//     //             weight_right = x_frac;
      
//     //             // x_int will be 0 on bottom/right borders and on block boundaries
//     //             if( x_int > 0 || ( x + 1 ) === data.width ) {
//     //               block_left = block_right = Math.floor( x / block_width );
//     //             } else {
//     //               block_left = Math.floor( x / block_width );
//     //               block_right = Math.ceil( x / block_width );
//     //             }
//     //           }
      
//     //           // add weighted pixel value to relevant blocks
//     //           blocks[block_top][block_left] += avgvalue * weight_top * weight_left;
//     //           blocks[block_top][block_right] += avgvalue * weight_top * weight_right;
//     //           blocks[block_bottom][block_left] += avgvalue * weight_bottom * weight_left;
//     //           blocks[block_bottom][block_right] += avgvalue * weight_bottom * weight_right;
//     //         }
//     //       }
      
//     //       for( i = 0; i < bits; i++ ) {
//     //         for( j = 0; j < bits; j++ ) {
//     //           result.push( blocks[i][j] );
//     //         }
//     //       }
      
//     //       this.translate_blocks_to_bits( result, block_width * block_height );
          
//     //       return this.bits_to_hexhash( result );
//     //     }
      
//     //     blockhashData( data, bits, method ) {
//     //       var hash;
      
//     //       if( method === 1 ) {
//     //         hash = this.bmvbhash_even( data, bits );
//     //       } else if( method === 2 ) {
//     //         hash = this.bmvbhash( data, bits );
//     //       } else {
//     //         throw new Error( 'Bad hashing method.' );
//     //       }
      
//     //       return hash;
//     //     }
//     //   }