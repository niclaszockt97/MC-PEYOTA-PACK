//Removed recipies.

//Crafting Table

//Fireclay Brick
ServerEvents.recipes(event => {
    event.shaped(Item.of('gtceu:compressed_fireclay'), [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:fireclay_dust',
      B: 'gtceu:brick_wooden_form'
    })
  })

//Red Alloy Dust
ServerEvents.recipes(event => {
    event.shaped(Item.of('gtceu:red_alloy_dust'), [
      'AAA',
      'AB ',
      '   '
    ], {
      A: 'minecraft:redstone',
      B: 'gtceu:copper_dust'
    })
  })


 // Wood Plate aus Säge + Wooden Slabs
ServerEvents.recipes(event => {
  event.shaped('gtceu:wood_plate', [
    '   ',
    'BBB',
    '   '
  ], {
    B: '#minecraft:wooden_slabs'
  });
});

// Wiremill
//ServerEvents.recipes(event => {
//    const id = global.id;

    // Einfaches Wiremill-Rezept: 1 Fluix Crystal → 1 Fluix Glass Cable
//    event.recipes.gtceu.wire_mill(id('fluix_wire'))
//        .item_input('ae2:fluix_crystal')
//        .item_output('ae2:fluix_glass_cable')
//        .duration("100")
//        .eut("7");
//});






//Pressing

// Rubber Sheet
ServerEvents.recipes(event => {
  event.recipes.create.pressing(
    'gtceu:rubber_plate', // Output
    Item.of('gtceu:rubber_ingot', 2)              // Input
  );
});

// Glass Tube
ServerEvents.recipes(event => {
  event.recipes.create.pressing(
    'gtceu:glass_tube', // Output
    'minecraft:glass'              // Input
  );
});

// Certus Quartz Gem
ServerEvents.recipes(event => {
  event.shaped(Item.of('gtceu:certus_quartz_gem'), [
    'A ',
    '  '
  ], {
    A: 'ae2:certus_quartz_crystal'
  })
})



// Smelting: Iron → Wrought Iron
ServerEvents.recipes(event => {
  event.smelting(
    'gtceu:wrought_iron_ingot',  // Output
    'minecraft:iron_ingot'       // Input
  )
  .xp(0.7)
  .id('kubejs:iron_to_wrought_iron');
});
