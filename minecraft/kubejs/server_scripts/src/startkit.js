PlayerEvents.loggedIn(event => {
    const player = event.player;

    // Starterpack nur beim ersten Beitritt
    if (!player.stages.has('new_join')) {
        player.stages.add('new_join');

        // Rüstung anlegen
        player.setItemSlot('head',  Item.of('minecraft:leather_helmet'));
        player.setItemSlot('chest', Item.of('minecraft:leather_chestplate'));
        player.setItemSlot('legs',  Item.of('minecraft:leather_leggings'));
        player.setItemSlot('feet',  Item.of('minecraft:leather_boots'));

        // Offhand-Item
        player.setItemSlot('offhand', Item.of('ftbquests:book'));
        event.player.tell('Please look in the Quest Book for Informations.');
        event.cancel()
    }
});