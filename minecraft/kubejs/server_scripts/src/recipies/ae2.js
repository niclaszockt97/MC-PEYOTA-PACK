//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:crystal_resonance_generator'})
  })

//Crafting Table

//Crystal Resonance Generator Recipe
ServerEvents.recipes(event => {
    event.shaped('ae2:crystal_resonance_generator', [
      'ABA',
      'ACA',
      'DDD'
    ], {
      A: 'minecraft:copper_ingot',
      B: 'gtceu:certus_quartz_block',
      C: 'ae2:certus_quartz_crystal',
      D: 'minecraft:iron_ingot'
    })
  })

//Certus Quartz
ServerEvents.recipes(event => {
    event.shaped(Item.of('ae2:certus_quartz_crystal'), [
      'A ',
      '  '
    ], {
      A: 'gtceu:certus_quartz_gem'
    })
  })