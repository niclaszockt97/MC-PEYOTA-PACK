//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'create:goggles'})
  })

//Crafting Table

//Engineer's Goggles
ServerEvents.recipes(event => {
    event.shaped(Item.of('create:goggles'), [
      '   ',
      ' A ',
      'BCB'
    ], {
      A: 'minecraft:string',
      B: '#forge:glass',
      C: 'minecraft:gold_ingot'
    })
  })


// Mixing
ServerEvents.recipes(event => {

  event.recipes.create.mixing(
    'gtceu:rubber_nugget',     // Output
    [
      'gtceu:sulfur_dust',
      '3x gtceu:sticky_resin'
    ]
  )
  .id('kubejs:create_mixer_rubber_nugget');

});


//Pressing

//Coal Dust
ServerEvents.recipes(event => {
  event.recipes.create.pressing(
    Item.of('gtceu:coal_dust', 9),   // Output
    'minecraft:coal_block'           // Input
  );
});

//Charcoal Dust
ServerEvents.recipes(event => {
  event.recipes.create.pressing(
    Item.of('gtceu:charcoal_dust', 9),   // Output
    'minecraft:charcoal_block'           // Input
  );
});
