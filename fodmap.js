$(document).on( 'click', '#button', function() {
    var button = $(this);
    var url = "/fodmap-recipe-app/recipes.php";
    var food = $("#foodinput").val();

    jQuery.ajax({
        type : 'post',
        url : url,
        data : {
            action : 'get_recipes',
            ingredient: food
        },
        success : function( response ) {
            if( response == '' ){
                $("#norecipe").show();
                $("#checknotes").hide();
                $("#recipes").html('');
            }
            else {
                $("#norecipe").hide();
		$("#checknotes").show();
                $("#recipes").html(response);
            }
        }
    });

    return false;
})

var HIGH = "H";
var LOW = "L";
var MEDIUM = "M";

var Food = function(name, type, quantity){
	this.name = name;
	this.type = type;

	if( quantity !== undefined ){
		if( type != MEDIUM ){
			alert("Food data initialised incorrectly");
		} else {
			this.quantity = quantity;
		}
	}
}

var foods = [
	// Low FODMAP foods:
	new Food("beef", LOW),
	new Food("chicken", LOW),
	new Food("chickpeas", LOW),
	new Food("garbanzo beans", LOW),
	new Food("deli slices", LOW),
	new Food("ham", LOW),
	new Food("proscuitto", LOW),
	new Food("eggs", LOW),
	new Food("fish", LOW),
	new Food("lamb", LOW),
	new Food("pork", LOW),
	new Food("shellfish", LOW),
	new Food("turkey", LOW),
	new Food("dairy (lactose-free)", LOW),
	new Food("milk (lactose-free)", LOW),
	new Food("cheese (lactose-free)", LOW),
	new Food("yoghurt (lactose-free)", LOW),
	new Food("dairy (low lactose )", LOW),
	new Food("cream cheese (low lactose)", LOW),
	new Food("half and half (low lactose)", LOW),
	new Food("cheese (hard)", LOW),
	new Food("cheddar", LOW),
	new Food("colby", LOW),
	new Food("parmesan", LOW),
	new Food("swiss", LOW),
	new Food("cheese (soft)", LOW),
	new Food("brie", LOW),
	new Food("feta", LOW),
	new Food("camembert", LOW),
	new Food("mozzarella", LOW),
	new Food("sherbet", LOW),
	new Food("yogurt (greek)", LOW),
	new Food("yoghurt (greek)", LOW),
	new Food("whipped cream", LOW),
	new Food("almond milk", LOW),
	new Food("coconut milk", LOW),
	new Food("rice milk", HIGH),
	new Food("soy milk (made from soy protein)", LOW),
	new Food("walnuts", LOW),
	new Food("macadamia", LOW),
	new Food("macadamia nuts", LOW),
	new Food("peanuts", LOW),
	new Food("pecan nuts", LOW),
	new Food("pine nuts", LOW),
	new Food("nut butters", LOW),
	new Food("peanut butter", LOW),
	new Food("tempeh", LOW),
	new Food("tofu", LOW),
	new Food("bagels (gluten-free)", LOW),
	new Food("biscuits (gluten-free)", LOW),
	new Food("bread (gluten-free)", LOW),
	new Food("cereal (gluten-free)", LOW),
	new Food("chips (gluten-free)", LOW),
	new Food("crackers (gluten-free)", LOW),
	new Food("noodles (gluten-free)", LOW),
	new Food("pancakes (gluten-free)", LOW),
	new Food("pasta (gluten-free)", LOW),
	new Food("pretzels (gluten-free)", LOW),
	new Food("tortillas (gluten-free)", LOW),
	new Food("waffles (gluten-free)", LOW),
	new Food("oatmeal", LOW),
	new Food("oats", LOW),
	new Food("oat bran", LOW),
	new Food("popcorn", LOW),
	new Food("quinoa", LOW),
	new Food("rice", LOW),
	new Food("rice bran", LOW),
	new Food("bananas", LOW),
	new Food("blueberries", LOW),
	new Food("cantaloupe", LOW),
	new Food("cranberries", LOW),
	new Food("grapes", LOW),
	new Food("honeydew", LOW),
	new Food("kiwis", LOW),
	new Food("lemons", LOW),
	new Food("limes", LOW),
	new Food("mandarins", LOW),
	new Food("oranges", LOW),
	new Food("passion fruits", LOW),
	new Food("pineapple", LOW),
	new Food("raspberries", LOW),
	new Food("rhubarb", LOW),
	new Food("strawberries", LOW),
	new Food("tangerines", LOW),
	new Food("alfalfa sprouts", LOW),
	new Food("bean sprouts", LOW),
	new Food("beansprouts", LOW),
	new Food("bamboo shoots", LOW),
	new Food("bell peppers", LOW),
	new Food("capsicums", LOW),
	new Food("bok choy", LOW),
	new Food("carrots", LOW),
	new Food("cabbage", LOW),
	new Food("cucumbers", LOW),
	new Food("eggplants", LOW),
	new Food("green beans", LOW),
	new Food("kale", LOW),
	new Food("lettuce", LOW),
	new Food("parsnips", LOW),
	new Food("pumpkin", LOW),
	new Food("potatoes", LOW),
	new Food("radishes", LOW),
	new Food("rutabaga", LOW),
	new Food("seaweed (nori)", LOW),
	new Food("spinach", LOW),
	new Food("squash", LOW),
	new Food("tomatoes", LOW),
	new Food("turnips", LOW),
	new Food("water chestnuts", LOW),
	new Food("zucchini", LOW),
	new Food("fruit juice/smoothies made with foods allowed (limit to 1⁄2 cup at a time)", LOW),
	new Food("coffee", LOW),
	new Food("tea", LOW),
	new Food("vegetable juices/smoothies made with foods allowed (limit to 1⁄2 cup at a time)", LOW),
	new Food("jam", LOW),
	new Food("jelly", LOW),
	new Food("pickle", LOW),
	new Food("relish", LOW),
	new Food("salsa", LOW),
	new Food("sauce", LOW),
	new Food("salad dressing made with foods allowed", LOW),
	new Food("most spices and herbs", LOW),
	new Food("cumin", LOW),
	new Food("cardamom", LOW),
	new Food("coriander", LOW),
	new Food("fennel", LOW),
	new Food("broth (homemade)", LOW),
	new Food("butter", LOW),
	new Food("chives", LOW),
	new Food("cooking oils", LOW),
	new Food("olive oil", LOW),
	new Food("vegetable oil", LOW),
	new Food("sesame oil", LOW),
	new Food("garlic/onion infused oil", LOW),
	new Food("maple syrup without HFCS", LOW),
	new Food("mustard", LOW),
	new Food("margarine", LOW),
	new Food("mayonnaise", LOW),
	new Food("onions (green spring part)", LOW),
	new Food("olives", LOW),
	new Food("pepper", LOW),
	new Food("pesto", LOW),
	new Food("salt", LOW),
	new Food("seeds", LOW),
	new Food("chia seeds", LOW),
	new Food("flax seeds", LOW),
	new Food("pumpkin seeds (pepitas)", LOW),
	new Food("sesame seeds", LOW),
	new Food("sunflower seeds", LOW),
	new Food("sugar", LOW),
	new Food("soy sauce", LOW),
	new Food("vinegar", LOW),
	new Food("chestnuts", LOW),
	new Food("spaghetti squash", LOW),
	// High FODMAP foods:
	new Food("buttermilk", HIGH),
	new Food("chocolate", HIGH),
	new Food("cream sauce", HIGH),
	new Food("cheese sauce", HIGH),
	new Food("custard", HIGH),
	new Food("ice cream", HIGH),
	new Food("milk (cow)", HIGH),
	new Food("milk (goat)", HIGH),
	new Food("milk (sheep)", HIGH),
	new Food("milk (condensed)", HIGH),
	new Food("milk (evaporated)", HIGH),
	new Food("cottage cheese", HIGH),
	new Food("ricotta", HIGH),
	new Food("sour cream", HIGH),
	new Food("cashews", HIGH),
	new Food("beans", HIGH),
	new Food("red kidney beans", HIGH),
	new Food("lima beans", HIGH),
	new Food("haricot beans", HIGH),
	new Food("butter beans", HIGH),
	new Food("broad beans", HIGH),
	new Food("black beans", HIGH),
	new Food("fava beans", HIGH),
	new Food("borlotti beans", HIGH),
	new Food("baked beans", HIGH),
	new Food("black eyed peas", HIGH),
	new Food("bulgur", HIGH),
	new Food("lentils", HIGH),
	new Food("miso", HIGH),
	new Food("pistachios", HIGH),
	new Food("soybeans", HIGH),
	new Food("soy milk (made from soybeans)", HIGH),
	new Food("bagels (made with wheat/barley/rye)", HIGH),
	new Food("biscuits (made with wheat/barley/rye)", HIGH),
	new Food("bread (made with wheat/barley/rye)", HIGH),
	new Food("cereal (made with wheat/barley/rye)", HIGH),
	new Food("chips (made with wheat/barley/rye)", HIGH),
	new Food("crackers (made with wheat/barley/rye)", HIGH),
	new Food("noodles (made with wheat/barley/rye)", HIGH),
	new Food("pancakes (made with wheat/barley/rye)", HIGH),
	new Food("pastas (made with wheat/barley/rye)", HIGH),
	new Food("pretzels (made with wheat/barley/rye)", HIGH),
	new Food("chicory root", HIGH),
	new Food("inulin", HIGH),
	new Food("apples", HIGH),
	new Food("applesauce", HIGH),
	new Food("apricots", HIGH),
	new Food("blackberries", HIGH),
	new Food("boysenberries", HIGH),
	new Food("canned fruit", HIGH),
	new Food("dates", HIGH),
	new Food("dried fruits", HIGH),
	new Food("figs", HIGH),
	new Food("guavas", HIGH),
	new Food("mangos", HIGH),
	new Food("nectarines", HIGH),
	new Food("papaya", HIGH),
	new Food("peaches", HIGH),
	new Food("pears", HIGH),
	new Food("plums", HIGH),
	new Food("persimmon", HIGH),
	new Food("prunes", HIGH),
	new Food("watermelon", HIGH),
	new Food("artichokes", HIGH),
	new Food("cauliflower", HIGH),
	new Food("mushrooms", HIGH),
	new Food("sugar snap peas", HIGH),
	new Food("split peas", HIGH),
	new Food("sherry", HIGH),
	new Food("port", HIGH),
	new Food("chutney (with HFCS)", HIGH),
	new Food("jam (with HFCS)", HIGH),
	new Food("jelly (with HFCS)", HIGH),
	new Food("pickle (with HFCS)", HIGH),
	new Food("relish (with HFCS)", HIGH),
	new Food("salsa (with HFCS)", HIGH),
	new Food("sauce (with HFCS)", HIGH),
	new Food("agave", HIGH),
	new Food("garlic", HIGH),
	new Food("garlic salt", HIGH),
	new Food("garlic powder", HIGH),
	new Food("honey", HIGH),
	new Food("hummus", HIGH),
	new Food("molasses", HIGH),
	new Food("onions", HIGH),
	new Food("onion salt", HIGH),
	new Food("onion powder", HIGH),
	new Food("tomato paste", HIGH),
	new Food("artificial sweetener (isomalt, mannitol, sorbitol, xylitol)", HIGH),
	// Medium
	new Food("avocados", MEDIUM, "1/4"),
	new Food("cherries", MEDIUM, "Less than 3"),
	new Food("grapefruit", MEDIUM, "1/2"),
	new Food("longon", MEDIUM, "< 10"),
	new Food("lychee", MEDIUM, "< 5"),
	new Food("pomegranate", MEDIUM, "1/2"),
	new Food("rambutan", MEDIUM, "< 3"),
	new Food("shredded coconut", MEDIUM, "< 1/4 cup"),
	new Food("dried banana chips", MEDIUM, "< 10"),
	new Food("artichoke hearts (canned)", MEDIUM, "1/4 cup"),
	new Food("asparagus", MEDIUM, "< 3 spears"),
	new Food("beetroot", MEDIUM, "4 slices"),
	new Food("broccoli", MEDIUM, "< 1/2 cup"),
	new Food("brussels sprouts", MEDIUM, "< 1/2 cup"),
	new Food("butternut pumpkin", MEDIUM, "< 1/4 cup"),
	new Food("cabbage (savoy)", MEDIUM, "< 1 cup"),
	new Food("celery", MEDIUM, "1 stick"),
	new Food("green peas", MEDIUM, "< 1/2 cup"),
	new Food("okra", MEDIUM, "3 pods"),
	new Food("snow peas", MEDIUM, "< 10 pods"),
	new Food("corn", MEDIUM, "1/2 cob"),
	new Food("sweet potatoes", MEDIUM, "< 1/2 cup"),
	new Food("almonds", MEDIUM, "< 10"),
	new Food("hazelnuts", MEDIUM, "< 10")

];

