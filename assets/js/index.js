window.onload = function(){
    var menuIconBar = document.getElementById("menu_icon_bar");
    var mainInfo = document.getElementById("main_info");
    
    var menuIconGeneric = document.getElementsByClassName("menu_icon_generic");
    var menuIconAbout = document.getElementById("menu_icon_about");
    var menuIconProjects = document.getElementById("menu_icon_projects");
    var menuIconPlans = document.getElementById("menu_icon_plans");
    var menuIconContact = document.getElementById("menu_icon_contact");
    for (var i = 0; i < menuIconGeneric.length; i++){
        menuIconGeneric[i].addEventListener("click", function(){
            menuIconBar.style.display = "none";
            mainInfo.style.display = "none";
            // alert(this.children[0].innerHTML);
            switch(this.children[0].innerHTML){
                case "ABOUT":
                    document.getElementById("about_info").style.display = "block";
                    break;
                case "PROJECTS":
                    document.getElementById("projects_info").style.display = "block";
                    break;
                case "PLANS":
                    document.getElementById("plans_info").style.display = "block";
                    break;
                case "CONTACT":
                    document.getElementById("contact_info").style.display = "block";
                    break;
            }
        });
    }
    
    
    var infoHeaderClose = document.getElementsByClassName("info_header_close");
    for (var i = 0; i < infoHeaderClose.length; i++){
        infoHeaderClose[i].addEventListener("click", function(){
           this.parentNode.parentNode.style.display = "none";
           menuIconBar.style.display = "block";
           mainInfo.style.display = "block";
        });
    }
}