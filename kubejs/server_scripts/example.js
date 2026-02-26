// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
	//event.remove({output: 'biomeswevegone:blue_enchanted_crafting_table'});
})

ServerEvents.tags('item', event => {

    event.get('irons_spellbooks:blood_focus').add('alexsmobs:blood_sac');
	event.get('irons_spellbooks:blood_focus').add('alexsmobs:mosquito_proboscis');
	event.get('irons_spellbooks:nature_focus').add('farmersdelight:rotten_tomato');

})

// Listen to player login event
PlayerEvents.loggedIn(event => {
	console.info(`Player ${event.player.name} has logged in.`);
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items'))
	{
		// Add the stage
		event.player.stages.add('starting_items');
		// Give some items to player
		event.player.give(
			Item.of(
				'patchouli:guide_book', '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},botania:{Count:1b,id:"botania:lexicon"},irons_spellbooks:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},"akashictome:displayName":{text:\'{"translate":"Tree Spirit Rules"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"Tree Spirit Rules"}]}\'},"patchouli:book":"patchouli:treespirit_rules"}'
			)
		);
		event.player.give(
			Item.of(
				'minecraft:oak_sapling', "{display:{Name:'[{\"text\":\"Heart Sapling\",\"italic\":false,\"color\":\"dark_red\"}]'}}"
			)
		);
		event.player.give(
			Item.of(
				'botania:glimmering_livingwood', "{display:{Lore:['[{\"text\":\"You can replace your heart log with this to make it more distinct and to give you a leg up.\",\"italic\":false,\"color\":\"gray\"}]'],Name:'[{\"text\":\"Heart Log\",\"italic\":false,\"color\":\"dark_red\"}]'}}"
			)
		)
	}
})

console.info('Hello, World! (ran server scripts)');