function ele(id){
	return document.getElementById(id);
}

function foodInput() { return ele("foodinput"); }

function getFoodObj(foodname){
	for( var i = 0; i < foods.length; i++ ){
		if( foodname.toLowerCase() == foods[i].name.toLowerCase() ){
			return foods[i];
		}
	}

	return undefined;
}

function showEle(id){
		ele(id).style.display = "block";
}

function hideEle(id){
		ele(id).style.display = "none";
}

function hideResults(){
	hideEle("result-container");
	hideEle("no-result");
	hideEle("high-result");
	hideEle("moderate-result");
	hideEle("low-result");
        hideEle("norecipe");
        hideEle("checknotes");
}
function reportFood(){

        hideResults();
        hideEle("fodapp-query");
        showEle("result-container");

	var fname = foodInput().value;
	var fobj = getFoodObj(fname);
	if( fobj === undefined ){
                ele("food").innerHTML = "No results";
		showEle("no-result");
                ele("recipes").innerHTML = '';
	} else {
		ele("food").innerHTML = fname;
		if( fobj.type == HIGH ) { showEle("high-result"); }
		if( fobj.type == LOW ) { showEle("low-result"); }
		if( fobj.type == MEDIUM ) {
			showEle("moderate-result");
			ele("quantity").innerHTML = fobj.quantity;
		}
	}
}

function startOver(){
        hideResults();
        showEle("fodapp-query");
        showEle("button");
}

var aclist = [];
for( var i = 0; i < foods.length; i++ ){
	aclist[i] = foods[i].name;
}

var input = foodInput();

var awesomplete = new Awesomplete(input);
awesomplete.list = aclist;
