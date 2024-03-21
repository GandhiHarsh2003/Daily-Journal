# The Daily Journal

## About the Project

This project is a **journal website** designed for users to write and share their journal entries anonymously. It provides a platform for individuals to express their thoughts, experiences, and daily life with the option of anonymity, fostering a supportive and engaging community. Users can compose their own entries and explore the stories shared by others, connecting through the shared human experience.

## Technology Stack

- **Backend:** Node.js - A runtime environment to execute JavaScript on the server side.
- **Template Engine:** EJS (Embedded JavaScript) - Used for rendering HTML pages for the application, incorporating JavaScript logic for dynamic content.
- **Styling:** CSS - For designing and customizing the website's layout and appearance.
- **Database:** MongoDB - A NoSQL database used to store user entries and other data efficiently.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Ensure you have **Node.js** and **npm** (Node Package Manager) installed on your computer. Download and install them from [Node.js official website](https://nodejs.org/).
- You will also need **MongoDB** installed to manage the database. Download the MongoDB Community Server from [MongoDB Download Page](https://www.mongodb.com/try/download/community).

### Installation

1. **Clone the repository** to your local machine:
git clone https://github.com/GandhiHarsh2003/Daily-Journal.git

2. **Navigate** into the project directory:
cd Daily-Journal

3. **Install NPM packages**:
npm install

4. **Connect to your MongoDB server** by replacing the mongoose connection string in your project. Find this line in `app.js`:
mongoose.connect("mongodb://localhost:27017/newsArticles");
And replace it with your MongoDB server connection string. If you are using MongoDB locally, you might not need to change this line.

Running the Project
Start the application by running:
node app.js
Or, if you are using nodemon for automatic reloading:
nodemon app.js
Open your web browser and navigate to http://localhost:3000 to view the application.
