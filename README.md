# ForeverCare React

A comprehensive healthcare platform built with React for managing patient records, appointments, and doctor-patient interactions. This platform enables both healthcare providers and patients to efficiently manage medical data and interactions in a secure, user-friendly environment.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The ForeverCare React app serves as the frontend for a healthcare management system. It allows healthcare providers to manage patient appointments and records, while patients can book appointments, view their medical histories, and communicate with doctors. The platform also supports features like telemedicine and prescription management.

## Features

- **User Authentication**: Secure login and registration for doctors, patients, and admins.
- **Appointment Management**: Patients can book appointments with available doctors, while doctors manage their schedules.
- **Medical Records**: Doctors can view and update patient records, including medical histories and prescriptions.
- **TODOTelemedicine**: Secure video calls between doctors and patients for remote consultations.
- **Prescription Management**: Doctors can generate and share prescriptions with patients.
- **Responsive UI**: Built with Material-UI and React for a smooth user experience on any device.

## Technologies Used

- **Frontend**: React.js, Material-UI, React Router, React Slick
- **Backend**: Express.js (for handling server-side logic, if needed)
- **State Management**: Redux (or React’s built-in state management)
- **Testing**: React Testing Library, Jest
- **Real-time Communication**: WebSockets or Twilio for video calls (if used)
- **Supabase**: For backend services like authentication and database management

## Installation

### Prerequisites

Before getting started, ensure you have:

- **Node.js**
- **npm** or **Yarn**
- A **MongoDB** or **Supabase** account (for database and authentication management)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/forevercare-react.git

cd forevercare-react
```

### Install Dependencies

To install all the dependencies, run:

```bash
npm install
```

Or, if using Yarn:

```bash
yarn install
```

This will install all the necessary dependencies listed in the package.json file.

### Environment Configuration

Create a .env file in the root of the project (if not already created) and configure any necessary environment variables, such as API keys or database URLs.

For example:

```bash
REACT_APP_API_URL=https://api.your-backend.com
REACT_APP_AUTH_KEY=your-auth-key
```

### Running the Application

To start the development server, use the following command:

```bash
npm start
```

or

```bash
yarn start
```

This will run the application locally on <http://localhost:3000>.

### Running Tests

To run the tests for your React components, use:

```bash
npm test
```

or

```bash
yarn test
```

This will execute the tests using Jest and React Testing Library.

### Build for Production

To build the project for production, use:

```bash
npm run build
```

or

```bash
yarn build
```

This will create an optimized production build in the build folder. You can deploy this build to a server or hosting platform.

### Run it remotely

<https://forevercarenew.netlify.app/> 

### Usage (TODO)

Once the app is running, you can access various features depending on your user role (doctor, patient, or admin):

- Doctors: Manage their schedules, view patient records, issue prescriptions, and conduct telemedicine consultations.
- Patients: Book appointments, view medical histories, and communicate securely with doctors.
- Admins: Manage users, view appointments, and oversee the platform.
Contributing

Contact
If you have any questions, suggestions, or feedback, feel free to open an issue or contact the project maintainers:

Email: <shabbeerpetersen10@gmail.com>
