# React Media Player Website

## Description
This project is a web application built with React, integrating a media player, a track selection menu, dropdown menus, and a YouTube player. This interface was used at the **Musée du Bas-Saint-Laurent** as part of the exhibition **Corolles Radiantes**. Designed for tablets and mobile phones, it allows museum visitors to listen to the musical work of **Coppélia Laroche-Francoeur**, which is a **sonification of sound**.

This musical project explores the transposition of visual and sensory perceptions through coding and music. Based on **Sarah Seené**’s photographs, which capture female bodies marked by physical differences, a **Python** algorithm extracts visual data and transforms it into sound material. The goal is to extend the visual experience of the photographs by giving them a sonic dimension. Rather than a simple audio description, this project offers an immersive experience where code becomes a bridge between visual and auditory perception.

Each photographic arrangement corresponds to a one-minute sound sequence. In the first arrangement, the notes heard are directly derived from the image data, establishing a tangible relationship between the visual and auditory elements. Rather than associating each pixel with a note, this project translates the exploration of gaze—what captures attention, intrigues, or unsettles. The intention is to convey the tensions and nuances perceived when the gaze lingers on an image.

The algorithm, based on **OpenCV** and **Scikit-learn**, analyzes contrasts, colors, and light, then segments the image into clusters that reveal its dominant patterns. MIDI files are automatically generated after analyzing each image.

## Features
- **YouTube Player**: Integration of a YouTube video via `YoutubePlayerBlock`.
- **Sound Bar**: Displays and controls audio tracks with `SoundBarBlock`.
- **Music Selection Menu**: Allows users to choose and navigate through different tracks using `MusicMenuBlock`.
- **Dropdown Menus**: Dynamic selection of tracks and related content.
- **Language Switching**: Option to switch between French and English with `LangageSwitcherBlock`.
- **State Management with React Hooks**: Uses `useState` and `useEffect` to store the selected language and track.

## Technologies Used
- **React.js** (Vite or Create React App)
- **CSS** (custom styling for the user interface)
- **LocalStorage** (to store the selected language)
- **YouTube Embedded API** (via `YoutubePlayerBlock`)
- **JSON** (for storing music menu information)
- **Python (OpenCV, Scikit-learn)** for image analysis and MIDI file generation

## Installation
 **Install dependencies**
   ```sh
   npm install
   ```
 **Start the development server**
   ```sh
   npm start
   ```
   The application will be accessible at `http://localhost:3000/`.

## Project Structure
```
📂 src
├── 📂 assets
│   ├── text/information.json
├── 📂 components
│   ├── 📂 Header
│   │   ├── headerBlock.jsx
│   ├── 📂 LangageSwitcher
│   │   ├── langageSwitcherBlock.jsx
│   ├── 📂 SoundBar
│   │   ├── soundBarBlock.jsx
│   ├── 📂 MusicMenu
│   │   ├── musicMenuBlock.jsx
│   ├── 📂 DetailedTextBlock
│   │   ├── detailedTextBlock.jsx
│   ├── 📂 TextBlock
│   │   ├── textBlock.jsx
│   ├── 📂 Footer
│   │   ├── footerBlock.jsx
│   ├── 📂 YoutubePlayerBlock
│   │   ├── youtubePlayerBlock.jsx
├── App.js
├── App.css
└── index.js
```

## Contribution
1. Fork the project
2. Create a new branch (`git checkout -b feature-new-function`)
3. Commit your changes (`git commit -m 'Added a new feature'`)
4. Push the branch (`git push origin feature-new-function`)
5. Open a pull request


## Author
Developed by Copp3lia Laroche-Francoeur.

