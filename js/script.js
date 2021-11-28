//1. Load the page

//2. Hide the content appearing under the second tab

//3. Show the first tab as an active tab and the content under that tab

//4. When I click on the second tab, My Services:

//5. Hide the content under the first tab, About Me 

//6. Show the content under the second tab My Services

//7. Make the second tab active

function switchTabs(evt, tabName) {

    var tablinks, tabContent, i;
    tablinks = document.getElementsByClassName("tablinks");
    tabContent = document.getElementsByClassName("tabContent");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    console.log(evt.currentTarget.className);

}