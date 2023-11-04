const fs = require("fs")
const path = require("path")

//init class regex
const classRegex = /\.([\w-]+)/g

//get css
let css = ""
fs.readdirSync(path.join(__dirname, "css")).forEach(file => {
    if (file.endsWith(".css")) {
        css += fs.readFileSync(path.join(__dirname, "css", file), "utf8")
    }
})

//get classes
let classes = []
let match
while ((match = classRegex.exec(css)) !== null) {
    classes.push(match[1])
}

//keep only css-loader classes
classes = classes.filter((c) => c.includes("_") || c.includes("__"))

//keep only unique classes
classes = [...new Set(classes)]

//write to file
fs.writeFileSync(path.join(__dirname, "dump/dump.txt"), classes.join("\n"))
console.log(`Dumped ${classes.length} classes to dump/dump.txt`)
