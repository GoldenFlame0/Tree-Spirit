// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
	event.create('slumbering_eye')
    event.create('docbook')
    event.create('bloody_notebook')
})

console.info('Hello, World! (Loaded startup scripts)')

