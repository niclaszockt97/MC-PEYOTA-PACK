StartupEvents.registry("item",event =>{
    event.create("infinity_iron_ingot_cell","meinfinitycell:infinity_cell").itemType("minecraft:iron_ingot")
    event.create("infinity_gold_ingot_cell","meinfinitycell:infinity_cell").itemType("minecraft:gold_ingot")
    event.create("infinity_diamond_cell","meinfinitycell:infinity_cell").itemType("minecraft:diamond")

    //Additional Mod required: Applied Flux
    //event.create("infinity_fe_cell","meinfinitycell:infinity_cell").type(FluxKeyHelper.of(EnergyType.FE))

    //Powah Mod.

    // Infinity Cell für Powah Uraninite
    event.create("infinity_uraninite_cell", "meinfinitycell:infinity_cell")
        .itemType("powah:uraninite")
})


//Of course, you can also use "Java.loadClass()" to obtain an AEKey to register an infinity cell
/*  const $SourceKey = Java.loadClass('gripe._90.arseng.me.key.SourceKey')
    StartupEvents.registry("item",event =>{
        //Additional Mod required: Ars Énergistique
        event.create("infinity_source_cell","meinfinitycell:infinity_cell").type(() => $SourceKey.KEY)
    })
    */

//In addition to adding infinity cell for one item, you can also add infinities cell for multiple items
/*    StartupEvents.registry("item",event =>{
        event.create("infinities_cell","meinfinitycell:infinities_cell").setName(Text.literal("test")).setKeys(KeyList.of().adds(keys =>{
            keys.add(AEKeyHelper.item("minecraft:diamond"))
            keys.add(AEKeyHelper.item("minecraft:iron_ingot"))
            keys.add(AEKeyHelper.item("minecraft:gold_ingot"))
            keys.add(AEKeyHelper.item("minecraft:copper_ingot"))
            keys.add(AEKeyHelper.item("minecraft:stone"))
        }))
    })
*/