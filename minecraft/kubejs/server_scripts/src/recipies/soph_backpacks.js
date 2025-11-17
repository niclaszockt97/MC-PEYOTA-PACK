//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'sophisticatedbackpacks:backpack'})
  })

//Crafting Table

//Backpack
ServerEvents.recipes(event => {
    event.shaped('sophisticatedbackpacks:backpack', [
      'ABA',
      'ACA',
      'BBB'
    ], {
      A: '#minecraft:wool',
      B: 'minecraft:leather',
      C: '#forge:chests/wooden'
    })
  })