var waste_volume = 0;
var capacity = 1000;
var total_time = 12;
var current_time = 1;
var current_kitchen_waste = [];
var num_items = 0

function update_fill_level(){
	var fill_level = waste_volume / capacity;
	document.getElementById('#fill_level').innerHTML = fill_level;   //Have to show this visually
}

var moisture_content = moisture / waste_volume * 100;

compost_states
	dry, image
	normal, image
	wet, image


var kitchen_waste = [
	{ name:"Banana Peels", moisture: 2, volume: 5 },
	{ name:"Orange Peels", moisture: 6, volume: 10},
	{ name:"Tea Bags", moisture: 4, volume: 6 },
	{ name:"Watermelon Skins", moisture: 13, volume: 15},
	{ name:"Carrot Peels", moisture: 2, volume: 7 },
	{ name:"Celery Stalks", moisture: 7, volume: 15},
	{ name:"Lemons", moisture: 6, volume: 10 },
	{ name:"Old Bread Loaf", moisture: 2, volume: 17},
	{ name:"Onion Skins", moisture: 1, volume: 4 },
	{ name:"Rotten Tomatoes", moisture: 8, volume: 10}
]

function generate_kitchen_waste(){
	num_items = Math.floor(Math.random() * (4 - 0)) + 0;
	console.log("Number of items in kitchen waste are:" + num_items);
	var temp_array = kitchen_waste.slice(kitchen_waste);
	for (var i = 0; i < num_items; i++) {
		var index = Math.floor(Math.random() * temp_array.length);
		var removed = temp_array.splice(index, 1);
		current_kitchen_waste.push(removed[0]);
	}
	console.log("Waste:" + current_kitchen_waste);
}

add_kitchen_waste()
	if waste_volume + temp_waste volume <= capacity
		waste_volume =+ temp_waste_volume
		moisture =+ temp_moisture
		temp_moisture = 0
		temp_waste_volume = 0
		display waste in main bin
		remove waste from temporary bin
	else 
		error: not enough space left
		show next turn button
	

add_sawdust()
	if waste_volume + 10 <= capacity
		waste_volume =+ 10
		moisture =+ 0
		display sawdust over bin
	else 
		error: not enough space left
		show next turn button
	

spray_water()
	moisture =+ 20 

last_state = normal
current_state = normal
report

new_turn_start()
	kitchen_waste_added = false
	sawdust_added = false
	generate_kitchen_waste()
	display week in interface
	display 4 items on the interface

next_turn()
	generate_weather()
	if rain
		moisture = +20
		report =+ rain
	else if normal
		moisture =+ 0
		report =+ clear weather
	else if extreme_sun
		moisture = + -30
		report =+ extreme heat

	moisture_content()

	if moisture_content < 30%
		current_state = dry
	else if moisture_content >=30% and <= 70%
		current_state = normal
	else if moisture_content >=70%
		current_state = wet

	if current_state = normal
		token = 0
	else if last_state = normal 
		if current_state = dry or wet
			token = 1
	else if last_state = current_state
		token = 2
	else 
		token = 1

	if current_time <= total_time
		if token = 0
			waste_volume reduced by 30%
			moisture reduces by 30%
			current_time =+ 1
			new_turn_start()
		else if token = 1
			if current_state = dry
				warning rats are eating into your pile
				last_state = current_state
			else if current_state = wet
				warning
				last_state = current_state
			current_time =+ 1
			new_turn_start()
		else if token = 2
			if current_state = dry
				racoon_destroy
				game_over()	
			else if current_state = wet
				neighbors_complain
				game_over()
	else
		if token = 0 or 1
			waste_volume reduced by 30%
			moisture reduces by 30%
			current_State = normal
		else if token  = 2
			if current_state = dry
				racoon_destroy
				game_over()	
			else if current_state = wet
				neighbors_complain
				game_over()


game_over()
	end_state
		racoon_destroy, image
		neighbors_complain, image
		healthy_compost, image
	
	

generate_weather()
	rain
	normal
	extreme_sun




