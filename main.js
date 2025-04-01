function translate(language) { 
    const elements = document.querySelectorAll('[data-' + language + ']'); 
    elements.forEach((element) => { 
        element.textContent = element.getAttribute('data-' + language); 
    }); 
} 
 
function changeLanguage(language) { 
    translate(language); 
} 
 
// To switch to English 
changeLanguage('en'); 
// To switch to Russian 
changeLanguage('ru');