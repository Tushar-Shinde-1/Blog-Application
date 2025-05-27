# 📝 Blog Application

A simple blog application built using **Node.js**, **Express**, **EJS**, and **UUID**. This app allows users to create, view, edit, and delete blog posts.

## 🚀 Features

- Create a new blog post with a title and content.
- View a list of all submitted blog posts.
- Edit or delete existing blog entries.
- Uses **UUID** to uniquely identify each blog post.
- Styled with static assets in the `public` folder.
- Clean and minimal UI using **EJS** templating.

## 📁 Project Structure
```
blog-app/
├── public/ # Static files (CSS/JS)
├── views/ # EJS templates
├── index.js # Main server file
├── package.json
└── README.md
```
## 🛠️ Technologies Used

- Node.js
- Express.js
- EJS
- UUID
- Body-parser

## 🧑‍💻 How to Run the Project

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/blog-app.git
   
   cd blog-app
Install dependencies

bash
Copy code
npm install
Run the app

bash
Copy code
node app.js
Open in browser


http://localhost:3001
3. Run these commands to push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Blog Application"
git branch -M main
git remote add origin https://github.com/yourusername/blog-app.git
git push -u origin main
