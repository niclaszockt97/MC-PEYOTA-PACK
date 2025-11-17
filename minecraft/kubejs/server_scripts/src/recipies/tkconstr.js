ServerEvents.recipes(event => {
    event.remove({ output: 'tconstruct:smeltery_controller'})
  })

//Crafting Table

//Smeltery
ServerEvents.recipes(event => {
    event.shaped('tconstruct:smeltery_controller', [
      ' A ',
      'ABA',
      ' A '
    ], {
        A: 'tconstruct:seared_bricks',
        B: 'tconstruct:seared_brick'
        
    })
  })

//Smeltery

//Iron Block
ServerEvents.recipes(event => {
  event.custom({
    type: "tconstruct:casting_basin",
    fluid: {
      name: "tconstruct:molten_iron",
      amount: 810 // 9 Ingots = 810 mB
    },
    result: "minecraft:iron_block",
    cooling_time: 200 // Ticks bis zum Erstarren
  });
});

//Gold Block
ServerEvents.recipes(event => {
  event.custom({
    type: "tconstruct:casting_basin",
    fluid: {
      name: "tconstruct:molten_gold",
      amount: 810 // 9 Ingots = 810 mB
    },
    result: "minecraft:gold_block",
    cooling_time: 200 // Ticks bis zum Erstarren
  });
});