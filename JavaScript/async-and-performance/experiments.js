console.log( 'A' );

setTimeout(function(){
    console.log( 'B' );
}, 0)

schedule( function(){
    console.log( 'C' );
    schedule( function(){
        console.log( 'D' );
    })
})