Template.nav.events({
    'click #nav .fa': function(){
	$("#nav").toggleClass("open");
	if($("#nav").hasClass("open")){
	    $("#nav i").removeClass("fa-arrow-up");
	    $("#nav i").addClass("fa-arrow-down");
	    $("#nav ul").css("display","block")
	} else {
	    $("#nav i").addClass("fa-arrow-up");
	    $("#nav i").removeClass("fa-arrow-down");
	    $("#nav ul").css("display","none")
	}
    },
    'click #nav a': function() {
	$("#nav").toggleClass("open");
	$("#nav i").addClass("fa-arrow-up");
	$("#nav i").removeClass("fa-arrow-down");
	$("#nav ul").css("display","none")
    }
});
