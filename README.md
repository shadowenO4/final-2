# Travel App

## Project Overview
The Travel App is a comprehensive travel planning tool that helps users gather essential information about their travel destinations. It integrates with multiple APIs to provide:
- Location details from Geonames
- Weather forecasts from Weatherbit
- Location images from Pixabay

The app is built using modern web technologies:
- Frontend: HTML, SCSS, JavaScript
- Backend: Node.js with Express
- Build Tools: Webpack
- Testing: Jest
- Offline Support: Workbox service workers

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shadowenO4/final-2.git
   cd travel-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up API keys:
   - Create a `.env` file in the root directory
   - Add your API keys:
     ```
     GEONAMES_USERNAME=shadowenO4
     WEATHERBIT_API_KEY=your_api_key
     PIXABAY_API_KEY=your_api_key
     ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Access the app at `http://localhost:3000`

## Usage
1. Enter a location in the search field
2. Select your travel dates
3. View the following information:
   - Location details (country, region, timezone)
   - 16-day weather forecast
   - Location images
4. Use the app offline - cached data will be available when offline

## API Documentation
### Geonames API
- Used for location search and details
- Rate limit: 30,000 requests per day
- Required: Username (free registration)

### Weatherbit API
- Provides 16-day weather forecasts
- Rate limit: 50,000 requests per day
- Required: API key (free tier available)

### Pixabay API
- Provides location images
- Rate limit: 10,000 requests per hour
- Required: API key (free registration)

## Examples
### Sample Location Search
1. Enter "Paris, France"
2. Select dates: 2023-12-15 to 2023-12-20
3. View:
   - Location: Paris, Île-de-France, France (UTC+1)
   - Weather: Daily forecasts for the selected period
   - Images: 10 high-quality photos of Paris

## Troubleshooting
### Common Issues
1. **API Keys Not Working**
   - Verify keys are correctly set in `.env`
   - Check API provider for key validity

2. **App Not Loading**
   - Ensure all dependencies are installed
   - Check server logs for errors

3. **Offline Mode Not Working**
   - Verify service worker is registered
   - Check browser's application cache

## Testing
Run unit tests:
```bash
npm test
```

## Dependencies
- Express
- Webpack
- Jest
- Workbox
- Node.js (version 18 or higher)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/me)
