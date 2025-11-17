//Removed Recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:dark_matter_block'})
    event.remove({ output: 'projecte:dark_matter'})
    event.remove({ output: 'projecte:red_matter_block'})
    event.remove({ output: 'projecte:red_matter'})
    event.remove({ output: 'projecte:philosophers_stone'})

  })

//Crafting Table

//Dark Matter Recipe
ServerEvents.recipes(event => {
    event.shaped('projecte:dark_matter', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'projecte:aeternalis_fuel_block',
      B: 'projecte:aeternalis_fuel'
    })
  })

//Dark Matter Block Recipe
ServerEvents.recipes(event => {
  event.shaped('projecte:dark_matter_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'projecte:dark_matter',
  })
})

//Red Matter Recipe
ServerEvents.recipes(event => {
  event.shaped('projecte:red_matter', [
    'ABA',
    'ABA',
    'ABA'
  ], {
    A: 'projecte:dark_matter_block',
    B: 'projecte:aeternalis_fuel_block'
  })
})

//Red Matter Block Recipe
ServerEvents.recipes(event => {
event.shaped('projecte:red_matter_block', [
  'AAA',
  'AAA',
  'AAA'
], {
  A: 'projecte:red_matter',
})
})

//Philosophers Stone Recipe
ServerEvents.recipes(event => {
  event.shaped('projecte:philosophers_stone', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:lapis_block',
    B: 'minecraft:redstone_block',
    C: 'minecraft:diamond_block'
  })
  })


