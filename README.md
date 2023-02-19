# Simple Invoice App

> Simple Invoice app is to show invoices, search/sort/filter and create invoices for authrized users.
> I used bolierplate of thecodingmachine and changed redux implementation to use with redux-saga.


https://user-images.githubusercontent.com/29350462/219946767-20c6e345-ef42-4119-965d-3c8a5128f3fb.mp4


## Prerequisites

- [Node 14 or newer](https://nodejs.org) and yarn (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK 11 or newer](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [i18next](https://www.npmjs.com/package/i18next) for internationalization.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-saga](https://www.npmjs.com/package/redux-saga) as side effect manager.

## Project Setup
> Note: We use yarn as default package manager for this repository.

- Clone this repo `git clone https://github.com/engrrbilal/simpleinvoiceapp`
- Install dependencies `yarn install`

## Running the App

### Android

Android's build-type is categorized by the following types:

| Build Type | Description                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `debug`    | Debug build is used for development and debugging the source-code of the app.                               |
| `release`  | Release build is minified, obfuscated code meant to be used in testing / staging / production environments. |

#### Pre-requisite Steps

2. Make sure dependencies / node_modules are installed (`yarn install`)
3. Ensure your devices or simulators (real-device or Android AVD) are set up and running


#### Debug/Development Build

- Ensure all [pre-requisite](#pre-requisite-steps) steps are complete
- Ensure your devices or simulators (iOS or Android AVD) are set up and running
- For windows machines, ensure Virtualization Technology is enabled in your BIOS.
- Run the app with: `yarn android`

### iOS

iOS's build-type is categorized by the following types:

| Build Type | Description                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `debug` | Debug build is used for the  internal development  on simulators and physical devices.
| `release/IPA` | IPA(iOS App Store Package) is used for obfuscated code meant to be used in testing / staging / production environments. It can be used for uploading on appstore and testflight . |

### Pre-requisite Steps

2. Make sure dependencies / node_modules are installed (`yarn install`)
3. Ensure your system configured with xcode ( recommended xcode `13.1(13A1030d)`)
4. Go to react-native ios section and install pakages https://reactnative.dev/docs/environment-setup

### Debug/Development Build

+ Ensure all [pre-requisite](#pre-requisite-steps) steps are complete
+ Ensure your devices or simulators are set up and running
+ Go to project ios directory run `pod install`
+ Go to project root directory run `yarn ios`

## Folder structure

- `src`: This folder is the main container of all the code inside your application.
  - `@types`: This folder contains all types & interfaces.
  - `Assets`: Asset folder to store all images, vectors, etc.
  - `Components`: Folder to store any common component that you use through your app
  - `Constants`: Folder to store any kind of constant that you have.
  - `Hooks`: Folder to store hooks.
  - `i18n`: Folder to store the languages files.
  - `Screens`: Folder that contains all your application screens.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
  - `Services`: Folder to store all your network logic.
  - `Stoore`: Folder to put all redux middlewares and the store.
    - `Sagas`: Folder to store your sagas for each side effects.
    - `Selectors`: Folder to store your selectors for each reducer.
    - `Slices`: This folder should have all your reducers
  - `Utils`: Folder to store utilities & helpers.
  - `App.tsx`: Main component that wrap the whole app.
