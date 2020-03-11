const ThemeSet = {
	default: {
		'--main-color': '#2987ff',
		'--main-color-hover': '#18A3FF',
		'--botton': 'red',
		'--botton-hover': '#fa6b6b'},
	dark: {
		'--main-color': '#212529',
		'--main-color-hover': '#393d40',
		'--botton': '#6e1717',
		'--botton-hover': '#7f2222'}
};

/* check if Local Storage has ThemeToDo to aply theme on load app */
if (localStorage.getItem('ThemeToDo')) {
    var locaStorTheme = JSON.parse(localStorage.getItem('ThemeToDo'));
    ThemeSetFunc(locaStorTheme.theme);
}



const typeOfTheme = document.getElementById('themeSet');

typeOfTheme.addEventListener('change', function(e) {
    ThemeSetFunc(typeOfTheme.value);
});

function ThemeSetFunc(themeName) {
   
    const curentTheme = ThemeSet[themeName];
    
    for (var key in curentTheme) document.documentElement.style.setProperty(key, curentTheme[key]);

    var localStorTheme = {};
    localStorTheme.theme = themeName;
    localStorage.setItem('ThemeToDo', JSON.stringify(localStorTheme));

}