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

const typeOfTheme = document.getElementById('themeSet');

typeOfTheme.addEventListener('change', function(e) {
    ThemeSetFunc(typeOfTheme.value);
});

function ThemeSetFunc(themeName) {
   
    const curentTheme = ThemeSet[themeName];
    
    for (var key in curentTheme) {
        document.documentElement.style.setProperty(key, curentTheme[key]);
    }

    // console.log(curentTheme);
    // document.documentElement.style.setProperty('--main-color', '#212529');

}