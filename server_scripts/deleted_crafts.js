ServerEvents.recipes(event =>{
    ['tfmg:mixing/cast_iron_ingot'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/logistics/andesite_funnel'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/logistics/andesite_tunnel'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/mechanical_harvester'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/mechanical_plough'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/contraption_controls'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/portable_storage_interface'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/chute'].forEach((recipeID) => event.remove({id: recipeID})),
    ['railcraft:brass_ingot_crafted_with_ingots'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:mixing/brass_ingot'].forEach((recipeID) => event.remove({id: recipeID})),
    ['createdieselgenerators:crafting/huge_diesel_engine'].forEach((recipeID) => event.remove({id: recipeID})),
    ['createdieselgenerators:crafting/large_diesel_engine'].forEach((recipeID) => event.remove({id: recipeID})),
    ['createdieselgenerators:crafting/diesel_engine'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/materials/electron_tube'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create_things_and_misc:vibration_mecanism_craft'].forEach((recipeID) => event.remove({id: recipeID})),
    ['thermal:redstone_servo'].forEach((recipeID) => event.remove({id: recipeID})),
    ['thermal:device_tree_extractor'].forEach((recipeID) => event.remove({id: recipeID})),
    ['thermal:rubber_from_dandelion'].forEach((recipeID) => event.remove({id: recipeID})),
    ['thermal:rubber_from_vine'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/fluid_tank'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/mechanical_pump'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/fluid_pipe'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/fluid_pipe_vertical'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/belt_connector'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:deploying/cogwheel'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:deploying/large_cogwheel'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/materials/rose_quartz'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:sequenced_assembly/precision_mechanism'].forEach((recipeID) => event.remove({id: recipeID})),
    ['tfmg:item_application/coke_oven'].forEach((recipeID) => event.remove({id: recipeID})),
    ['tfmg:item_application/coke_oven_using_deployer'].forEach((recipeID) => event.remove({id: recipeID})),
    ['eidolon:pewter_blend'].forEach((recipeID) => event.remove({id: recipeID})),
    ['eidolon:smelt_pewter_blend'].forEach((recipeID) => event.remove({id: recipeID})),
    ['eidolon:blast_pewter_blend'].forEach((recipeID) => event.remove({id: recipeID})),
    ['tfmg:smelting/fireclay_brick'].forEach((recipeID) => event.remove({id: recipeID})),
    ['create:crafting/kinetics/super_glue'].forEach((recipeID) => event.remove({id: recipeID})),
    ['tfmg:crafting/blast_furnace_output'].forEach((recipeID) => event.remove({id: recipeID}))
})
ServerEvents.recipes(event =>{
let remove_recipe_recipeid =
//minecraft
        [
            'minecraft:crafting_table',
            'railcraft:water_tank_siding',
            'minecraft:chest',
            'minecraft:furnace',
            'tfmg:crafting/screwdriver',
            'create:craftng/kinetics/cogwheel',
            'create:crafting/kinetics/shaft',
            'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
            'epicsamurai:steel_ingot_create_compat',
            'create:crafting/kinetics/cogwheel',
            'create:crafting/kinetics/large_cogwheel',
            'create:crafting/kinetics/large_cogwheel_from_little',
            'create:crafting/kinetics/hand_crank',
            'create:crafting/kinetics/water_wheel',
            'create:crafting/kinetics/large_water_wheel',
            'minecraft:smithing_table',
            'create:crafting/kinetics/deployer',
            'create:crafting/kinetics/mechanical_saw',
            'create:crafting/kinetics/mechanical_press',
            'create:crafting/kinetics/mechanical_drill',
            'create:crafting/kinetics/encased_fan',
            'create:crafting/kinetics/mechanical_mixer',
            'thermal:saw_blade',
            'ad_astra:recipes/hammer',
            'ad_astra:hammering/iron_plate',  
            'ad_astra:hammering/steel_plate',
            'create:crafting/kinetics/millstone',
            'minecraft:bucket', 
            'create:crafting/kinetics/wrench',
            'ad_astra:recipes/iron_rod',
            'minecraft:iron_bars',
            'create:crafting/kinetics/empty_blaze_burner',
            'create:pressing/steel_ingot',
            'railcraft:rolling/steel_plate',
            'wizards_reborn:shaped/arcane_workbench',
            'tfmg:sequenced_assembly/steel_mechanism',
            'eidolon:worktable',
            'thermal:rf_coil',
            'tfmg:crafting/steel_tank',
            'eidolon:research_table',
            'forbidden_arcanus:mundabitur_dust',
            'eidolon:crucible'
        ]
    remove_recipe_recipeid.forEach(recipeID => {
        event.remove({ id: recipeID })
    })
})