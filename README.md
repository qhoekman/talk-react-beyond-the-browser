# React: Beyond the Browser

[Google Slides](https://docs.google.com/presentation/d/e/2PACX-1vSMJmH2C82s25Fir2r_9xat91LoOER4UT_D-4wEWvGws5bBney3Cytjg1iYAfbyLTZSdUdA7UL43IrT/pub?start=false&loop=false&delayms=3000)

## Prerequisites

- Node.js 20.0.0 or later
- pnpm 8.0.0 or later

If you installed Node.js and pnpm, you can skip this step. Otherwise, you can install Node.js and pnpm from the following links:

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/installation)

Next up, you'll need to install the dependencies for the project:

```sh
pnpm install
```

## 2D Graphics

For creating 2D graphics we use Satori from Vercel in combination with React. Satori is a 2D graphics library that converts HTML to SVG.

You can start the development server by running the following command:

```sh
pnpm 2d-graphics dev
```

## 3D Graphics

For creating 3D graphics we use React Three Fiber. React Three Fiber is a React renderer for Three.js. Three.js is a 3D graphics library that uses WebGL to render 3D graphics in the browser.

You can start the development server by running the following command:

```sh
pnpm 3d-graphics dev
```

### E-mails

For creating e-mails we use react-emails. React-emails is a library that allows you to create e-mails using React. It is compatible with most e-mail clients and improves the development experience by allowing you to use React components to create e-mails.

You can start the development server by running the following command:

```sh
pnpm emails dev
```

### PDFs

For creating PDFs we use React PDF. React PDF is a library that allows you to create PDFs using React. It is compatible with most PDF readers and improves the development experience by allowing you to use React components to create PDFs.

You can start the development server by running the following command:

```sh
pnpm pdf-invoice dev
```

### Video

For creating videos we use remotion. Remotion is a library that allows you to create videos using React. It also include a video editor that allows you to create videos using React components.

You can start the development server by running the following command:

```sh
pnpm videos dev
```
