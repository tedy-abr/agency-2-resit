# Agency 2 Resit – Developer Portfolio

A responsive, CMS-powered developer portfolio created for the Agency 2 Resit 1 assignment at Noroff.

The portfolio presents my background, technical skills, selected development projects and contact information. Sanity is used as the headless CMS, allowing the portfolio content to be updated without changing the frontend code.

## Live Project

- [View the live website](https://agency-2-resit.netlify.app/)
- [GitHub repository](https://github.com/tedy-abr/agency-2-resit)

## Project Overview

The purpose of this project was to design and build a modern developer portfolio using a JavaScript framework and a headless CMS.

The frontend was built with Next.js, while Sanity is responsible for storing and managing the dynamic portfolio content.

## Features

- Responsive portfolio layout for mobile, tablet and desktop
- CMS-powered homepage content
- CMS-powered biography and background information
- CMS-powered profile image
- CMS-powered skills list
- CMS-powered project collection
- Project images, descriptions and technology tags
- Links to live project deployments
- Links to individual GitHub repositories
- CMS-powered contact information
- Responsive desktop and mobile navigation
- Active navigation states
- Reusable navigation and footer components
- Page-specific titles and metadata
- Modern dark interface with responsive hover effects and transitions

## Technology Stack

### Frontend

- Next.js 16
- JavaScript
- Tailwind CSS 4
- React Icons
- Next.js Image
- Next.js App Router

### CMS

- Sanity
- next-sanity
- GROQ queries

### Deployment

- Netlify
- GitHub

## Sanity Content Structure

The frontend retrieves content from four main Sanity documents.

### Home Page

- Name
- Tagline
- Short introduction

### About Page

- Biography
- Background
- Profile image
- Image alternative text
- Skills

### Projects Page

- Page introduction
- Projects
  - Title
  - Description
  - Image
  - Image alternative text
  - Technologies
  - Live URL
  - GitHub URL

### Contact Page

- Introduction
- Email
- Location
- GitHub URL

## Project Structure

```text
agency-2-resit/
├── public/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── projects/
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Footer.js
│   │   └── Navbar.js
│   └── sanity/
│       ├── client.js
│       └── queries.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md
```

## Getting Started

### Prerequisites

Before running the project locally, make sure Node.js and npm are installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/tedy-abr/agency-2-resit.git
```

Enter the project folder:

```bash
cd agency-2-resit
```

Install the dependencies:

```bash
npm install
```

## Environment Variables

Create a file named `.env.local` in the root of the project.

Add the following environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Replace the example values with the values from your own Sanity project.

Do not commit the `.env.local` file to GitHub.

## Running the Project

Start the development server:

```bash
npm run dev
```

Open the following address in the browser:

```text
http://localhost:3000
```

## Available Scripts

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run ESLint:

```bash
npm run lint
```

## Deployment

The frontend is deployed through Netlify.

Netlify automatically builds and redeploys the website when changes are pushed to the `main` branch.

The required Sanity environment variables must also be added to the Netlify environment-variable settings.

## Author

**Essayas Abraham Hailu**

- [GitHub profile](https://github.com/tedy-abr)
- [Portfolio website](https://agency-2-resit.netlify.app/)

## Academic Project

This project was created as part of the Agency 2 Resit 1 course assignment at Noroff.
