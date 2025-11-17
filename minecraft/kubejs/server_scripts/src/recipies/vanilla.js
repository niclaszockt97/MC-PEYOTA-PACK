//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:iron_block'}),
    event.remove({ output: 'minecraft:gold_block'})
  })

//Crafting Table

//Chest * 4
ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:chest', 4), [
      'AAA',
      'A A',
      'AAA'
    ], {
      A: 'minecraft:oak_log'
    })
  })

//Sticks *16
ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:stick', 16), [
      'A  ',
      'A  '
    ], {
      A: 'minecraft:oak_log'
    })
  })

//Smelting

//Coal
ServerEvents.recipes(event => {
  event.smelting('minecraft:coal', 'minecraft:charcoal')
    .xp(0.7)
    .cookingTime(200);
});