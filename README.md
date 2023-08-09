# 06 Server-Side APIs: Weather Dashboard

## Description

The Weather Dashboard allows the user to see the weather outlook for their current city and mutliple cities, so that they can plan a trip. The user is able to search for a city and is presented with the current weather as well as the 5-day forecast for that city. When the user revisits the webpage their search history is saved as buttons. When the user clicks the button they are presented with the weather forecast for that city. The app leverages unsplash to find a new matching background for each city selected and provides weather based on geolocation. The app also features a random quote from the Kanye Rest API.

## Tasks 

- Implemented a form that allows user to search for a city.
- App displays 5-day forecast, which includes temperature, windspeed, humidity, and an icon.
- Each card displays the date using moment JS.
- The app saves user history to local storage and dynamically loads history as clickable buttons to allow the user to revisit past cities forecast.
- used Openweathermap API, Momentjs, Unsplash, and KanyeRest API.

## Usage

![Alt text](assets/weather-app.gif)

## Links
Deployed Webpage: https://rambriz91.github.io/feels-like-summer/
GitHub Repo Page: https://github.com/rambriz91/feels-like-summer

## Credits

- https://openweathermap.org/forecast5
- https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys
- https://stackoverflow.com/questions/22150006/align-two-divs-horizontally-side-by-side-center-to-the-page-using-bootstrap-css
- https://www.google.com/search?q=how+to+place+div+side+by+side+in+bootstrap&rlz=1C1VDKB_enUS1034US1035&oq=how+to+display+divs+side+by+&aqs=chrome.3.0i512j69i57j0i22i30l2j0i10i22i30j0i22i30l5.11231j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:f016b12a,vid:mbhCwnr5Btc
- https://nordicapis.com/how-to-build-an-api-driven-weather-app/#:~:text=First%2C%20go%20to%20OpenWeatherApp%20and,section%20and%20select%20'Subscribe'
- https://stackoverflow.com/questions/59740779/dynamically-creating-buttons-from-localstorage-array
- https://momentjs.com/

## License

MIT License

Copyright (c) [2023] [Robert Ambriz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.