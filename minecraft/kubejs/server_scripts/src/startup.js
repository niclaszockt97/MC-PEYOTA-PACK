ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  //Shortcut Reload
  event.register(
    Commands.literal('r').executes(ctx => {
      ctx.source.server.getCommands().performPrefixedCommand(
        ctx.source,
        'reload'
      )
      return 1
    })
  )

  //Shortcut Clear Inventory
  event.register(
    Commands.literal('c').executes(ctx => {
      ctx.source.server.getCommands().performPrefixedCommand(
        ctx.source,
        'clear'
      )
      return 1
    })
  )

  //Kubejs Server Error
  event.register(
    Commands.literal('kes').executes(ctx => {
      ctx.source.server.getCommands().performPrefixedCommand(
        ctx.source,
        'kubejs errors server'
      )
      return 1
    })
  )
  
  //Kubejs Client Error
  event.register(
    Commands.literal('kec').executes(ctx => {
      ctx.source.server.getCommands().performPrefixedCommand(
        ctx.source,
        'kubejs errors client'
      )
      return 1
    })
  )

  //Kubejs Startup Error
  event.register(
    Commands.literal('kec').executes(ctx => {
      ctx.source.server.getCommands().performPrefixedCommand(
        ctx.source,
        'kubejs errors startup'
      )
      return 1
    })
  )

})