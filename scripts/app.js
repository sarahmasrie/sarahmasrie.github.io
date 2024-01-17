"use strict";
// IIFE - Immediately invoked functional expression
(function(){

    function DisplayHomePage(){
        console.log("Called DisplayHomePage...");

        let AboutUsButton = document.getElementById("AboutUsBtn");

        AboutUsButton.addEventListener("click",function(){
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "me-3");
        MainParagraph.textContent = "This is my first paragraph";

        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the main paragraph.`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph.</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;

        DocumentBody.appendChild(Article);
    }
    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage...");
    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage...");
    }
    function DisplayProductPage(){
        console.log("Called DisplayProductPage...");
    }
    function DisplayServicePage(){
        console.log("Called DisplayServicePage...");
    }
    function Start(){
        console.log("App Started...");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Services":
                DisplayServicePage();
                break;
        }
    }
    window.addEventListener("load", Start);

})()