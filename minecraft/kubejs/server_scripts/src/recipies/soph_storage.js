//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'sophisticatedstorage:basic_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:basic_to_copper_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:basic_to_iron_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:basic_to_gold_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:basic_to_netherite_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:copper_to_iron_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:copper_to_gold_upgrade'})
    event.remove({ output: 'sophisticatedstorage:copper_to_diamond_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:copper_to_netherite_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:iron_to_gold_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:iron_to_diamond_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:iron_to_netherite_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:gold_to_netherite_tier_upgrade'})
    event.remove({ output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade'})
  })

//Crafting Table

//Backpack
ServerEvents.recipes(event => {
    event.shaped('sophisticatedstorage:basic_tier_upgrade', [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: '#forge:rods/wooden',
      B: 'minecraft:redstone_block'
    })
  })