const fs = require("fs");
const arr = [];
fs.readdir("./", (err, files) => {
  files.forEach((file) => {
    console.log(file);
    arr.push({
      title: file,
      link: `/file/${file}`,
    });
    fs.writeFileSync("./data.json", JSON.stringify(arr));
  });
});
