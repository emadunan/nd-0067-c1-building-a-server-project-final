
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

Clone the project

```bash
  git clone https://github.com/emadunan/nd-0067-c1-building-a-server-project-final.git
```

Go to the project directory

```bash
  cd nd-0067-c1-building-a-server-project-final
```

Install dependencies

```bash
  npm install
```

Build the app

```bash
  npm run build
```

Start the server

```bash
  npm run start
```


## Running Tests

To check for linting, run the following commands

```bash
  npm run prettier
  npm run lint
```

To run tests, run the following command

```bash
  npm run test
```


## Usage/Example

Put the image you want to scale in **assets/full** folder (*example: santamonica.jpg*); Identify the **Width** and **Height** (*example: 300px width, 300px height*) for your output image, modify the below ***url*** to include your parameters and make a GET request.

```javascript
    http://localhost:8001/api/images?filename=<filename:string>&width=<width:number>&height=<height:number>

    http://localhost:8001/api/images?filename=santamonica&width=300&height=300
```
> The image you selected will be processed, scaled according to the given dimensions, and shown in the browser. Also, if you open **assets/thumb** folder, you will find all your processed images. 



## Tech Stack

**Client:** Browser

**Server:** Node, Express, Sharp


## Authors

- [@emadunan](https://github.com/emadunan)

