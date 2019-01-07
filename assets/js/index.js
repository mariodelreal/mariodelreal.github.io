window.onload = function(){
    enforceNavigationMethod();
    window.onresize = enforceNavigationMethod;
    
    var navigationTextItems = document.getElementsByClassName("navigation_text");
    for (var i = 0; i < navigationTextItems.length; i++){
        navigationTextItems[i].addEventListener("mouseover", function(){
           this.style.backgroundColor = "white";
           this.style.color = "black";
        });
        navigationTextItems[i].addEventListener("mouseout", function(){
            this.style.backgroundColor = "";
            this.style.color = "white";
        });
    }
    
    var navigationImage = document.getElementById("navigation_image");
    var navigationImageOptions = document.getElementById("navigation_image_options");
    navigationImageOptions.style.display = "none";
    navigationImage.addEventListener("click", function(){
        if (navigationImageOptions.style.display === "none"){
            navigationImageOptions.style.display = "block";
            document.getElementById("main").style.display = "none";
            // document.getElementById("personal_info").style.background = "rgba(0,0,0,0.0)";
        }
        else if (navigationImageOptions.style.display === "block"){
            navigationImageOptions.style.display = "none";
            document.getElementById("main").style.display = "block";
            // document.getElementById("personal_info").style.background = "rgba(0,0,0,0.0)";
        }
    });
    
    var navigationImageOptionItems = document.getElementsByClassName("navigation_image_option");
    for (var i = 0; i < navigationImageOptionItems.length; i++){
        navigationImageOptionItems[i].addEventListener("click", function(){
            var event = new Event("click");
            navigationImage.dispatchEvent(event);
        });
        navigationImageOptionItems[i].addEventListener("mouseover", function(){
            this.style.backgroundColor = "white";
            this.style.color = "black";
        });
        navigationImageOptionItems[i].addEventListener("mouseout", function(){
            this.style.backgroundColor = "";
            this.style.color = "white";
        });
    }
    
    var personalInfoLinksGithub = document.getElementById("personal_info_links_github");
    personalInfoLinksGithub.addEventListener("click", function(){
        var win = window.open("https://github.com/mariodelreal/");
        win.focus();
    });
    var personalInfoLinksLinkedin = document.getElementById("personal_info_links_linkedin");
    personalInfoLinksLinkedin.addEventListener("click", function(){
        var win = window.open("https://www.linkedin.com/in/madelreal/");
        win.focus();
    });
}

function enforceNavigationMethod(){
    if (window.innerWidth < 640){
        document.getElementById("navigation_bar_text").style.display = "none";
        document.getElementById("navigation_bar_image").style.display = "block";
    }
    else{
        document.getElementById("navigation_bar_text").style.display = "block";
        document.getElementById("navigation_bar_image").style.display = "none";
    }
}