$(document).ready(function () {

	$.cookieBar({
		acceptButton: true,
		acceptText: 'Ok',
		message: 'Nous utilisons les cookies à des fins statistiques uniquement.',
		acceptOnScroll: true,
		renewOnVisit: false,
		append: true,
		fixed: true,
	});

	var opened = {};

	// Click on main tab
	$("#myTab a").click(function () {
		var ref = $(this).attr("href");
		var tabName = $.trim($(this).text());
		mixpanel.track("tab-click", { ref: ref, tabName: tabName });
	});

	// Click on group
	$(".proposal > h2").click(function () {
		var categoryName = $.trim($(this).closest(".category").children().first().text());
		var groupName = $.trim($(this).text());
		opened[categoryName + groupName] = !opened[categoryName + groupName];
		mixpanel.track("program-click", { category: categoryName, group: groupName, opened: opened[categoryName + groupName] });
	});

	// Click on proposal title
	$(".proposal h3").click(function () {
		var categoryName = $.trim($(this).closest(".category").children().first().text());
		var groupName = $.trim($(this).closest(".proposal").children().first().text());
		var title = $.trim($(this).text());
		opened[categoryName + groupName + title] = !opened[categoryName + groupName + title];
		mixpanel.track("program-click", { category: categoryName, group: groupName, title: title, opened: opened[categoryName + groupName + title] });
	});

});
