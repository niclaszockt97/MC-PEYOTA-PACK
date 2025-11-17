//Removed Recipes
/*    ServerEvents.recipes(event => {
        event.remove({ output: 'ae2:crystal_resonance_generator'})
      })
*/
//Crafting Table

//Crystal Resonance Generator Recipe
ServerEvents.recipes(event => {
    event.shaped('kubejs:infinity_uraninite_cell', [
      'ABA',
      'DCD',
      'DDD'
    ], {
      A: 'minecraft:copper_ingot',
      B: 'gtceu:certus_quartz_block',
      C: 'ae2:cell_component_256k',
      D: 'powah:uraninite'
    })
  })

