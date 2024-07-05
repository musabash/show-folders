# Show Folders Application
Note: This app has been built without using **create-react-app**

## Overview

This project is a web application that allows users to access and manage documents uploaded by administrators. Users can navigate through folders, view the contents, sort items by various criteria, and filter files by name.

## Features

1. **Display Files/Folders**: The application lists all files and folders available.
2. **Navigate Folders**: Users can open folders to view their contents.
3. **Sorting**: Files and folders can be sorted by name, size, or date added.
4. **Filter by Filename**: Users can filter the files by their names (feature to be implemented).

## Demo

The application is deployed and can be accessed [here](https://main--show-folders.netlify.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/musabash/show-folders.git
   cd show-folders
   ```

2. Install the dependencies:
   ```bash
   npm install
    or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm start
     or
   pnpm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
show-folders/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── ContentsTable.tsx
│   │   ├── ContentsTableHeader.tsx
│   │   └── ...
│   │── styles/
│   │   ├── global.css
│   ├── types.ts
│   ├── config.ts
│   ├── temp.ts
│   ├── utils.tsx
│   ├── App.tsx
│   └── index.tsx
│
├── package.json
├── README.md
└── ...
```

## Detailed Description

### Components

1. **ContentsTable**: 
   - Displays the files and folders.
   - Handles folder navigation and file display.
   - Allows sorting by name, size, or date added.
   - Props:
     - `data`: List of files and folders to display.
     - `showNavigateToParent`: Boolean to show/hide the navigation to the parent folder.
     - `sortKey`: The key by which the data is sorted.
     - `sortOrder`: The order of sorting ('asc' or 'desc').
     - `handleFolderClick`: Function to handle folder click events.
     - `handleNavigateToParent`: Function to navigate to the parent folder.
     - `handleSort`: Function to handle sorting.

2. **ContentsTableHeader**:
   - Displays the table headers with sorting functionality.
   - Props:
     - `sortKey`: The current key by which the data is sorted.
     - `sortOrder`: The current order of sorting ('asc' or 'desc').
     - `headers`: List of headers to display.
     - `handleSort`: Function to handle sorting.

### Configuration

- **config.ts**: Contains configuration details such as headers for the table and sorting order symbols.

### Sample Data

- **temp.ts**: Contains sample data for the application including items and folders.

### Types

- **types.ts**: Defines TypeScript types for items, folders, and sortable keys.

### Utilities

- **utils.tsx**: Contains utility functions such as `getSortedArray` to handle sorting logic.

### Application Entry Point

- **App.tsx**: Main application component that manages state and renders the `ContentsTable` component.

### Styling
This project uses Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. The configuration files for Tailwind CSS are:

**tailwind.config.js**: Tailwind CSS configuration file.
**postcss.config.js**: Configuration file for PostCSS, which processes Tailwind CSS.
To apply styles using Tailwind CSS, utility classes are used directly in the JSX markup. For example, className="px-3 text-left align-baseline" is used to apply padding, text alignment, and other styles to elements.

## Future Improvements

- Implement the filtering functionality to filter files by their names.
- Enhance the user interface with better styling and responsiveness.
- Add more comprehensive error handling and validation.
- Add date formatter
- Add data-fetching logic to deal with real data (with provided api end-point)

## Author

Musa Bas - Frontend Developer

---

Feel free to explore the code and provide any feedback or suggestions. Thank you for reviewing this task solution!
