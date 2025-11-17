//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'ironfurnaces:iron_furnace'})
    event.remove({ output: 'ironfurnaces:gold_furnace'})
    event.remove({ output: 'ironfurnaces:diamond_furnace'})
    event.remove({ output: 'ironfurnaces:emerald_furnace'})
    event.remove({ output: 'ironfurnaces:netherite_furnace'})
    event.remove({ output: 'ironfurnaces:copper_furnace'})
    event.remove({ output: 'ironfurnaces:silver_furnace'})

    event.remove({ output: 'ironfurnaces:upgrade_iron'})
    event.remove({ output: 'ironfurnaces:upgrade_gold'})
    event.remove({ output: 'ironfurnaces:upgrade_diamond'})
    event.remove({ output: 'ironfurnaces:upgrade_emerald'})
    event.remove({ output: 'ironfurnaces:upgrade_obsidian'})
    event.remove({ output: 'ironfurnaces:upgrade_netherite'})
    event.remove({ output: 'ironfurnaces:upgrade_copper'})
    event.remove({ output: 'ironfurnaces:upgrade_silver'})
    event.remove({ output: 'ironfurnaces:upgrade_iron2'})
    event.remove({ output: 'ironfurnaces:upgrade_gold2'})
    event.remove({ output: 'ironfurnaces:upgrade_silver2'})
    event.remove({ output: 'ironfurnaces:upgrade_crystal'})

    event.remove({ output: 'ironfurnaces:augment_factory'})
    event.remove({ output: 'ironfurnaces:augment_generator'})
    event.remove({ output: 'ironfurnaces:augment_fuel'})
  })


//Crafting Table

//Iron Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:iron_furnace', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:iron_block',
      B: 'minecraft:blast_furnace'
    })
  })

//Gold Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:gold_furnace', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:gold_block',
      B: 'ironfurnaces:iron_furnace'
    })
  })

//Diamond Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:diamond_furnace', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:diamond_block',
      B: 'ironfurnaces:gold_furnace'
    })
  })

//Emerald Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:emerald_furnace', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:emerald_block',
      B: 'ironfurnaces:diamond_furnace'
    })
  })

//Netherite Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:netherite_furnace', [
      'ABA',
      'BCB',
      'ADA'
    ], {
      A: 'minecraft:netherite_block',
      B: 'minecraft:magma_cream',
      C: 'ironfurnaces:obsidian_furnace',
      D: 'ironfurnaces:diamond_furnace'
    })
  })

//Copper Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:copper_furnace', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:copper_block',
      B: 'minecraft:blast_furnace'
    })
  })

//Silver Furnace
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:silver_furnace', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:silver_block',
      B: 'ironfurnaces:copper_furnace'
    })
  })

//Augment: Factory
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:augment_factory', [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: '#forge:stone',
      B: 'minecraft:redstone_block',
      C: 'minecraft:paper',
      D: 'minecraft:piston'
    })
  })

//Augment: Generator
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:augment_generator', [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: '#forge:stone',
      B: 'minecraft:redstone_block',
      C: 'minecraft:paper',
      D: 'minecraft:coal_block'
    })
  })  

//Augment: Fuel Efficiency
ServerEvents.recipes(event => {
    event.shaped('ironfurnaces:augment_fuel', [
      'ABA',
      'CBC',
      'ABA'
    ], {
      A: '#forge:stone',
      B: 'minecraft:coal_block',
      C: 'minecraft:paper',
    })
  })  