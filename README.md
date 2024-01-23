# Hiking Appp

## Description

Hiking Appp is a web application designed to provide users with information and resources related to hiking trails.

## Features

- Trail Maps: Users can explore various hiking trails around the world (Mostly Cape Town for now).

## Installation

To install the project locally, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/sivuyilemene/hiking-appp.git
cd hiking-appp
cd server
npm install
cd ../client
npm install
```

## CREATE ENV FILE

```bash
cd ../
touch .env
nano .env
```

Open the `.env` file and add your environment variables:

```bash
ACCESSKEYID=YOUR_ACCESS_KEY
SECRETACCESSKEY=YOUR_SECRET_ACCESS_KEY
REGION=YOUR_REGION
```

## Usage

To start the development server, run:

```bash
npm run dev
```

Then open <http://localhost:5000> in your browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.