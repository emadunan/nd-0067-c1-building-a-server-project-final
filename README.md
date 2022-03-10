# Image Processing API

This API is for processing jpg images and scale it to a specific dimensions (width, height)

## API Reference

#### Get processed image

```http
  GET /api/images
```

| Parameter  | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `filename` | `string` | The name of the image file to be processed *without extention*, **Required**.             |
| `width`    | `number` | The width of the image after scaling, **Required**.|
| `height`   | `number` | The height of the image after scaling, **Required**.|

All of the above Parameters should be provided in a query string.

### Utilities

#### checkFileInFolderAsync(folderPath, filename)

An asynchronous function that takes folder path as a first arguament, file name as the second arguament, and returns a *boolean Promise* — **true** if the file exists in the folder, or **false** if it doesn't.

#### imgFileNames

An array of all images filname which are inside the source folder (*assets/full*).


## Installation

Install nd-0067-c1-building-a-server-project-final with npm

```bash
  cd nd-0067-c1-building-a-server-project-final
  npm install
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Client:** Browser

**Server:** Node, Express, Sharp


## Authors

- [@emadunan](https://github.com/emadunan)

## License

[License](LICENSE.txt)
