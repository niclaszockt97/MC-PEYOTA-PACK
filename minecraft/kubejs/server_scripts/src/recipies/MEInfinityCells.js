//Removed Recipes
/*    ServerEvents.recipes(event => {
        event.remove({ output: 'ae2:crystal_resonance_generator'})
      })
*/
//Crafting Table

//Uraninite Cell
ServerEvents.recipes(event => {
    event.shaped('kubejs:infinity_uraninite_cell', [
      'ABA',
      'DCD',
      'DED'
    ], {
      A: 'minecraft:copper_ingot',
      B: 'gtceu:certus_quartz_block',
      C: 'ae2:cell_component_256k',
      D: 'powah:uraninite',
      E: 'ae2:item_cell_housing'
    })
  })

//Iron Cell
ServerEvents.recipes(event => {
    event.shaped('kubejs:infinity_iron_ingot_cell', [
      'ABA',
      'DCD',
      'DED'
    ], {
      A: 'minecraft:copper_ingot',
      B: 'gtceu:certus_quartz_block',
      C: 'ae2:cell_component_256k',
      D: 'minecraft:iron_block',
      E: 'ae2:item_cell_housing'
    })
  })

//Gold Cell
ServerEvents.recipes(event => {
    event.shaped('kubejs:infinity_iron_ingot_cell', [
      'ABA',
      'DCD',
      'DED'
    ], {
      A: 'minecraft:copper_ingot',
      B: 'gtceu:certus_quartz_block',
      C: 'ae2:cell_component_256k',
      D: 'minecraft:gold_block',
      E: 'ae2:item_cell_housing'
    })
  })

 //Diamond Cell
 ServerEvents.recipes(event => {
     event.shaped('kubejs:infinity_iron_ingot_cell', [
       'ABA',
       'DCD',
       'DED'
     ], {
       A: 'minecraft:copper_ingot',
       B: 'gtceu:certus_quartz_block',
       C: 'ae2:cell_component_256k',
       D: 'minecraft:diamond_block',
       E: 'ae2:item_cell_housing'
     })
   })
